const {
    returnTwo,
    greeting,
    add
} = require('./functions')




//-----Tests------//

test('This test expects returnTwo to equal 2', () => {
    expect(returnTwo()).toBe(2)
})

test('Should create a string that says Hello, then whatever name is passed in.', () => {
    expect(greeting('James')).toBe('Hello, James.')
    expect(greeting('Jill')).toBe('Hello, Jill.')
})

test('Should return the sum of two numbers that are passed in', () => {
    expect(add(1,2)).toBe(3)
    expect(add(5,9)).toBe(14)
})

