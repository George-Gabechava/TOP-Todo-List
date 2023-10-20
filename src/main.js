import { format, compareAsc } from 'date-fns';
import { isStorageAvailable } from './checkStorage';

//check if localStorage is available
isStorageAvailable();

//Lit of Project Groups
///////////////// THE WINDOW'S OPEN
window.myProjects = [];


////Functions for the To Do List
////Each project / To Do item should be editable, deletable, & completable.

//Create a project group to store tasks
function createProject(name) {
    const projectName = name;
    const taskList = [];

    return {projectName, taskList};
}

//Currently selected project group
//Show Projects button UI should allow user to select 
function currentProject() {
    //localStorage not implemented yet, set current project to 'default'
    //if myProjects in localStorage is empty:

    return Personal.projectName;

    //else, load myProjects from localStorage
    //'some code'
}

///////// Dummy Projects for Testing
const Personal = createProject('Personal');
myProjects.push(Personal);

const Work = createProject('Work');
myProjects.push(Work);

//Set Current Project on Home Page to Personal for testing
currentProject();


//Create a To Do Task
function createTask(title, description, dueDate, priority) {
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
function assignTask(task) {
    //create task function
    

    //Find current open project
    const findProjectIndex = myProjects.findIndex(object => object.projectName === `${currentProject()}`);

    //Add task to current project
    myProjects[findProjectIndex].taskList.push(task);
    
    console.log("current taskList", myProjects[findProjectIndex].taskList);
}





//Dummy Tasks for testing
const task1 = createTask('Code this assignment', 'This TOP assignment', 3, 10);
assignTask(task1);
const task2 = createTask('grocery shopping', '', 4, );
assignTask(task2);

window.task = createTask('gym every day', '', 1, 7);
window.task4 = createTask('sleep 8 hours', 'zzz', 6, 6);

console.log("myProjects", myProjects);


