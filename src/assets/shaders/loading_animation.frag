// trixelized

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
    sin(_angle),cos(_angle));
}

float hash(in float n)
{
    return fract(sin(n)*43758.5453123);
}

float hash (in vec2 st) {
    return fract(sin(dot(st.xy,
    vec2(12.9898,78.233))) * 43758.5453123);
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    vec2 u = f*f*(3.0-2.0*f);

    return mix(a, b, u.x) +
    (c - a)* u.y * (1.0 - u.x) +
    (d - b) * u.x * u.y;
}


void main() {
    vec2 res = resolution;
    vec2 uv = (gl_FragCoord.xy/res.xy) * 2.0 - 1.0;
    uv.x *= (res.x/res.y);

    uv = rotate2d(sin(time * 0.25)) * uv;


    float bg_col = pow(1.0 / (length(uv) + 1.0), 7.5);

    for (float i=0.0; i<10.0; i++) {

        float j = (i + fract(time)) / 10.0;

        bg_col += pow(1.0 / (1.0 + distance(length(uv), j)), 25.0) * (1.0 - j) * 0.2;

    }



    vec2 norm_uv = normalize(uv);

    float deg = 0.5 + (atan(norm_uv.x, norm_uv.y) / radians(360.0));
    deg *= 32.0;
    float deg_mul = 2.0 + 32.0 * hash(5.4321 * floor(mod(deg + 0.5, 32.0)));


    float rad_lines_time = time / 10.0;
    float rad_lines = noise(0.6 * sin(floor(mod(deg + 0.5, 32.0))) + (12. * vec2(sin(rad_lines_time), cos(rad_lines_time))));

    float col = 0.0;

    vec2 circ_uv = vec2(length(uv), floor(deg + 0.5)/deg_mul);

    float bar = 0.3 + 0.25 * rad_lines;
    col += pow(1.0 / (distance(circ_uv, vec2(bar, deg/deg_mul)) + 1.0), 17.5);

    col = pow(col, hash(floor(mod(deg + 0.5, 32.0))));

    col = mix(bg_col, col, step(circ_uv.x, bar + 0.15) * step(bar - 0.05, circ_uv.x));

    col += 0.25 * pow((rotate2d(col) * cos(uv)).x, 4.0) * bar;

    gl_FragColor = vec4(vec3(col) * mix(vec3(0.945,0.338,1.000), vec3(0.990,0.422,0.374), col), 1.0);
}
