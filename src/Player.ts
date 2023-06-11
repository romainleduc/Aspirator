import { Entity } from './Entity';

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
  private direction: Direction;

  constructor(width: number, height: number, direction: Direction) {
    super(width, height);
    this.direction = direction;
  }

  getDirection() {
    return this.direction;
  }

  setDirection(direction: Direction) {
    this.direction = direction;
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
