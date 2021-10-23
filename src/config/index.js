function keyCode(self) {
  self.cursors = self.input.keyboard.createCursorKeys();
  self.keyX = self.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
  self.keyI = self.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
  self.keyZ = self.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
  self.keyC = self.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
  self.keyA = self.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  self.keyS = self.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  self.keyD = self.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  self.keyF1 = self.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F1);
}
let obj = { keyCode };
export default obj;
