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

export const todoSubmit = (project) => {
    const title = document.querySelector('.todo-title-input').value;
    const description = document.querySelector('.todo-description-input').value;
    const date = document.querySelector('.todo-date-input').value;
    const priority = document.querySelector('.todo-priority-input').value;
    const todo = new Todo(title, description, date, priority);
    pushTodo(project, todo);

    const background = document.querySelector('.background');
    const body = document.querySelector('body');
    body.removeChild(background);

    todoPopulate(project);
}

export const changeProject = (project) => {
    todoPopulate(project);
}