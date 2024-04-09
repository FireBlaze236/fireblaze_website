precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

vec2 noise2x2(vec2 p) {
  float x = dot(p, vec2(112.4, 366.5));
  float y = dot(p, vec2(589.6, 856.7));
  vec2 noise = vec2(x, y);
  noise = sin(noise);
  noise = noise * 43758.5453;
  noise = fract(noise);
  return noise;
}

float voronoi(float gridSize, vec2 uv, float t) {
  uv *= gridSize;
  vec2 gridCoord = fract(uv) - 0.5;
  vec2 gridId = floor(uv);

  float d = 1000.0;
  for(float i = -1.0; i < 1.1; i+= 1.0) {
      for(float j = -1.0; j < 1.1; j += 1.0) {
            vec2 gi = vec2(i,j);
            vec2 noise = noise2x2(gi + gridId);
            vec2 p = gi + sin(noise * t) * 0.5;

            d = min(d, length(p - gridCoord));
      }
  }

  return d;
}

float GetScene(vec2 uv, float t) {
  float d = voronoi(4.0, uv, time);
  float d2 = voronoi(2.0, uv, time);
  float dt = (1.0 - d) * (d2);
  dt /= 2.0;
  float mul = smoothstep(0.1, 1.0, dt);
  return mul;
}


void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  uv.x *= resolution.x / resolution.y;

  vec3 color = vec3(0.2, 0.2, 0.9);
  float mul = GetScene(uv, time);
  gl_FragColor = vec4(color * mul,1.0);
}
