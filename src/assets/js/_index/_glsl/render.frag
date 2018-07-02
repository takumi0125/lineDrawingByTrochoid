precision highp float;

uniform sampler2D texture;
uniform float weights[NUM_WEIGHTS];
uniform float isHorizontal;
uniform vec2 resolution;

void main(void){
  vec2 tFrag = vec2(1.0) / resolution;
  vec2 fc = gl_FragCoord.st;
  vec4 destColor = vec4(0.0);

  float startValue = -float(NUM_WEIGHTS) + 1.0;
  float value;

  value = startValue;
  for(int i = 0; i < NUM_LOOPS; i++) {
    destColor += (texture2D(texture, (fc + vec2(value, 0.0)) * tFrag) * weights[i]) * isHorizontal;
    destColor += (texture2D(texture, (fc + vec2(0.0, value)) * tFrag) * weights[i]) * (1.0 - isHorizontal);
    value += 1.0;
  }

  destColor = min(vec4(1.0), destColor);
  destColor.rgb *= 0.98;
  gl_FragColor = destColor;
}
