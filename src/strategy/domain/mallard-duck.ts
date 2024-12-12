import {Duck} from "./duck";
import {Quack} from "../models/quack";
import {FlyWithWings} from "../models/fly-with-wings";

export class MallardDuck extends Duck {
    quackBehavior = new Quack();
    flyBehavior = new FlyWithWings();

    display() : void {
        console.log('I am a MallardDuck');
    }
}
