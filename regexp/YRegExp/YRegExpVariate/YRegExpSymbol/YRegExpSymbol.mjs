/**
 * @typedef TBRegExpSymbol
 * @prop {any} _
 * @typedef {DRegExpSymbol&TBRegExpSymbol} TRegExpSymbol
*/

import { jectFill } from "../../../../ject/ject.mjs";

class SRegExpSymbol {



};
class DRegExpSymbol extends SRegExpSymbol {

    /**
     * Минимальное кол-во повторений.
     * @type {number?}
    */
    min = null;
    /**
     * Максимальное кол-во повторений.
     * @type {number?}
    */
    max = null;
    /**
     * Точное кол-во повторений.
     * @type {number?}
    */
    equ = null;
    /**
     * Ленивость квантификатора.
     * @type {boolean}
    */
    lazy = false;
    /**
     * Символ.
     * @type {string}
    */
    value = '';
    /**
     * Квантификатор.
     * @type {string}
    */
    quantifier = '';

};
class FRegExpSymbol extends DRegExpSymbol {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TRegExpSymbol} t
    */
    constructor(t = {}) {

        t = FRegExpSymbol.#before(...arguments);

        super(t);

        FRegExpSymbol.#deceit.apply(this, [t]);

    };

    /** @param {TRegExpSymbol} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @param {TRegExpSymbol} t @this {YRegExpSymbol} */
    static #deceit(t) {

        try {

            FRegExpSymbol.#verify.apply(this, arguments);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TRegExpSymbol} t @this {YRegExpSymbol} */
    static #verify(t) {

        const {



        } = t;

        FRegExpSymbol.#handle.apply(this, arguments);

    };
    /** @param {TRegExpSymbol} t @this {YRegExpSymbol} */
    static #handle(t) {

        let {



        } = t;

        if (t.min || t.max) {

            if (t.min > t.max) [t.min, t.max] = [t.max, t.min];
            else if (t.min === t.max) [t.equ, t.min, t.max] = [t.min, null, null];

        };

        if (t.equ === 1) [t.equ, t.quantifier, t.lazy] = [null, '', false];

        if ((t.min > 0 || t.max > 0 || t.equ > 0) && t.quantifier) [t.quantifier, t.lazy] = ['', false];
        else if (t.quantifier === '?') t.lazy = false;

        t = {

            ...t,

        };

        FRegExpSymbol.#create.apply(this, [t]);

    };
    /** @param {TRegExpSymbol} t @this {YRegExpSymbol} */
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
export class YRegExpSymbol extends FRegExpSymbol {

    /**
     * Получение символа.
    */
    get() {

        const {

            min,
            max,
            equ,
            lazy,
            value,
            quantifier,

        } = this;

        let result = value;

        if (equ > 0) result += `{${equ}}`;
        else if (min > 0 && !max) result += `{${min},}`;
        else if (min > 0 && max > 0) result += `{${min},${max}}`;
        else if (['?', '*', '+'].includes(quantifier)) result += (lazy && quantifier !== '?') ? `${quantifier}?` : quantifier;

        return result;

    };
    /**
     * Очистка всех свойств, за исключением символа.
    */
    clear() {

        [this.equ, this.min, this.max, this.lazy, this.quantifier] = [null, null, null, false, ''];

        return this;

    };

};