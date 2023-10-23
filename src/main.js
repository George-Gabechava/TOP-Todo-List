import { compareAsc, format } from 'date-fns';
import { isStorageAvailable } from './checkStorage';

//clear localStorage as if I'm a new user
localStorage.clear();

//check if localStorage is available
isStorageAvailable();
console.log("localStorage:", storageStatus, ";length:", localStorage.length);


//Lit of Project Groups

////Functions for the To Do List
////Each project / To Do item should be editable, deletable, & completable.

//Create a project group to store tasks
function createProject(name) {
    const projectName = name;
    const taskList = [];


    localStorage.setItem(projectName, JSON.stringify(taskList));
}

//Currently selected project group
//Show Projects button UI should allow user to select 

function currentProject() {
    //check if localStorage is available
    isStorageAvailable();

    //if localStorage is empty & available: create a project "Personal"
    if (localStorage.length == 0 ) {
        const Personal = createProject('Personal');

        localStorage.setItem("Current Project", JSON.stringify("Personal"));
        return "Personal";
    }
    
    //if localStorage is populated & available: select (most recent/first one?)
    if (localStorage.length > 0 && storageStatus == "available") {
        return JSON.parse(localStorage.getItem("Current Project"));
    }


    //if local storage is unavailable
    if (storageStatus == "unavailable") {
        //some code. Maybe an alert? Or innerText alert?
    }

}

//Create a To Do Task
export function createTask(title, description, dueDate, priority) {
    if (priority == '' || priority == undefined) {
        //set default priority to 5 if empty
        priority = 5;
    }

    return {
        title,
        description,
        dueDate, 
        priority
    }
}

//Asign the To Do task to the current project
function assignTask(title, description, dueDate, priority) {
    //create task function
    const mytask = createTask(title, description, dueDate, priority);

    //Find current open project
    const Tasklist = JSON.parse(localStorage.getItem(currentProject()));

    //find out where task belongs in current project priority
    if (Tasklist.length == 0) {
        Tasklist.push(mytask);
        localStorage.setItem(currentProject(), JSON.stringify(Tasklist));
        return;
    }

    const year0 = (mytask.dueDate).substr(-4,4);
    const month0 = (mytask.dueDate).substr(0,2);
    const day0 = (mytask.dueDate).substr(3,2);
    const currentTaskDate = new Date(year0, month0, day0);
    console.log('current', currentTaskDate);

    const currentTaskLength = Tasklist.length;

    for (let i = 0; i < currentTaskLength; i++) {
        console.log("i & len:", i, "&", currentTaskLength);
        console.log("Tasklist i prio & date:", Tasklist[i].priority, " - ",  Tasklist[i].dueDate);

        console.log("mytask prio & date:", mytask.priority, " - ",  mytask.dueDate);

        //if higher priority, add task
        if (mytask.priority > Tasklist[i].priority ) {
            Tasklist.splice([i], 0, mytask);
            break;
        }

        //check if current Index Due Date is later than new task Due Date
        const yearI = (Tasklist[i].dueDate).substr(-4,4);
        const monthI = (Tasklist[i].dueDate).substr(0,2);
        const dayI = (Tasklist[i].dueDate).substr(3,2);
        const IndexTaskDate = new Date(yearI, monthI, dayI);

        const compared = compareAsc(currentTaskDate, IndexTaskDate);

        //if same priority, but sooner due date, add task
        if (mytask.priority == Tasklist[i].priority && compared == -1 && mytask.dueDate != '') {
            Tasklist.splice([i], 0, mytask);
            break;
        }

        //Else, add new task to the end of the list (lowest priority)
        if (i == currentTaskLength -1) {
            Tasklist.push(mytask);
        }
    }


    //Add task to localStorage
    localStorage.setItem(currentProject(), JSON.stringify(Tasklist));
    console.log("myTaskList", Tasklist);
}

////UI Logic

//Show Projects
//some code


//Add To Do Button
const addToDoBtn = document.querySelector("#addToDo");
const formPopup = document.querySelector("#todoForm");

addToDoBtn.addEventListener('click', () => {
        formPopup.style.display = "block";
});

//Popup 
const closeBtn = document.querySelector("#todoClose");
closeBtn.addEventListener('click', () => {
    formPopup.style.display = "none";
});

//submit form
const todoForm = document.querySelector("#todoForm");
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formTitle = document.getElementById("taskTitle").value;
    const formPriority = document.getElementById("taskPriority").value;
    const formDueDate = document.getElementById("taskDueDate").value;
    const formDescription = document.getElementById("taskDescription").value;

    //get date in preferred format
    const year = formDueDate.substr(0,4);
    const month = formDueDate.substr(5,2);
    const day = formDueDate.substr(-2,2);

    const newFormDuetDate = month + " " + day + " " + year;

    console.log("old new", formDueDate, newFormDuetDate);

    //assignTask from here
    assignTask(formTitle, formDescription, newFormDuetDate, formPriority);

    //add task to UI

    //close form if neccesary?
    closeBtn.click();


});


//add To Dos to UI
function addTaskUI(title, description, dueDate, priority) {
    
}




//Dummy Tasks for testing
closeBtn.click();


//Set Current Project on Home Page to Personal for testing
currentProject();


assignTask('grocery shopping', 'a description', "11 30 2023", 2);

assignTask('Code this assignment', 'This TOP assignment', "11 01 2023", 2);

assignTask('something', '', "11 02 2023", 1);



// assignTask('gym every day', '', '', 7);

window.task4 = assignTask('sleep 8 hours', 'zzz', '', 2);

console.log("final Personal parse",JSON.parse(localStorage.getItem("Personal")));
