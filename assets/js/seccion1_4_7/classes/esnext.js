

class Rectangle {

    #area = 0;

    constructor( base = 0, height = 0 ) {
        
        this.base = base;
        this.height = height;

        this.#area = base * height;

    }

}


const rectangule = new Rectangle( 10, 15 );
// rectangule.#area = 100;

console.log( rectangule );



