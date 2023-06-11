import { Vector2D } from './Vector2D';

export class Square {
  private width;
  private height;
  private position;
  private color;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.position = new Vector2D(0, 0);
    this.color = '#fff';
  }

  placeToGrid(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.rect(x, y, this.width, this.height);
    this.position = new Vector2D(x, y);
    ctx.fill();
    ctx.closePath();
  }

  setColor(color: string) {
    this.color = color;
  }

  getWidth() {
    return this.width;
  }

  getHeigth() {
    this.height;
  }
}
