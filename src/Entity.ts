import { Vector2D } from './Vector2D';

export class Entity {
  protected position: Vector2D;
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

  /**
   * Get both x and y axis value
   */
  getPosition() {
    return this.position;
  }

  /**
   * 
   * Set both x and y axis value
   */
  setPosition(x: number, y: number) {
    this.position = new Vector2D(x, y);
  }

  /**
   * Getter for x axis value
   */
  getX() {
    return this.position.getX();
  }

  /**
   * Setter for x axis value
   */
  setX(x: number) {
    this.position.setX(x);
  }

  /**
   * Getter for y axis value
   */
  getY() {
    return this.position.getY();
  }

  /**
   * Setter for y axis value
   */
  setY(y: number) {
    this.position.setY(y);
  }
}
