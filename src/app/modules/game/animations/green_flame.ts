const frag = `
precision highp float;

uniform float time;
uniform vec2 resolution;

float random(vec2 pos) {
    return fract(1.0 * sin(pos.y + fract(80.0 * sin(pos.x))));
}

float noise(vec2 pos) {
    vec2 i = floor(pos);
    vec2 f = fract(pos);
    float a = random(i + vec2(0.0, 0.0));
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 pos) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.15), sin(0.15), -sin(0.25), cos(0.5));
    for (int i=0; i < 12; i++) {
        v += a * noise(pos);
        pos = rot * pos * 2. + shift;
        a *= 0.55;
    }
    return v;
}

void main() {
    vec2 pos = (gl_FragCoord.xy - resolution) / min(resolution.x, resolution.y);
    float time2 = time/2.;
    float f = fbm(pos * 7.0 * vec2(fbm(pos - (time2 / 1.0)), fbm(pos / 2.0 - (time2 / 8.0))));
    float f2 = fbm(pos * 7.0 * vec2(fbm(pos - (time2+1000. / 1.0)), fbm(pos / 2.0 - (time2 + 1000. / 8.0))));
    vec3 colour = vec3(1.4, f2/.4, 0.);

    colour = (f* 1.5) * colour;
    colour = 1.0/colour * vec3(.5, .5, 0.);

    gl_FragColor = vec4(colour, 1.0);
}
`

export default frag
