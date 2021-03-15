module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = {};

  for (let i in bracketsConfig) {
    brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  stack.push(str[0])

  for (var j = 1; j < str.length; j++) {
    if(str[j] === brackets[stack[stack.length-1]])
      stack.pop()
    else
      stack.push(str[j])
  }

  if(stack.length > 0){
    return false
  }
  else{
    return true
  }

//   console.log(stack);
//
// console.log(brackets);
  // let array;
  // let opensSum = 0
  // let result;
  //
  //
  //
  // for(let k in str){
  //   for (let i in bracketsConfig) {
  //
  //       if(opensSum < 0)
  //         return false;
  //
  //       if(bracketsConfig[i][0] == bracketsConfig[i][1]){
  //         //for || situations
  //         if((str.split(bracketsConfig[i][0]).length - 1)%2 != 0){
  //           return false
  //         }
  //       }else {
  //         if(str[k] == bracketsConfig[i][0])
  //           opensSum++
  //         else if(str[k] == bracketsConfig[i][1])
  //           opensSum--
  //       }
  //
  //   }
  // }
  //
  // for(let k in str){
  //   for (let i in bracketsConfig) {
  //     if(str[k] == bracketsConfig[i][0] || str[k] == bracketsConfig[i][1]){
  //       return true
  //     }else{
  //       return false
  //     }
  //   }
  // }



  // for(let k in str){
  //
  //   for (let i in bracketsConfig) {
  //     console.log(i)
  //     console.log(bracketsConfig[i][0], bracketsConfig[i][1])
  //     if(bracketsConfig[i][0] == bracketsConfig[i][1]){
  //       //for || situations
  //       if((str.split(bracketsConfig[i][0]).length - 1) % 2 == 0){
  //         return true
  //       }else {
  //         return false
  //       }
  //     }else{
  //       // let regexp = `/${bracketsConfig[i][0]}/g`;
  //       let countFrist = str.split(bracketsConfig[i][0]).length - 1;
  //       let countSecond = str.split(bracketsConfig[i][1]).length - 1;
  //       if(countFrist != countSecond){
  //         console.log(false)
  //         return false
  //       }
  //
  //       if(str[k] == bracketsConfig[i][0]){
  //         console.log('hi')
  //       }
  //
  //     }
  //   }
  //
  //
  //
  // }
  // return true

  // for(let i = 0; i < bracketsConfig.length; i++){
  //   console.log(bracketsConfig[i])
  // }


}

module.exports('([{{}]}))(', [['(', ')'], ['[', ']'], ['{', '}']])
