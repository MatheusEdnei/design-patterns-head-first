import {MallardDuck} from "./domain/mallard-duck";
import {ModelDuck} from "./domain/model-duck";
import {FlyRocketPowered} from "./models/fly-rocket-powered";

function main() : void {
    const mallard = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();
    mallard.swim();

    const model = new ModelDuck();
    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
}

main();

/*
* Contexto:
* Possuimos uma classe Duck que é utilizada por vários tipos de patos (patos de borracha, patos reais, patos foguetes).
* Cada um desses tipos possui uma forma diferente de voar e de grasnar. Devido a isso precisamos implementar
* duas interfaces para definir os métodos responsáveis por voar e grasnar. Após isso, temos as implementações concretas
* das classes. No main() passamos o objeto especifico, que será recebido pela classe Duck e executado.
* */
