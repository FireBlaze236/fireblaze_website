<canvas id="webgl-canvas"></canvas>
<script lang="ts">
  import { onMount } from 'svelte';
  import vertexShaderSource from '../assets/shaders/vert.glsl';
  import fragmentShaderSource from '../assets/shaders/fireflies.glsl';
  
  let gl: WebGLRenderingContext | null;
  let program: WebGLProgram | null;

  let mouseX = 0.0;
  let mouseY = 0.0;

  let canvas;

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  }

  function destroyWebGL() {
      if (gl) {
          gl.getExtension('WEBGL_lose_context').loseContext();
          gl = null;
      }
  }
  const initWebGL = () =>{
    canvas = document.getElementById('webgl-canvas') as HTMLCanvasElement;
    gl = canvas.getContext('webgl');

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    canvas.addEventListener('resize', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    if (!gl) {
      console.error('WebGL not supported');
      return;
    }
    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));
      return null;
    }

    gl.useProgram(program);

    const positionAttributeLocation = gl.getAttribLocation(program, 'position');
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0,
    ]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    let startTime = Date.now();
    function render() {
      const currentTime = (Date.now() - startTime) / 1000;
      const resolutionLocation = gl.getUniformLocation(program, 'resolution');
      const timeLocation = gl.getUniformLocation(program, 'time');
      const mouseLocation = gl.getUniformLocation(program, 'mouse');
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform2f(mouseLocation, mouseX / gl.canvas.width, 1.0 - mouseY / gl.canvas.height);
      gl.uniform1f(timeLocation, currentTime);

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      requestAnimationFrame(render);
    }

    render();
  };

  onMount( initWebGL);


  function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Error compiling shader:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }
</script>

<style>
  canvas {
    width: 100%;
    height: 100%;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: auto;
    z-index: -1;
  }
</style>


