const rooms = ['welcome-room', 'em-gallery', 'uw-gallery', 'landscape-gallery', 'travel-gallery'];
let currentRoomIndex = 0;

function navigate(direction) {
    document.getElementById(rooms[currentRoomIndex]).style.display = 'none';

    if (direction === 'left') {
        currentRoomIndex = (currentRoomIndex - 1 + rooms.length) % rooms.length;
    } else if (direction === 'right') {
        currentRoomIndex = (currentRoomIndex + 1) % rooms.length;
    } else if (direction === 'forward' || direction === 'backward') {
        // Implement specific logic for forward/backward navigation if needed
        return; // For now, just return without changing the room
    }

    document.getElementById(rooms[currentRoomIndex]).style.display = 'block';
}

// Initialize the welcome room
document.getElementById(rooms[currentRoomIndex]).style.display = 'block';
