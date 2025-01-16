const player = document.getElementById('player');
let playerPositionX = window.innerWidth / 2 - 25;
let playerPositionY = 0; 

function movePlayer(direction) {
  if (direction === 'left' && playerPositionX > 0) {
    playerPositionX -= 10;
    player.style.left = playerPositionX + 'px';
  } else if (direction === 'right' && playerPositionX < window.innerWidth - 50) {
    playerPositionX += 10;
    player.style.left = playerPositionX + 'px';
  } else if (direction === 'up' && playerPositionY < window.innerHeight - 50) {
    playerPositionY += 10;
    player.style.bottom = playerPositionY + 'px';
  } else if (direction === 'down' && playerPositionY > 0) {
    playerPositionY -= 10;
    player.style.bottom = playerPositionY + 'px';
  }
}


document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    movePlayer('left');
  } else if (event.key === 'ArrowRight') {
    movePlayer('right');
  } else if (event.key === 'ArrowUp') {
    movePlayer('up');
  } else if (event.key === 'ArrowDown') {
    movePlayer('down');
  }
});
