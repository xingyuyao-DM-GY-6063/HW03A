function setup() {
  createCanvas(600, 800);
  background(230,210,55);


  for (let d = 15;d < 600;d += 50){
  for(let c = 0;c < 800;c += 50){
    fill(15,15,15);
    ellipse(d,c,20);
  
  }
  }
  for (let d = 40; d < 600; d+=50) {
    for (let c = 20; c < 900; c+=50) {
      fill(15, 15, 15);
      ellipse(d, c, 10, 10); 
      
    }
  }
}

function draw() {
}


