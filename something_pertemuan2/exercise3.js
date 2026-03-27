function func1(a, b) {
	if (a > b) {
  	return a;
  } else {
  	return b;
  }
}

function func2(a, b, c) {
	return func1(func1(a, b), func1(b, c));
}

function func3(func, a, b) {
  const n = func(a, b);
  return n;
}



const funC1 = (a, b) => (a > b) ? a : b;
const funC2 = (a, b, c) => (funC1(funC1(a, b), funC1(b,c)));
const funC3 = (func, a, b) => func(a,b);

console.log(`Normal function: ${func1(5, 10)}`);
console.log(`Arrow notation function: ${funC1(5, 10)}`);
console.log('');

console.log(`Normal function: ${func2(1, 2, 3)}`);
console.log(`Arrow notation function: ${funC2(1, 2, 3)}`);
console.log('');

console.log(`Normal function: ${func3(func1, 5, 10)}`);
console.log(`Arrow notation function: ${funC3(funC1, 5, 10)}`);