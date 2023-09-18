window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    const canvasWidth = 1000;
    const canvasHeight = 600;
    const playerWidth = 4;
    const playerHeight = 100;
    let leftCoorsY = 300;
    let rightCoorsY = 300;
    const playerSpeed = 5;
    window.addEventListener('keydown', (e) => {
        if (e.key === "w" && leftCoorsY > 0) {
            leftCoorsY -= playerSpeed;
            console.log(leftCoorsY);
        } else if (e.key === "s" && leftCoorsY < 500) {
            leftCoorsY += playerSpeed;
            console.log(leftCoorsY);
        }

        if (e.key === "ArrowUp"  && rightCoorsY > 0) {
            rightCoorsY -= playerSpeed;
        } else if (e.key === "ArrowDown" && rightCoorsY < 500) {
            rightCoorsY += playerSpeed;
        }
    })


    function animate() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = "white";
        ctx.fillRect(20, leftCoorsY, playerWidth, playerHeight);
        ctx.fillRect(970, rightCoorsY, playerWidth, playerHeight);
        
        requestAnimationFrame(animate);
    }
    animate()
})