
class Box{
  constructor(x, y, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 30, 50, options);
      this.width = 30;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      if(this.body){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
      console.log(this.body.speed);
      if(this.body.position.y>=420){
        points++;
        this.body = null;
      }
      pop();
    }
    }
}