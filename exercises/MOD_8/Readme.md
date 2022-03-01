//Instructions

Create a JavaScript class called "Computer" in a file called computer.js

This class will have as attributes the brand, model, processor, amount of RAM memory and capacity of the hard disk.

In addition to the constructor, you must have the following methods:

    - methods that allow querying each of the attributes
    - methods that allow to modify the processor, the amount of ram            memory and the capacity of the hard disk
    - a method that will receive a parameter and return a phrase that says:
        "Currently executing: 'X'" (X is the parameter received by the method and will normally be the name of a program)
            Example: "Currently running: Chrome"
    - a method that will return a full description of the computer (toString())

In another file called main.js, create the createComputers() function.

Within this function, we will ask the user through promtps for the data of two computers.

Once the data for both computers has been entered, it calls the methods of the Computer class to check that they work correctly.
