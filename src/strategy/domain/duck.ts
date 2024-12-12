import { QuackBehavior } from "../interfaces/quack-behavior";
import {FlyBehavior} from "../interfaces/fly-behavior";
export abstract class Duck {
    quackBehavior: QuackBehavior;
    flyBehavior: FlyBehavior;

    constructor() {
    }

    abstract display(): void;

    setFlyBehavior(flyBehavior: FlyBehavior): void {
        this.flyBehavior = flyBehavior;
    }

    setQuackBehavior(quackBehavior: QuackBehavior): void {
        this.quackBehavior = quackBehavior;
    }
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
