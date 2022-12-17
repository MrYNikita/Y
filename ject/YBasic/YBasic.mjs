import { jectFill } from "../ject.mjs";

/**
 * @typedef TBBasic
 * @prop {any} _
 * @typedef {DBasic&TBBasic} TBasic
*/

class SBasic {



};
class DBasic extends SBasic {



};
class IBasic extends DBasic {



};
class MBasic extends IBasic {



};
class FBasic extends MBasic {

    /**
     * Контсруктор класса `YBasic`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TBasic} t
    */
    constructor(t = {}) {

        t = FBasic.#before(Object.values(arguments));

        FBasic.#deceit(t);

        super(t);

        FBasic.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YBasic].includes(t[0]?.constructor)) {

            return t[0];

        } else if (t?.length) {

            /** @type {TBasic&DBasic} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return r;

        } else return {};

    };
    /** @arg {TBasic} t @this {YBasic} */
    static #deceit(t) {

        try {

            FBasic.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TBasic} t @this {YBasic} */
    static #verify(t) {

        const {



        } = t;

        FBasic.#handle(t);

    };
    /** @arg {TBasic} t @this {YBasic} */
    static #handle(t) {



    };
    /** @arg {TBasic} t @this {YBasic} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

    };

};

/**
 * Класс `YBasic`
 *
 * Базовый класс `YModules`.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YBasic extends FBasic {



};