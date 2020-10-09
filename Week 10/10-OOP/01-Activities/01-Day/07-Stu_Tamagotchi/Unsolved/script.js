const DigitalPet = function () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.housecondition = 100;
}

DigitalPet.prototype.feed() = function() {
    if (this.hungry){
        console.log('Belch!');
        this.hungry = false;
        this.sleepy = true;
    }
    else {
        console.log('Save it for later!');
    }
}

DigitalPet.prototype.play() = function () {
    if (this.bored){
        console.log('Belch!');
        this.sleepy = false;
        this.bored = false;
    }
    else {
        console.log('Save it for later!');
    }
}