import { jectFill } from "../../../ject/ject.mjs";
import { YJect } from "../../../ject/YJect/YJect.mjs";
import { mathSigmoid } from "../../math/math.mjs";
import { YNeuron } from "./YNeuron/YNeuron.mjs";

/**
 * @typedef TBLayer
 * @prop {any} _
 * @typedef {DLayer&TBLayer} TLayer
*/

class SLayer extends YJect {



};
class DLayer extends SLayer {

    /**
     * Нейроны.
     * @type {Array<YNeuron>}
    */
    neurons;
    /**
     * Функция активации.
     *
     * - По умолчанию `mathSigmoid`
     * @type {function()}
    */
    activation = mathSigmoid;

};
class ILayer extends DLayer {



};
class MLayer extends ILayer {



};
class FLayer extends MLayer {

    /**
     * Контсруктор класса `YLayer`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TLayer} t
    */
    constructor(t = {}) {

        t = FLayer.#before(Object.values(arguments));

        FLayer.#deceit(t);

        super(t);

        FLayer.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TLayer&DLayer} */
            const r = {};

            switch (t.length) {

                default: r.neurons = t.splice(1);
                case 1: r.activation = t[0];

            };

            return r;

        } else return {};

    };
    /** @arg {TLayer} t @this {YLayer} */
    static #deceit(t) {

        try {

            FLayer.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TLayer} t @this {YLayer} */
    static #verify(t) {

        const {



        } = t;

        FLayer.#handle(t);

    };
    /** @arg {TLayer} t @this {YLayer} */
    static #handle(t) {

        console.log(t);

        if (t.neurons.length) t.neurons = t.neurons.map(n => new YNeuron(t.activation, ...n));

    };
    /** @arg {TLayer} t @this {YLayer} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 *
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YLayer extends FLayer {

    /**
     * Метод получения данных.
     * - Версия `0.0.0`
     * @arg {...number} numbers Входные данные.
     * Кол-во числовых данных должно соответствовать кол-ву входов в нейронах.
    */
    feed(...numbers) {

        if (numbers.length) return this.neurons.map(n => n.feed(...numbers));
        else return null;

    };

};