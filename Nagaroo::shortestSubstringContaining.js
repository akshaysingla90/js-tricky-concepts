function shortestSubstringContaining(input1, input2) {
    let temp1= input1
    let temp2= input2
    input1= input1.toLowerCase()
    input2= input2.toLowerCase()
    const map = new Map();
    for (const char of input2) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  
    let l = 0;
    let res = '';
    let mlen = Infinity;
    let missing = input2.length;
  
    for (let r = 0; r < input1.length; r++) {
      const rChar = input1[r];
  
      if (map.has(rChar)) {
        map.set(rChar, map.get(rChar) - 1);
        if (map.get(rChar) >= 0) {
          missing--;
        }
      }
  
      while (missing === 0) {
        if (r - l + 1 < mlen) {
          mlen = r - l + 1;
          res = input1.slice(l, r + 1);
        }
  
        const lChar = input1[l];
        if (map.has(lChar)) {
          map.set(lChar, map.get(lChar) + 1);
          if (map.get(lChar) > 0) {
            missing++;
          }
        }
  
        l++;
      }
    }
  

    const regexPattern = new RegExp(res, 'i');

    const result = regexPattern.test(input1);
    
    console.log(result)
    return res;
  }
  
//   Example usage:
//   const inputString = "My name is Fran";
//   const charactersToMap = "rim";
  const inputString = "I am the greatest";
  const charactersToMap = "imt";
  const result = shortestSubstringContaining(inputString, charactersToMap);
  console.log(result); // Output: "BANC"
  
