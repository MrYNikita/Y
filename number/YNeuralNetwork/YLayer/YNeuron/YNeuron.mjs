import { jectFill } from "../../../../ject/ject.mjs";
import { YJect } from "../../../../ject/YJect/YJect.mjs";

/**
 * @typedef TBNeuron
 * @prop {any} _
 * @typedef {DNeuron&TBNeuron} TNeuron
*/

class SNeuron extends YJect {



};
class DNeuron extends SNeuron {

    /**
     * Порог.
     *
     * По умолчанию `1`.
     * @type {number}
    */
    bias = 1;
    /**
     * Веса.
     *
     * Каждый отдельный вес выступает входом в нейрон.
     * - По умолчанию `[]`
     * @type {Array<number>}
    */
    weights = [];
    /**
     * Функция активации.
     *
     * Может быть указан индивидуально для каждого нейрона или пропущена.
     * Значение может быть пропущено только в том случае, если нейрон находится в слое.
     * При таком обстоятельстве нейрон возьмет функцию активации в слое.
     * @type {function():number}
    */
    activation;

};
class INeuron extends DNeuron {

    /**
     * Дельта.
     * @type {number}
    */
    delta = 0;

};
class MNeuron extends INeuron {



};
class FNeuron extends MNeuron {

    /**
     * Контсруктор класса `YNeuron`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TNeuron} t
    */
    constructor(t = {}) {

        t = FNeuron.#before(Object.values(arguments));

        FNeuron.#deceit(t);

        super(t);

        FNeuron.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TNeuron&DNeuron} */
            const r = {};

            switch (t.length) {

                default: r.weights = t.splice(2);
                case 2: r.bias = t[1];
                case 1: r.activation = t[0];

            };

            return r;

        } else return {};

    };
    /** @arg {TNeuron} t @this {YNeuron} */
    static #deceit(t) {

        try {

            FNeuron.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TNeuron} t @this {YNeuron} */
    static #verify(t) {

        const {



        } = t;

        FNeuron.#handle(t);

    };
    /** @arg {TNeuron} t @this {YNeuron} */
    static #handle(t) {



    };
    /** @arg {TNeuron} t @this {YNeuron} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YNeuron`
 *
 * Данный класс предназначен для создания нейронов и взаимодействия с ними.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * - Пространство `number`
*/
export class YNeuron extends FNeuron {

    /**
     * Метод получения данных.
     * - Версия `0.0.0`
     * @arg {...number} numbers
    */
    feed(...numbers) {

        return this.activation(this.weights.map((w, i) => w * numbers[i]).reduce((p, c) => p + c, this.bias));

    };

};