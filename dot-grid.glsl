// @resolution resolution
precision mediump float;
uniform vec2 resolution;

void main() {
  float spacing = 24.0;
  float dotRadius = 1.2;
  vec2 coord = gl_FragCoord.xy / spacing;
  vec2 grid = fract(coord) - 0.5;
  float dist = length(grid);
  float dot = 1.0 - smoothstep(dotRadius / spacing * 2.0, dotRadius / spacing * 2.0 + 0.05, dist);
  vec3 dotColor = vec3(0.486, 0.361, 0.988);
  float alpha = dot * 0.05;
  gl_FragColor = vec4(dotColor, alpha);
}
