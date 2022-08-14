import { projectPopulate, todoPopulate } from "./domhandler";
import { Project, pushTodo } from "./project";
import Todo from "./todo";

export const projectSubmit = (projectList) => {
    const projectName = document.querySelector('.project-name').value;
    const project = new Project(projectName)
    projectList.pushProject(project);

    const background = document.querySelector('.background');
    const body = document.querySelector('body');
    body.removeChild(background);

    projectPopulate(projectList);
}

export const todoSubmit = (project, projectList) => {
    const title = document.querySelector('.todo-title-input').value;
    const description = document.querySelector('.todo-description-input').value;
    const date = document.querySelector('.todo-date-input').value;
    const priority = document.querySelector('.todo-priority-input').value;
    const color = document.querySelector('.todo-color-input').value;
    console.log(color);
    const todo = new Todo(title, description, date, priority, color);
    pushTodo(project, todo);

    const background = document.querySelector('.background');
    const body = document.querySelector('body');
    body.removeChild(background);

    todoPopulate(project);
    projectPopulate(projectList);
}

export const changeProject = (project) => {
    todoPopulate(project);
}