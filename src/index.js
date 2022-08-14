import Todo from './todo';
import {Project, pushTodo, removeTodo, ProjectList} from './project';
import {baseline, projectPopulate, todoPopulate, newProject} from './domhandler';
import './style.css';
import {projectSubmit} from './events';

let todo = new Todo('title', 'desc', 'date', 'prio');
let todo2 = new Todo('title1', 'desc', 'date', 'prio');
let todo3 = new Todo('title2', 'desc', 'date', 'prio');
let todo4 = new Todo('title3', 'desc', 'date', 'prio');
let project = new Project('Hello');
export let projectList = new ProjectList();

let todo1 = new Todo('title', 'desc', 'date', 'prio');
let todo21 = new Todo('title1', 'desc', 'date', 'prio');
let todo31 = new Todo('title2', 'desc', 'date', 'prio');
let todo41 = new Todo('title3', 'desc', 'date', 'prio');
let project1 = new Project('Hello');

pushTodo(project, todo);
pushTodo(project, todo2);
pushTodo(project, todo3);
pushTodo(project, todo4);

pushTodo(project1, todo1);
pushTodo(project1, todo21);
pushTodo(project1, todo31);
pushTodo(project1, todo41);

projectList.pushProject(project);
projectList.pushProject(project1);

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