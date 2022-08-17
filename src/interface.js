import { addProjectAdder, addSingleProject, addSingleTodo, addTodoAdder, clearProjects, clearTodos, baseline } from "./domhandler";
import { removeProject, updateProjectId, Project } from "./project";
import { myProjectList, currentProjectId } from "./index.js";
import './style.css';

export let startUp = () => {
    if(localStorage.getItem('firstTime') === null) {
        localStorage.setItem('firstTime', 'notFirstTime');
        const defaultProject = new Project('Default');
        myProjectList.push(defaultProject);
        baseline();
        displayProjects();
        displayTodos(myProjectList[currentProjectId]);
        stringifyProjectList();
    } else {
        myProjectList = parseProjectList();
        currentProjectId = parseCurrentProjectId();
        baseline();
        displayProjects();
        displayTodos(myProjectList[currentProjectId]);
    }
}

export let stringifyProjectList = () => {
    const key = 'projectList';
    const value = JSON.stringify(myProjectList);
    localStorage.setItem(key, value);
}

export let parseProjectList = () => {
    const key = 'projectList';
    const value = localStorage.getItem(key);
    const object = JSON.parse(value);
    return object
}

export let stringifyCurrentProjectId = () => {
    const key = 'currentProjectId';
    const value = JSON.stringify(currentProjectId);
    localStorage.setItem(key, value);
}

export let parseCurrentProjectId = () => {
    const key = 'currentProjectId';
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
        project.todoList[i].id = i;
        addSingleTodo(project.todoList[i]);
    }
    addTodoAdder();
    currentProjectId = project.id;
    stringifyCurrentProjectId();
}

export const delProjectEvent = (project) => {
    const id = project.id;
    removeProject(project);
    if(id === currentProjectId) {
        displayTodos(myProjectList[0]);
        currentProjectId = 0;
        stringifyCurrentProjectId();
    }
    displayProjects();
    stringifyProjectList();
}