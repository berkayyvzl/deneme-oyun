const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let gameActive = false;
let player1 = { x: 50, y: 300, width: 50, height: 50, color: "blue", speed: 5 };
let player2 = { x: 700, y: 300, width: 50, height: 50, color: "pink", speed: 5 };

function startGame() {
    gameActive = true;
    updateGame();
}

function updateGame() {
    if (gameActive) {
        requestAnimationFrame(updateGame);
        clearCanvas();
        updatePlayerPositions();
        checkCollisions();
        drawPlayers();
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updatePlayerPositions() {
    if (keys["ArrowLeft"]) { player1.x -= player1.speed; }
    if (keys["ArrowRight"]) { player1.x += player1.speed; }
    if (keys["ArrowUp"]) { player1.y -= player1.speed; }
    if (keys["ArrowDown"]) { player1.y += player1.speed; }

    if (keys["a"]) { player2.x -= player2.speed; }
    if (keys["d"]) { player2.x += player2.speed; }
    if (keys["w"]) { player2.y -= player2.speed; }
    if (keys["s"]) { player2.y += player2.speed; }
}

function checkCollisions() {
    // Engeller ve hedef kontrolü burada yapılacak
    // Basit bir kontrol örneği:
    if (player1.x < 0) player1.x = 0;
    if (player1.x + player1.width > canvas.width) player1.x = canvas.width - player1.width;
    if (player1.y < 0) player1.y = 0;
    if (player1.y + player1.height > canvas.height) player1.y = canvas.height - player1.height;

    if (player2.x < 0) player2.x = 0;
    if (player2.x + player2.width > canvas.width) player2.x = canvas.width - player2.width;
    if (player2.y < 0) player2.y = 0;
    if (player2.y + player2.height > canvas.height) player2.y = canvas.height - player2.height;

    // Hedefe ulaşma kontrolü (basit örnek)
    if (player1.x > 750 && player2.x > 750) {
        gameActive = false;
        alert("Tebrikler! Oyunu bitirdiniz.");
    }
}

function drawPlayers() {
    ctx.fillStyle = player1.color;
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height);

    ctx.fillStyle = player2.color;
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
}

let keys = {};
window.addEventListener("keydown", function (e) {
    keys[e.key] = true;
});

window.addEventListener("keyup", function (e) {
    keys[e.key] = false;
});
