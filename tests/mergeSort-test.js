const { expect } = require('chai').use(require('chai-sorted'));
const mergeSort = require('../lib/mergeSort.js')

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


describe('mergeSort', function() {

  it('should be a function', function() {
    expect(mergeSort).to.be.a('function');
  })

  it('should sort a small array of numbers', function() {
    genArray(100);
    expect(array).to.not.be.sorted();
    expect(mergeSort(array)).to.be.sorted();
  })

  it('should sort a small array of letters', function() {
    generateRandomLetters(100)
    expect(array).to.not.be.sorted();
    expect(mergeSort(array)).to.be.sorted();
  })

  it('should sort a large array of numbers', function() {
    genArray(35000)
    expect(array).to.not.be.sorted();
    expect(mergeSort(array)).to.be.sorted();
  })
}) 


 