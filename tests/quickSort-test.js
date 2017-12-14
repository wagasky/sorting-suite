const { expect } = require('chai').use(require('chai-sorted'));
const quickSort = require('../lib/quickSort.js')

let a
let n

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
  let array = [];
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < a; i++) {
    let letterIndex = parseInt(Math.random() * letters.length);
    array.push(letters[letterIndex]);
  }
  return array;
}


describe('quickSort', function() {

  it('should be a function', function() {
    expect(quickSort).to.be.a('function');
  })

  it('should sort a small array of numbers', function() {
    let array = genArray(100)
    expect(array).to.not.be.sorted();
    expect(quickSort(array)).to.be.sorted();
  })

  it('should sort a small array of letters', function() {
    let array = generateRandomLetters(100)
    expect(array).to.not.be.sorted();
    expect(quickSort(array)).to.be.sorted();
  })

  it('should sort a large array of numbers', function() {
    let array = genArray(40000)
    expect(array).to.not.be.sorted();
    expect(quickSort(array)).to.be.sorted();
  })
})  
