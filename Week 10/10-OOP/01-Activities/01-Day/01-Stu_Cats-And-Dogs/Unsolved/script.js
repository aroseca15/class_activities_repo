const dogs = {

    raining: true,
    noise: 'Woof!',

    makeNoise() {
    if(this.raining === true) {
        console.log(this.noise)
    }
}
}

dogs.makeNoise()


const cats = {

    raining: true, 
    noise: 'Meow!',

    makeNoise() {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
}

cats.makeNoise()