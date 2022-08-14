import { addProjectAdder, addSingleProject, addSingleTodo, addTodoAdder, clearProjects, clearTodos } from "./domhandler"
import { myProjectList, removeProject, updateProjectId } from "./project"
import './style.css';

export let currentProjectId = 0;

export const displayProjects = () => {
    clearProjects();
    updateProjectId();
    for(let i = 0; i < myProjectList.length; i++) {
        console.log(myProjectList[i]);
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
    // myProjectList.splice(project.id, 1);
    // for(let i = 0; i < myProjectList.length; i++) {
    //     myProjectList[i].id = i;
    // }
    removeProject(project);
    displayProjects();
}