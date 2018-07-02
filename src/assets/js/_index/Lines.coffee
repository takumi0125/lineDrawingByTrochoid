window.glitch = window.glitch || {}

import map from '../_utils/math/map'
import InstancedBufferGeometryBuilder from './InstancedBufferGeometryBuilder'

export default class Lines
  constructor: (@numInstances, isSupportedInstancedArray = false, @gui)->
    baseBufferGeometry = new THREE.BufferGeometry()
    positions = new Float32Array [0, 0, 0, 1, 0, 0]
    indices = new Uint16Array [0, 1]
    baseBufferGeometry.addAttribute 'position', new THREE.BufferAttribute(positions, 3);
    baseBufferGeometry.setIndex new THREE.BufferAttribute(indices, 1);
    geometryBuilder = new InstancedBufferGeometryBuilder @numInstances, baseBufferGeometry, isSupportedInstancedArray

    @rc = 6
    @rm = 2
    @rd = 1
    @i1 = 1
    @i2 = 1
    @scale = 1
    @isOuter = false
    @autoPlay = true

    @material = new THREE.RawShaderMaterial
      vertexShader: require('./_glsl/lines.vert')
      fragmentShader: require('./_glsl/lines.frag')
      transparent: true
      uniforms:
        time       : { type: '1f', value: 0 }
        rc         : { type: '1f', value: @rc }
        rm         : { type: '1f', value: @rm }
        rd         : { type: '1f', value: @rd }
        i1         : { type: '1f', value: @i1 }
        i2         : { type: '1f', value: @i2 }
        scale      : { type: '1f', value: @scale }
        isOuter    : { type: '1f', value: (if @isOuter then 1 else 0) }

    geometry = geometryBuilder.getBefferGeometry(
      color: 0xffffff
      lineWidth: 1
    )
    @lines = new THREE.LineSegments geometry, @material


    @gui.add(@, 'rc', 0, 1000)
    .listen()
    .onChange (value)=> @material.uniforms.rc.value = value

    @gui.add(@, 'rm', 0, 100)
    .listen()
    .onChange (value)=> @material.uniforms.rm.value = value

    @gui.add(@, 'rd', 0, 100)
    .listen()
    .onChange (value)=> @material.uniforms.rd.value = value

    @gui.add @, 'i1', 0, Math.PI
    .listen()
    .onChange (value)=> @material.uniforms.i1.value = value

    @gui.add @, 'i2', 0, Math.PI
    .listen()
    .onChange (value)=> @material.uniforms.i2.value = value

    @gui.add @, 'scale', 0, 10
    .listen()
    .onChange (value)=> @material.uniforms.scale.value = value

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


  random: (isRegular = true, duration = 0.6)->
    rmTo = Math.floor(1 + Math.random() * 29)
    if isRegular
      rcTo = rmTo * Math.floor(2 + Math.random() * 10)
    else
      rcTo = 1 + Math.random() * 99

    rcTo = Math.floor(rcTo)

    return TweenMax.to @, duration, {
      rc: rcTo
      rm: rmTo
      rd: Math.floor(1 + Math.random() * 99)
      i1: Math.random() * Math.PI
      i2: Math.random() * Math.PI
      ease: Expo.easeOut
      onUpdate: =>
        @material.uniforms.rc.value = @rc
        @material.uniforms.rm.value = @rm
        @material.uniforms.rd.value = @rd
        @material.uniforms.i1.value = @i1
        @material.uniforms.i2.value = @i2
    }
