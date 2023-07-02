function sortedFrequency(arr, num) {
    let frequency = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        frequency++;
      }
    }
  
    if (frequency === 0) {
      return -1;
    }
  
    return frequency;
  }
  

module.exports = sortedFrequency