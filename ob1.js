class Obst1{
  //jump over obstacle
  constructor(x, y, width, height) {
      
    this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      //World.add(world, this.body);
    }
    display(){
      drawSprites();
    }
}  