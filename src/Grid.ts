import { Square } from './Square';

export class Grid {
  private margin;

  constructor(margin = 2) {
    this.margin = margin;
  }

  getMargin() {
    return this.margin;
  }

  initialize(width: number, height: number, squareSize: number) {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.id = 'canvas';
    canvas.width = width * (squareSize + this.margin);
    canvas.height = height * (squareSize + this.margin);

    const ctx = canvas.getContext('2d');

    if (ctx) {
      for (let y = 0; y <= height; y++) {
        for (let x = 0; x <= width; x++) {
          const square = new Square(squareSize, squareSize);
          square.setColor('#BBBBBB');
          square.placeToGrid(
            ctx,
            (squareSize + this.margin) * x,
            (squareSize + this.margin) * y
          );
        }
      }
    }
  }
}
