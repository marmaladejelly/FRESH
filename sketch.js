let stage = 0;
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
  
  //start button setup
  startButton = createButton('new game');
  startButton.position(100, 640);
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
        newGame.position(1200,20);
        //start game when the button is pressed.
        newGame.mousePressed(stage = 2);
        
        //create new game button
        let settings = createButton('SETTINGS');
        settings.position(1280,20);
        //start game when the button is pressed.
        settings.mousePressed(stage = 1);

        break;
     case 1:

        break;
    case 2:
        // hide the button once the game starts
        startButton.hide();
      
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
