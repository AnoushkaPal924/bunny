class Obst2{
  // eating obstacle
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