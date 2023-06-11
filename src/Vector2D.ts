export class Vector2D {
  private x = 0;
  private y = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  setX(x: number) {
    this.x = x;
  }

  getY() {
    return this.y;
  }

  setY(y: number) {
    this.y = y;
  }
}
