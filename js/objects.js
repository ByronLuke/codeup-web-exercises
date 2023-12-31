(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    const person = {};
    person.firstName = "Byron";
    person.lastName = "Praetor";
    console.log(person.firstName) // "Rick"
    console.log(person.lastName) // "Sanchez"
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return `Hello from ${this.firstName} ${this.lastName}`
    }
    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        //more than $200 it is 0.12

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper) {
        var totalAfterDiscount = 0;
        var discount = 0;
        if(shopper.amount > 200){
            discount = 0.12;
            totalAfterDiscount = shopper.amount - (shopper.amount * discount);
            console.log(`Hi ${shopper.name}! You spent $${shopper.amount.toFixed(2)} today! Congratulations, you earned a discount of ${discount * 100}%, making your new total $${totalAfterDiscount.toFixed(2)}`)

        }else{
            console.log(`Hi ${shopper.name}! You spent $${shopper.amount.toFixed(2)} today! Unfortunately, you must spend $${200 - shopper.amount.toFixed(2)} more to earn a discount of 12%`)
        }
    }

    )

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * */

    const books = [
        {
            title : 'The Salmon of Doubt',
            author: {
                firstName : 'Douglas',
                lastName: 'Adams'
            }
        },
        {
            title : 'The Tragedy of King Lear',
            author: {
                firstName : 'William',
                lastName: 'Shakespeare'
            }
        }
        ,
        {
            title : 'Two Treatises of Government',
            author: {
                firstName : 'John',
                lastName: 'Locke'
            }
        }
        ,
        {
            title : 'A Long Walk to Water',
            author: {
                firstName : 'Linda',
                lastName: 'Park'
            }
        }
        ,
        {
            title : 'Blue Moon (Anita Blake, Vampire Hunter, #8)',
            author: {
                firstName : 'Laurell',
                lastName: 'Hamilton'
            }
        }
    ]
    console.log(books[0])
    console.log(books[1])
    console.log(books[2])
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    //forEach answer
    books.forEach(function (book) {
        console.log(`Book # ${books.indexOf(book)+1}`);
        console.log(`Title: ${book.title}`);
        console.log((`Author: ${book.author.firstName} ${book.author.lastName}`))
        console.log('---')
    })
    //for(i) answer
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        console.log(`Book # ${i+1}`);
        console.log(`Title: ${book.title}`);
        console.log((`Author: ${book.author.firstName} ${book.author.lastName}`))
        console.log('---')
    }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title,authorFirstName, authorLastName) {

    }
})();
