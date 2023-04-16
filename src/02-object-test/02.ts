type CityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    street: string
    city: CityType
}

export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

type TechnologiesType = {
    id: number
    title: string
}

const student: StudentType = {
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

console.log(student.name)
console.log(student.age)
console.log(student.isActive)
console.log(student.address.city.countryTitle)
console.log(student.technologies[2].title)

