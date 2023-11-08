(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    const names = ["Byron", "Harry", "Lewis", "Rebecca"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("Number of elements in the names array: " + names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("First name is " + names[0]);
    console.log("Second name is " + names[1]);
    console.log("Third name is " + names[2]);
    console.log("Fourth name is " + names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name) {
        console.log(name);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     * */
    function first(arr) {
        return arr[0];
    }

    function second(arr) {
        return arr[1];
    }

    function last(arr) {
        return arr[arr.length - 1];
    }
    console.log(first([1, 2, 3, 4, 5])) // returns 1
    console.log(second([1, 2, 3, 4, 5])) // returns 2
    console.log(last([1, 2, 3, 4, 5])) // return 5

})();
