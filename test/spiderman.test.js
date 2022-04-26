/* describe("Test Suit Dummy Description", () => {
    test('Case 1 Dummy', () => {
        const resultOfSomething = 1 + 2
        expect(resultOfSomething).toBe(18);
    });
}) */

const Spiderman = require('../app/spiderman')

describe("Unit Test for Spiderman class",() => {
    test('1) Create an spiderman object', () => {

        //Aqui escribiremos el cogigo que queremos usar tal cuál
        //Quiero poder instanciar un objeto Spiderman con esta información
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2 , "Sony" )

        //Validaremos que este código funcione de la forma esperada 
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    });

    test('2) Use the methor getInfo', () => {
        const tomHolland =new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
})

