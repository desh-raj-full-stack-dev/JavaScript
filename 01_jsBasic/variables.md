# Variables

1. var => Variables declared with var are function-scoped. 
    They are hoisted to the top of their containing function and can be accessed before their declaration.
    var variables can be redeclared and reassigned.

    ```
    function example() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Output: 10 (accessible outside the if block)
    }

    console.log(x); // Output: undefined (variable hoisted to the top)

    var x = 5;
    var x = 15; // Redeclaration allowed
    x = 20; // Reassignment allowed
    console.log(x); // Output: 20

    ```

2. let => Variables declared with let are block-scoped, meaning they are limited to the block in which they are defined (e.g., within loops or conditional statements). 
    let variables are not hoisted, so they cannot be accessed before their declaration. 
    let variables can be reassigned, but not redeclared within the same block.

    ```
    function example() {
    if (true) {
        let y = 10;
        console.log(y); // Output: 10
    }
    console.log(y); // ReferenceError: y is not defined
    }

    let y = 5;
    let y = 15; // SyntaxError: Identifier 'y' has already been declared

    let y = 5;
    y = 20; // Reassignment allowed
    console.log(y); // Output: 20

    ```

3. Variables declared with const are block-scoped and also cannot be hoisted. 
    const variables are read-only and cannot be reassigned after their initial assignment. 
    However, if a const variable holds an object or array, the properties of that object or array can be modified.

    ```
    function example() {
    if (true) {
        const z = 10;
        console.log(z); // Output: 10
    }
    console.log(z); // ReferenceError: z is not defined
    }

    const z = 5;
    const z = 15; // SyntaxError: Identifier 'z' has already been declared

    const z = 5;
    z = 20; // TypeError: Assignment to constant variable.

    const obj = { value: 5 };
    obj.value = 10; // Property can be modified
    console.log(obj.value); // Output: 10

    ```

It's generally recommended to use const for variables that won't be reassigned and let for variables that need to be reassigned. Use var sparingly, as its behavior can sometimes lead to unintended consequences due to its function scope and hoisting.