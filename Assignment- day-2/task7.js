function findPassStudents(students){
    return students.filter(student=>student.score>=60);

}

const students=[
    {name:'x',score:80},
    {name:'y',score:8},
    {name:'z',score:65},
    {name:'u',score:70},
    {name:'v',score:52}
]
const passedStudents=findPassStudents(students)
console.log(passedStudents);