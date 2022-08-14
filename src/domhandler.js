import { projectList } from ".";
import { projectSubmit } from "./events";


export const baseline = () => {
    const body = document.querySelector('body');

    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    const project = document.createElement('div');
    project.setAttribute('id', 'project-holder');

    const todo = document.createElement('div');
    todo.setAttribute('id', 'todo-holder');

    content.appendChild(project);
    content.appendChild(todo);
    body.appendChild(content);
}

export const projectPopulate = (pList) => {
    const projects = document.querySelector('#project-holder');
    while(projects.firstChild) {
        projects.removeChild(projects.firstChild);
    }

    for(let i = 0; i < pList.projectList.length; i++) {
        const project = document.createElement('div');
        project.classList.add('project');

        const name = document.createElement('h2');
        name.classList.add('project-name');
        name.innerHTML = `${pList.projectList[i].name} - (${pList.projectList[i].todoList.length})`;

        const del = document.createElement('div');
        del.classList.add('project-del');
        del.innerHTML = '(X)';

        project.appendChild(name);
        project.appendChild(del);
        projects.appendChild(project);
        name.addEventListener('click', function() {todoPopulate(pList.projectList[i])});
    }
    const addProj = document.createElement('div');
    addProj.setAttribute('id', 'add-project');
    addProj.innerHTML = '(+)';
    projects.appendChild(addProj);
    addProj.addEventListener('click', function(){newProject()});
    // _projectPopulateEvent();
}

export const todoPopulate = (project) => {
    const todos = document.querySelector('#todo-holder');
    for(let i = 0; i < project.todoList.length; i++) {
        const todo = document.createElement('div');
        todo.classList.add('todo');

        const check = document.createElement('input');
        check.classList.add('check');
        check.setAttribute('type', 'checkbox');

        const title = document.createElement('p');
        title.classList.add('title');
        title.innerHTML = project.todoList[i].title;

        const description = document.createElement('p');
        description.classList.add('description');
        description.innerHTML = project.todoList[i].description;

        const date = document.createElement('p');
        date.classList.add('date');
        date.innerHTML = project.todoList[i].dueDate;

        const priority = document.createElement('p');
        priority.classList.add('priority');
        priority.innerHTML = project.todoList[i].priority;

        const edit = document.createElement('div');
        edit.classList.add('todo-edit');
        edit.innerHTML = 'Edit';

        todo.appendChild(check);
        todo.appendChild(title);
        todo.appendChild(description);
        todo.appendChild(date);
        todo.appendChild(priority);
        todo.appendChild(edit);
        todos.appendChild(todo);
    }
    const addTodo = document.createElement('div');
    addTodo.setAttribute('id', 'add-todo');
    addTodo.innerHTML = '(+)';
    todos.appendChild(addTodo);
}

export const newProject = () => {
    const body = document.querySelector('body');

    const addProject = document.querySelector('#add-project');

    const background = document.createElement('div');
    background.classList.add('background');

    background.addEventListener('click', function(){body.removeChild(background);});

    const projectInterface = document.createElement('div');
    projectInterface.setAttribute('onclick', 'event.stopPropagation()');
    projectInterface.classList.add('add-interface');

    const projectName = document.createElement('input');
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('placeholder', 'My New Project');
    projectName.classList.add('project-name');
    
    const projectNameSubmit = document.createElement('button');
    projectNameSubmit.setAttribute('type', 'submit');
    projectNameSubmit.innerHTML = 'Create';
    projectNameSubmit.addEventListener('click', function() {projectSubmit(projectList)});

    projectInterface.appendChild(projectName);
    projectInterface.appendChild(projectNameSubmit);
    background.appendChild(projectInterface);
    body.insertBefore(background, body.firstChild);
}

const _projectPopulateEvent = () => {
    const projects = document.querySelectorAll('.project-name');
    for(let i = 0; i < projects.length; i++) {
        projects[i].addEventListener('click', function() {todoPopulate(pList[i])});
    }
}