const Vehicle = require("./vehicle");

class Car extends Vehicle{
    constructor(id, color, passengers) {
        this.color = color;
        this.passengers = passengers;

        super(id, 4, 'HONK')
    }

    checkNumPassengers(){
        if(this.passengers.length > 4){
            console.log('You have too many passengers!')
        }
    }
}









module.exports = Car;