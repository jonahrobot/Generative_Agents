let config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    backgroundColor: '#3ECC4B',
    pixelArt: true,
    autoCenter: true,
    physics: {
      default: 'arcade',
      arcade: {
          //debug: true,
          gravity: {
              x: 0,
              y: 0
          }
      }
    },
    scene: [Play]
  }

let game = new Phaser.Game(config);
