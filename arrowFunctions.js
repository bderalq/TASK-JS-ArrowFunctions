const greet = (name) => `Hello ${name}`;

const sum = (a,b) => a+b;

const square = (n) => n*n;

const squares = (numbers) => numbers.map ((n)=> n*n);

module.exports = {
  greet,
  sum,
  square,
  squares,
};
