export class Vector2D {
  private x = 0;
  private y = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Getter for x the axis value
   */
  getX() {
    return this.x;
  }

  /**
   * Setter for x axis value
   */
  setX(x: number) {
    this.x = x;
  }

  /**
   * Getter for y axis value
   */
  getY() {
    return this.y;
  }

  /**
   * Setter for y axis.
   */
  setY(y: number) {
    this.y = y;
  }

  isValid() {
    return this.x >= 0 && this.y >= 0;
  }

  /**
   * Return the vector as a formatted string, e.g "(0, 4)"
   */
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
