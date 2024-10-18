const uerInfo =[101, 'Ema', 'John', true, '2023']

const person: [number, string, string, boolean, string] = [101, 'Ema', 'John', true, '2023']

console.log(person[0])

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 7, 1]

const match = (arr1: number [], arr2: number []) =>{
    return arr1.filter(item => arr2.includes(item))
}
console.log(match(arr1, arr2))