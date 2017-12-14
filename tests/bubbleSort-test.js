const { expect } = require('chai').use(require('chai-sorted'));
const bubbleSort = require('../lib/bubbleSort.js')


let n
let a

function genArray(n) {
  let array = []
  for (var i=0; i<n; i++) {
    let random = Math.round(Math.random() * n);
    if (!array.includes(random)) {
      array.push(random);
    }else{
      n++;
    }
  } 
  return array;
}

function generateRandomLetters(a) {
  let array = []
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < a; i++) {
    let letterIndex = parseInt(Math.random() * letters.length);
    array.push(letters[letterIndex]);
  }
  return array;
}

describe('bubbleSort', function() {

  it('should be a function', function() {
    expect(bubbleSort).to.be.a('function');
  })

  it('should sort a small array of numbers', function() {
    let array = genArray(100);
    expect(array).to.not.be.sorted();
    expect(bubbleSort(array)).to.be.sorted();
  })

  it('should sort a small array of letters', function() {
    let array = generateRandomLetters(10);
    expect(array).to.not.be.sorted();
    expect(bubbleSort(array)).to.be.sorted();
  })

  it('should sort a large array of numbers', function() {
    let array = genArray(9000)
    expect(array).to.not.be.sorted();
    expect(bubbleSort(array)).to.be.sorted();
  })

  // maxes out somewhere between 9 and 10k
}) 