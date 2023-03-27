document.body.style.margin   = 0
document.body.style.overflow = `hidden`


function setup () {
   createCanvas (576, 324)
   stroke ('white')
}

function draw () {
   background ('black')

   beginShape ()
   for (let i = 0; i < 5; i++) {
   const cnr = rand_coordinate ()
   vertex (cnr.x, cnr.y)
   }
   
   endShape ()
}

function rand_coordinate () {
   return { x: random (width), y: random (height) }
}
   