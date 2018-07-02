window.glitch = window.glitch || {}

import Lines from './Lines'
import RenderTexture from './RenderTexture'

export default class Index
  constructor: ->
    @initWebGL()
    @animationId = null
    @startTime = new Date().getTime()
    @update()


  initWebGL: ->
    @gui = new dat.GUI();

    @container = document.querySelector '.js-mainCanvas'
    @renderer = new THREE.WebGLRenderer
      canvas: @container.querySelector 'canvas'
      alpha: true
      # antialias: true
    @devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2)
    @renderer.setPixelRatio = @devicePixelRatio

    @scene = new THREE.Scene()

    @width = @container.offsetWidth
    @height = @container.offsetHeight

    @camera = new THREE.PerspectiveCamera 45, @width / @height, 1, 1000
    @camera.position.z = 100

    @control = new THREE.TrackballControls(@camera, @renderer.domElement);

    @lines = new Lines 5000, @renderer.extensions.get('ANGLE_instanced_arrays'), @gui
    @scene.add @lines.lines

    @renderTargetPixelRatio = 0.24
    @numGaussianSamplePixels = 10
    @blurCnt = 12
    @blurStrength = 500

    @effectMaterial = new THREE.RawShaderMaterial(
      vertexShader: require('./_glsl/render.vert')
      fragmentShader: require('./_glsl/render.frag')
      transparent: true
      depthWrite: false
      depthTest: false
      defines: {
        NUM_WEIGHTS: @numGaussianSamplePixels
        NUM_LOOPS: @numGaussianSamplePixels * 2 - 1
      }
      uniforms:
        time        : { type:  '1f', value: 0 }
        texture     : { type:   't', value: null }
        resolution  : { type:  '2f', value: new THREE.Vector2() }
        weights     : { type: '1fv', value: @calculateGaussianWeights(@numGaussianSamplePixels, @blurStrength) }
        isHorizontal: { type:  '1f', value: 1 }
    )

    @renderTarget = new RenderTexture(
      @width
      @height
      @renderer
      @camera
      @effectMaterial
      @effectMaterial
    )

    @effect = true
    @gui.add @, 'effect'
    .onChange (value)=>
      if @effect
        document.body.classList.remove 'is-white'
      else
        document.body.classList.add 'is-white'

    # @gui.add @, 'blurCnt', 1, 36
    #
    # @gui.add @, 'blurStrength', 200, 1000
    # .onChange (value)=>
    #   @effectMaterial.uniforms.weights.value = @calculateGaussianWeights(@numGaussianSamplePixels, @blurStrength)
    #
    # @gui.add @, 'renderTargetPixelRatio', 0.1, 2
    # .onChange (value)=>
    #   @effectMaterial.uniforms.resolution.value = new THREE.Vector2(
    #     Math.round(@width * @renderTargetPixelRatio)
    #     Math.round(@height * @renderTargetPixelRatio)
    #   )
    #   @renderTarget.resize(
    #     Math.round(@width * @renderTargetPixelRatio)
    #     Math.round(@height * @renderTargetPixelRatio)
    #   )

    window.addEventListener 'resize', @resize

    @resize()


  resize: (e = null)=>
    @width = @container.offsetWidth
    @height = @container.offsetHeight

    @renderer.setSize @width, @height

    @effectMaterial.uniforms.resolution.value = new THREE.Vector2 @width, @height
    @renderTarget.resize(
      Math.round(@width * @renderTargetPixelRatio)
      Math.round(@height * @renderTargetPixelRatio)
    )

    @camera.aspect = @width / @height
    @camera.updateProjectionMatrix()

    return


  calculateGaussianWeights: (num = 10, d = 100)->
    weights = []
    t = 0.0;

    for i in [0...num]
      w = Math.exp(-0.5 * (i * i) / d)
      weights[i] = w
      if i > 0 then w *= 2.0
      t += w

    for i in [0...num] then weights[i] /= t

    w = weights.slice().reverse()
    weights.shift()
    weights = w.concat(weights)

    return weights


  update: =>
    @animationId = requestAnimationFrame @update

    time = new Date().getTime() - @startTime
    @lines.update time
    @effectMaterial.uniforms.time.value = time

    @control.update();

    # 通常のシーンを描画
    @scene.remove @renderTarget.mesh
    @effectMaterial.blending = THREE.NoBlending
    @renderer.render @scene, @camera, @renderTarget.getRenderTarget()

    if @effect
      @effectMaterial.uniforms.resolution.value = new THREE.Vector2(
        Math.round(@width * @renderTargetPixelRatio)
        Math.round(@height * @renderTargetPixelRatio)
      )

      @renderTarget.scene.add @renderTarget.mesh

      # ブラー処理
      for i in [0...@blurCnt]
        # 横方向ブラーを描画
        @effectMaterial.uniforms.isHorizontal.value = 1
        @effectMaterial.uniforms.texture.value = @renderTarget.getTexture()
        @effectMaterial.needsUpdate = true
        @renderTarget.swapTexture()
        @renderTarget.render()

        # 縦方向ブラーを描画
        @effectMaterial.uniforms.isHorizontal.value = 0
        @effectMaterial.uniforms.texture.value = @renderTarget.getTexture()
        @effectMaterial.needsUpdate = true
        @renderTarget.swapTexture()
        @renderTarget.render()

      @renderTarget.scene.remove @renderTarget.mesh
      @scene.add @renderTarget.mesh
      @effectMaterial.blending = THREE.AdditiveBlending
      @effectMaterial.uniforms.resolution.value = new THREE.Vector2 @width, @height
      @renderer.render @scene, @camera
    else
      @renderer.render @scene, @camera
