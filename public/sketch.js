document.body.style.margin   = 0
document.body.style.overflow = `hidden`

let counter = 0  // Used to count the number of frames
let myColour // To keep track of the random color

let slider 

//let fruitsDonut
//function preload() {
//   fruitsDonut = loadFont ('fonts/Fruits Donut.ttf');
//}

function setup () {
   createCanvas (576, 324) // Creates a canvas 
   myColour = color (random(255), random(255), random(255)) // "myColour" is given a random colour
   frameRate (30) // displays 30 frames in a second


   // create a slider at the bottom of the page that has a minimum value of 4 and a maximum value of 50
   slider = createSlider(4, 50, 25) 
   slider.position (10, 300)
}

function draw () {
   background ("black") // Black background is drawn 

   change_colour () // change_color function is called
   fill (myColour) // the draw_shape function is coloured with a random colour
   noStroke ()
   draw_shape () // draw shape function is called


   // RMIT text is created
   fill ("black") // all text will be the colour black
   //stroke ("white") 
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

   // for loop repeats the amount of times the slider value is set to 
   for (let i = 0; i <= slider.value(); i++) {
   const cnr = rand_coordinate ()
   vertex (cnr.x, cnr.y) // vertices are given with different co-ordinates from rand_coordinate
   }
   endShape ()
}

// Function used to change colour of the shapes every 50 frames
function change_colour () {

   // when the amount of frames increase over 50 then myColour changes into a different random colour and the counter resets to 0
   if (counter > 50) {
      myColour = color (random(255), random(255), random(255))
      counter = 0
   }
}