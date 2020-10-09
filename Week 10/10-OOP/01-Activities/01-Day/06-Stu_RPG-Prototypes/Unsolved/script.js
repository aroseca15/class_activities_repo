function Character (name, profession, age, strength, hitPoints) {
this.name = name;
this.profession = profession;
this.age = age;
this.strength = strength;
this.hitPoints = hitPoints;

};

Character.prototype.printStats = function () {
    console.log(this.name, this.profession, this.age, this.strength, this.hitPoints)
};

const leroyJenkins = new Character('Leroy Jenkins', 'Secret Agent', 65, 100, 30);

const KingBob = new Character('King Bob', 'Minion', 100000, 200000, 25);

KingBob.printStats();

leroyJenkins.printStats();