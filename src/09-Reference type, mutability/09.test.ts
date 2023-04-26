import {AddressType, UserType} from "./09";

function increaseAge(user: UserType) {
    user.age++
}

test('big test', () => {

    const user: UserType = {
        name: 'Alexa',
        age: 23
    }

    increaseAge(user)
    expect(user.age).toBe(24)


    const superMan = user
    superMan.age = 1000
    expect(superMan.age).toBe(1000)


    const superManName = user
    superManName.name = 'Siri'
    expect(superManName.name).toBe('Siri')
})

test('array test', () => {
    const users = [
        {name: 'Alexa', age: 23},
        {name: 'Alexa', age: 33}
    ]

    const addNewUser = users
    addNewUser.push({name: 'Alisa', age: 34})
    expect(users[2]).toEqual({name: 'Alisa', age: 34})
})

test('reference type test', () => {
    const address = {
        title: 'Bishkek'
    }

    const user1: AddressType = {
        name: 'Alexa',
        age: 23,
        address: address
    }

    const user2: AddressType = {
        name: 'Alexa',
        age: 23,
        address: address
    }

    user2.address.title = 'New York'
    expect(user1.address.title).toBe('New York')
    expect(user2.address.title).toBe('New York')
})

test('reference type array test', () => {
    const address = {
        title: 'Bishkek'
    }

    const user1: AddressType = {
        name: 'Alexa',
        age: 23,
        address: address
    }

    const user2: AddressType = {
        name: 'Alexa',
        age: 23,
        address: address
    }

    const users = [user1, user2, {name: 'Siri', age: 24, address: address}]
    const admin = users
    admin[0].name = 'Alisa'

    expect(user1.name).toBe('Alisa')
})

test('sort array test', () => {
    const letters = ['f', 'e', 'd', 'c', 'b', 'a']
    letters.sort()
    expect(letters).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
})

function passportList(letters: any) {
    const copy = [...letters].sort()
    console.log(copy)
}