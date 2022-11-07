class Button {
  constructor(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
    this.props = [width, height, type, color];
  }
  onClick() {
    console.log(this.props);
  }
  testButton() {
    this.props.length === 4;
  }
}
let newButton = new Button(38, 38, "button", "green");
newButton.onClick();

let tButton = new Button(25, 25, "button", "red");
console.log(tButton.onClick());

console.log(tButton.testButton());
