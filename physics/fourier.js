var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";

function pX(t) {
  return 6 * Math.sin(t * 2 * Math.PI);
}

function pY(t) {
  return 13 * Math.cos(t * 2 * Math.PI) - 5 * Math.cos(2 * t * 2 * Math.PI) - 2 * Math.cos(3 * t * 2 * Math.PI) - Math.cos(4 * t * 2 * Math.PI);
}

function integrate(n) {
  var m = 1000;
  var n = 3;
  var x = 0;
  var y = 0;
  for (i = 0; i < m; i++) {
    //x += 1/m*Math.cos(-2*Math.PI*3*i/m);
    x += 1 / m * (Math.cos(-2 * Math.PI * n * i / m) * pX(i / m) -
      Math.sin((-2 * Math.PI * n * i / m)) * pY(i / m));
    y += 1 / m * (Math.cos(-2 * Math.PI * n * i / m) * pY(i / m) +
      Math.sin(-2 * Math.PI * n * i / m) * pX(i / m));
  }
  return [x, y];
}

t = 0;
class obj {

  static x;
  static y;
  static r;
  static f;
  static id;
  static terminal;
  static initAngle;

  constructor(r, f, id, terminal, initAngle) {

    this.r = r;
    this.f = f;
    this.id = id;
    this.terminal = terminal;
    this.initAngle = initAngle
  }

  draw(x_i, y_i) {
    if (document.getElementsByClassName(this.id).length == 0) {

      var newDiv = document.createElement('div');

      newDiv.setAttribute("class", this.id);
      if (this.terminal) {
        newDiv.setAttribute("style", "position: absolute;  background: yellow; width:" + 5 + "px; height: " + 5 + "px;border-radius: 50%;");
      } else {
        newDiv.setAttribute("style", "position: absolute;  background: white; width:" + 5 + "px; height: " + 5 + "px;border-radius: 50%;");
      }
      //var newCircleDiv = document.createElement('div');
      //newCircleDiv.setAttribute("id", this.id + "_circle");
      //newCircleDiv.setAttribute("style", "position: absolute;  background: white; width:" + this.r + "px; height: " + this.r + "px;border-radius: 50%;");

      var objectsDiv = document.getElementById("objects");
      objectsDiv.insertBefore(newDiv, document.getElementById("obj"));
    }
    //objectsDiv.insertBefore(newDiv, document.getElementById(this.id));

    if (this.terminal) {
      ctx.fillStyle = "#ffff00";

      ctx.beginPath();

      ctx.arc(x_i, y_i, 2, 0, Math.PI * 2, false);

      ctx.closePath();
      ctx.fill();
    }

    ctx.fillStyle = this.color; //"#FF0000";

    var obj = document.getElementsByClassName(this.id)[0];
    obj.style.left = x_i + this.x + 'px';
    obj.style.top = y_i + this.y + 'px';


    ctx.strokeStyle = "#ffffff";
    ctx.beginPath();
    ctx.lineWidth = 1;


    ctx.beginPath();


    //ctx.arc(x_i,y_i,this.r,0,Math.PI*2,false);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#ffffff";


  }

  //make a function to draw all the circles after (this may be easier) + vector pointing from c_(n-1) to c_n
  rotate() {
    ctx.clearRect(0, 0, 1000, 700);
    ctx.translate(this.x_i, this.y_i);
    ctx.rotate(-1 * this.f);
    ctx.translate(-1 * this.x_i, -1 * this.y_i);
  }

  update() {
    t += 1;
    this.x = this.r * Math.sin(this.f * t + this.initAngle) + 5;
    this.y = this.r * Math.cos(this.f * t + this.initAngle) + 5;
    //this.rotate();
  }

  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  moveTo(x, y) {
    this.x_i = x;
    this.y_i = y;

  }
}

  var objs = []

  for (n = 0; n < 100; n++) {
    var m = 1000; //number of rectangles
    var x = 0;
    var y = 0;
    for (i = 0; i < m; i++) {
      x += 1 / m * (Math.cos(-2 * Math.PI * n * i / m) * pX(i / m) - Math.sin((-2 * Math.PI * n * i / m)) * pY(i / m));
      y += 1 / m * (Math.cos(-2 * Math.PI * n * i / m) * pY(i / m) + Math.sin(-2 * Math.PI * n * i / m) * pX(i / m));
    }
    var mag = Math.sqrt(x * x + y * y);

    var angle = Math.atan(y / x);
    console.log(Math.round(50 * mag), angle);
    if (Math.round(50 * mag) > 0) {
      objs.push(new obj(Math.round(mag * 50),
        (n) / 100,
        "obj" + n,
        false,
        angle));
    }
  }
  objs.push(new obj(0, (i) / 100, "term", true, 0));

function update() {
  for (i in objs) {
    objs[i].update();
  }
}

function draw() {
  currentX = 500;
  currentY = 350;
  for (i in objs) {
    objs[i].draw(currentX, currentY);
    currentX += objs[i].getX()
    currentY += objs[i].getY()
  }



}
MainLoop.setUpdate(update).setDraw(draw).start();