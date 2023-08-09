module.exports = function check(str, bracketsConfig) {
  // your solution
  const bracketTypes = bracketsConfig.reduce((arr,curr,i)=>{
    arr.push({bracket:curr[0],operation:curr[0] == curr[1]?'*':'+',type:i})
    arr.push({bracket:curr[1],operation:curr[0] == curr[1]?'*':'-',type:i})
    return arr
      },[])

    let checkArray = [];

    for (let index = 0; index < str.length; index++) {
        const bracketElement = bracketTypes.find(x=>x.bracket == str[index])
        if(bracketElement.operation=='*'){
            if(checkArray.length&&checkArray[checkArray.length-1].type == bracketElement.type){
                checkArray.pop()
            }else{
                checkArray.push({type:bracketElement.type})
            }

        }else if(bracketElement.operation=='+') 
        {
            checkArray.push({type:bracketElement.type})
        }else{
            if(checkArray.length&&checkArray[checkArray.length-1].type == bracketElement.type){
                checkArray.pop()
            }else{
                return false
            }
    }
    
    }

    if(checkArray.length) {
        return false
    }

  return true

}
