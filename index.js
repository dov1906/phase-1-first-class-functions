function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    function namedfunction(){
        return "aaa"
    }
    return namedfunction
}

function returnsAnAnonymousFunction() {
    return function() {console.log("Yet more razzling");
      }
      

}




// function returnsANamedFunction() {
//     function namedFunction() {
//       console.log("This is a named function!");
//     }
//     return namedFunction;
// }
