import { addProjectAdder, addSingleProject, addSingleTodo, addTodoAdder, clearProjects, clearTodos, baseline } from "./domhandler";
import { myProjectList, removeProject, updateProjectId } from "./project";
import './style.css';

export let currentProjectId = 0;

export let startUp = () => {
    if(localStorage.getItem('firstTime') === null) {
        localStorage.setItem('firstTime', 'notFirstTime');
        const defaultProject = new Project('Default');
        myProjectList.push(defaultProject);
        setLocalStorage();
    } else {
        myProjectList = parseProjectList();
        baseline();
        displayProjects();
        displayTodos(myProjectList[0]);
    }
}

export let stringifyProjectList = () => {
    const key = 'projectList';
    const value = JSON.stringify(myProjectList);
    localStorage.removeItem(key);
    localStorage.setItem(key, value);
}

export let parseProjectList = () => {
    const key = 'projectList';
    const value = localStorage.getItem(key);
    const object = JSON.parse(value);
    return object
}


export const displayProjects = () => {
    clearProjects();
    updateProjectId();
    for(let i = 0; i < myProjectList.length; i++) {
        addSingleProject(myProjectList[i]);
    }
    addProjectAdder();
}

export const displayTodos = (project) => {
    clearTodos();
    for(let i = 0; i < project.todoList.length; i++) {
        addSingleTodo(project.todoList[i]);
    }
    addTodoAdder();
    currentProjectId = project.id;
}

export const delProjectEvent = (project) => {
    if(project.id === currentProjectId) {
        displayTodos(myProjectList[0]);
    }
    removeProject(project);
    displayProjects();
}