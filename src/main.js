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
    localStorage.setItem("Current Project", JSON.stringify(name));


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
        const currentProject = JSON.parse(localStorage.getItem("Current Project"));

        localStorage.setItem("Current Project", JSON.stringify(currentProject));

        return currentProject;
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

    const currentTaskLength = Tasklist.length;

    for (let i = 0; i < currentTaskLength; i++) {
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

//Add To Do Button
const addToDoBtn = document.querySelector("#addToDo");
const formPopup = document.querySelector("#todoForm");
addToDoBtn.addEventListener('click', () => {
        formPopup.style.display = "block";
});

//Add show Projects Button
const showProjectsBtn = document.querySelector("#showProjects");
const projectsPopupForm = document.querySelector(".projectsPopup");

showProjectsBtn.addEventListener('click', () => {
    projectsPopupForm.style.display = "block";
});

//Popups Buttons
const closeBtn = document.querySelector("#todoClose");
closeBtn.addEventListener('click', () => {
    formPopup.style.display = "none";
});

const closeBtn2 = document.querySelector("#projectsClose");
closeBtn2.addEventListener('click', () => {
    projectsPopupForm.style.display = "none";
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

    //assignTask from here
    assignTask(formTitle, formDescription, newFormDuetDate, formPriority);

    //add task to UI
    addTaskUI(formTitle, formDescription, newFormDuetDate, formPriority);

    //close form if neccesary?
    closeBtn.click();

});

//add To Dos to UI
const content = document.getElementById("content");

function addTaskUI(title, description, dueDate, priority) {
    //clear previous table
    var child = content.lastElementChild;  
    while (child) { 
        content.removeChild(child); 
        child = content.lastElementChild; 
    }

    let header = document.createElement('h2');
    header.innerText = currentProject();
    content.appendChild(header);
    header.style.textAlign = "center";

    let table = document.createElement('table');

    const Tasklist = JSON.parse(localStorage.getItem(currentProject()));

    //Header
    table.insertRow();
    let cell01 = table.rows[0].insertCell();
    cell01.textContent = "Title";
    let cell02 = table.rows[0].insertCell();
    cell02.textContent = "Priority";
    let cell03 = table.rows[0].insertCell();
    cell03.textContent = "Due Date";
    let cell04 = table.rows[0].insertCell();
    cell04.textContent = "Description";
    let cell06 = table.rows[0].insertCell();
    cell06.textContent = "Edit";
    let cell07 = table.rows[0].insertCell();
    cell07.textContent = "Delete";



    for (let row = 0; row < Tasklist.length; row++) {
        table.insertRow();
        //Display Data
        let newCell = table.rows[table.rows.length - 1].insertCell();
        newCell.textContent = Tasklist[row].title;
        let newCell2 = table.rows[table.rows.length - 1].insertCell();
        newCell2.textContent = Tasklist[row].priority;
        let newCell3 = table.rows[table.rows.length - 1].insertCell();
        newCell3.textContent = Tasklist[row].dueDate;
        let newCell4 = table.rows[table.rows.length - 1].insertCell();
        newCell4.textContent = Tasklist[row].description;

        //Display Buttons
        let newCell5 = table.rows[table.rows.length - 1].insertCell();
        let button1 = document.createElement('button');
        // button1.addEventListener("click", editRowFunction);
        newCell5.append(button1);
        let newCell6 = table.rows[table.rows.length - 1].insertCell();
        let button2 = document.createElement('button');
        button2.addEventListener("click", deleteRowFunction);
        newCell6.append(button2);
    }
    content.appendChild(table);
}

//delete task button
function deleteRowFunction() {
    const thisRow = this.parentNode.parentNode;
    const thisRowIndex = thisRow.rowIndex - 1;
    let Tasklist = JSON.parse(localStorage.getItem(currentProject()));

    const projectName = currentProject();

    Tasklist.splice(thisRowIndex, 1);
    localStorage.setItem(projectName, JSON.stringify(Tasklist));
    addTaskUI();

}

// Add Project UI
//Create New Project Submit Button
const projectContent = document.getElementById("projectContent");

const submitProjectBtn = document.querySelector("#submitProject");

submitProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //get value from input field
    const projectTitle = document.getElementById("addProjectForm").value;
    const projectTitleHTML = document.getElementById("addProjectForm");

    

    //create project from value & update UI
    createProject(projectTitle);
    addProjectUI(projectTitle);

    //clear input field
    projectTitleHTML.value = "";
});

//Add Project to UI
function addProjectUI(name) {
    //clear previous table
    var child = projectContent.lastElementChild;  
    while (child) { 
    projectContent.removeChild(child); 
    child = projectContent.lastElementChild; 
}
    //create table
    let ptable = document.createElement('table');

    ptable.insertRow();
    let pcell1 = ptable.rows[0].insertCell();
    pcell1.textContent = "Title";
    let pcell2 = ptable.rows[0].insertCell();
    pcell2.textContent = "Select";
    let pcell3 = ptable.rows[0].insertCell();
    pcell3.textContent = "Edit";
    let pcell4 = ptable.rows[0].insertCell();
    pcell4.textContent = "Delete";

    const allKeys = Object.keys(localStorage);

    for (let i = 0; i < localStorage.length; i++) {
        let key = allKeys[i];
        if (key != "Current Project") {
            ptable.insertRow();
            let pcell01 = ptable.rows[ptable.rows.length - 1].insertCell();
            pcell01.textContent = key;

            //Display Buttons
            //select
            let pcell02 = ptable.rows[ptable.rows.length - 1].insertCell();
            let pbutton1 = document.createElement('button');
            pcell02.append(pbutton1);
            //edit
            let pcell03 = ptable.rows[ptable.rows.length - 1].insertCell();
            let pbutton2 = document.createElement('button');
            pcell03.append(pbutton2);
            //delete
            let pcell04 = ptable.rows[ptable.rows.length - 1].insertCell();
            let pbutton3 = document.createElement('button');
            pbutton3.addEventListener("click", deleteProjectFunction);
            pcell04.append(pbutton3);
        }
    }
    projectContent.appendChild(ptable);
}

//delete project button
function deleteProjectFunction() {
    const thisRow = this.parentNode.parentNode;
    const thisRowTitle = (thisRow.cells[0].innerText);
    localStorage.removeItem(thisRowTitle);

    // Tasklist.splice(thisRowIndex, 1);
    // localStorage.setItem(projectName, JSON.stringify(Tasklist));
    addProjectUI();

}



//Dummy Tasks for testing

//Set Current Project on Home Page to Personal for testing


currentProject();


createProject("Work");

addProjectUI("Work");


assignTask('grocery shopping', 'a description', "11 30 2023", 2);

assignTask('something', '', "", 2);


// assignTask('Code this assignment', 'This TOP assignment', "11 01 2023", 2);

// assignTask('gym every day', '', '', 7);

// window.task4 = assignTask('sleep 8 hours', 'zzz', '', 2);

addTaskUI();
console.log("final", localStorage);
// console.log("final Personal parse",JSON.parse(localStorage.getItem("Personal")));
