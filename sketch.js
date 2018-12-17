const canvasSketch = require('canvas-sketch');
// import canvasSketch from 'canvas-sketch';

const settings = {
  dimensions: [2048, 2048], // dimensions in px
};

// context being passed in the is return value of canvas.getContext('2d')
const sketch = () => ({ context, width, height }) => {
  context.fillStyle = 'dodgerBlue'; // eslint-disable-line
  context.fillRect(0, 0, width, height);
};

canvasSketch(sketch, settings);
