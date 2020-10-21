function saturdayFun(b = "roller-skate"){return `This Saturday, I want to ${b}!`};
function mondayWork(b="go to the office"){return `This Monday, I will ${b}.`};

function wrapAdjective(blah = "*"){
    return function(f = "special"){
        return `You are ${blah+f+blah}!`
    }
}
let Calculator = {add: (function(a,b){return a+b}),
subtract: (function(a,b){return a-b}),
multiply: (function(a,b){return a*b}),
divide: (function(a,b){return a/b})}

function actionApplyer(int, arr){
    if (arr.length == 0){return int}
    else{return arr[2](arr[1](arr[0](int)))}
}