class Task {
    
    id = "";
    title = "";
    status = false;
    tasks = [];
    duedate = "";

    constructor (id, title, status, tasks, duedate) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.tasks = tasks;
        this.duedate = duedate;
    }
}