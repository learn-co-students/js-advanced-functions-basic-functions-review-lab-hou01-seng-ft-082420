// Your code here
function saturdayFun(activity="roller-skate"){
  return (`This Saturday, I want to ${activity}!`)
}


function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol='*'){
    return function(msg="special"){
        return `You are ${symbol}${msg}${symbol}!`
    }
}

const Calculator= {
    add: function(num, num2){
        return num + num2
    },

    subtract: function(num, num2){
        return num - num2
    },
    multiply: function(num, num2){
        return num * num2
    },
    divide: function(num, num2){
        return num / num2
    }
}

// function actionApplyer(int, array){
//     let x = int
//     let z = array.length
    
//     return function(x,z){ 
//         return x + z
//     }

// }
let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }

