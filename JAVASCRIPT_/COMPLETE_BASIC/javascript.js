// Resourses
// https://github.com/alok722/namaste-javascript-notes/blob/master/notes/lectures.md


1. Call Stack

    // The execution context is created in two phases.
    // Memory creation phase - 
    //     JS will allocate memory to variables and functions.
    // Code execution phase

    Ex. 
    var n = 2;
    function square(num) {   // full code
      var ans = num * num;
      return ans;
    }
    var square2 = square(n); // undefined
    var square4 = square(4); // undefined
    const fun = () => {}     // undefined


    |     |
    | EC1 | -> execuation context 1 (get push) then after execuation get pop
    | GEC | -> golbel execuation context 
    -------    [ GEC initially stores for all variable => undefined, 
                 for all function => full code ]
   

2. Hoisting

    // JavaScript Hoisting refers to the process whereby the interpreter
    // appears to move the declaration of functions,
    // variables or classes to the top of their scope,
    // prior to execution of the code.

    var x = 1;
    a();
    // we are calling the functions before defining them. This will work properly, 
    // as seen in Hoisting.
    console.log(x);

    function a() {
        var x = 10; // local scope because of separate execution context
        console.log(x);
    }



3. Undefined vs not defined vs null

    // not defined = means memery not allocated
    console.log(x); // x is not defined

    // Undefined = memory is allocated for the variable, but no value is assigned yet.

    // null = 	null = setting a empty value
    //  if you ask amazon API if they have the xyz product then they will return null


4. closure

    function greeting() {
        let message = 'Hi, Om';

        function sayHi() {
            console.log(message);
        }

        return sayHi;
    }
    let hi = greeting();
    hi(); // still can remember the message variable

    // closure means function along with it's lexical outer environment
    
    // Use: we can assess it in outer environment


5. Callback

    // 1. JavaScript is a synchronous and single-threaded language. JavaScript Waits for none.
    // 2. Callback functions 
    //     take a function A and pass it to another function B. Here, 
    //     A is a callback function. So basically I am giving access to function B to call function A. 
    //     This callback function gives us the access to whole Asynchronous world in Synchronous world.

    

6. Event loop

    A. Browser SuperPower webAPIs => 
        window.
        a. setTimeout()
        b. DOM APIs
        c. fetch()
        d. localStorage
        e. Console
        f. Location


7. 