
export function sum(a: number, b: number) {
    return a + b
}

export function multiply(a: number, b: number) {
    return a * b
}

export function splitIntoWords(sentence: string) {
    return sentence.split(' ').map(w => w.replace('!', ''))
}


const sentence = 'Hello my friends'
const result = splitIntoWords(sentence)
console.log(result)