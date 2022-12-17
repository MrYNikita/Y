import { YArray } from "../YArray.mjs";
import { jectFill } from "../../../ject/ject.mjs";
import { arrayAppendMiss, arraySupplement } from "../../array.mjs";

/**
 * @typedef TBArrayRank
 * @prop {number} limit
 * @typedef {DArrayRank&TBArrayRank} TArrayRank
*/

class SArrayRank extends YArray {



};
class DArrayRank extends SArrayRank {



};
class IArrayRank extends DArrayRank {



};
class MArrayRank extends IArrayRank {



};
class FArrayRank extends MArrayRank {

    /**
     * Контсруктор класса `YArrayRank`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TArrayRank} t
    */
    constructor(t = {}) {

        t = FArrayRank.#before(Object.values(arguments));

        FArrayRank.#deceit(t);

        super(t);

        FArrayRank.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YArray, YArrayRank].includes(t[0]?.constructor)) {

            return t[0];

        } else if (t?.length) {

            /** @type {TArrayRank&DArrayRank} */
            const r = {};

            switch (t.length) {

                default: r.values = t.splice(1);
                case 1: r.limit = t[0];

            };

            return r;

        } else return {};

    };
    /** @arg {TArrayRank} t @this {YArrayRank} */
    static #deceit(t) {

        try {

            FArrayRank.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TArrayRank} t @this {YArrayRank} */
    static #verify(t) {

        const {



        } = t;

        FArrayRank.#handle(t);

    };
    /** @arg {TArrayRank} t @this {YArrayRank} */
    static #handle(t) {

        if (t.values) t.values = arraySupplement(new Array(t.limit).fill(undefined), ...t.values.splice(0, t.limit));

    };
    /** @arg {TArrayRank} t @this {YArrayRank} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YArrayRank`
 *
 * Класс позволяет создавать ограниченные в размерах массивы.
 * Для таких массивов фиксируется их текущий размер.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `array`
 * - Цепочка `BDVHC`
*/
export class YArrayRank extends FArrayRank {

    /**
     * Метод конвейерного добавления.
     *
     * Отличие от `YArray.push` заключается в способе добавления элементов.
     * Конвейерное добавление размещает каждый новый элемент с вытеснением первого.
     * - Версия `0.0.0`
     * @arg {...any} elements Элементы для добавления.
    */
    push(...elements) {

        arrayAppendMiss(this.values, ...elements);

        return this;

    };

};