import {QuackBehavior} from "../interfaces/quack-behavior";

export class Quack implements QuackBehavior{
    quack() {
        console.log("Quack started");
    }
}
