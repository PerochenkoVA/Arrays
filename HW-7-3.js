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
    console.log(`${this.props} ok`);
  }
}
let newButton = new Button(38, 38, "button", "green");

newButton.onClick();
console.log(newButton.testButton());
