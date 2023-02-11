import { jectAdopt, jectGetInheritance } from "../../../../ject/ject.mjs";
import { arrayChangeSize, arrayLevel } from "../../../array.mjs";
import { YArrayRank } from "../YArrayRank.mjs";
import { YLevel } from "./YLevel/YLevel.mjs";

/**
 * @typedef TBArrayLevel
 * @prop {number[]} levels
 * @typedef {{[p in Exclude<keyof DArrayLevel,keyof SArrayLevel>|Exclude<keyof SArrayLevel,keyof DArrayLevel>]:(DArrayLevel[p]&SArrayLevel[p])}} TDArrayLevel
 * @typedef {TDArrayLevel&TBArrayLevel} TArrayLevel
*/

class SArrayLevel extends YArrayRank {



};
class DArrayLevel extends SArrayLevel {



};
class IArrayLevel extends DArrayLevel {

    /**
     * Краевые уровни.
     * @type {}
    */
    edges = [];

};
class MArrayLevel extends IArrayLevel {



};
class FArrayLevel extends MArrayLevel {

    /**
     * Контсруктор класса `YArrayLevel`
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

        if (t?.length === 1 && [Object, YArrayLevel].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {TArrayLevel&DArrayLevel} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                default: r.levels = t;

            };

            return Object.values(r).length ? r : { _ytp: t };

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

        jectAdopt(this, t);

        this.values = arrayLevel(this.values, ...t.levels);

    };

};

/**
 * Класс `YArrayLevel`
 *
 *
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Модуль `array.rank.level`
 * - Цепочка `BDVHC`
*/
export class YArrayLevel extends FArrayLevel {



};