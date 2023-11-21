const sortGradeWise = (input) => {
    let gradeMapping = {
        'A+' : 1,
        'A' : 2,
        'B+' : 3,
        'B' : 4,
        'C+' : 5,
        'C' : 6,
    }
    input.sort((gradeObj1,gradeObj2) =>{
        return gradeMapping[gradeObj1.grade] - gradeMapping[gradeObj2.grade]
    })
    return input
}

let input = [
    {"name":"Anam","grade":"A"},{"name":"Arjun","grade":"A+"},
    {"name":"Iram","grade":"B+"},{"name":"Zia","grade":"C"},
    {"name":"Reah","grade":"B"},{"name":"Karan","grade":"A"},
    {"name":"Mithum","grade":"B"},{"name":"Ankur","grade":"B+"}
]

let output = sortGradeWise(input)
console.log(output)
