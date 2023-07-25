// 1. Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseStr(str) {
    // initializing variable
    let reversedStr = "";

    // looping through the string to reserve the string and then concateneting with the reversedStr variable
    for(let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    // retruning reversedStr varible
    return reversedStr;
}

const result = reverseStr('Hello World');
// console.log(result);


// 2. Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const inputArray = [2, -5, 10, -3, 7];

const sumOfPosNums = (arr) => {
    // initializing variable
    let sum = 0;

    // looping through the array and if the array has any negetive number conditional is placed to the if statement within the loop for ignoring negative values
    for(let item of arr) {
        if(item > -1) {
            sum += item;
        }
    }

    // finally returning the sum variable
    return sum;
}

const sumResult = sumOfPosNums(inputArray);
// console.log(sumResult);


// 3. Write a JavaScript program to find the most frequent element in an array and return it.

const inputArray2 = [3, 5, 2, 5, 3, 3, 1, 4, 4, 3, 4, 5, 4];

const findMostFreqElem = arr => {
    // initializing an empty object variable
    const frequentElemMap = {};

    // now iterating through the input array and grabbing an element from that array and if the item is not available as the frequentElemMap object's key then creating it and if the item already available in the frequentElemMap object then just incrementing its value by one, on each iteration of the input array.
    for(let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        frequentElemMap[elem] = (frequentElemMap[elem] || 0) + 1;
    }

    // initilazing an undefined mostFreqNum variable for later use
    let mostFreqNum;

    // extracting the max value from frequentElemMap keys and assigning it to maxObjMapValue variable.
    const maxObjMapValue = Math.max(...Object.values(frequentElemMap));
    
    // in this step iterating over the frequentElemMap object and checking for if any key's value within this object matches with the maxObjMapValue variables value if so, then it is the most frequent item's value from the given array. Finally initializing the respected key to the mostFreqNum variable.
    for(const item in frequentElemMap) {
        if (frequentElemMap[item] === maxObjMapValue) {
            mostFreqNum = item;
        }
    }

    // finally returing the mostFreqNum variable which contains the most frequent elemnt value from the input array now.
    return mostFreqNum;
    
}

const freqElemResult = findMostFreqElem(inputArray2);
// console.log(freqElemResult);


// 4. Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
const arrayInput3 = [1, 3, 6, 8, 11, 15];

const returnTargetSumNums = (arr, num) => {
    // within the for loop for the sorted input array it looks for the numbers of that input array element whose sum is the targeted number. if the targeted number is found then it returns the indexes of those numbers whose sum is the targeted number
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] + arr[i + 1] === num) return [i, i+1];
    }

    // otherwise returning no match found
    return "No Match Found";
}

const targetNumResult = returnTargetSumNums(arrayInput3, 9);
// console.log(targetNumResult);


// 5. Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation
const simpleCalc = (num1, num2, operand) => {
    // parsing the input number if the input numbers are of string type or not in both casses
    const firstNumber = parseFloat(num1);
    const secondNumber = parseFloat(num2);

    // initializing result variable with 0
    let result = 0;

    // then using swich case statement doing the calculation based on the input operands
    switch(operand) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        default:
            result =  "Unknown Operand";
    }

    // finally returning the result variable
    return result;
}

const calcResultAllStrInput = simpleCalc("1", "2", "+");
const calcResult = simpleCalc(1, 2, "+");
// console.log(calcResult);


// 6. Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToIntConverter = (romanNumbers) => {
    // initializing an object for Roman numeric letter values
    const mapForRomanNumbers = {
        'I': 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 100
    }

    // uppercasing the input string in form of roman numeric values
    const uppercasedRomanNumber = romanNumbers.toUpperCase();

    // initializing conversion result with 0
    let conversionResult = 0;

    // using for loop based on input roman numeric values
    for(let i = 0; i < romanNumbers.length; i++) {
        // initialinzing current and next roman letter values from the mapForRomanNumbers object based on numeric roman string type input
        const currRomanLetter = mapForRomanNumbers[uppercasedRomanNumber[i]];
        const nextRomanLetter = mapForRomanNumbers[uppercasedRomanNumber[i + 1]];

        // if the next roman letter value is greater then the current roman letter value then incrementing the result variable with the substraction value from the next roman letter value to the current roman letter value based on mapForRomanNumbers values. then simple incrementing the i variable's value because we already counted the next roman letter value in the substraction operation
        if(nextRomanLetter > currRomanLetter) {
            conversionResult += (nextRomanLetter - currRomanLetter);
            i++;
        }else {
            // otherwise just incrementing the result variable from the retrived value of mapForRomanNumbers object based in roman numering input which is an argument to this function.
            conversionResult += currRomanLetter;
        }
    }

    // finally returning the conversion result variable
    return conversionResult;
}

const conversionResult = romanToIntConverter('xiv');
// console.log(conversionResult);


// 7. Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const numArr = [1,4,3,5,2];

const secondSmallestNum = (arr) => {
    // sorting the input array in descending order.
    const sortedArrDec = arr.sort((a, b) => b - a);

    // now returning the second last value from the sorted arr
    return sortedArrDec[sortedArrDec.length - 2];
}

const secondSmallestNumResult = secondSmallestNum(numArr);
// console.log(secondSmallestNumResult);