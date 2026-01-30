const main = document.querySelector('main');

// ---------------- CONSTANTS ----------------
const HERO_CONSTS = {
    width: 50,
    height: 50,
    color: '#bd7d42',
    speed: 10,
    Y: 440
};

const LEFT_KEY = 'ArrowLeft';
const RIGHT_KEY = 'ArrowRight';

const OBSTACLES_CONSTS = {
    width: 25,
    height: 25,
    color: '#d81f1f',
    speed: 5,
    startingTopPos: 0
};

const GAME_SPEED = 50;
const SPAWN_RATE = 1000;

// ---------------- SCORE ----------------
let score = 5;
const scoreEl = document.getElementById('score');

// ---------------- HERO ----------------
const hero = document.createElement('div');
let heroX = 200;

const keys = {
    left: false,
    right: false
};

hero.style.width = HERO_CONSTS.width + 'px';
hero.style.height = HERO_CONSTS.height + 'px';
hero.style.backgroundColor = HERO_CONSTS.color;
hero.style.position = 'absolute';
hero.style.top = HERO_CONSTS.Y + 'px';

main.append(hero);

// ---------------- INPUT ----------------
document.addEventListener('keydown', (e) => {
    if (e.key === RIGHT_KEY) keys.right = true;
    if (e.key === LEFT_KEY) keys.left = true;
});

document.addEventListener('keyup', (e) => {
    if (e.key === RIGHT_KEY) keys.right = false;
    if (e.key === LEFT_KEY) keys.left = false;
});

// ---------------- OBSTACLES ----------------
let obstacles = [];

const spawnObstacle = () => {
    const obstacle = document.createElement('div');

    const posX = Math.random() * (main.clientWidth - OBSTACLES_CONSTS.width);

    obstacle.style.width = OBSTACLES_CONSTS.width + 'px';
    obstacle.style.height = OBSTACLES_CONSTS.height + 'px';
    obstacle.style.backgroundColor = OBSTACLES_CONSTS.color;
    obstacle.style.position = 'absolute';
    obstacle.style.left = posX + 'px';
    obstacle.style.top = OBSTACLES_CONSTS.startingTopPos + 'px';

    main.append(obstacle);

    obstacles.push({
        el: obstacle,
        X: posX,
        Y: OBSTACLES_CONSTS.startingTopPos
    });
};

// ---------------- GAME LOOP ----------------
let timePassed = 0;

setInterval(() => {
    // HERO MOVE
    if (keys.right) heroX += HERO_CONSTS.speed;
    if (keys.left) heroX -= HERO_CONSTS.speed;

    hero.style.left = heroX + 'px';

    // OBSTACLES MOVE + COLLISION
    obstacles.forEach((o, index) => {
        o.Y += OBSTACLES_CONSTS.speed;
        o.el.style.top = o.Y + 'px';

        const horizontal =
            heroX < o.X + OBSTACLES_CONSTS.width &&
            heroX + HERO_CONSTS.width > o.X;

        const vertical =
            HERO_CONSTS.Y < o.Y + OBSTACLES_CONSTS.height &&
            HERO_CONSTS.Y + HERO_CONSTS.height > o.Y;

        // 💥 COLLISION
        if (horizontal && vertical) {
            score--;
            scoreEl.textContent = score;

            o.el.remove();
            obstacles.splice(index, 1);
        }

        // ✅ MISSED (AVOIDED)
        if (o.Y > main.clientHeight) {
            score++;
            scoreEl.textContent = score;

            o.el.remove();
            obstacles.splice(index, 1);
        }
    });

    // SPAWN
    timePassed += GAME_SPEED;
    if (timePassed >= SPAWN_RATE) {
        spawnObstacle();
        timePassed = 0;
    }

}, GAME_SPEED);
