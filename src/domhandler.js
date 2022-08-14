import { projectList } from ".";
import { projectSubmit, todoSubmit } from "./events";

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
        del.addEventListener('click', function() {pList.projectList.splice(i,1) 
            projectPopulate(pList) 
            todoPopulate(pList.projectList[0])});

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
}

export const todoPopulate = (project) => {
    const todos = document.querySelector('#todo-holder');
    while(todos.firstChild) {
        todos.removeChild(todos.firstChild);
    }
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
    addTodo.addEventListener('click', function() {newTodo(project)})
    todos.appendChild(addTodo);
}

export const newProject = () => {
    const body = document.querySelector('body');

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

export const newTodo = (project) => {
    const body = document.querySelector('body');

    const background = document.createElement('div');
    background.classList.add('background');

    background.addEventListener('click', function(){body.removeChild(background);});

    const todoInterface = document.createElement('div');
    todoInterface.setAttribute('onclick', 'event.stopPropagation()');
    todoInterface.classList.add('add-interface');

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title');
    title.classList.add('todo-title-input');

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('placeholder', 'Description');
    description.classList.add('todo-description-input');

    const date = document.createElement('input');
    date.classList.add('todo-date-input');
    date.setAttribute('type', 'date');

    const priority = document.createElement('select');
    const low = document.createElement('option');
    low.setAttribute('value', 'Low');
    low.innerHTML = 'Low';
    const medium = document.createElement('option');
    medium.setAttribute('value', 'Medium');
    medium.innerHTML = 'Medium';
    const high = document.createElement('option');
    high.setAttribute('value', 'High');
    high.innerHTML = 'High';
    priority.appendChild(low);
    priority.appendChild(medium);
    priority.appendChild(high);
    priority.classList.add('todo-priority-input');

    const todoSubmitButton = document.createElement('button');
    todoSubmitButton.setAttribute('type', 'submit');
    todoSubmitButton.innerHTML = 'Add';
    todoSubmitButton.addEventListener('click', function() {todoSubmit(project, projectList)});

    todoInterface.appendChild(title);
    todoInterface.appendChild(description);
    todoInterface.appendChild(date);
    todoInterface.appendChild(priority);
    todoInterface.appendChild(todoSubmitButton);
    background.appendChild(todoInterface);
    body.insertBefore(background, body.firstChild);
}