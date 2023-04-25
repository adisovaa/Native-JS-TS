export type PeopleType = {
    name: string
    age: number
    lessons: Array<{ title: string, name: string }>
    address: {
        street: {
            streetName: string
        }
    }
}

let props: PeopleType
beforeEach(() => {
    props = {
        name: 'Alexa',
        age: 23,
        lessons: [{title: '1', name: 'React'}, {title: '2', name: 'React'}, {title: '3', name: 'React'}],
        address: {
            street: {
                streetName: 'Troitskaya 130'
            }
        }
    }
})

test('', () => {

    // const age = props.age
    // const lessons = props.lessons

    const {age, lessons} = props

    const {streetName} = props.address.street
    // const streetName = props.address.street.streetName

    expect(age).toBe(23)
    expect(lessons.length).toBe(3)
    expect(streetName).toBe('Troitskaya 130')
})

test('', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    // const [ls1, ls2] = props.lessons
    // const [ls1, ...restLessons] = props.lessons
    const [, ls2, ...restLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls2.title).toBe('2')
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')

    expect(restLessons[0]).toStrictEqual({title: '3', name: 'React'})
})