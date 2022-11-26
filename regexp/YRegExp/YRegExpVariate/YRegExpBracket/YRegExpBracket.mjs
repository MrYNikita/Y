/**
 * @typedef TBRegExpBracket
 * @prop {any} _
 * @typedef {DRegExpBracket&TBRegExpBracket} TRegExpBracket
*/

import { jectFill } from "../../../../ject/ject.mjs";



class SRegExpBracket {



};
class DRegExpBracket extends SRegExpBracket {



};
class FRegExpBracket extends DRegExpBracket {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TRegExpBracket} t
    */
    constructor(t = {}) {

        t = FRegExpBracket.#before(...arguments);

        super(t);

        FRegExpBracket.#deceit.apply(this, [t]);

    };

    /** @param {TRegExpBracket} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @param {TRegExpBracket} t @this {YRegExpBracket} */
    static #deceit(t) {

        try {

            FRegExpBracket.#verify.apply(this, arguments);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TRegExpBracket} t @this {YRegExpBracket} */
    static #verify(t) {

        const {



        } = t;

        FRegExpBracket.#handle.apply(this, arguments);

    };
    /** @param {TRegExpBracket} t @this {YRegExpBracket} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

        FRegExpBracket.#create.apply(this, [t]);

    };
    /** @param {TRegExpBracket} t @this {YRegExpBracket} */
    static #create(t) {

        const {



        } = t;

        jectFill.apply(this, [t]);



    };

};

/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YRegExpBracket extends FRegExpBracket {



};