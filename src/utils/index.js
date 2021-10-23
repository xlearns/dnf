function gameAnims(source, start, end, status, rate) {
  rate = rate ? rate : 5;
  let status__frame = this.anims.generateFrameNames(source, {
    start: start,
    end: end,
  });
  this.anims.create({
    key: status,
    frames: status__frame,
    frameRate: rate,
    repeat: -1,
  });
}

function setOffset(name, self) {
  let { w, h, x, y } = name.frame.customData.spriteSourceSize;
  //设则包围盒大小
  name.body.width = w;
  name.body.height = h;
  //设置偏移
  if (x == 0 || y == 0) return;
  if (name.direction > 0) {
    name.setOffset(x * name.direction, y);
  } else {
    let off = 0;
    if (name.status === "idle") {
    } else if (name.status === "attack") {
      off = -(w - 65);
    }
    name.setOffset(x * name.direction + off, y);
  }
}
function play(name, status) {
  name.status = status;
  name.anims.play(status, true);
}
export { gameAnims, setOffset, play };
