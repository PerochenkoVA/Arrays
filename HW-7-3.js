class Button {
  constructor(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
    this.props = [width, height, type, color];
  }
  onClick() {}
  testButton() {
    console.log(this.props.length());
  }
}
let newButton = new Button(38, 38, "button", "green");
newButton.onClick();
let tButton = new Button(25, 25, "button", "red");

for (let i = 0; i > this.props.length; i++) {
  console.log(`ok1`);
}

console.log(tButton.onClick());

console.log(tButton.testButton());
