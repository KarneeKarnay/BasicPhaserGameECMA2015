/*global Phaser*/

class Boot extends Phaser.State
{
    preload() {
         
    }
 
    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#33E3FF';
        
        this.state.start('PreLoad');
    }

}