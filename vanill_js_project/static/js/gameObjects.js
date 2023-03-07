class player {

    constructor(x, y) {
        this.player = document.createElement('div');
        this.player.setAttribute('class', 'player');
        this.posX = x;
        this.posY = y;
        this.value = 0;
        this.player.style.left = `${this.posX}px`;
        this.player.style.bottom = `${this.posY}px`;
    }
    
    addPosX(x) {
        this.posX += x;
        this.player.style.left = `${this.posX}px`;
    }

    addPosY(y) {
        this.posY += y;
        this.player.style.bottom = `${this.posY}px`;
    }

}

class coin {
    
    constructor(x, y) {
        this.coin = document.createElement('div');
        this.coin.setAttribute('class', 'coin');
        this.posX = x;
        this.posY = y;
        this.value = 1;
        this.coin.style.left = `${this.posX}px`;
        this.coin.style.bottom = `${this.posY}px`;
    }

    deleteCoin() {
        this.coin.remove();
        this.posX = null;
        this.posY = null;
    }

}