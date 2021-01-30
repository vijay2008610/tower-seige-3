class Box  {
    constructor(x, y, width, height){
     
    }
  
    score(){
      if (this.Visibility<0 && this.Visibility>=105){
        score++;
       
      }
    }

    display(){
      if (this.body.speed < 3){
       this.image = loadImage("sprites/wood1.png"); 
      }

      else {
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint (this.Visibility);
        rect (this.x,this.y,20,30);
        pop ();
      }
    }
  };
  