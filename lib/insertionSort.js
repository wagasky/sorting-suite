function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
   for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
      [ array[j], array [j - 1] ] = [ array[j-1], array[j] ]
   }
  }
  return array;
}

module.exports = insertionSort;
