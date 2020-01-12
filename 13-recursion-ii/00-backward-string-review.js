// https://goo.gl/PQvBMT

function backwardString(str){
  // for (let i = str.length -1; i >= 0; i--){
  //   console.log(str[i]);
  // }
  
  if (!str.length){ // str === '' // str.length === 0
    console.log(str);
    return;
  } else {
    const lastChar = str[str.length - 1];
    console.log(lastChar);
    const restOfStr = str.slice(0, -1);
    backwardString(restOfStr);
    console.log('after recursive call', str);
    return;
  }

}

backwardString("fun");