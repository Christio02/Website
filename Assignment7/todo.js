
const submitBtn = document.querySelector('#submitbtn');

const input = document.querySelector("#input-field");

const list = document.getElementById("list");

const completed = document.querySelector('#completed-field');

const checkbox = document.getElementById('checkbox');

const tasks = [];


function addTodo () {
    
    const newTodo = document.createElement('li');

    newTodo.style.listStyle = "none"; 
    

 // functions that creates list and adds the items to an array in the console
    function addNewTask () { 
        newTodo.innerHTML = input.value

        list.appendChild(newTodo);

        tasks.push(input.value);
        console.log(tasks);

        let date = new Date();
        
        submitBtn.addEventListener('click', console.log(date)); // adds the date for each task to console (not array, be)
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
        checkbox.id = "checkbox";
        newTodo.prepend(checkbox);
    }

    addCheckbox()
    
    const checkbox = document.getElementById('checkbox');

    // function that adds a line through the list item when the checkbox is clicked and removes it when the checkbox is clicked again
    function addLineCheck () {
        checkbox.addEventListener('click', function () { // adds eventlistener for clicking checkbox
            if (checkbox.checked) { 
                newTodo.style.textDecoration = "line-through"; // if checkbox clicked, then line through
            } else {
                newTodo.style.textDecoration = "none"; // else no line through
            }
        })
    }
    
    addLineCheck()

    input.value = '' ; // resets the input field
    
    function completedTasks () { 
        counter = 0; // counter which counts how many tasks are completed
        completed.innerHTML = counter;
        checkbox.addEventListener('click', function () { // adds eventlistener for clicking checkbox
            if (checkbox.checked) { // if the checkbox is "checked" it should add a number to the counter
                counter +=1;
                completed.innerHTML = (`${counter} / ${tasks.length}`) // displays this as a fraction
            }
            else if (checkbox.checked === false) { // if i'ts "unchecked" it should remove one "point" from the counter
                counter -= 1;
                completed.innerHTML = (`${counter} / ${tasks.length}`)  // displays as a fraction
            }
        
        })
                
    }
    completedTasks();

    // function that removes the task when a button is clicked, should add a button next to each task
    function removeTask () {
        let removeBtn = document.createElement('button');
        removeBtn.id = "removeBtn";
        removeBtn.innerHTML = "Remove";
        newTodo.appendChild(removeBtn);
        removeBtn.addEventListener('click', () => {
                newTodo.remove();
                tasks.pop(input.value);
                console.log(tasks);
                counter -= 1;
                completed.innerHTML = (`${counter} / ${tasks.length}`);
                if (tasks.length === 0) { // if there are no tasks left, the counter should be 0 a
                    counter = 0;
                    completed.innerHTML = (`${counter} / ${tasks.length}`);
                }

            })
    }
    removeTask();

    // function that alerts the user when reloading the page
    function reloadAlert () {
        window.addEventListener('beforeunload', function (e) {
            e.preventDefault();
            e.returnValue = '';
        });
    }
    reloadAlert();


}
submitBtn.addEventListener('click', function(event) { // function that adds an eventlistener to the button
    event.preventDefault(); // prevents the page to reload when you submit
    addTodo(); // runs the main function when you submit a task
});



