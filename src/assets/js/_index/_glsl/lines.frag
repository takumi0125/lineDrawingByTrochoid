precision highp float;

uniform float time;

#pragma glslify: PI = require('../../_utils/glsl/PI.glsl')
#pragma glslify: map = require('../../_utils/glsl/map.glsl')
#pragma glslify: hsv2rgb = require('../../_utils/glsl/hsv2rgb.glsl')

varying float vInstanceIndex;
varying vec3 vRamdomValues;

void main(){
  vec3 color = hsv2rgb(vec3(
    vInstanceIndex * 0.0003 + time * 0.0001,
    1.0,
    0.3
  ));

  gl_FragColor = vec4(color, 1.0);
}
