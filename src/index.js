import Todo from './todo';
import { addTodo, removeTodo} from './project';
import Project from './project';

let todo = new Todo('title', 'desc', 'date', 'prio');
let todo2 = new Todo('title1', 'desc', 'date', 'prio');
let todo3 = new Todo('title2', 'desc', 'date', 'prio');
let todo4 = new Todo('title3', 'desc', 'date', 'prio');
let project = new Project('Hello');

addTodo(project, todo);
addTodo(project, todo2);
addTodo(project, todo3);
addTodo(project, todo4);

removeTodo(project, 'title2');

console.log(project.todoList[0]);
console.log(project.todoList[1]);
console.log(project.todoList[2]);
console.log(project.todoList[3]);
