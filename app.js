function countSheeps(arrayOfSheep) {
  // count number of spots in array
  let count = 0
  //check if true and count if true
  arrayOfSheep.forEach(function(sheep) {
    if (sheep === true) {
      count++;
    }
  });
  //return total count
  return count
}