var img = new Image();
img.src = 'http://gipsypixel.com/wp-content/uploads/2017/11/Colorful-Trippy-Desktop-Wallpaper-Hd-Pics-Backgrounds-Psychedelic-Art-Visions-Hair-Of-Mobile.jpg';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x + canvas.width, 0);
    } else {
      ctx.drawImage(this.img, this.x - this.img.width, 0);
    }
  },
};

function updateCanvas() {
  backgroundImage.move();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;