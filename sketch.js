var spaceship1, spaceship2
var asteroid1, asteroid2, asteroid3
var bg, Spacebg, backgroundImage
var blastSound, laserSound
var Canvas
var space
var spaceship1Image, spaceship2Image
var asteroidGroup


function preload() {
  backgroundImage = loadImage("Spacebackground.jpg")
  spaceship1Image = loadImage("spaceship11.png")
  spaceship2Image = loadImage("spaceship22.png")
  asteroid1 = loadImage("asteroid4.jpeg")
  asteroid2 = loadImage("asteroid5.jpeg")
  asteroid3 = loadImage("asteroid6.png")
  blastSound = loadSound("explosion.mp3")
  laserSound = loadSound("laser sound.mp3")
  Spacebg = loadImage("space.png")
}

function setUp() {
  Canvas= createCanvas(windowWidth,windowHeight)
  bg = createSprite(windowWidth,windowHeight)
  bg.addImage(backgroundImage)
  space= createSprite(windowWidth/2, windowHeight/2)
  space.addImage(Spacebg)
  spaceship1= createSprite(width/2,height/2)
  spaceship1.addImage(spaceship1Image)
  spaceship2=createSprite(width/2,height/2)
  spaceship2.addImage(spaceship2Image)
  asteroidGroup= new Group

}

function draw() {
  background(0)

  drawSprites()

  if(keyDown("right") ) {
    spaceship1.x = spaceship.x + 20;
     }

  if(keyDown("left")) {
    spaceship1.x = spaceship1.x - 20;
   }


}

function asteroid() {
  if(frameCount%100===0){
    var asteroid=createSprite(Math.round(random(50,1000)),-2)
    asteroid.scale=random(0.4,0.5)
    var rand=Math.round(random(1,3))
    switch(rand){
      case 1:asteroid.addImage(asteroid1)
      break;
      case 2:asteroid.addImage(asteroid2)
      break;
      case 3:asteroid.addImage(asteroid3)
      break;

      default:break
    }
  }
}
