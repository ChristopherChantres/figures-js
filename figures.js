// Square Code

console.group('Square');
const squareSide = 6;
console.log('The square side is: ' + squareSide);

const squarePerimeter = squareSide * 4;
console.log('The square perimeter is: ' + squarePerimeter);

const squareArea = squareSide * squareSide;
console.log('The square area is: ' + squareArea);
console.groupEnd();

// Triangle Code

console.group('Triangle')
const triangleSide1 = 9;
const triangleSide2 = 3;
const triangleBase = 5;
const triangleHeight = 5.5;

console.log(
  'The triangle sides are: '
  + triangleSide1 + 'cm, '
  + triangleSide2 + 'cm, '
  + triangleBase + 'cm'
);

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
console.log('The triangle perimeter is: ' + trianglePerimeter + 'cm');

const triangleArea = (triangleBase * triangleHeight) / 2;
console.log('The triangle area is: ' + triangleArea);
console.groupEnd();
