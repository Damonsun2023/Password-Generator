let colorlist = ['yellow']

// https://stackoverflow.com/questions/5836833/create-an-array-with-random-values\
// https://www.asciitable.com/
// https://stackoverflow.com/questions/7425374/convert-a-char-array-to-a-string

let password = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  let list = Array.from({ length: 7 }, () => String.fromCharCode(Math.floor(Math.random() * 52) + 65));

  password = list.join("");
}

function draw() {
  // noStroke()
  fill(random(colorlist));
  // ellipse(mouseX, mouseY, 25, 25);
  textSize(30);
  text(password, 100, 100);

}