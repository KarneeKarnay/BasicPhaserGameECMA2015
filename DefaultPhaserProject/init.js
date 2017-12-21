/*global Phaser, Boot, PreLoad, Game, GameOver, Menu*/

class Init extends Phaser.Game
{
    constructor (canvas)
    {
		super(800, 600, Phaser.AUTO, canvas);
		
		this.state.add('Boot', Boot, false);
        this.state.add('PreLoad', PreLoad, false);
        this.state.add('Game', Game, false);
        this.state.add('Menu', Menu, false);
        this.state.add('GameOver', GameOver, false);
 
        this.state.start('Boot');
	}
}

const canvas = document.getElementById('canvas');
new Init(canvas);