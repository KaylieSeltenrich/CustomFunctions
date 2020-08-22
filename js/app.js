// Function 1

function addAndMultiply(numberOne, numberTwo) {
    var addNumbersMultiplyFive = (numberOne + numberTwo) * 5;
    return addNumbersMultiplyFive;
}

// Function 2 

function stringLengthIdentifer(string) {

    if (string.length <= 10) {
        return true;

    } else if (string.length > 10) {
        return false;

    }

}

// Function 3

function phStringIdentifer(stringArray) {
    for (var i = 0; i < stringArray.length; i++) {

        if (stringArray[i].startsWith("ph")) {
            return stringArray[i];
        } else {
            console.log("This does not start with ph");
        }

    }
}

// Test Function 1 
var result = addAndMultiply(5, 5);
console.log(result);
var result = addAndMultiply(10, 5);
console.log(result);
var result = addAndMultiply(5, 2);
console.log(result);

// Test Function 2
var lengthAnswer = stringLengthIdentifer("String of Text");
console.log(lengthAnswer);
var lengthAnswer = stringLengthIdentifer("String");
console.log(lengthAnswer);
var lengthAnswer = stringLengthIdentifer("A longer string of Text");
console.log(lengthAnswer);

//Test Function 3

var stringInput = ["book", "lamp", "phone", "school", "philosophy"];
var stringResult = phStringIdentifer(stringInput);
console.log(stringResult);

var stringInput = ["book", "phil", "lamp", "school", "philosophy"];
var stringResult = phStringIdentifer(stringInput);
console.log(stringResult);

var stringInput = ["phony", "lamp", "cake", "school", "potato"];
var stringResult = phStringIdentifer(stringInput);
console.log(stringResult);