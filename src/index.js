import Phaser from "phaser";
import configFn from "./config/index";
import { setOffset } from "./utils/index";
import main from "./main/index";
import heroImg from "./assets/phaser/秋叶落.png";
import heroJson from "./assets/phaser/秋叶落.json";
import loadHero from "./anmiation/hero";
class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }
  preload() {
    //人物
    this.load.atlas("hero", heroImg, heroJson);
  }
  create() {
    //加载配置
    for (let item in configFn) {
      configFn[item](this);
    }
    //加载鬼剑士
    this.hero = loadHero("hero", this);
  }
  update() {
    //修正包围盒
    setOffset(this.hero, this);
    //游戏主逻辑
    main(this);
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: MyGame,
};

const game = new Phaser.Game(config);
