//#region YI

import { YJect } from '../../../ject/class.mjs';
import { YCond } from '../class.mjs';

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

/** ### YCorrT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `bool\corr`
 *
 * Основной параметр модуля `YCorr`.
 *
 * @typedef {YCorrTE&YCorrTU} YCorrT
 *
*/
/** ### YCorrTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `bool\corr`
 *
 * Параметр наследования `YCorr`.
 *
 * @typedef {{[p in Exclude<keyof DCorr,keyof SCorr>|Exclude<keyof SCorr,keyof DCorr>]:(DCorr[p]&SCorr[p])}} YCorrTE
 *
*/
/** ### YCorrTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `bool\corr`
 *
 * Уникальные параметры `YCorr`.
 *
 * @typedef YCorrTU
 * @prop {any} _
 *
*/

//#endregion

class SCorr extends YCond {



};
class DCorr extends SCorr {

    /**
     * ### sucs
     *
     * Успех.
     *
     * ***
     * @type {G['sucs']}
     * @protected
    */
    sucs;
    /**
     * ### fail
     *
     * Провал.
     *
     * ***
     * @type {G['fail']}
     * @protected
    */
    fail;
    /**
     * ### corrs
     *
     * Корректоры.
     *
     * ***
     * @type {YCorr[]}
     * @protected
    */
    corrs;
    /**
     * ### funcSucs
     *
     * Функция успеха.
     *
     * ***
     * @type {(function(...):void)[]}
     * @protected
    */
    funcSucs;
    /**
     * ### funcFail
     *
     * Функция провала.
     *
     * ***
     * @type {(function(...):void)[]}
     * @protected
    */
    funcFail;

};
class ICorr extends DCorr {



};
class MCorr extends ICorr {



};
class FCorr extends MCorr {

    /**
     * ### YCorr.constructor
     *
     *
     *
     * ***
     * @arg {YCorrT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FCorr.#before(t), {}));

        FCorr.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YCorrT} */
        let r = {};

        if (t?.length === 1 && [Object, YCorr].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YCorrT} t @this {YCorr} */
    static #deceit(t) {

        try {

            FCorr.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YCorrT} t @this {YCorr} */
    static #verify(t) {

        const {



        } = t;

        FCorr.#handle.apply(this, [t]);

    };
    /** @arg {YCorrT} t @this {YCorr} */
    static #handle(t) {



        FCorr.#create.apply(this, [t]);

    };
    /** @arg {YCorrT} t @this {YCorr} */
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
 * ### YCorr
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `bool\corr`
 * - Цепочка `BDVHC`
 * ***
 *
 * Класс корректоров, предназначенный для исправления ошибочных значений.
 *
 * ***
 *
*/
export class YCorr extends FCorr {



};