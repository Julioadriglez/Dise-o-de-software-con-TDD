/* describe("Test Suit Dummy Description", () => {
    test('Case 1 Dummy', () => {
        const resultOfSomething = 1 + 2
        expect(resultOfSomething).toBe(18);
    });
}) */

const Spiderman = ('./../app/spiderman')

describe("Unit Test for Spiderman class",() => {
    test('1) Create an spiderman object', () => {

        //Aqui escribiremos el cogigo que queremos usar tal cuál
        //Quiero poder instanciar un objeto Spiderman con esta información
        const andrewGarfield = new Spiderman("Spider,am Sony", 31, "Andrew Garfield", 2, "Sony" )

        //Validaremos que este código funcione de la forma esperada 
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).tobe(31)
        expect(andrewGarfield.studio).tobe("Sony")
    });
})