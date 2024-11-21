import { QuackBehavior } from "../interfaces/quack-behavior";
import {FlyBehavior} from "../interfaces/fly-behavior";
export abstract class Duck {
    quackBehavior: QuackBehavior;
    flyBehavior: FlyBehavior;

    constructor() {
    }

    abstract display(): void;

    performQuack(): void {
        this.quackBehavior.quack();
    }

    performFly(): void {
        this.flyBehavior.fly();
    }

    swim(): void {
        console.log('All ducks float, even decoys');
    }
}
