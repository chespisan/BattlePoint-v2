/** importamos los modulos */
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

// importamos el componente de phaser
import { Game } from '../../game/game';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
// nuetsra clase donde se vera el 1 juego
export class HomePage {
  
  pressEnable: boolean;
  /**
   * instancia del juego
   * @private
   * @type {Game}
   * @memberof HomePage
   */

  // variables globales
  public gameInstance: Game;
  public ninja: any;
  public ninjaGroup: any;
  public phaserObj: any;
  public tween: any;

  /**
   * Creates an instance of HomePage
   * Creamos la intancia del componente.
   * @param {NavController} navCtrl 
   * @memberof HomePage
   */
  constructor( public navCtrl: NavController ) {
    this.gameInstance = new Game();
    
  }

  ionViewDidLoad(){
  	this.phaserObj = new Phaser.Game(1012,550, Phaser.CANVAS, 'game',
    {
      init: this.init.bind(this),
      preload: this.preload.bind(this),
      create: this.create.bind(this),
      update: this.update.bind(this)
    }); 
  }

  /** Estados(metodos) del juego */

  // Estado configuracion
  init(){
    this.phaserObj.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.phaserObj.scale.pageAlignHorizontally = true;
    this.phaserObj.scale.pageAlignVertically = true;

    this.pressEnable = true;
  }
  // Estado de carga de los archivos estaticos del juego
  preload(){
    this.phaserObj.load.image('background','assets/images/background.png');
    this.phaserObj.load.image('objects1','assets/images/objects1.png');
    this.phaserObj.load.image('objects2','assets/images/objects2.png');
    this.phaserObj.load.image('ninja','assets/images/ninja.png');
  }

  // Estado para crear y manipular los archivos de carga
  create(game: Game){
    this.phaserObj.add.sprite(0,0,'background');
    this.ninjaGroup = this.phaserObj.add.group();
    this.phaserObj.add.sprite(0,0,'objects1');
    this.phaserObj.add.sprite(0,0,'objects2');

    /** creamos la clase ninja que heradara las propiedades del sprite */
    var Ninja = function(id, assetName, x0, y0, x1, y1, scale, angle, timeAnimation, timeDelay){
      Phaser.Sprite.call(this, game ,x0, y0, assetName);

      this.inputEnabled = true;
      console.log(this.inputEnabled);
      this.input.pixelPerfectClick = true;
      this.events.onInputDown.add(function(){
        alert('hiciste touch');
        console.log('touch')
        }, this);   

        this.id = id;
        this.x0 = x0;
        this.y0 = y0;
        this.x1 = x1;
        this.y1 = y1;
        this.defaultScale = scale;
        this.angle = angle;
        this.timeAnimation = timeAnimation;
        this.timeDelay = timeDelay

        this.scale.setTo(scale);
        this.anchor.setTo(0.5, 1);


    };

  // añadir prototipos a la clase Ninja
   Ninja.prototype = Object.create(Phaser.Sprite.prototype);
   Ninja.prototype.constructor = Ninja

   Ninja.prototype.Appear = function(){
    this.x = this.x0;
    this.y = this.y0;
    this.tweenIn = game.add.tween(this);
    this.tweenOut = game.add.tween(this);
    
    this.tweenIn.to( { x:this.x1, y:this.y1 }, this.timeAnimation, Phaser.Easing.Quadratic.In );
    this.tweenOut.to( { x:this.x0, y:this.y0 }, this.timeAnimation, Phaser.Easing.Quadratic.Out, false, this.timeDelay );
    
    this.tweenIn.onComplete.add( function () {
        this.tweenOut.start();
        this.tweenOut.onComplete.add( function () {
            console.log("END ANIMATION");
        }, this);
        
    }, this);
    
    
    this.tweenIn.start();
  }
   
  // instanciamos de l aclase ninja
   var ninjaa = new Ninja(0, 'ninja', 100, 500, 100, 400, 1, 0, 1500, 1000);
   this.ninjaGroup.add(ninjaa);
   ninjaa.Appear();
  }

  // Estado para actualizar el juego
  update(){

  }
 }
