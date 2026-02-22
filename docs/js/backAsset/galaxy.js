let vertSrc = `
precision highp float;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;
}
`;

let fragSrc = `
precision highp float;

uniform vec2 uResolution;
uniform float uFrame;

varying vec2 vTexCoord;

// ----------------------------
// Starfield functions
// ----------------------------

float Noise2d( in vec2 x )
{
    float xhash = cos( x.x * 37.0 );
    float yhash = cos( x.y * 57.0 );
    return fract( 415.92653 * ( xhash + yhash ) );
}

float NoisyStarField( in vec2 vSamplePos, float fThreshhold )
{
    float StarVal = Noise2d( vSamplePos );
    if ( StarVal >= fThreshhold )
        StarVal = pow( (StarVal - fThreshhold)/(1.0 - fThreshhold), 6.0 );
    else
        StarVal = 0.0;
    return StarVal;
}

float StableStarField( in vec2 vSamplePos, float fThreshhold )
{
    float fractX = fract( vSamplePos.x );
    float fractY = fract( vSamplePos.y );
    vec2 floorSample = floor( vSamplePos );    

    float v1 = NoisyStarField( floorSample, fThreshhold );
    float v2 = NoisyStarField( floorSample + vec2( 0.0, 1.0 ), fThreshhold );
    float v3 = NoisyStarField( floorSample + vec2( 1.0, 0.0 ), fThreshhold );
    float v4 = NoisyStarField( floorSample + vec2( 1.0, 1.0 ), fThreshhold );

    return v1 * (1.0 - fractX) * (1.0 - fractY)
         + v2 * (1.0 - fractX) * fractY
         + v3 * fractX * (1.0 - fractY)
         + v4 * fractX * fractY;
}

void main() {

    vec2 fragCoord = gl_FragCoord.xy;

    // star color
    vec3 vColor = vec3(0.01, 0.01, 0.1) * fragCoord.y / uResolution.y;

    // star sparse level
    float StarFieldThreshhold = 0.9;

    float xRate = -1.0;
    float yRate = -0.06;

    // star size
    vec2 vSamplePos = fragCoord.xy * 0.5 + vec2(
        xRate * uFrame,
        yRate * uFrame
    );

    float StarVal = StableStarField(vSamplePos, StarFieldThreshhold);

    vColor += vec3(StarVal);

    gl_FragColor = vec4(vColor, 1.0);
}
`;

class Galaxy {
    constructor() {
        this.shaderProgram = null;
    }
    
    show() {

        if (!this.shaderProgram) {
            this.shaderProgram = createShader(vertSrc, fragSrc);
        }

        push();

        shader(this.shaderProgram);

        // update uniforms
        this.shaderProgram.setUniform("uResolution", [width, height]);
        this.shaderProgram.setUniform("uFrame", frameCount);
        noStroke();

        translate(0, 0, -1000);
        plane(width*3, height*3);

        pop();
    }
}