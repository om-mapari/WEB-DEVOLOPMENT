//* 1) function inside object
const course = {
    leacture : 10,
    section : 3,
    title : 'javascript',
    notes : {
        intro : 'welcome',
        chap1 : 'data-types'
    },
    enroll(){
        console.log("you are enrolled");
    }
}

course.enroll()
console.log(course);


//* 2) factory function : for multiple course creation 
function createCourse(title) {
    const course = {
        leacture: 10,
        section: 3,
        title: title,
    }
    return course;
}

const course1 = createCourse('JavaScript');
console.log(course1);


//* 3) constructor function : 
function Course(title){
    this.title = title,
    this.enroll = function (){  
        console.log('you are enrolled ');
    }
}

const course2 = new Course('javaScript')
console.log(course2);