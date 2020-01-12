// function searchParty(person, world){
//   const pathArray = [];
  
//   for (let location in world){
//     const value = world[location];
//     // value => nested world, array of people, person
    
//     // it's a string, no recursion needed, let's just check if it's right
//     if (typeof value === 'string'){
//       const personInLocation = value;
//       if (personInLocation === person){
//         pathArray.push(location);
//       }
//     }
    
//     // array of people
//     if (Array.isArray(value)){
//       const peopleInLocation = value;
//       if (peopleInLocation.includes(person)){
//         pathArray.push(location);
//       }
//     }
//   }
  
//   return pathArray.length === 0 ? null : pathArray; 

// }

// let simpleWorld = {
//   'living room': 'Maureen',
//   'kitchen': 'Brian',
//   'bedroom': 'Julio'
// };

// console.log(searchParty('Julio', simpleWorld))

// let simpleWorld2 = {
//   'living room': ['Maureen', 'Chris'],
//   'kitchen': 'Brian',
//   'bedroom': 'Julio'
// };

// console.log(searchParty('Chris', simpleWorld2));


// ===========================


function searchParty(person, world){
  // let pathArray = [];
    // world => {
    //   'kitchen': 'Brian',
    //   'bedroom': 'Sulamita'
    // }  ['bedroom']
  for (let location in world){
    // location =>  bedroom
    // value => Sulamita
    const value = world[location];
    // value => nested world, array of people, person
    
    // it's a string, no recursion needed, let's just check if it's right
    if (typeof value === 'string'){
      const personInLocation = value;
      if (personInLocation === person){
        // pathArray.push(location);
        return [location];
      }
    }
    
    // array of people
    else if (Array.isArray(value)){
      const peopleInLocation = value;
      if (peopleInLocation.includes(person)){
        // pathArray.push(location);
        return [location]
      }
    }
    
    // another nested object 
    else {
      const nestedWorld = value;
      const potentialPath = searchParty(person, nestedWorld);  // an array with a path OR OR null 
      // potentialPath === null
      // person wasn't found, so i do nothing
      
      // if it's an array, we know it found a path
      // 
      // ['bedroom']
      // pathArray.push(potentialPath);
      // [['bedroom']]

      if (potentialPath){  // if potential path exists
        // potentialPath => ['bedroom']
        // pathArray = pathArray.concat(location, potentialPath);
        // ['apartment', 'bedroom']

        return  [location].concat(potentialPath);
        // return [location, ...potentialPath];
      }
    }
  }
  
  
  // // [['bedroom']]
  // return pathArray.length === 0 ? null : pathArray; 
  return null;
}

let brooklyn  = {
  'prospect park': ['Maureen', 'Chris'],
  'apartment': {
    'kitchen': 'Brian',
    'bedroom': 'Sulamita'
  },
  'nite hawk theater': 'Evan',
};


console.log(searchParty('Sulamita', brooklyn)); // ['apartment', 'bedroom']