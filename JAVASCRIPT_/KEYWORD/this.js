
let laptop = {
    cpu : 'i5',
    ram : 16,
    brand : "hp",
    getConfig: function(){
        // console.log(cpu);  // gives error
        console.log(this.cpu); // this refer to current object property 
        // console.log(laptop.cpu); // same as 
    }
}
laptop.getConfig()


// Example 
let student1 = {
    name : 'om',
    marks : 88,
    compareMarks : function(other){
        if(this.marks > other.marks) console.log(this.name + " is topper");
        else console.log(other.name + " is topper");
    }
}
let student2 = {
    name : 'kaushal',
    marks : 90,
    compareMarks : function(other){
        if(this.marks > other.marks) console.log(this.name + " is topper");
        else console.log(other.name + " is topper");
    }
}
student1.compareMarks(student2)
student2.compareMarks(student1)

