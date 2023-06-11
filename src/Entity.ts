import { Vector2D } from './Vector2D';

export class Entity {
  private position: Vector2D;
  private color;
  private width;
  private height;

  constructor(width: number, height: number, color = '#000') {
    this.position = new Vector2D(0, 0);
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  setColor(color: string) {
    this.color = color;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getPosition() {
    return this.position;
  }

  setPosition(x: number, y: number) {
    this.position = new Vector2D(x, y);
  }

  getX() {
    return this.position.getX();
  }

  setX(x: number) {
    this.position.setX(x);
  }

  getY() {
    return this.position.getY();
  }

  setY(y: number) {
    this.position.setY(y);
  }
}
