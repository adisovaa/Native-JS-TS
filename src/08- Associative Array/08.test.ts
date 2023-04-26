type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType
beforeEach(() => {
    users = {
        '0': {id: 123, name: 'Siri'},
        '1': {id: 223, name: 'Alexa'},
        '2': {id: 345345, name: 'Alisa'},
        '3': {id: 423231, name: 'Samsa'}
    }
})


test('should update corresponding user', () => {
    users['1'].name = 'Alexa'

    expect(users['1'].name).toBe('Alexa')
    expect(users['1']).toEqual({id: 223, name: 'Alexa'})

})


test('should remove corresponding user', () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
})