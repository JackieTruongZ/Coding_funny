export class FizzBuzz {

    constructor() {

    }

    public solute(n: number) {
        for (let i = 1; i <= n; i++) {
            // multiple of both 3 and 5
            if (i % 3 == 0 && i % 5 == 0) {
                console.log("FizzBuzz");
            }
            // multiple of 3 not 5
            if (i % 3 == 0 && i % 5 != 0) {
                console.log("Fizz");
            }
            // multiple of 5 and 3
            if (i % 3 != 0 && i % 5 == 0) {
                console.log("Buzz");
            }
            // not multiple of both 3 and 5
            if (i % 3 != 0 && i % 5 != 0) {
                console.log(i);
            }
        }
    }
}