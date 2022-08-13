
import * as CRUD from "./js/crud-provider";

CRUD.getUser( 1 ).then( console.log );
CRUD.createUser({
    name: 'Giordan',
    job: 'Developer'
}).then( console.log );
CRUD.updateUser(1, {
    name: 'Giuseppi',
    job: 'Baker'
}).then( console.log );
CRUD.deleteUser( 1 ).then( console.log );
