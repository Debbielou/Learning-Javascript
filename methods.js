const student = {
    first_name: 'Debz',
    last_name: 'Cox',
    middle_name: 'Sweet',
    house_color: 'Yellow',
    grade: 'Year 10',
    blood_pressure: '200/90',
    fullName: function() {
        return this.first_name + " " + this.last_name + " " + this.middle_name;
    }
};
console.log(student.fullName());

student.health = function(){
    if (this.blood_pressure == '120/80'){
        return "You are healthy";
    } else {
        return "You are not healthy";
    }
}
console.log(student.health());

console.log(student.house_color.toUpperCase());
