precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

vec2 noise(vec2 uv) {
    uv = vec2( dot(uv, vec2(127.1,311.7)),dot(uv,vec2(269.5,183.3)) );
    return -1.0 + 2.0 * fract(sin(uv) * 43758.5453123);
}
vec2 hash(vec2 P) {
 	return fract(cos(P * mat2(-64.2,71.3,81.4,-29.8)) * 8321.3); 
}

float layer(vec2 st) {
    vec2 gid = floor(st);
    st = fract(st) - 0.5;
    
    
    vec2 n = smoothstep(1.0, 0.0, hash(gid));
    st += 0.25 * sin(n * time);
    
    
    float f = length(st * 20.0) - 0.02;
    float blink = sin(time * hash(gid).x * hash(gid).y);
    float glow = 0.7 / (f * f);
    
    float bl = smoothstep(0.89, 0.99, blink);
    glow *= bl;
    float gt = glow;
    
    return gt;
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  float aspect = resolution.x / resolution.y;
  uv.x *= aspect;
  uv += mouse * 0.1;
  vec2 st = uv;
  float t = time * 0.005;
  vec3 col = vec3(0.0);

  for(float i = 0.; i <= 1.; i+=1. / 5.) {
      float z = fract(i - t * 10.0);
      float size = mix(0.1, 15.0, z);
      float fade = smoothstep(0.,0.1, z) * smoothstep(1.0, 0.9 ,z);
      vec2 u = st * size + i * 20.0;
      
      vec2 gid = floor(st * size);

      vec3 c1 = vec3(0.45, 0.45, 0.0);
      vec3 c2 = vec3(0.1, 0.2, 0.45);
      vec3 cd = vec3(0.115 * hash(gid).x, 0.156 * hash(gid).y, 0.156 * hash(gid).x * hash(gid).y);
      vec3 cx = mix(c2, c1, cd);
      // gamma 
      cx = sqrt(cx);
      col += vec3(layer(u)) * fade * cx;
  }
  gl_FragColor = vec4(col,1.0);
}
