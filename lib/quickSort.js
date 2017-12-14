 function quickSort(array) {
    // base case
  if (array.length <= 1 ) {
    return array;
  }
    var pivot = array.pop();
    var leftArray = [];
    var rightArray = [];
    
    // get closer to the base case
    
    for (var i = array.length-1; i >= 0; i--) {
      if (array[i] < pivot) {
        leftArray.push(array[i]);
      } else if (array[i] > pivot) {
        rightArray.push(array[i]);
      } else {
        leftArray.push(array[i]);
    }
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}


module.exports = quickSort;