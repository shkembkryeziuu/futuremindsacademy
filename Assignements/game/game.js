const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gameWidth = canvas.width;
const gameHeight = canvas.height;

class Fighter {
    constructor(x, y, color, leftKey, rightKey, punchKey) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 100;
        this.color = color;
        this.speed = 5;
        this.isPunching = false;
        this.leftKey = leftKey;
        this.rightKey = rightKey;
        this.punchKey = punchKey;
        this.punchTimer = 0;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        if (this.isPunching) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x + this.width, this.y + this.height / 2 - 10, 20, 20);
        }
    }

    moveLeft() {
        if (this.x > 0) {
            this.x -= this.speed;
        }
    }

    moveRight() {
        if (this.x + this.width < gameWidth) {
            this.x += this.speed;
        }
    }

    punch() {
        if (!this.isPunching) {
            this.isPunching = true;
            this.punchTimer = 10;
        }
    }

    update() {
        if (this.punchTimer > 0) {
            this.punchTimer--;
        } else {
            this.isPunching = false;
        }
    }
}

const fighter1 = new Fighter(100, gameHeight - 150, 'blue', 'a', 'd', 'w');
const fighter2 = new Fighter(600, gameHeight - 150, 'green', 'ArrowLeft', 'ArrowRight', 'ArrowUp');

function update() {
    ctx.clearRect(0, 0, gameWidth, gameHeight);

    fighter1.update();
    fighter2.update();

    fighter1.draw();
    fighter2.draw();
}

function handleKeyDown(event) {
    switch (event.key) {
        case fighter1.leftKey:
            fighter1.moveLeft();
            break;
        case fighter1.rightKey:
            fighter1.moveRight();
            break;
        case fighter1.punchKey:
            fighter1.punch();
            break;
        case fighter2.leftKey:
            fighter2.moveLeft();
            break;
        case fighter2.rightKey:
            fighter2.moveRight();
            break;
        case fighter2.punchKey:
            fighter2.punch();
            break;
    }
}

document.addEventListener('keydown', handleKeyDown);

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
