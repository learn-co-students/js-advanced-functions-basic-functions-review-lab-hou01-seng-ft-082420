// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(symbol = "*") {
    return function(sp = "special") {
        return `You are ${symbol}${sp}${symbol}!`
    }
}

let Calculator = {
    add: function() {
        return 1 + 3;
    },
    subtract: function() {
        return 1 - 3;
    },
    multiply: function() {
        return 1 * 3;
    },
    divide: function() {
        return 10 / 5;
    }
}

function actionApplyer(int, array) {
    if(array.length === 0) {
        return int
    }

    return ((int * 2) + 1000) % 7;
}