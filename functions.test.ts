
const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should have 5 elements', () =>{
        let elem = shuffleArray(['candy', 'food', 'toys', 'clothes', 'shoes']).length
        expect(elem).toBe(5)
    });

    test('shuffleArray should contain the name Rain', () => {
        let arr = shuffleArray(['Andy', 'Mona', 'Lisa', 'Rain', 'King'])
        expect(arr).toContain('Rain')
    });
})