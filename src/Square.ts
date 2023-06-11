import { Entity } from './Entity';

export class Square extends Entity {
  constructor(width: number, height: number, color?: string) {
    super(width, height, color);
  }
}
