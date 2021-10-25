import { play } from "./../utils/index";
function main(self) {
  let hero = self.hero;
  let status = hero.status;

  if (status == "attack") {
  } else {
    if (self.cursors.left.isDown) {
      hero.direction = -1;
      hero.setFlipX(true, false);
      hero.x -= hero.move_speed;
      play(hero, "move");
      hero.displayOriginX = 358;
    } else if (self.cursors.right.isDown) {
      hero.direction = 1;
      hero.setFlipX(false, false);
      hero.x += hero.move_speed;
      play(hero, "move");
      hero.displayOriginX = 33.5;
    } else {
      play(hero, "idle");
    }
  }
}
export default main;
