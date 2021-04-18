var home,homeImage;
var gameState="home";
var man,manImg;
var ground;
var background,backgroundImg;


function preload(){
    homeImage=loadImage("images/home.png")
    manImg=loadImage("images/man.png")
    // backgroundImg=loadImage("images/background.jpg")
}

function setup(){
    createCanvas(1600,800)

    home=createSprite(800,500,width,height)
    home.addImage("starting screen",homeImage)

    // background=createSprite(800,500,width,height)
    // background.addImage("starting screen",backgroundImg)

    ground = createSprite(400,350,800,10);
    ground.x=ground.width/2;
    ground.visible=false;

}

function draw(){
    background("black")
    
    
    if(gameState==="home"){
        home.visible=true
        
        // background.visible=false;

        if(keyDown("space")){
            gameState="level1"
        }
        
        fill("white")
        textSize(50)
        text("Welcome to the game!",500,50)
          
        fill("white")
        textSize(50)
        text("This game will test how helpful you can be to a stranger",150,100)

        fill("white")
        textSize(50)
        text("You get 2 options, you can either help the person or decide not to",50,150)

        fill("white")
        textSize(50)
        text("The decision is yours",500,200)
           
  }

  if(gameState==="level1"){
        home.visible=false
        // background.visible=true;
        man=createSprite(400,350)
        man.addImage("player",manImg)
        man.scale=0.1

  }



  drawSprites();
}
// homeScreen=text,images,sound
// level1=backgroundImage, man image