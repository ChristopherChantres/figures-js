// Square Code

console.group('Square');

function squarePerimeter(squareSide) {
  return squareSide * 4;
}

function squareArea(squareSide) {
  return squareSide * squareSide;
}
console.groupEnd();

// Triangle Code

console.group('Triangle')

function trianglePerimeter(triangle1, triangle2, triangle3) {
  return triangle1 + triangle2 + triangle3;
}

function triangleArea(base, height) {
  return (base * height) / 2;
}
console.groupEnd();

// Circle Code

console.group('Circle')

const PI = Math.PI;
console.log('PI is: ' + PI)

function circleDiameter(radio) {
  return radio * 2
}

function circlePerimeter(radio) {
  const diameter = circleDiameter(radio);
  return diameter * PI;
}

function circleArea(radio) {
  return PI * radio ** 2
}
console.groupEnd();