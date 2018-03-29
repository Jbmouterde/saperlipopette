$("body > header > button").click(function(){
  console.log ("o")
  $("body > div").toggle(1500);
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
  $("img").css({left : x, bottom: y});
});