// 1. Create a function runningAverage() that returns a callable function object. Update the    
// series   with    each    given   value   and calculate   the current average.
// rAvg =   runningAverage();
// rAvg(10) =   10.0;
// rAvg(11) =   10.5;
// rAvg(12) =   11;

const getRunningAverage = () =>  {
    let sum = 0;
    let initCount = 0;

    return (number) => {
        sum += number;
        initCount++;

        return sum / initCount;
    }
}

const getAvarage = getRunningAverage();
console.log(getAvarage(10));
console.log(getAvarage(11));
console.log(getAvarage(12));

// 2. Write a sum function which will work properly when invoked using syntax below.
// sum(2,3);        //  Outputs 5
// sum(2)(3);   //  Outputs 5
// sum(1)(2)(3)(4); //  Outputs 10


function sum(...args) {
    const sumNumberArray = (numberArray) => numberArray.reduce((prevValue, currValue) => prevValue + currValue, 0);

    let number = sumNumberArray(args);

    let curry = (...innerArgs) => {
        number += sumNumberArray(innerArgs);
        return curry;
    }
    
    curry.toString = () => number.toString();

    return curry;
}

console.log(sum(2,3));
console.log(sum(2)(3)); 
console.log(sum(1)(2)(3)(4));
