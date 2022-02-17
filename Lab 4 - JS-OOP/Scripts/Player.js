class Player extends GameObject {
    /* Player Properties */
    #physics;

    constructor(x, y) {
        super(x * Block.SIZE, y * Block.SIZE, Block.SIZE, Block.SIZE, "Assets/link-down.png");
        this.#physics = new Physics(4);
    }

    move() {
        const dx = this.getX() + this.#physics.getVelocityX();
        const dy = this.getY() + this.#physics.getVelocityY();
        super.move(dx, dy);
    }

    update() {
        this.#physics.update();
        this.move();
    }
}