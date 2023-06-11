import { Entity } from '../Entity';
import { Grid } from '../Grid';
import { Vector2D } from '../Vector2D';

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
  describe('placeToGrid', () => {
    it('should place the entity on the grid', () => {
      const grid = new Grid();
      grid.initialize(10, 10, 40);
      const entity = new Entity(40, 40);
      grid.placeToGrid(entity, 0, 0);
      const canvas = <HTMLCanvasElement>document.getElementById('canvas');
      const ctx = <any>canvas.getContext('2d');
      const path = ctx?.__getPath();
      expect(path).toMatchSnapshot();
    });

    it('should set the entity position', () => {
      const grid = new Grid();
      grid.initialize(10, 10, 40);
      const entity = new Entity(40, 40);
      expect(entity.getPosition()).toEqual(new Vector2D(0, 0));
      grid.placeToGrid(entity, 5, 5);
      expect(entity.getPosition()).toEqual(new Vector2D(5, 5));
    });
  });
});
