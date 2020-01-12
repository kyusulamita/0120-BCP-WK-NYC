/* eslint-disable guard-for-in */
function searchParty(name, world) {
  for (const location in world) {
    const value = world[location];
    if (value === name) {
      return [location];
    } else if (Array.isArray(value)) {
      if (value.includes(name)) {
        return [location];
      }
    } else if (typeof value === 'object') {
      // const a = searchParty(name, value);
      // ^^ ??
      // if it finds it on there, it's going to return an array
      // a = ['bushwick']
      // 'brooklyn'
      // . => ['brooklyn', 'bushwick']
      
      // if it didn't it'll return null
      // a => null
      // nothing to do, you just keep looking
      // next iteration
    }
  }
  
  return null;
}

// [[0], [true], [10]]
function theTruthCounts(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (Array.isArray(elem)) { // [10]
      const truthyElemsInNestedArrr = theTruthCounts(elem); //theTruthCounts([10]) => 1
      count += truthyElemsInNestedArrr;  // count = 2
    } else if (elem) {
      count++;
    }
  }

  return count;
}
