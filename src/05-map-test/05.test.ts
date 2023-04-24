import {ManType} from "./05";

let people: Array<ManType>
beforeEach(() => {
    people = [
        {name: 'Alexa Amazonova', age: 22},
        {name: 'Alisa Yandexova', age: 33},
        {name: 'Siri Applova', age: 44},
    ]
})

test('should get array of greeting message', () => {
    const messages = people.map(m => `Hello ${m.name.split}`)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello')
    expect(messages[1]).toBe('Hello')
    expect(messages[2]).toBe('Hello')
})