export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Alexa Amazonova', age: 22},
    {name: 'Alisa Yandexova', age: 33},
    {name: 'Siri Applova', age: 44},
]

const dimychTransformator = (people: ManType) => {
    return {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: people.name.split(' ')[0],
        lastName: people.name.split(' ')[1],
    }
}

const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'John', lastName: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'John', lastName: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alex', lastName: 'Daniel'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dimych', lastName: 'Tarasov'
    }
]


const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]


const dev4 = people.map(people => {

})

const message = people.map(m => `Hello ${m.name.split}`)
