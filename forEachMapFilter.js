const doubles = [];
function doubleValues (arr){
    
   arr.forEach(function(num) {
      
    
    let double = num*2;
    return doubles.push(double);
    
   })
}


function showFirstAndLast(arr){
    let firstAndLast = [];
    arr.forEach(function(str){
     
        firstAndLast.push(str[0]+str.slice(-1));
        // firstAndLast += str.slice(-1);
        
    })
    return firstAndLast;
}
  
