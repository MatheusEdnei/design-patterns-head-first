import {Duck} from "./duck";
import {FlyNoWay} from "../models/fly-no-way";
import {Quack} from "../models/quack";

export class ModelDuck extends Duck{
    constructor() {
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }

    display() {
        console.log("ModelDuck");
    }
}
