import { Entity } from './Entity';
import { Print } from './Print';
import { Vector2D } from './Vector2D';

export enum Direction {
  N = 'N',
  E = 'E',
  W = 'W',
  S = 'S',
}

export enum Orientation {
  Right = 'Right',
  Left = 'Left',
}

export class Player extends Entity {
  private direction: Direction = Direction.N;

  constructor(width: number, height: number, direction: Direction) {
    super(width, height);
    this.setDirection(direction);
  }

  /**
   * 
   * Get the cardinal point towards which the player is heading
   */
  getDirection() {
    return this.direction;
  }

  /**
   * 
   * Set the cardinal point towards which the player is heading
   */
  setDirection(direction: Direction) {
    this.direction = direction;
    Print.printText('player-orientation', this.direction.toString());
  }

  /**
   * 
   * Set both x and y axis value
   */
  setPosition(x: number, y: number): void {
    this.position = new Vector2D(x, y);
    Print.printText('player-position', this.position.toString())
  }

  turnTo(turn: Orientation) {
    const directions = [Direction.N, Direction.E, Direction.S, Direction.W];
    const indexDirection = directions.indexOf(this.direction);

    if (turn === Orientation.Right) {
      if (directions[indexDirection + 1]) {
        this.setDirection(directions[indexDirection + 1]);
      } else {
        this.setDirection(directions[0]);
      }
    } else if (turn === Orientation.Left) {
      if (directions[indexDirection - 1]) {
        this.setDirection(directions[indexDirection - 1]);
      } else {
        this.setDirection(directions[directions.length - 1]);
      }
    }
  }
}
