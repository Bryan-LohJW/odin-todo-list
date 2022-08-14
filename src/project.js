export class Project {
    constructor(name, todoList = []) {
        this.name = name;
        this.todoList = todoList;
    }
}

export class ProjectList {
    constructor() {
        this.projectList = [];
    }
    pushProject (project) {
        this.projectList.push(project);
    }
    removeProject  (project) {
        for(let i = 0; i < this.projectList.length; i++) {
            if(project.name === this.projectList[i].name) {
                this.projectList.splice(i,1);
            }
        }
    }
}

export const pushTodo = (project, todo) => {
    todo.id = project.todoList.length;
    project.todoList.push(todo);
}

export const removeTodo = (project, todoTitle) => {
    for(let i = 0; i < project.todoList.length; i++) {
        if (todoTitle === project.todoList[i].title) {
            project.todoList.splice(i, 1);
        }
    }
    for(let i = 0; i < project.todoList.length; i++) {
        project.todoList[i].id = i;
    }
}
