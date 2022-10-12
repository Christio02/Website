/* Part 2 */
console.log('PART 2')
let array1 = [];  // let is used to declare a variable, and the variable is named array1 and is assigned to an empty array
for (let i = 1; i < 21; i++) { // for loop is used to create a loop that will run up to 21 but not including 21
    array1.push(i); // push is used to add an element to the end of the array
}
console.log(array1); // "printing" the array to the console

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
function divBy3Or5 () {   // function is declared and named divBy3Or5
    for (let i = 1; i <= 20; i++) {   // for loop that iterates up to 20 including 20
        if (i % 3 === 0 && i % 5 === 0) { // if statement that checks if the number is divisible by 3 and 5 -- then prints "eplekake" // strictly equal to
            console.log("eplekake")
        }
        else if (i % 3 === 0) { // else if statement that checks if the number is divisible by 3 -- then prints "eple" // strictly equal to
            console.log("eple")
        }
        else if (i % 5 === 0) { // else if statement that checks if the number is divisible by 5 -- then prints "kake" // strictly equal to
            console.log("kake")
        }
        else {                 // else statement that prints the number not divisible by either 3 or 5
            console.log(i)
        }
    }
}

divBy3Or5() // calling the function divBy3Or5
/* Part 4 */
let heading = document.getElementById("title"); // assigns a variable to heading and gets the element by id "title" // the id is found in the html file

heading.innerHTML = "Hello, JavaScript!";  // calls the heading variable and changes the innerHTML to "Hello, JavaScript!"
 



/* Part 5 */
function changeDisplay () { // function is declared and named changeDisplay
    let display = document.getElementById("display"); // assigns a variable to the display id - the button named "display"
    let magic = document.getElementById("magic"); // assigns a variable to the magic id - the box
    
    display.addEventListener ("click", function() {  // adds an event listenerer and creates a function
        changeD = magic.style.display = "none";     // changes the display to none when the user clicks the button
        
    })
}
changeDisplay()  // calls the fucntion changeDisplay


function changeVisibility () {  // function is declared and named changeVisibility
    let visibility = document.getElementById("visibility");  // assigmns a variable to the visibility id - the button named "visibility"
    let magic = document.getElementById("magic");           // assigns a variable to the magic id - the box
    
    visibility.addEventListener ("click", function() {   // adds an event listenerer and creates a function
        changeV = magic.style.visibility = "hidden";    // changes the visibility of the box to hidden when the user clicks the button

    })
}   

changeVisibility()  // calls the function changeVisibility


function reset () {   // function reset is declared
    let reset = document.getElementById("reset");  // assgins a variable to the reset id - the button named "reset"
    let magic = document.getElementById("magic"); // assigns a variable to the magic id - the box
    reset.addEventListener ("click", function() { // adds an event listenerer "click" and creates a function
        reset = magic.style.display = "block"; // resets the display to block when the user clicks the button
        reset = magic.style.visibility = "visible";  // resets the visibility to visible when the user clicks the button
    })

}

reset() // calls the function reset

/* Part 6 */

const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',             // array of technologies
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
]

function add_technologies () {  // function is declared and named add_technologies
    for (let i = 0; i < technologies.length; i++) {  // makes a for loop that iterates up to the length of the array
        let childElem = document.createElement("li");  // creates a li element chil of the tech ul element
        
        childElem.innerHTML = technologies[i]; // sets the innerHTML of the child element to the array element - whick adds all the elemnts in the array to the li element

        document.getElementById("tech").appendChild(childElem)  // adds the child element to the tech ul element - which adds all the li elements to the ul element
    }
}

add_technologies()  // calls the function add_technologies
