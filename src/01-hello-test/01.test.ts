import {multiply, splitIntoWords, sum} from "./01";


let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {

    // action
    const result1 = sum(a, b)
    const result2 = sum(b, c)

    // expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})


test('multiply should be correct', () => {

    // action
    const result1 = multiply(a, b)
    const result2 = multiply(b, c)

    // expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})


test('splitIntoWords should be correct', () => {
    // data
    const sentence1 = 'hello my friends'
    const sentence2 = 'I will get a good job offer'

    //action
    const result1 = splitIntoWords(sentence1)
    const result2 = splitIntoWords(sentence2)

    // expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

    expect(result2.length).toBe(7)
    expect(result2[0]).toBe('I')
    expect(result2[1]).toBe('will')
    expect(result2[2]).toBe('get')
    expect(result2[3]).toBe('a')
    expect(result2[4]).toBe('good')
    expect(result2[5]).toBe('job')
    expect(result2[6]).toBe('offer')
})