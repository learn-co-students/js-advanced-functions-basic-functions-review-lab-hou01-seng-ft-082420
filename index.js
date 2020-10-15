// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
    return function(adj='special'){
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {

    add: function add(num1, num2){
        return num1 + num2
    },
    subtract: function subtract(num1, num2){
        return num1 - num2
    },
    multiply: function multiply(num1, num2){
        return num1 * num2
    },
    divide: function multiply(num1, num2){
        return num1 / num2
    }
}

function actionApplyer(integer, fnArray){
    let a = integer

    for (let i = 0; i < fnArray.length; i++ ){
      a = fnArray[i](a)
    }
  
    return a
}