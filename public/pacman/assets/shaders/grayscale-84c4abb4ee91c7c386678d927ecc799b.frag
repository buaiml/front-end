#ifdef GL_ES
precision mediump float;
#endif

varying vec2 v_texCoords;

uniform sampler2D u_texture;
uniform vec4 u_colors[10]; // Adjust the size of the array as needed
uniform int u_numColors;

void main() {
    vec4 texColor = texture2D(u_texture, v_texCoords);
    float colorIndexFloat = texColor.r * float(u_numColors - 1);

    // Manual rounding and clamping
    float clampedIndex = max(0.0, min(colorIndexFloat, float(u_numColors - 1)));
    int colorIndex = int(clampedIndex + 0.5); // Round to nearest integer

    // Manual array lookup
    for(int i = 0; i < 10; i++) { // 10 should match the size of u_colors
        if(i == colorIndex) {
            gl_FragColor = u_colors[i];
            break;
        }
    }
}
