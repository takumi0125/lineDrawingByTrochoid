uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float rc;
uniform float rm;
uniform float rd;
uniform float i1;
uniform float i2;
uniform float time;
uniform float scale;
uniform float noiseFactor;
uniform float isOuter;

attribute vec3 position;
attribute vec3 ramdomValues;
attribute float instanceIndex;

varying float vInstanceIndex;

#pragma glslify: rotateVec3 = require('../../_utils/glsl/rotateVec3.glsl')
#pragma glslify: PI = require('../../_utils/glsl/PI.glsl')
#pragma glslify: map = require('../../_utils/glsl/map.glsl')

vec2 getTorochoidPos(float t, float s) {
  float c1 = rc - rm * s;
  float c2 = c1 / rm * t;
  float rmax = abs(c1) + rd;

  return vec2(
    (c1 * cos(t) + rd * s * cos(c2)) / rmax,
    (c1 * sin(t) - rd * sin(c2)) / rmax
  );
}

void main() {
  vInstanceIndex = instanceIndex;

  float s = 1.0 - isOuter * 2.0;
  float size = 30.0;

  vec3 pos = vec3(0.0);
  float t1 = mod(time * 0.0001 + position.x * i1 + instanceIndex * 0.001, PI * 2.0);
  float t2 = mod(time * 0.0002 + position.x * i2 + instanceIndex * 0.01, PI * 2.0);

  vec2 tPos1 = getTorochoidPos(t1, s);
  vec2 tPos2 = getTorochoidPos(t2, s);

  pos.x = tPos1.y * tPos2.x * size;
  pos.y = tPos1.y * tPos2.y * size;
  pos.z = tPos1.x * size;

  pos = rotateVec3(pos, time * 0.0001, vec3(1.0, 0.0, 0.0));
  pos = rotateVec3(pos, time * 0.00005, vec3(0.0, 1.0, 0.0));
  pos = rotateVec3(pos, time * 0.00006, vec3(0.0, 0.0, 1.0));

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos * scale, 1.0);
}
