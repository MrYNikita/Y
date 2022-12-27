import { jectFill, jectGetInheritance } from "../../../../ject/ject.mjs";
import { arrayChangeSize, arrayLevel } from "../../../array.mjs";
import { YArrayRank } from "../YArrayRank.mjs";
import { YLevel } from "./YLevel/YLevel.mjs";

/**
 * @typedef TBArrayLevel
 * @prop {(number|number[])[]} levels
 * @typedef {DArrayLevel&TBArrayLevel} TArrayLevel
*/

class SArrayLevel extends YArrayRank {



};
class DArrayLevel extends SArrayLevel {



};
class IArrayLevel extends DArrayLevel {

    /**
     *
     * @type {}
    */
    edges = [];

};
class MArrayLevel extends IArrayLevel {



};
class FArrayLevel extends MArrayLevel {

    /**
     * Контсруктор класса `YArrayLevel`
     *
     * 1. Указание остаточного набора чисел для обозначения количества измерений и их глубины.
     * Количество измерений определяется количеством переданных значений, а глубина - их значениями (натуральными).
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TArrayLevel} t
    */
    constructor(t = {}) {

        t = FArrayLevel.#before(Object.values(arguments));

        FArrayLevel.#deceit(t);

        super(t);

        FArrayLevel.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YArrayLevel].includes(t[0]?.constructor)) {

            return t[0];

        } else if (t?.length) {

            /** @type {TArrayLevel&DArrayLevel} */
            const r = {};

            switch (t.length) {

                default: r.levels = t;

            };

            return r;

        } else return {};

    };
    /** @arg {TArrayLevel} t @this {YArrayLevel} */
    static #deceit(t) {

        try {

            FArrayLevel.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TArrayLevel} t @this {YArrayLevel} */
    static #verify(t) {

        const {



        } = t;

        FArrayLevel.#handle(t);

    };
    /** @arg {TArrayLevel} t @this {YArrayLevel} */
    static #handle(t) {



    };
    /** @arg {TArrayLevel} t @this {YArrayLevel} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        // this.values = new YLevel(...arrayLevel(this.values, ...t.levels));

        console.log(arrayLevel(this.values, ...t.levels));

    };

};

/**
 * Класс `YArrayLevel`
 *
 * Экземпляры данного класса представляют собой размерные массивы, измерения которых называются уровнями.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `array.rank.level`
 * - Цепочка `BDVHC`
*/
export class YArrayLevel extends FArrayLevel {



};