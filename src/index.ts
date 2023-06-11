import { Grid } from './Grid';
import { Direction, Player, Orientation } from './Player';
import { Print } from './Print';
import { Settings } from './Settings';

Print.printText('size-grid', `x=${Settings.gridX} y=${Settings.gridY}`)

const grid = new Grid();
grid.initialize(Settings.gridX, Settings.gridY, 40);
const player = new Player(40, 40, Direction.N);
grid.placeToGrid(player, 5, 5);

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
});
