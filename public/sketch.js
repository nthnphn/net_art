document.body.style.margin   = 0
document.body.style.overflow = `hidden`

let fruitsDonut

let counter = 0
let myColour


//function preload() {
//   fruitsDonut = loadFont ('fonts/Fruits Donut.ttf');
//}

function setup () {
   createCanvas (576, 324)
   stroke ('black')
   myColour = color(random(255), random(255), random(255))
   frameRate(100)
}

function draw () {
   background ("black")

   change_color()
   fill(myColour)   
   draw_shape ();

   fill ("black")
   noStroke ()
   //textFont (fruitsDonut)
   textSize (100)
   textAlign (CENTER)
   text (`RMIT`, 288, 130)

   textSize(60)
   text ('Creative Coding', 288, 190)
   text ('Specialisation', 288, 250)

   counter = counter + 1
}

function rand_coordinate () {
  return coordinate = { x1: random (width), y1: random (height) }
}
   
function draw_shape () {
   beginShape ()
   for (let i = 0; i < 20; i++) {
   const cnr = rand_coordinate ()
   vertex (cnr.x1, cnr.y1)
   }
   endShape ()
}

function change_color () {
   if (counter > 100) {
      myColour = color(random(255), random(255), random(255))
      counter = 0
   }
}