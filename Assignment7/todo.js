const submitBtn = document.querySelector('#submitbtn');

const input = document.querySelector("#input-field");

const list = document.querySelector("#list");

const output = document.querySelector("#output")


const tasks = [];

function addTodo () {
    let newTodo = document.createElement('li');

    newTodo.style.listStyle = "none"; 

    // functions that creates list and adds the items to an array in the console
    function addNewTask () { 
        newTodo.innerHTML = input.value

        list.appendChild(newTodo);

        let date = new Date();
        
        
        tasks.push(input.value, date);
        console.log(tasks);

         

        //optional code to prevent empty input
        
        // if (input.value === "") { 
        //     alert("Please do not leave the input field empty");
        //     // remove checkbox and list item if input is empty¨
        //     newTodo.remove();
        //     tasks.childNodes.remove();
            

        // }
    } 

    addNewTask()
    // function that insert a new item on top of the list
    function newItemTop () { 
        list.insertBefore(newTodo, list.childNodes[0]);
    }
    newItemTop();

    // function that creates checkbox left of list
    function addCheckbox () {
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        newTodo.prepend(checkbox);
    }

    addCheckbox()


    // function that adds a line through the list item when the checkbox is clicked and removes it when the checkbox is clicked again
    function addLineCheck () {
        let checkbox = document.querySelector('.checkbox'); // gets the class for checkbox
        checkbox.addEventListener('click', function () { // adds eventlistener for clikcing checkbox
            if (checkbox.checked) { 
                newTodo.style.textDecoration = "line-through"; // if checkbox clicked, then line through
            } else {
                newTodo.style.textDecoration = "none"; // else no line through
            }
        })
    }
    
    addLineCheck()

    input.value = '' ; // resets the input field
    

    // create a function that updates how many tasks are left and removes tasks when checkbox is clicked
    function updateOutput () {
        // remove date element from output 
        output.innerHTML = tasks.length-1;
        if (tasks.length === 0) {
            output.innerHTML = 0;
        }
        if (newTodo.style.textDecoration === "line-through") {
            (output.innerHTML = tasks.length - 1)
        }
       
        
    }

    updateOutput();


}
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    addTodo();
});
