var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";

function integrate(){

}

t = 0;
class obj {

    static x;
    static y;
    static r;
    static f;
    static id;
    static terminal;
    static initAngle

    constructor(r, f, id, terminal, initAngle) {

        this.r = r;
        this.f = f;
        this.id = id;
        this.terminal = terminal;
        this.initAngle = initAngle
    }

    draw(x_i, y_i) {

        var newDiv = document.createElement('div');
        newDiv.setAttribute("id", this.id);
        if (this.terminal){
          newDiv.setAttribute("style", "position: absolute;  background: yellow; width:" + 5 + "px; height: " + 5 + "px;border-radius: 50%;");
        }
        else{
          newDiv.setAttribute("style", "position: absolute;  background: white; width:" + 5 + "px; height: " + 5 + "px;border-radius: 50%;");
        }
        //var newCircleDiv = document.createElement('div');
        //newCircleDiv.setAttribute("id", this.id + "_circle");
        //newCircleDiv.setAttribute("style", "position: absolute;  background: white; width:" + this.r + "px; height: " + this.r + "px;border-radius: 50%;");

        var objectsDiv = document.getElementById("objects");

        objectsDiv.insertBefore(newDiv, document.getElementById("obj"));
        //objectsDiv.insertBefore(newDiv, document.getElementById(this.id));

        if(this.terminal){
          ctx.fillStyle = "#ffff00";

          ctx.beginPath();


          ctx.arc(x_i,y_i,2,0,Math.PI*2,false);

          ctx.closePath();
          ctx.fill();
        }

        ctx.fillStyle = this.color; //"#FF0000";

        var obj = document.getElementById(this.id);
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
    rotate(){
      ctx.clearRect(0, 0, 1000, 700);
      ctx.translate(this.x_i,this.y_i);

      ctx.rotate(-1*this.f);
      ctx.translate(-1*this.x_i,-1*this.y_i);



    }

    update() {
        t += 1;
        this.x = this.r * Math.sin(this.f * t+this.initAngle)+5;
        this.y = this.r * Math.cos(this.f * t+this.initAngle)+5;
        //this.rotate();
        }

      getX(){
        return this.x;
      }
      getY(){
        return this.y;
      }
      moveTo(x,y){
        this.x_i = x;
        this.y_i = y;

      }
    }

var objs = [    new obj(250, .01, "obj1", false, Math.PI),
                new obj(105, .005, "obj2", false,Math.PI/6),
                new obj(50,  .01, "obj3", false,0),
                new obj(25, .02, "obj4", false,Math.PI/4),
                new obj(12, .05, "obj5", false,0),
                new obj(0, .1, "obj2term", true,0)];

function update() {
  for (i in objs){
    objs[i].update();
  }
}

function draw(){
    currentX = 500;
    currentY = 350;
    for (i in objs){
      objs[i].draw(currentX, currentY);
      currentX += objs[i].getX()
      currentY += objs[i].getY()
    }



}
MainLoop.setUpdate(update).setDraw(draw).start();
