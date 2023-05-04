//#region YI

import { condIsNumberLimit } from '../bool/cond/module.mjs';
import { YMany } from '../ject/many/class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YArrayT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `array`
 *
 * Основной параметр модуля `YArray`.
 *
 * @typedef {YArrayTE&YArrayTU} YArrayT
 *
*/
/** ### YArrayTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `array`
 *
 * Параметр наследования `YArray`.
 *
 * @typedef {{[p in Exclude<keyof DArray,keyof SArray>|Exclude<keyof SArray,keyof DArray>]:(DArray[p]&SArray[p])}} YArrayTE
 *
*/
/** ### YArrayTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `array`
 *
 * Уникальные параметры `YArray`.
 *
 * @typedef YArrayTU
 * @prop {any} _
 *
*/

//#endregion

class SArray extends YMany {



};
class DArray extends SArray {



};
class IArray extends DArray {



};
class MArray extends IArray {



};
class FArray extends MArray {

    /**
     * ### YArray.constructor
     *
     *
     *
     * ***
     * @arg {YArrayT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FArray.#before(t), {}));

        FArray.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YArrayT} */
        let r = {};

        if (t?.length === 1 && [Object, YArray].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                default: r.values = t;

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YArrayT} t @this {YArray} */
    static #deceit(t) {

        try {

            FArray.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YArrayT} t @this {YArray} */
    static #verify(t) {

        const {



        } = t;

        FArray.#handle.apply(this, [t]);

    };
    /** @arg {YArrayT} t @this {YArray} */
    static #handle(t) {



        FArray.#create.apply(this, [t]);

    };
    /** @arg {YArrayT} t @this {YArray} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

    };

};

/**
 * ### YArray
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `array`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YArray extends FArray {

    /**
     * ### set
     * - Версия `0.0.0`
     * - Модуль `array`
     * ***
     *
     * Метод уставноки значения в указанной позиции массива.
     *
     * Работает аналогично методу at: если индекс отрицательный, то индекс отсчитывается с конца.
     *
     * ***
     * @arg value `Значение`
     * @arg {number} index `Индекс`
     * @public
    */
    setByIndex(value, index) {

        if (condIsNumberLimit(index)) {

            if (index < 0) {

                index += this.values.length;

            };

            this.values[index] = value;

        };

        return this;

    };

};