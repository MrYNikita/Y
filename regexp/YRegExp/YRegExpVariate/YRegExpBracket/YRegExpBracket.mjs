/**
 * @typedef TBRegExpBracket
 * @prop {any} _
 * @typedef {DRegExpBracket&TBRegExpBracket} TRegExpBracket
*/

import { jectAdopt } from "../../../../ject/ject.mjs";



class SRegExpBracket {



};
class DRegExpBracket extends SRegExpBracket {



};
class FRegExpBracket extends DRegExpBracket {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TRegExpBracket} t
    */
    constructor(t = {}) {

        t = FRegExpBracket.#before(...arguments);

        super(t);

        FRegExpBracket.#deceit.apply(this, [t]);

    };

    /** @arg {TRegExpBracket} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @arg {TRegExpBracket} t @this {YRegExpBracket} */
    static #deceit(t) {

        try {

            FRegExpBracket.#verify.apply(this, arguments);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TRegExpBracket} t @this {YRegExpBracket} */
    static #verify(t) {

        const {



        } = t;

        FRegExpBracket.#handle.apply(this, arguments);

    };
    /** @arg {TRegExpBracket} t @this {YRegExpBracket} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

        FRegExpBracket.#create.apply(this, [t]);

    };
    /** @arg {TRegExpBracket} t @this {YRegExpBracket} */
    static #create(t) {

        const {



        } = t;

        jectAdopt.apply(this, [t]);



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