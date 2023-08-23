saturdayFun('bathe my dog');

function saturdayFun(string) {
    if (string) {
        return `This Saturday, I want to ${string}!`
    } else {
        return `This Saturday, I want to roller-skate!`;
    }
};

function mondayWork(string) {
    if (string) {
        return `This Monday, I will ${string}.`
    } else {
            return `This Monday, I will go to the office.`;
        }
};

function wrapAdjective(symbol = "special") {
    return function (word) {
        return `You are ${symbol}${word}${symbol}!`;
    }
};