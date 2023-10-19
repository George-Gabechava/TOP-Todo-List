import { format, compareAsc } from 'date-fns';
import { isStorageAvailable } from './checkStorage';

// console.log('main.js imported successfully.');


//check if localStorage is available
isStorageAvailable();

//Lit of Project Groups
// let myProjects = [];

///////////////// THE WINDOW'S OPEN
window.myProjects = [];





////Functions for the To Do List
////Each project / To Do item should be editable, deletable, & completable.

//Create a project group
function createProject(name) {
    const projectName = name;
    const tasklist = {};

    return {projectName, tasklist};
}

//Currently selected project group
//Show Projects button --> select 
function currentProject() {
    //localStorage not implemented yet, set current project to 'default'
    //if myProjects in localStorage is empty:


    return default1.projectName;

    //else, load myProjects from localStorage
    //some code
}

const default1 = createProject('default1');
myProjects.push(default1);

const default2 = createProject('default2');
myProjects.push(default2);

currentProject();
console.log('currentP', currentProject());

//Create a To Do Task
function createTask(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate, 
        priority
    }
}

//Asign the To Do task to the current project
function assignTask(task) {
    const findProjectIndex = myProjects.findIndex(object => object.projectName === `${currentProject()}`);
    console.log('index', findProjectIndex);

    //task names need to be unique, maybe make the task name the title.


    //if someone enters the same task title, find # of similar, then add that number to the end of the new task
    myProjects[findProjectIndex].tasklist = Object.assign(myProjects[findProjectIndex].tasklist, {task});
}


///////////////// THE WINDOW'S OPEN
const task1 = createTask('Code this assignment', 'This TOP assignment', 3, 10);
assignTask(task1);
console.log('current tasklist1', myProjects[0].tasklist);
const task2 = createTask('more coding every day', '', 4, 9);
assignTask(task2);
console.log('current tasklist2', myProjects[0].tasklist);

window.task = createTask('gym every day', '', 1, 7);
window.task4 = createTask('sleep 8 hours', 'zzz', 6, 6);



// console.log('task1', task1);

//Object.assign(myProjects[0].tasklist, {task1})


console.log(myProjects[0]);

