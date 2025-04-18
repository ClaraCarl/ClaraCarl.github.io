let char = document.getElementById("char").getBoundingClientRect();

// tree position 
let obst = document.querySelector(".tree").getBoundingClientRect();

// container position 
let container = document.getElementById("container").getBoundingClientRect();

// character properties
let charProp = {
    jumpHeight: 200,
    elem: document.getElementById("char"),
    maxJump: 80,
    doubleJump: true,
    jumping: true,
    hangTime: 0,
    maxHang: 4
};

// score
let score = 0;
let gameStarted = true;
let oncelerPassed = false;
let grassCollisionEnabled = true;

// Game loop
setInterval(() => {
    if (!gameStarted) return;

    const trees = document.querySelectorAll(".tree");
    char = document.getElementById("char").getBoundingClientRect();

    // tree contact
    trees.forEach((tree) => {
        const treeRect = tree.getBoundingClientRect();

        if (
            char.right >= treeRect.left &&
            char.left <= treeRect.right &&
            char.bottom > treeRect.top &&
            char.bottom <= treeRect.bottom
        ) {
            score += 1;
            document.getElementById("score").innerHTML = `Score: ${score}`;
            tree.style.animation = "none";
        }
    });

    // Grass contact
    if (grassCollisionEnabled) {
        obst = document.querySelector(".grass").getBoundingClientRect();
        if (char.right >= obst.x && char.bottom > obst.y) {
            alert("You hit the grass! Game Over.");
            resetGame();
        }
    }

    // endpoint check
    const loraxTree = document.querySelector(".LoraxTree").getBoundingClientRect();
    if (
        char.right >= loraxTree.left &&
        char.left <= loraxTree.right &&
        char.bottom >= loraxTree.top
    ) {
        endLevel();
    }

    // onceler
    const onceler = document.getElementById("onceler");
    const oncelerRect = onceler.getBoundingClientRect();
    if (
        char.right >= oncelerRect.left &&
        char.left <= oncelerRect.right &&
        char.bottom >= oncelerRect.top
    ) {
        alert("You touched the Onceler! Game Over.");
        resetGame();
    }
}, 100);

// Ted Jumping
function jumping() {
    let containerHeight = container.height;
    let maxJumpHeight = containerHeight - char.height;

    charProp.jumping = true;
    let jump = setInterval(() => {
        if (charProp.jumpHeight < maxJumpHeight && charProp.jumping) {
            charProp.jumpHeight += 10;
        } else if (charProp.jumpHeight >= maxJumpHeight && charProp.jumping) {
            charProp.jumping = false;
        } else if (!charProp.jumping && charProp.hangTime < charProp.maxHang) {
            charProp.jumpHeight = maxJumpHeight;
            charProp.hangTime += 1;
        } else if (charProp.jumpHeight > 0 && !charProp.jumping && charProp.hangTime >= charProp.maxHang) {
            charProp.jumpHeight -= 5;
        }

        charProp.elem.style.bottom = `${charProp.jumpHeight}px`;
    }, 100);
}

// Reset game state after touching the grass
function resetGame() {
    score = 0;
    document.getElementById("score").innerHTML = `Score: ${score}`;
    charProp.jumpHeight = 250;
    charProp.elem.style.bottom = "250px";
    gameStarted = false;
    oncelerPassed = false;
    document.getElementById("onceler").style.animation = "moveOncler 1s linear infinite";
}

// level complete when reaching the lorax
function endLevel() {
    gameStarted = false;
    grassCollisionEnabled = false;
    const levelUpMessage = document.getElementById("levelUpMessage");
    levelUpMessage.style.display = "block";
    levelUpMessage.style.position = "absolute";
    levelUpMessage.style.left = "50%";
    levelUpMessage.style.top = "50%";
    levelUpMessage.style.transform = "translate(-50%, -50%)";
    levelUpMessage.innerHTML = `<p>Good job protecting the trees!<br><strong>Level 1 Complete</strong></p>`;

    setTimeout(() => {
        levelUpMessage.style.display = "none";
        grassCollisionEnabled = true;
        resetGame();
        gameStarted = true;
    }, 5000);
}

// spacebar for jumping and starting
document.addEventListener("keydown", (e) => {
    if (e.code == "Space" && gameStarted) {
        jumping();
    }
});

function resetLevel() {
    score = 0;
    document.getElementById("score").innerText = `Score: ${score}`;
    charProp.jumpHeight = 200;
    charProp.elem.style.bottom = "200px";
    gameStarted = false;
}