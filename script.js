const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const tileSize = 64;

// Define rooms as an array of maps
const rooms = [
    [
        '##########',
        '#........#',
        '#........#',
        '#........#',
        '#........#',
        '#........#',
        '#........#',
        '#........#',
        '#........#',
        '##########'
    ],
    [
        '##########',
        '#........#',
        '#...#....#',
        '#...#....#',
        '#...#....#',
        '#...#....#',
        '#...#....#',
        '#...#....#',
        '#........#',
        '##########'
    ]
    // Add more rooms as needed
];

let currentRoom = 0; // Start in the first room
const player = { x: 100, y: 100, width: 10, height: 10 };

function drawMap() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing
    const map = rooms[currentRoom];
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === '#') {
                ctx.fillStyle = 'gray';
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }
}

function drawPlayer() {
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function update() {
    drawMap();
    drawPlayer();
    requestAnimationFrame(update);
}

function handleClick(event) {
    // Get mouse position relative to the canvas
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Check if the click is within a specific area to navigate
    // For example, let's say clicking in the center of the canvas moves to the next room
    if (x > canvas.width / 2 && y > canvas.height / 2) {
        currentRoom = (currentRoom + 1) % rooms.length; // Cycle through rooms
        player.x = 100; // Reset player position (optional)
        player.y = 100;
    } else {
        // Add logic for other navigation options or interactions here
    }
}

canvas.addEventListener('click', handleClick);

update();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
