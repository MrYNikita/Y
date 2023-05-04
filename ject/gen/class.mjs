//#region YI

import { numberGetRandomFrac, numberGetRandomReal } from '../../number/module.mjs';
import { YJect } from '../class.mjs';

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

/** ### YGenT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\gen`
 *
 * Основной параметр модуля `YGen`.
 *
 * @typedef {YGenTE&YGenTU} YGenT
 *
*/
/** ### YGenTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\gen`
 *
 * Параметр наследования `YGen`.
 *
 * @typedef {{[p in Exclude<keyof DGen,keyof SGen>|Exclude<keyof SGen,keyof DGen>]:(DGen[p]&SGen[p])}} YGenTE
 *
*/
/** ### YGenTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\gen`
 *
 * Уникальные параметры `YGen`.
 *
 * @typedef YGenTU
 * @prop {any} _
 *
*/

//#endregion

class SGen extends YJect {

    /**
     * ### getString
     * - Версия `0.0.0`
     * - Модуль `ject\gen`
     * ***
     * 
     * Получение произвольной строки.
     * 
     * ***
     * @arg {number} length `Длина`
     * @public
    */
    static getString(length) {
        
        return '';
        
    };
    /**
     * ### getNumberReal
     * - Версия `0.0.0`
     * - Модуль `ject\gen`
     * ***
     * 
     * Метод получения случайного целого числа в заданном диапазоне.
     * 
     * ***
     * 
     * @public
    */
    static getNumberReal(min, max) {
        
        return numberGetRandomReal(min, max);
        
    };
    /**
     * ### getNumberFrac
     * - Версия `0.0.0`
     * - Модуль `ject\gen`
     * ***
     * 
     * Метод получения случайного дробного числа в заданном диапазоне.
     * 
     * ***
     * 
     * @public
    */
    static getNumberFrac(min, max) {
        
        return numberGetRandomFrac(min, max);
        
    };

};
class DGen extends SGen {



};
class IGen extends DGen {



};
class MGen extends IGen {



};
class FGen extends MGen {

    /**
     * ### YGen.constructor
     *
     *
     *
     * ***
     * @arg {YGenT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FGen.#before(t), {}));

        FGen.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YGenT} */
        let r = {};

        if (t?.length === 1 && [Object, YGen].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YGenT} t @this {YGen} */
    static #deceit(t) {

        try {

            FGen.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YGenT} t @this {YGen} */
    static #verify(t) {

        const {



        } = t;

        FGen.#handle.apply(this, [t]);

    };
    /** @arg {YGenT} t @this {YGen} */
    static #handle(t) {



        FGen.#create.apply(this, [t]);

    };
    /** @arg {YGenT} t @this {YGen} */
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
 * ### YGen
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\gen`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YGen extends FGen {

    

};