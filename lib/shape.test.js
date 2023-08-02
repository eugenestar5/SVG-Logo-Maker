const { Circle, Square, Triangle } = require("../shapes")

// Circle 
describe('Circle', () => {
  test('renders correctly', () => {
    const shape = new Circle('blue', 'EOB', 'white');
    //var color =('blue')
    //shape.setColor(color);
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="100" fill="blue" /> <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">EOB</text> </svg>`);
  });
});
// Square 
describe('Square', () => {
  test('renders correctly', () => {
    const shape = new Square('Red', 'COB', 'white');
    //var color = ('green')
    //shape.setColor(color);
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" fill="Red"/> <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">COB</text> </svg>`);
  });
});
// Triangle 
describe('Triangle', () => {
  test('renders correctly', () => {
    const shape = new Triangle('Green', 'ZOB', 'white');
    //var color = ('pink')
    //shape.setColor(color);
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="100, 15 200, 200 0, 200" fill="Green"/> <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">ZOB</text> </svg>`);
  });
});
