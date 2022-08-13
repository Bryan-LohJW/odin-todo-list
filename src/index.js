import Todo from './todo';
import {Project, addTodo, removeTodo, ProjectList} from './project';
import {baseline, projectPopulate, todoPopulate} from './domhandler';
import './style.css';

let todo = new Todo('title', 'desc', 'date', 'prio');
let todo2 = new Todo('title1', 'desc', 'date', 'prio');
let todo3 = new Todo('title2', 'desc', 'date', 'prio');
let todo4 = new Todo('title3', 'desc', 'date', 'prio');
let project = new Project('Hello');
let projectList = new ProjectList();

let todo1 = new Todo('title', 'desc', 'date', 'prio');
let todo21 = new Todo('title1', 'desc', 'date', 'prio');
let todo31 = new Todo('title2', 'desc', 'date', 'prio');
let todo41 = new Todo('title3', 'desc', 'date', 'prio');
let project1 = new Project('Hello');

addTodo(project, todo);
addTodo(project, todo2);
addTodo(project, todo3);
addTodo(project, todo4);

addTodo(project1, todo1);
addTodo(project1, todo21);
addTodo(project1, todo31);
addTodo(project1, todo41);

projectList.addProject(project);
projectList.addProject(project1);

removeTodo(project, 'title2');

console.log(project.todoList[0]);
console.log(project.todoList[1]);
console.log(project.todoList[2]);
console.log(project.todoList[3]);
console.log(projectList);
console.log(projectList.projectList[0]);

baseline();
projectPopulate(projectList);
todoPopulate(project1);
