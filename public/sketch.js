document.body.style.margin   = 0
document.body.style.overflow = `hidden`

let counter = 0  // Used to count the number of frames
let myColour // To keep track of the random color

//let fruitsDonut
//function preload() {
//   fruitsDonut = loadFont ('fonts/Fruits Donut.ttf');
//}

function setup () {
   createCanvas (576, 324) // Creates a canvas 
   myColour = color (random(255), random(255), random(255)) // "myColour" is given a random colour
   frameRate (100) // displays 100 frames in a second
}

function draw () {
   background ("black") // Black background is drawn 

   change_color () // change_color function is called
   fill (myColour) // the draw_shape function is coloured with a random colour
   draw_shape () // draw shape function is called


   // RMIT text is created
   fill ("black") // all text will be the colour black
   noStroke () 
   //textFont (fruitsDonut)
   textSize (100) 
   textAlign (CENTER) // the point of the text is alligned at the center
   text ("RMIT", 288, 130) // RMIT is placed in the ceter 130 pixels from the top


   // Creative Coding Specialisation text is created
   textSize (60) 
   text ("Creative Coding", 288, 190) 
   text ("Specialisation", 288, 250)

   counter = counter + 1 // keeps track of the frames
}

// rand_coordinate returns a variable called coordinate which contains a random (x, y) value within the canvas
function rand_coordinate () {
  return coordinate = { x: random (width), y: random (height) } 
}

// the function draw_shape is used to create my shapes
function draw_shape () { 
   beginShape () // begins recording vertices for a shape

   // for loop repeats 19 times creating 19 random vertices for the shape
   for (let i = 0; i < 20; i++) {
   const cnr = rand_coordinate ()
   vertex (cnr.x, cnr.y) // 19 vertices are given with different co-ordinates from rand_coordinate
   }
   endShape ()
}

// Function used to change colour of the shapes every 100 frames
function change_color () {

   // when the amount of frames increase over 100 then myColour changes into a different random colour and the counter resets to 0
   if (counter > 100) {
      myColour = color (random(255), random(255), random(255))
      counter = 0
   }
}