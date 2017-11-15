
uniform sampler2D ExamplesScene;
uniform sampler2D GridScreenScene;
uniform sampler2D opticalFlow;
uniform sampler2D loopback;
uniform vec2 resolution;
uniform float time;
varying vec2 vUv;

void main ()	{
	vec4 color = texture2D(ExamplesScene, vUv);
	vec4 loop = texture2D(loopback, vUv);
	vec4 grid = texture2D(GridScreenScene, vUv);
	color = mix(loop, color, color.a);
	color = mix(color, grid, grid.a);
	gl_FragColor = color;
}
