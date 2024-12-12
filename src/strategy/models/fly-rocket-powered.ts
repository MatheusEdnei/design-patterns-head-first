import {FlyBehavior} from "../interfaces/fly-behavior";

export class FlyRocketPowered implements FlyBehavior{
    fly() {
        console.log('I am fly with a rocket!');
    }
}
