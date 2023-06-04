// function чистая

let state = {
    name: 'it-kamasutra',
    age: 1,
    school: {
        student: [{}, {}, {}],
        address: 'Bishkek',
        director: {
            name: 'Lorem'
        }
    }
}

let b = {
    ...state,
    school: {
        school: {...state.school, school: 'Stanford'},
        director: {...state.school.director, director: 'Siri'},
        student: state.school.student.map(el => {
            return {...el}
        })
    },
}


let a1 = [1, 2, 3, 4, 5]
let b1 = [...a1]


let a2 = [{name: 'D', a: 'we'}, {name: 'S'}]
// let b2 = [...a2]
let b2 = a2.map(el => {
    return {
        ...el,
        a: {...el}
    }
})

b2[0].name = 'N'



