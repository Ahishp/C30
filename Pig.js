class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255 //ON BYTE
  }

  display(){
    
  console.log(this.body.speed);
  
  if(this.body.speed < 3){
    super.display();
 }
 else{
    World.remove(world,this.body);
    push();
    tint(255,this.Visiblity);
    this.Visiblity = this.Visiblity - 5;
    image(this.image,this.body.position.x, this.body.position.y, 50, 50);
    pop();
 }  


  }

 

};