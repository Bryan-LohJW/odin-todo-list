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

export let myProjectList = []

export const removeProject = (project, projectList = myProjectList) => {
    for(let i = 0; i < projectList.length; i++) {
        if(project.name === projectList[i].name) {
            projectList.splice(i,1);
        }
    }
    for(let i = 0; i < projectList.length; i++) {
        projectList[i].id = i;
    }
}

// export class ProjectList {
//     constructor() {
//         this.projectList = [];
//     }
//     pushProject (project) {
//         this.projectList.push(project);
//     }
//     removeProject  (project) {
//         for(let i = 0; i < this.projectList.length; i++) {
//             if(project.name === this.projectList[i].name) {
//                 this.projectList.splice(i,1);
//             }
//         }
//         for(let i = 0; i < this.projectList.length; i++) {
//             this.projectList[i].id = i;
//         }
//     }
// }

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
    for(let i = 0; i < project.todoList.length; i++) {
        project.todoList[i].id = i;
    }
}

export const projectSubmit = (myProjectList = myProjectList) => {
    const projectName = document.querySelector('.project-name').value;
    const project = new Project(projectName)
    myProjectList.push(project);

    const background = document.querySelector('.background');
    const body = document.querySelector('body');
    body.removeChild(background);

    projectPopulate(myProjectList); //refactor
}

export const todoSubmit = (project, projectList = myProjectList) => {
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

    todoPopulate(project); //refactor
    projectPopulate(projectList); //refactor
}

export const changeProject = (project) => {
    todoPopulate(project); //refactor
}