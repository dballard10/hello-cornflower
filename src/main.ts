let canvas: HTMLCanvasElement;

async function initialize() {
  canvas = document.getElementById('canvas') as HTMLCanvasElement;
  window.gl = canvas.getContext('webgl2') as WebGL2RenderingContext;

  // Initialize other graphics state as needed.

  // Event listeners
  window.addEventListener('resize', () => resizeCanvas());

  resizeCanvas();  
}

function render() {
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(.2118, .0471, 0.8, 1);
  //gl.clearColor(.8627, .0784, 0.2353, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

function resizeCanvas() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  render();
}

window.addEventListener('load', () => initialize());