/**
 * @typedef TBRegExpVariate
 * @prop {any} _
 * @typedef {DRegExpVariate&TBRegExpVariate} TRegExpVariate
*/

import { jectAdopt } from "../../../ject/ject.mjs";
import { YRegExpBracket } from "./YRegExpBracket/YRegExpBracket.mjs";
import { YRegExpSymbol } from "./YRegExpSymbol/YRegExpSymbol.mjs";

class SRegExpVariate {



};
class DRegExpVariate extends SRegExpVariate {

    /**
     * Последовательность символов и скобочных групп.
     * @type {[YRegExpSymbol|YRegExpBracket]}
    */
    sequence = [];

};
class FRegExpVariate extends DRegExpVariate {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TRegExpVariate} t
    */
    constructor(t = {}) {

        t = FRegExpVariate.#before(...arguments);

        super(t);

        FRegExpVariate.#handle.apply(this, [t]);

    };

    /** @arg {TRegExpVariate} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @arg {TRegExpVariate} t @this {YRegExpVariate} */
    static #deceit(t) {

        try {

            FRegExpVariate.#verify.apply(this, arguments);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TRegExpVariate} t @this {YRegExpVariate} */
    static #verify(t) {

        const {



        } = t;

        FRegExpVariate.#handle.apply(this, arguments);

    };
    /** @arg {TRegExpVariate} t @this {YRegExpVariate} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

        FRegExpVariate.#create.apply(this, [t]);

    };
    /** @arg {TRegExpVariate} t @this {YRegExpVariate} */
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
export class YRegExpVariate extends FRegExpVariate {



};