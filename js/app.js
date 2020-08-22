function addAndMultiply(numberOne, numberTwo) {
    var addNumbersMultiplyFive = (numberOne + numberTwo) * 5;
    return addNumbersMultiplyFive;
}

function stringLengthIdentifer(string) {

    if (string.length <= 10) {
        return true;

    } else if (string.length > 10) {
        return false;

    }

}

function phStringIdentifer(stringArray) {
    for (var i = 0; i < stringArray.length; i++) {

        if (stringArray[i].startsWith("ph")) {
            return stringArray[i];
        } else {
            console.log("This does not start with ph");
        }

    }
}


var result = addAndMultiply(5, 5);
console.log(result);


var lengthAnswer = stringLengthIdentifer("String of Text");
console.log(lengthAnswer);

var stringInput = ["book", "lamp", "phone", "school", "philosophy"];
var stringResult = phStringIdentifer(stringInput);
console.log(stringResult);