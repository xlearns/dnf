import { play } from "./../utils/index";
function main(self) {
  let hero = self.hero;
  let status = hero.status;

  if (status == "attack") {
  } else {
    if (self.cursors.left.isDown) {
      hero.fliprtl__lock = true;
      hero.direction = -1;
      hero.setFlipX(true, false);
      hero.x -= hero.move_speed;
      play(hero, "move");
      if (!hero.flipltr__lock) return;
      hero.displayOriginX -= 358;
      hero.flipltr__lock = false;
    } else if (self.cursors.right.isDown) {
      hero.flipltr__lock = true;
      hero.direction = 1;
      hero.setFlipX(false, false);
      hero.x += hero.move_speed;
      play(hero, "move");
      if (!hero.fliprtl__lock) return;
      hero.displayOriginX += 358;
      hero.fliprtl__lock = false;
    } else {
      play(hero, "idle");
    }
  }
}
export default main;
