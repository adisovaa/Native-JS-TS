import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";
import {StudentType} from "../02-object-test/02";
import exp from "constants";

let student: StudentType;
beforeEach(() => {
    student = {
        name: 'Alex',
        age: 23,
        isActive: false,
        address: {
            street: '130 Troitskaya',
            city: {
                title: 'Bishkek',
                countryTitle: 'Kyrgyzstan'
            }
        },
        technologies: [
            {id: 1, title: 'HTML'},
            {id: 2, title: 'CSS'},
            {id: 3, title: 'React'},
        ]
    }
})
test('new skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})


test('student should be active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})


test('doest student live in the city?', () => {
    let result1 = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Bishkek')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})


