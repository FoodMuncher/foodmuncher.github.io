export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 20;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.maxSpeed = 10;
    this.speed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }

  draw(context) {
    context.fillStyle = "#0ff";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  move(direction) {
    this.speed = direction * this.maxSpeed;
  }

  update(deltaTime) {
    if (!deltaTime) return;

    this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
    else if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
  }
}