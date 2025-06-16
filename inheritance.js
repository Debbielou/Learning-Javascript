class Person {
    talk() {
        console.log("Hello, I am me!");
    }
}
const me = new Person();
const you = new Person();
me.talk(); // Hello, I am me!
you.talk(); // Hello, I am me!

// Extending the Person class
class Student extends Person {
    talk() {
        console.log("Hello, I am a student!");
    }
}
const student = new Student();
student.talk(); // Hello, I am a student!
// The original Person class is still unchanged
me.talk(); // Hello, I am me!

// Extending the Student class
class GraduateStudent extends Student {
    talk() {
        console.log("Hello, I am a graduate student!");
    }
}
const gradStudent = new GraduateStudent();
gradStudent.talk(); // Hello, I am a graduate student!
// The original Student class is still unchanged
student.talk(); // Hello, I am a student!