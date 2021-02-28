module.exports = function toReadable(number) {
    let writtenNum = new String();
    let numeral = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
    ];
    let numeral2 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    let numeral3 = [
        "zero",
        "zero",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
        "hundred",
    ];

    if (number < 11) {
        return (writtenNum += numeral[number]);
    } else if (number > 10 && number < 21) {
        return (writtenNum += numeral2[number - 10]);
    } else if (number > 20 && number < 100) {
        let str = number.toString();
        let doubleDigit = parseInt(str[0]);
        let oneDigit = parseInt(str[1]);
        if (oneDigit == 0) {
            return (writtenNum = numeral3[doubleDigit]);
        }
        return (writtenNum = numeral3[doubleDigit] + " " + numeral[oneDigit]);
    } else if (number == 100) {
        return `one hundred`;
    } else if (number > 100) {
        let str = number.toString();
        let threeDigit = parseInt(str[0]);
        let doubleDigit = parseInt(str[1]);
        let oneDigit = parseInt(str[2]);
        if (doubleDigit == 1) {
            return (writtenNum =
                numeral[threeDigit] +
                " hundred " +
                numeral2[doubleDigit + oneDigit - 1]);
        }
        if (oneDigit == 0 && doubleDigit == 0) {
            return (writtenNum = numeral[threeDigit] + " hundred");
        }
        if (doubleDigit == 0) {
            return (writtenNum =
                numeral[threeDigit] + " hundred " + numeral[oneDigit]);
        }
        if (oneDigit == 0) {
            return (writtenNum =
                numeral[threeDigit] + " hundred " + numeral3[doubleDigit]);
        }
        return (writtenNum =
            numeral[threeDigit] +
            " hundred " +
            numeral3[doubleDigit] +
            " " +
            numeral[oneDigit]);
    }
};
