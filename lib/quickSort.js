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
  // return mergeArrays(pivotSort(leftArray), pivot, pivotSort(rightArray));
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
  // wow!!!
}


// function mergeArrays(leftArray, pivot, rightArray) {
//   let sortedArray = [...leftArray, pivot, ...rightArray];
//   return sortedArray;
// }


module.exports = quickSort;