import {FlyBehavior} from "../interfaces/fly-behavior";

export class FlyWithWings implements FlyBehavior {
    fly() {
        console.log('flyWithWings');
    }
}
