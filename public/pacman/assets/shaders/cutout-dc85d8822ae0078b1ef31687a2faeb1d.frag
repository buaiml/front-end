#ifdef GL_ES
precision mediump float;
#endif

varying vec2 v_texCoords;

uniform sampler2D u_texture;

void main() {
    vec4 texColor = texture2D(u_texture, v_texCoords);
    // if pure black, use clear
    if (texColor.r == 0.0 && texColor.g == 0.0 && texColor.b == 0.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        return;
    }

    // keep the color
    gl_FragColor = texColor;
}
