/*global Phaser*/

class PreLoad extends Phaser.State
{
    preload() {
        
        this.loadingLabel = this.game.add.text(80,150, 'loading...', {font: '30px Courier', fill: '#000'});
        this.game.load.image('sky', 'states/images/game/sky.png');
        this.game.load.image('ground', 'states/images/game/platform.png');
        this.game.load.image('star', 'states/images/game/star.png');
        this.game.load.spritesheet('dude', 'states/images/game/dude.png', 32, 48);
         
    }
 
    create() {
        this.state.start('Game');
    }

}