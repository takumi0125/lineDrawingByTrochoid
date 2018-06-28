window.glitch = window.glitch || {}

import map from '../_utils/math/map'
import InstancedBufferGeometryBuilder from './InstancedBufferGeometryBuilder'

export default class Lines
  constructor: (@numInstances, isSupportedInstancedArray = false)->
    baseBufferGeometry = new THREE.BufferGeometry()
    positions = new Float32Array [0, 0, 0, 1, 0, 0]
    indices = new Uint16Array [0, 1]
    baseBufferGeometry.addAttribute 'position', new THREE.BufferAttribute(positions, 3);
    baseBufferGeometry.setIndex new THREE.BufferAttribute(indices, 1);
    geometryBuilder = new InstancedBufferGeometryBuilder @numInstances, baseBufferGeometry, isSupportedInstancedArray

    @rc = 6
    @rm = 2
    @rd = 1
    @i = 1
    @scale = 1
    @noiseFactor = 0
    @isOuter = false
    @autoPlay = true

    @material = new THREE.RawShaderMaterial
      vertexShader: require('./_glsl/lines.vert')
      fragmentShader: require('./_glsl/lines.frag')
      transparent: true
      blending: THREE.AdditiveBlending
      uniforms:
        time       : { type: '1f', value: 0 }
        rc         : { type: '1f', value: @rc }
        rm         : { type: '1f', value: @rm }
        rd         : { type: '1f', value: @rd }
        i          : { type: '1f', value: @i }
        scale      : { type: '1f', value: @scale }
        noiseFactor: { type: '1f', value: @noiseFactor }
        isOuter    : { type: '1f', value: (if @isOuter then 1 else 0) }

    geometry = geometryBuilder.getBefferGeometry(
      color: 0xffffff
      lineWidth: 1
    )
    @lines = new THREE.LineSegments geometry, @material


    @gui = new dat.GUI();

    @gui.add(@, 'rc', 0, 1000)
    .listen()
    .onChange (value)=> @material.uniforms.rc.value = value

    @gui.add(@, 'rm', 0, 100)
    .listen()
    .onChange (value)=> @material.uniforms.rm.value = value

    @gui.add(@, 'rd', 0, 100)
    .listen()
    .onChange (value)=> @material.uniforms.rd.value = value

    @gui.add @, 'i', 0, Math.PI
    .listen()
    .onChange (value)=> @material.uniforms.i.value = value

    @gui.add @, 'scale', 0, 10
    .listen()
    .onChange (value)=> @material.uniforms.scale.value = value

    @gui.add @, 'noiseFactor', 0, 10
    .listen()
    .onChange (value)=> @material.uniforms.noiseFactor.value = value

    @gui.add @, 'isOuter'
    .listen()
    .onChange (value)=> @material.uniforms.isOuter.value = if value then 1 else 0

    @gui.add @, 'autoPlay'
    .onChange (value)=>
      if value
        @setRandomTimer()
      else
        @clearRandomTimer()
      return

    @gui.add @, 'random'

    @setRandomTimer()


  setRandomTimer: ->
    @clearRandomTimer()
    @randomTimer = setInterval (=> @random(true)), 2000
    return

  clearRandomTimer: ->
    if @randomTimer then clearInterval @randomTimer
    return


  update: (time)->
    @material.uniforms.time.value = time
    return


  random: (isRegular = false, duration = 0.6)->
    rmTo = 1 + Math.random() * 49
    if isRegular
      rcTo = rmTo * Math.floor(2 + Math.random() * 18)
    else
      rcTo = 1 + Math.random() * 99

    return TweenMax.to @, duration, {
      rc: rcTo
      rm: rmTo
      rd: 1 + Math.random() * 99
      i: Math.random() * Math.PI
      ease: Expo.easeOut
      onUpdate: =>
        @material.uniforms.rc.value = @rc
        @material.uniforms.rm.value = @rm
        @material.uniforms.rd.value = @rd
        @material.uniforms.i.value = @i
    }
