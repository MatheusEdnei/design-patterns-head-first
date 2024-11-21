import {QuackBehavior} from "../interfaces/quack-behavior";

export class Squeak implements QuackBehavior {
    quack() {
        console.log('Squeak');
    }
}
