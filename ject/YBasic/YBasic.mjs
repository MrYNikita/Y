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
class FBasic extends IBasic {

    /**
     * Контсруктор класса `YBasic`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TBasic} t
    */
    constructor(t = {}) {

        t = FBasic.#before(arguments);

        FBasic.#deceit(t);

        super(t);

        FBasic.#create.apply(this, [t]);

    };

    /** @param {TBasic} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            const r = {};



            return r;

        } else return {};

    };
    /** @param {TBasic} t @this {YBasic} */
    static #deceit(t) {

        try {

            FBasic.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TBasic} t @this {YBasic} */
    static #verify(t) {

        const {



        } = t;

        FBasic.#handle(t);

    };
    /** @param {TBasic} t @this {YBasic} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TBasic} t @this {YBasic} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Базовый класс `YModules`.
 *
 * Данный класс содержит базовые методы и свойства для остальных классов модулей.
 * - Тип `SDIFY-1.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YBasic extends FBasic {



};