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


// -------------- Functions to connect with HTML

function calculateSquarePerimeter() {
  const input = document.getElementById('SquareInput');
  const value = input.value;

  const perimeter = squarePerimeter(value);
  alert(perimeter);
}

function calculateSquareArea() {
  const input = document.getElementById('SquareInput');
  const value = input.value;

  const area = squareArea(value);
  alert(area);
}

// -------------------

function calculateTriangelPerimeter() {
  const input1 = document.getElementById('firstTriangleSide');
  const value1 = parseInt(input1.value);

  const input2 = document.getElementById('secondTriangleSide');
  const value2 = parseInt(input2.value);

  const input3 = document.getElementById('thirdTriangleSide');
  const value3 = parseInt(input3.value);

  const perimeter = trianglePerimeter(value1, value2, value3);
  alert(perimeter)
}

function calculateTriangleArea() {
  const valueHeight = document.getElementById('triangleHeight');
  const height = parseFloat(valueHeight.value);
  console.log(height);

  const valueBase = document.getElementById('triangleBase');
  const base = parseInt(valueBase.value);
  console.log(base);

  const area = triangleArea(base, height);
  alert(area);
}

// -------------------

function calculateCircleDiameter() {
  const valueRadius = document.getElementById('circleRadius');
  const radius = parseInt(valueRadius.value);

  const diameter = circleDiameter(radius);
  alert(diameter);

}

function calculateCirclePerimeter() {
  const valueRadius = document.getElementById('circleRadius');
  const radius = parseInt(valueRadius.value);

  const perimeter = circlePerimeter(radius);
  alert(perimeter);
}

function calculateCircleArea() {
  const valueRadius = document.getElementById('circleRadius');
  const radius = parseInt(valueRadius.value);

  const area = circleArea(radius)
  alert(area);
}