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

    window.addEventListener 'resize', @resize

    @resize()


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
