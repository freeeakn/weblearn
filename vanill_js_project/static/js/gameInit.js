const init = () => {
    
    const character = new player(50, 50);
    const coinExp = new coin(150, 150);

    document.getElementById('main').appendChild(coinExp.coin)
    document.getElementById('main').appendChild(character.player);

    playerController(character);
    setInterval(function () {
        if(character.posX == coinExp.posX) {
            coinExp.deleteCoin();
            character.value++;
            console.log(character.value);
        }
    }, 2000);
    
};

init();