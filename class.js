// Making object through class function
class student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Barapaika Secondary School";
    }
}
const student1 = new student(63, "Hriday");
const student2 = new student(67, "Nodi");
console.log(student1.name, student2.name);