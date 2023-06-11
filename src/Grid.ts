import { Entity } from './Entity';
import { Direction, Player } from './Player';
import { Square } from './Square';
import { Vector2D } from './Vector2D';

export class Grid {
  private margin;
  private width: number;
  private height: number;
  private ctx: CanvasRenderingContext2D | null;

  constructor(margin = 5) {
    this.margin = margin;
    this.ctx = null;
    this.width = 0;
    this.height = 0;
  }

  getMargin() {
    return this.margin;
  }

  getCtx() {
    return this.ctx;
  }

  initialize(width: number, height: number, squareSize: number) {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.id = 'canvas';
    canvas.width = width * (squareSize + this.margin);
    canvas.height = height * (squareSize + this.margin);
    this.width = width;
    this.height = height;

    const ctx = canvas.getContext('2d');

    if (ctx) {
      this.ctx = ctx;

      for (let y = 0; y <= height; y++) {
        for (let x = 0; x <= width; x++) {
          this.placeToGrid(new Square(squareSize, squareSize, '#BBBBBB'), x, y);
        }
      }
    }
  }

  placeToGrid(entity: Entity, x: number, y: number) {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.fillStyle = entity.getColor();
      this.ctx.rect(
        (entity.getWidth() + this.margin) * x,
        (entity.getHeight() + this.margin) * y,
        entity.getWidth(),
        entity.getHeight()
      );
      entity.setPosition(x, y);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }

  moveTo(entity: Player, direction: Direction) {
    if (this.ctx) {
      const newPosition = new Vector2D(entity.getX(), entity.getY());

      switch (direction) {
        case Direction.N:
          newPosition.setY(newPosition.getY() - 1);
          break;
        case Direction.E:
          newPosition.setX(newPosition.getX() + 1);
          break;
        case Direction.S:
          newPosition.setY(newPosition.getY() + 1);
          break;
        case Direction.W:
          newPosition.setX(newPosition.getX() - 1);
          break;
      }

      if (
        newPosition.isValid() &&
        newPosition.getY() <= this.height - 1 &&
        newPosition.getX() <= this.width - 1
      ) {
        this.ctx.beginPath();
        this.ctx.clearRect(
          (entity.getWidth() + this.margin) * entity.getX(),
          (entity.getHeight() + this.margin) * entity.getY(),
          entity.getWidth(),
          entity.getHeight()
        );
        this.ctx.closePath();
        this.placeToGrid(
          new Square(40, 40, '#BBBBBB'),
          entity.getX(),
          entity.getY()
        );
        this.placeToGrid(entity, newPosition.getX(), newPosition.getY());
      }
    }
  }
}
