import { Grid } from './Grid';
import { Direction, Player, Orientation } from './Player';

const grid = new Grid();
grid.initialize(10, 10, 40);
const player = new Player(40, 40, Direction.N);
grid.placeToGrid(player, 5, 5);
console.log(player.getPosition());

addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'KeyD':
      player.turnTo(Orientation.Left);
      break;
    case 'KeyG':
      player.turnTo(Orientation.Right);
      break;
    case 'KeyQ':
      grid.moveTo(player, player.getDirection());
      break;
  }

  console.log(event);
  console.log('Player Position', player.getPosition());
  // grid.moveTo(player, 0, 0)
});
