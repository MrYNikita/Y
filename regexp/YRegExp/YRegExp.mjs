import { jectFill } from "../../ject/ject.mjs";
import { regexpSplit } from "../regexp.mjs";
import { YRegExpVariate } from "./YRegExpVariate/YRegExpVariate.mjs";

/**
 * @typedef TBRegExp
 * @prop {any} _
 * @typedef {DRegExp&TBRegExp} TRegExp
*/

class SRegExp {



};
class DRegExp extends SRegExp {

    /**
     * Регулярное выражение.
     * @type {RegExp}
    */
    regexp = null;
    /**
     * Вариации.
     * @type {YRegExpVariate}
    */
    variates = [];

};
class FRegExp extends DRegExp {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TRegExp} t
    */
    constructor(t = {}) {

        t = FRegExp.#before(...arguments);

        super(t);

        FRegExp.#deceit.apply(this, [t]);

    };

    /** @param {TRegExp} t @this {[]} */
    static #before(t) {


        if (!t) t = {};
        else if (t.constructor === RegExp) t = { regexp: t };
        else if (t.constructor === String || t.constructor === Number) t = { regexp: new RegExp(t) };

        return t;

    };
    /** @param {TRegExp} t @this {YRegExp} */
    static #deceit(t) {

        try {

            FRegExp.#verify.apply(this, arguments);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TRegExp} t @this {YRegExp} */
    static #verify(t) {

        const {



        } = t;

        FRegExp.#handle.apply(this, arguments);

    };
    /** @param {TRegExp} t @this {YRegExp} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

        FRegExp.#create.apply(this, [t]);

    };
    /** @param {TRegExp} t @this {YRegExp} */
    static #create(t) {

        const {



        } = t;

        jectFill.apply(this, [t]);

        this.variates = regexpSplit(this.regexp).map(r => new YRegExpVariate(r));

    };

};

/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YRegExp extends FRegExp {



};