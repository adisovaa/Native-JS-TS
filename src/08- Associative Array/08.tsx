export const usersObj = {
    '0': 'Siri',
    '1': 'Alexa',
    '2': 'Alisa',
    '3': 'Samsa'
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '0': {id: 123, name: 'Siri'},
    '1': {id: 223, name: 'Alexa'},
    '2': {id: 345345, name: 'Alisa'},
    '3': {id: 423231, name: 'Samsa'}
}
let user = {id: 100500, name: 'Lorem'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'John'

export const usersArray = [
    {id: 123, name: 'Siri'},
    {id: 223, name: 'Alexa'},
    {id: 345345, name: 'Alisa'},
    {id: 23, name: 'Samsa'}
]

// usersArray.find(u => u.id === 23)
// let usersCopy = [...usersArray, user]
// let usersCopy = [...usersArray.filter(), user]
// let users = usersArray.filter(u => u.id !== user.id)
