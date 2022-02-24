class Player extends GameObject {
    /* Player Properties */
    #physics;
    #isJumping;

    constructor(x, y) {
        super(x * Block.SIZE, y * Block.SIZE, Block.SIZE, Block.SIZE, "Assets/link-down.png");
        this.#physics = new Physics(4);
        this.#isJumping = false;
    }

    move() {
        const dx = this.getX() + this.#physics.getVelocityX();
        const dy = this.getY() + this.#physics.getVelocityY();
        super.move(dx, dy);
    }

    update(blocks) {
        this.#physics.update(blocks, this);
        this.move();
    }

    jump() {
        if (this.#isJumping === false) {
            this.#physics.jump();
            this.#isJumping = true;
        }
    }
    moveLeft() {
        this.#physics.moveLeft();
    }
    moveRight() {
        this.#physics.moveRight();
    }
    isJumping(isJumping) {
        this.#isJumping = isJumping;
    }
}