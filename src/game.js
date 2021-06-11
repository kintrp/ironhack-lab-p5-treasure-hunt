class Game {
  drawGrid() {

    for (let i = 0; i <=1000; i+=SQUARE_SIDE) {
      line(0, i, WIDTH, i);
    }

    for (let i = 0; i <=1000; i+=SQUARE_SIDE) {
      line(i, 0, i, HEIGHT);
    }


    line(0,1,1000,0);

    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
  }
}
// as before we need to use this function to draw an image // this.width, this.height
    //


