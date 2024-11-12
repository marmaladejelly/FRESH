let stage = 0;
let changeStage;
let startScreen;
let bg;
let textBox;
let startButton;
let yourName;
let yn = yourName.value();

function preload() {
  startScreen = loadImage('start_screen.png'); //start screen
  bg = loadImage('background.png'); //blank background
  textBox = loadImage('text_box.png'); //text box
}

function setup() {
  createCanvas(1366,768); //set the canvas width and height using the browser's dimensions.
  
  }


  function draw() {
  background('#ffffff');

  cursor(CROSS); //Set the cursor to crosshairs: +

  textStyle(BOLD);  
  textFont('Courier New');
  fill("white");
  textSize(25);
 
  switch (stage) {
    case 0:
        //start screen
        image(startScreen,0,0);

        //create new game button
        let newGame = createButton('NEW GAME');
        newGame.position(30,600);
        newGame.style('font-family','Courier New');
        newGame.style('font-size','40px');
        //start game when the button is pressed.
        newGame.mousePressed(stage = 2);
        
        //create new game button
        let settings = createButton('SETTINGS');
        settings.position(30,660);
        settings.style('font-family','Courier New');
        settings.style('font-size','40px');
        //start game when the button is pressed.
        settings.mousePressed(stage = 1);

        break;
     case 1:

        break;
    case 2:
        // hide start screen buttons once the game starts
        newGame.hide();
        settings.hide();
      
        //background screen
        image(bg,0,0);
        
        //type in your name
        yourName = createInput();
        yourName.position(550,300);
        text(yn, 25, 55);

        //text box
        image(textBox,0,0);
        text('Hello, what is your name?',60,600);
        break;
    case 3:
        text('Are you sure?', 120, 640);

        break;
    case 4:
            
        break;
 }
}


  /*
  Are you sure?
   > Yes.
   > Uhm… No Let me change it.
  Okay, What’s your name?? (enter your name in the text box on the screen, goes back to “are you sure?”. If done a third time it goes to “Oh my gosh bro just start already.”)
  Are you really sure??
	> Yes..?
    > Uhm…
  */
