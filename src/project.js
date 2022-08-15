import { displayProjects, displayTodos, stringifyProjectList } from "./interface";

export let myProjectList = []

export default class Todo {
    constructor(title, description, dueDate, priority, color = 'black', check = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.color = color;
        this.check = check;
    }
}

export class Project {
    constructor(name, todoList = []) {
        this.name = name;
        this.todoList = todoList;
    }
}

export const updateProjectId = () => {
    for(let i = 0; i < myProjectList.length; i++) {
        myProjectList[i].id = i;
    }
}

export const removeProject = (project) => {
    myProjectList.splice(project.id, 1);
    for(let i = 0; i < myProjectList.length; i++) {
        myProjectList[i].id = i;
    }
}

export const pushTodo = (project, todo) => {
    todo.id = project.todoList.length;
    project.todoList.push(todo);
}

export const removeTodo = (project, todoTitle) => { //want to change so that uses id instead
    for(let i = 0; i < project.todoList.length; i++) {
        if (todoTitle === project.todoList[i].title) {
            project.todoList.splice(i, 1);
        }
    }
    updateProjectId();
}

export const projectSubmit = () => {
    const projectName = document.querySelector('.project-name').value;
    const project = new Project(projectName)
    myProjectList.push(project);

    const background = document.querySelector('.background');
    const body = document.querySelector('body');
    body.removeChild(background);

    displayProjects();
    stringifyProjectList();
}

export const todoSubmit = (project) => {
    const title = document.querySelector('.todo-title-input').value;
    const description = document.querySelector('.todo-description-input').value;
    const date = document.querySelector('.todo-date-input').value;
    const priority = document.querySelector('.todo-priority-input').value;
    const color = document.querySelector('.todo-color-input').value;
    const todo = new Todo(title, description, date, priority, color);
    todo.id = project.todoList.length;
    project.todoList.push(todo);

    const background = document.querySelector('.background');
    const body = document.querySelector('body');
    body.removeChild(background);

    displayTodos(project);
    displayProjects();
    stringifyProjectList();
}

export const changeProject = (project) => {
    displayTodos(project);
}