function playerController(player) {
    document.addEventListener('keydown', function(event) {
        if (event.code == 'KeyD') {
            player.addPosX(10);
        }
        if (event.code == 'KeyW') {
            player.addPosY(10);
        }
        if (event.code == 'KeyA') {
            player.addPosX(-10);
        } 
        if (event.code == 'KeyS') {
            player.addPosY(-10);
        }
        if (event.code == 'Space') {
            player.addPosY(50);
            setTimeout(
                function() {
                    player.addPosY(-50);
                }, 200
            );
        }
    });
}