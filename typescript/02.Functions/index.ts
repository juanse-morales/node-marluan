// Functions

function sum(a: number, b: number): number {
  return a + b;
}

sum(5,3);

function mathOperation(callback: Function, a: number, b: number): number{
  return callback(a,b);
}

const result: number = mathOperation((a: number, b:number): number => a+b, 5, 5);
console.log(result);