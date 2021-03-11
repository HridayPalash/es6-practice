class Parent {
    constructor() {
        this.fatherNamename = "Schwerznegger";
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName () {
        return this.name + " " + this.fatherNamename;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName(), baby2.getFullName());

