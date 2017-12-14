const { expect } = require('chai').use(require('chai-sorted'));
const insertionSort = require('../lib/insertionSort.js')

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
  } return array;
}

function generateRandomLetters(a) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let array = [];
  for (let i = 0; i < a; i++) {
    let letterIndex = parseInt(Math.random() * letters.length);
    array.push(letters[letterIndex]);
  }
  return array;
}

describe('insertionSort', function() {

  it('should be a function', function() {
    expect(insertionSort).to.be.a('function');
  })

  it('should sort a small array of numbers', function() {
    let array = genArray(100);
    expect(array).to.not.be.sorted();
    expect(insertionSort(array)).to.be.sorted();
  })

  it('should sort a small array of letters', function() {
    let array = generateRandomLetters(80)
    expect(array).to.not.be.sorted();
    expect(insertionSort(array)).to.be.sorted();
  })

  it('should sort a large array of numbers', function() {
    let array = genArray(20000)
    expect(array).to.not.be.sorted();
    expect(insertionSort(array)).to.be.sorted();
  })
}) 