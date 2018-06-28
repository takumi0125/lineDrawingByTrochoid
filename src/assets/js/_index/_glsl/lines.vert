uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float rc;
uniform float rm;
uniform float rd;
uniform float i;
uniform float time;
uniform float scale;
uniform float noiseFactor;
uniform float isOuter;

attribute vec3 position;
attribute vec3 ramdomValues;
attribute float instanceIndex;

varying float vInstanceIndex;
varying vec3 vRamdomValues;

#pragma glslify: rotateVec3 = require('../../_utils/glsl/rotateVec3.glsl')
#pragma glslify: PI = require('../../_utils/glsl/PI.glsl')
#pragma glslify: map = require('../../_utils/glsl/map.glsl')
#pragma glslify: simplex2D = require('glsl-noise/simplex/2d')

void main() {
  vInstanceIndex = instanceIndex;
  vRamdomValues = ramdomValues;

  float s = 1.0 - isOuter * 2.0;

  vec3 pos = vec3(0.0);
  float t = mod(time * 0.00003 + position.x * i + instanceIndex * 0.01, PI * 2.0);

  float c1 = rc - rm * s;
  float c2 = c1 / rm * t;
  float rmax = abs(c1) + rd;
  float size = 40.0;

  pos.x = (c1 * cos(t) + rd * s * cos(c2)) / rmax * size;
  pos.y = (c1 * sin(t) - rd * sin(c2)) / rmax * size;

  float noiseValue = simplex2D(pos.xy * 0.1);
  pos.z = size * 0.1 * sin(time * 0.0001 + noiseValue * 3.0) * noiseFactor;

  pos = rotateVec3(pos, time * 0.0001, vec3(0.0, 0.0, 1.0));

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos * scale, 1.0);
}
