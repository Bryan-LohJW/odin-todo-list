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