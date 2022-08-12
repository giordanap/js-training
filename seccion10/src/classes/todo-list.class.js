import { Todo } from "./todo.class";


export class TodoList {

    constructor() {

        // this.todos = [];
        this.loadLocalStorage();

    }

    newTodo( todo ) {

        this.todos.push( todo );
        this.saveLocalStorage();
    
    }

    deleteTodo( id ) {

        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveLocalStorage();

    }

    checkDone( id ) {

        for( const todo of this.todos ) {

            if ( todo.id == id ) {
                todo.done = !todo.done;
                break;
            }

        }

    }

    deleteTodos() {

        this.todos = this.todos.filter( todo => !todo.done );
        this.saveLocalStorage();

    }

    saveLocalStorage() {

        localStorage.setItem( 'todo', JSON.stringify(this.todos) );

    }

    loadLocalStorage() {

        this.todos = ( localStorage.getItem('todo') )
                        ? JSON.parse( localStorage.getItem('todo') ) 
                        : [];

        this.todos = this.todos.map( Todo.fromJson );

    }

}

