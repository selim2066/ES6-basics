class Gari {
    constructor(chaka, size) {
        this.c = chaka;
        this.s = size;
        console.log(this.c)
    }
    move() {
        console.log(`ei garita ${this.c} chakkar gari, size tar ${this.s}`)
    }
}

class Bus extends Gari {
    constructor(seat, ticketPrice) {
        super(12, 'boro');
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

const typeGari = new Gari(26,'bishal boro')
console.log(typeGari)

const amarGari = new Bus(50, 500)
amarGari.move()

/* when you use new, JavaScript does 3 things:

Creates a new empty object → {}

Sets this to point to that object

Runs the function (or constructor)

Returns the object */ 

