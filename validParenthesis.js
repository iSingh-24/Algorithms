// const isValid = s =>{

//     //s is the string we get

//     //we need a stack so we know if there are pairs that are valid

//     let stack = [];

//     //we also need an object that matches opening and closing values

//     let opposites = {
//         '{':'}',
//         '(':')',
//         '[':']'
//     }

//     //now we can iterate through the string

//     for(let char of s){
//         if(char in opposites){
//             stack.push(char)
//         }else{
//             if(opposites[stack.pop()] !== char) return false;
//         }
//     }

//     return !stack.length;
// }

const isValid = (s) => {
  let map = new Map();

  map.set("[", "]");
  map.set("{", "}");
  map.set("(", ")");
  map.set("stack", []);

  for (let char of s) {
    if (map.has(char)) {
      map.get("stack").push(char);
    } else {
      let val = map.get(map.get("stack").pop()) !== char;
      if (val) return false;
    }
  }

  return !map.get("stack").length;
};
