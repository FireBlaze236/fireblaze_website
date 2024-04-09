precision mediump float;
uniform float time;
uniform vec2 resolution;
void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  gl_FragColor = vec4(uv.x, uv.y, abs(sin(time)), 1.0);
}
