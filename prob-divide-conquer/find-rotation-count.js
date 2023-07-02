function findRotationCount(arr) {
    let rotationCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        rotationCount = i + 1;
        break;
      }
    }
  
    return rotationCount;
  }
  

module.exports = findRotationCount