const course = {
    title : 'javascript',
    leacture : 10,
    notes : { // obj inside obj
        intro : 'Welcome',
        chap1 : 'Hello world'
    },
    enroll : function () {
        console.log('you are enrolled 1')
    },
    enroll2(){ // same as prev
        console.log("you are enrolled 2")
    },
}

const prop = 'title'; // for variable name
console.log(course.title);
console.log(course[prop]);
console.log(course.notes.chap1);
console.log(course.notes.chap2);

for(const i in course.notes){
    console.log(i," -> ",course.notes[i]);
}

// add property
course.notes.chap2 = 'Js data-types'
console.log(JSON.stringify(course.notes));

delete course.notes.chap2
// delete property
console.log(JSON.stringify(course.notes));
