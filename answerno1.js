function countDigits(num) {
    // convert the number to a string
    const numStr = num.toString();

    // create an object to store the count of each digit
    const digitCounts = {};

    // iterate through each character in the string
    for (const digit of numStr) {
        // if the digit is not in the object, set its count to 1
        if (!(digit in digitCounts)) {
            digitCounts[digit] = 1;
        } else {
            // otherwise, increment the count by 1
            digitCounts[digit] += 1;
        }
    }

    // iterate through each key in the object
    for (const key in digitCounts) {
        // print the count of each digit
        console.log(`The number ${key} appears ${digitCounts[key]} times`);
    }
}

countDigits(776265327);
