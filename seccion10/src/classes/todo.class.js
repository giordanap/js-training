

export class Todo {

    static fromJson({ id, task, done, created }) {

        const tempTodo = new Todo( task );

        tempTodo.id      = id;
        tempTodo.done    = done;
        tempTodo.created = created;
        
        return tempTodo;

    }

    constructor( task ) {

        this.task = task;

        this.id   = new Date().getTime(); // 13513548
        this.done = false;
        this.created = new Date();

    }

    printClass() {

        console.log(`${ this.task } - ${ this.id }`);
        
    }

}

