window.glitch = window.glitch || {}

import Lines from './Lines'

export default class Index
  constructor: ->
    @initWebGL()
    @animationId = null
    @startTime = new Date().getTime()
    @update()


  initWebGL: ->
    @container = document.querySelector '.js-mainCanvas'
    @renderer = new THREE.WebGLRenderer
      canvas: @container.querySelector 'canvas'
      # alpha: true
      # antialias: true
    @renderer.setPixelRatio Math.min(window.devicePixelRatio || 1, 2);

    @scene = new THREE.Scene()

    @width = @container.offsetWidth
    @height = @container.offsetHeight

    @camera = new THREE.PerspectiveCamera 45, @width / @height, 1, 10000
    @camera.position.z = 100

    @control = new THREE.TrackballControls(@camera, @renderer.domElement);

    @lines = new Lines 2000, @renderer.extensions.get('ANGLE_instanced_arrays')
    @scene.add @lines.lines

    # @test = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshBasicMaterial());
    # @scene.add @test

    window.addEventListener 'resize', @resize

    @resize()


  setCameraPosTimer: =>
    setInterval (=> @setCameraPos()), 4000
    return


  setCameraPos: =>
    rad = Math.PI * 2 * Math.random()
    @camera.position.x = 200 * Math.cos(rad)
    @camera.position.y = 400
    @camera.position.z = 1000 * Math.sin(rad)
    @camera.lookAt 0, 0, 0
    return


  resize: (e = null)=>
    @width = @container.offsetWidth
    @height = @container.offsetHeight
    @renderer.setSize @width, @height
    @camera.aspect = @width / @height
    @camera.updateProjectionMatrix()
    return



  update: =>
    @animationId = requestAnimationFrame @update

    time = new Date().getTime() - @startTime
    @lines.update time

    @control.update();
    @renderer.render @scene, @camera
