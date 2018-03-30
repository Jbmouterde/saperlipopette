$("body > header > button").click(function(){
  console.log ("o")
  $("body > div.instructions.cache1").slideToggle(1500);
});

$("body > div.instructions.cache1 > button").click(function(){
  console.log ("o")
  $("body > div.border.cache2").slideToggle(1500);
});

var x = 0; 
var y = 0;
$("body").keydown(function(){
  switch (event.keyCode) {
    case 32: // space 
    case 90 : // Z  
    case 38: // up arrow 
    y += 100;
    break;

    case 81: // S Key
    case 37: // left arrow
    x -= 100;
    break;

    case 83: // S Key
    case 40: // down arrow
    y -= 100;
    break;

    case 68: // D Key
    case 39: // right arrow
    x += 100;
    break;
  }
  //update mr guetta's position on the screen 
  // $("img").css({left : x, bottom: y});
});

// CANVAS PART 
var canvas = document.querySelector('.first-canvas');
var ctx = canvas.getContext('2d');

// ctx.fillStyle = "orange";
// ctx.fillRect(0,0,30,30);

// moving ennemy n°1

var princeEx2 = 0;
 

setInterval(function (){
  princeEx2 += 10;

  if (princeEx2 >= 1000){
    princeEx2 = -300
  }
  ctx.clearRect(0,0,1000,500);
  ctx.fillRect(princeEx2,10,30,30);
  ctx.lineWidth = 2; 
  ctx.strokeRect(princeEx2,10,30,30);
  ctx.fillStyle = "pink";
  ctx.strokeStyle = "pink";
},1000/60);

// ctx.fillReact(x,y, width, height);
// moving ennemy n°2

var princeEx= 0;
 

setInterval(function (){
  princeEx += 3;

  if (princeEx >= 1000){
    princeEx = -300
  }
  ctx.clearRect(0,0,500,200);
  ctx.fillRect(princeEx,100,40,30);
  ctx.lineWidth = 1; 
  ctx.strokeRect(princeEx,100,40,30);
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "pink";
},1000/60);



/* // background moving  */

// var img = new Image();
// img.src = "http://gipsypixel.com/wp-content/uploads/2017/11/Colorful-Trippy-Desktop-Wallpaper-Hd-Pics-Backgrounds-Psychedelic-Art-Visions-Hair-Of-Mobile.jpg";

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// var backgroundImage = {
//   img: img,
//   x: 0,
//   speed: -1,

//   move: function() {
//     this.x += this.speed;
//     this.x %= canvas.width;
//   },

//   draw: function() {
//     ctx.drawImage(this.img, this.x, 0);
//     if (this.speed < 0) {
//       ctx.drawImage(this.img, this.x + canvas.width, 0);
//     } else {
//       ctx.drawImage(this.img, this.x - this.img.width, 0);
//     }
//   },
// };

// function updateCanvas() {
//   backgroundImage.move();

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   backgroundImage.draw();

//   requestAnimationFrame(updateCanvas);
// }

// // start calling updateCanvas once the image is loaded
// img.onload = updateCanvas; 


var canvas = document.querySelector('.first-canvas');
var ctx = canvas.getContext('2d');

var yoloo = new Image()
  yoloo.src = "./image/yoloo.gif";
  
  yoloo.onload = function (){
  // ctx.drawImage(image, x, y , width, height);
  
};

var ghostImage = new Image ();
ghostImage.src= "image/ghotst.gif";

var ghost = {
  x : 0,
  y : 200,
  width : 200, 
  height: 150,
  drawMe : function (){
    ctx.drawImage(ghostImage, this.x, this.y, this.width, this.height);
  }
};

 var princeEx = 0;
 
setInterval(function (){
  princeEx += 1;

  if (princeEx >= 1000){
    princeEx = -300
  }
  ctx.clearRect(0,0,1000,500);
  ghost.drawMe();
  ctx.drawImage(yoloo,princeEx, 0, 300,240);
  ctx.lineWidth = 2; 
  ctx.strokeRect(princeEx,0,300,240);
  ctx.strokeStyle = "pink";
},1000/60);



// Update stuff 


//-----------

var body = document.querySelector("body");
body.onkeydown = function (){
  switch (event.keyCode) {
    case 32: // space 
    case 90 : // Z  
    case 38: // up arrow 
    ghost.y -= 15;
    break;

    case 81: // S Key
    case 37: // left arrow
    ghost.x -= 15;
    break;

    case 83: // S Key
    case 40: // down arrow
    ghost.y += 15;
    break;

    case 68: // D Key
    case 39: // right arrow
    ghost.x += 15;
    break;
  }
  if (ghost.x >=1000){
    ghost.x =-ghost.width;
  }
};










////// main character

// var godPlayer = new Image ();
// godPlayer.src= "image/god.gif";

// var godPlayer = {
//   x : 0,
//   y : 200,
//   width : 200, 
//   height: 150,
//   drawMe : function (){
//     ctx.drawImage(godPlayer, this.x, this.y, this.width, this.height);
//   }
// };

// var body = document.querySelector("body");
// body.onkeydown = function (){
//   switch (event.keyCode) {
//     case 32: // space 
//     case 90 : // Z  
//     case 38: // up arrow 
//     godPlayer.y -= 15;
//     break;

//     case 81: // S Key
//     case 37: // left arrow
//     godPlayer.x -= 15;
//     break;

//     case 83: // S Key
//     case 40: // down arrow
//     godPlayer.y += 15;
//     break;

//     case 68: // D Key
//     case 39: // right arrow
//     godPlayer.x += 15;
//     break;
//   }
  // if (ghost.x >=1000){
  //   ghost.x =-ghost.width;
  // }
// };




