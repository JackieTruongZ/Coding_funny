import { FizzBuzz } from "./fizzbuzz";

export class Main {
    // using singleton pattern !!!

    public static instance: Main;
    private constructor() {

    }

    public static getInstance() {
        if (!Main.instance) {
            Main.instance = new Main();
        }
        return Main.instance;
    }

    public mainFun() {
        const result = new FizzBuzz();
        result.solute(15);
    }
}


const solution = Main.getInstance();
solution.mainFun();
