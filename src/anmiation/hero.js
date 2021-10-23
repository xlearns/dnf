import { gameAnims, setOffset, play } from "../utils/index";
function loadHero(name, self) {
  //待机
  gameAnims.call(self, name, 177, 180, "idle");
  //攻击
  gameAnims.call(self, name, 91, 96, "attack");
  //移动
  gameAnims.call(self, name, 181, 188, "move");
  //run
  gameAnims.call(self, name, 106, 113, "run");
  //攻击1
  gameAnims.call(self, name, 1, 10, "attack1");
  //攻击2
  gameAnims.call(self, name, 11, 21, "attack2");
  //攻击3
  gameAnims.call(self, name, 34, 42, "attack3");
  let res = self.physics.add.sprite(200, 200, name);
  res.name = "hero";
  res.direction = 1;
  res.status = "idle";
  res.move_speed = 1;
  res.flipltr__lock = true;
  res.fliprtl__lock = false;
  res.setOrigin(0.5, 1);
  res.setDepth(1);
  setOffset(res, self);
  play(res, "idle");
  return res;
}
export default loadHero;
