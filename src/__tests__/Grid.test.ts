import { Grid } from '../Grid';

beforeEach(() => {
  const canvas = document.getElementById('canvas');

  if (canvas) {
    canvas.remove();
  }
});

describe('Grid', () => {
  describe('initialize', () => {
    it('should create a canvas on initialization', () => {
      const grid = new Grid();
      grid.initialize(10, 10, 40);
      const canvas = document.getElementById('canvas');
      expect(canvas).not.toBeNull();
    });

    it('should initialize the size of the canvas relative to its content', () => {
      const grid = new Grid();
      grid.initialize(10, 30, 100);
      const canvas = <HTMLCanvasElement>document.getElementById('canvas');
      expect(canvas.width).toBe(10 * (100 + grid.getMargin()));
      expect(canvas.height).toBe(30 * (100 + grid.getMargin()));
    });

    it('should place the squares on the grid', () => {
      const grid = new Grid();
      grid.initialize(10, 10, 40);
      const canvas = <HTMLCanvasElement>document.getElementById('canvas');
      const ctx = <any>canvas.getContext('2d');
      const path = ctx?.__getPath();
      expect(path).toMatchSnapshot();
    });
  });
});
