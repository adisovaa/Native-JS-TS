export type AddressType = {
    name: string
    age: number
    address: {
        title: string
    }
}

export type UserType = {
    name: string
    age: number
}

let user: UserType = {
    name: 'Alexa',
    age: 23,
}

function increaseAge (user: UserType) {
    user.age++
}