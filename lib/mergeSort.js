function mergeSort (array) { //breaking our array into two
  var middle = Math.floor((array.length)/2);
  var leftArray = array.slice(0, middle);
  var rightArray = array.slice(middle);
  if (array.length === 1) {
    return array 
  }
  return mergeArray(mergeSort(leftArray), mergeSort(rightArray)) //(sorted) sorted = array //deconstructs left and right side --recursion
}

function mergeArray(leftArray, rightArray) { 
  let sorted = [];
  
  while(leftArray.length && rightArray.length) {
    if(leftArray[0] < rightArray[0]) {
      sorted.push(leftArray[0])
      leftArray.shift()
    } else {
      sorted.push(rightArray[0])
      rightArray.shift()
    }
  }
  while(rightArray.length) { //The dangelers --what's left 
    sorted.push(rightArray.shift())
  }
  while(leftArray.length) {
    sorted.push(leftArray.shift())
  }
  return sorted 
}


module.exports = mergeSort;