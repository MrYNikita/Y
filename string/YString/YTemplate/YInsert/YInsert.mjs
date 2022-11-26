import { configString } from "../../../../config.mjs";
import { jectFill } from "../../../../ject/ject.mjs";

/**
 * @typedef TBInsert
 * @prop {any} _
 * @typedef {DInsert&TBInsert} TInsert
*/

class SInsert {



};
class DInsert extends SInsert {

    /**
     * Ключ.
     *
     * @type {string}
    */
    key;
    /**
     * Значение.
     * @type {string|number|function():string|number}
    */
    value;

};
class IInsert extends DInsert {



};
class FInsert extends IInsert {

    /**
     * Контсруктор класса `YInsert`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TInsert} t
    */
    constructor(t = {}) {

        t = FInsert.#before(Object.values(arguments));

        FInsert.#deceit(t);

        super(t);

        FInsert.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TInsert} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2: r.value = t[1];
                case 1: r.key = t[0];

            };

            return r;

        } else return {};

    };
    /** @param {TInsert} t @this {YInsert} */
    static #deceit(t) {

        try {

            FInsert.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TInsert} t @this {YInsert} */
    static #verify(t) {

        const {



        } = t;

        FInsert.#handle(t);

    };
    /** @param {TInsert} t @this {YInsert} */
    static #handle(t) {



    };
    /** @param {TInsert} t @this {YInsert} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};
class MInsert extends FInsert {



};

/**
 *
 * - Тип `SDIFMY-1.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * - Пространство `YString`
*/
export class YInsert extends MInsert {



};