import { format, compareAsc } from 'date-fns';
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
    const personalTasklist = JSON.parse(localStorage.getItem(currentProject()));

    

    // const findProjectIndex = myProjects.findIndex(object => object.projectName === `${currentProject()}`);

    //Add task to current project
    personalTasklist.push(mytask);

    // myProjects[findProjectIndex].taskList.push(task);
    
    // console.log("current taskList", myProjects[findProjectIndex].taskList);

    //Add task to localStorage
    localStorage.setItem(currentProject(), JSON.stringify(personalTasklist));
    console.log("myTaskList", personalTasklist);
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






//Dummy Tasks for testing
// closeBtn.click();


//Set Current Project on Home Page to Personal for testing
currentProject();

// window.task1c = createTask('Code this assignment', 'This TOP assignment', 3, 10);
assignTask('Code this assignment', 'This TOP assignment', 3, 10);


// const task1 = createTask('Code this assignment', 'This TOP assignment', 3, 10);
// assignTask(task1);

assignTask('grocery shopping', 'a description', 4, );
// const task2 = createTask('grocery shopping', '', 4, );
// assignTask(task2);

// window.task = createTask('gym every day', '', 1, 7);
// window.task4 = createTask('sleep 8 hours', 'zzz', 6, 6);


console.log("final Personal parse",JSON.parse(localStorage.getItem("Personal")));
