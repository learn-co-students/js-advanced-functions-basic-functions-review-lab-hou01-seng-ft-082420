// Your code here
function saturdayFun(string = 'roller-skate'){
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string = 'go to the office'){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(highlight = "*"){
    return function(string = "special"){
     return `You are ${highlight}${string}${highlight}!`
    }
}

console.log(wrapAdjective()())

let Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => {return a - b},
    multiply: (a, b) => a * b,
    divide: (a, b) => a/b
}

let arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

const actionApplyer = (int, arr) => {
    let a = int
    for(const func of arr){
        console.log(func)
        a = func(a)
    }
    return a
}

console.log(actionApplyer(2, arrayOfTransforms))