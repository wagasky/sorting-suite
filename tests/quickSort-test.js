const { expect } = require('chai').use(require('chai-sorted'));
const quickSort = require('../lib/quickSort.js')

let array = []
let n

function genArray(n) {
  for (var i=0; i<n; i++) {
    let random = Math.round(Math.random() * n);
    if (!array.includes(random)) {
      array.push(random);
    }else{
      n++;
    }
  } return array;
}

function generateRandomLetters() {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let array = [];
  for (let i = 0; i < n; i++) {
    let letterIndex = parseInt(Math.random() * letters.length);
    array.push(letters[letterIndex]);
  }
  return array;
}

module.exports = generateRandomLetters;


describe.only('quickSort', function() {

  it('should be a function', function() {
    expect(quickSort).to.be.a('function');
  })

  it('should sort a small array of numbers', function() {
    genArray(100)
    expect(array).to.not.be.sorted();
    expect(quickSort(array)).to.be.sorted();
  })

  it('should sort a small array of letters', function() {
    generateRandomLetters(100)
    expect(array).to.not.be.sorted();
    expect(quickSort(array)).to.be.sorted();
  })

  it('should sort a large array of numbers', function() {
    genArray(35000)
    expect(array).to.not.be.sorted();
    expect(quickSort(array)).to.be.sorted();
  })
})  
