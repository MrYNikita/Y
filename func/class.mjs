//#region YI

import { YJect } from '../ject/class.mjs';

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

/** ### YFuncT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `func`
 *
 * Основной параметр модуля `YFunc`.
 *
 * @typedef {YFuncTE&YFuncTU} YFuncT
 *
*/
/** ### YFuncTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `func`
 *
 * Параметр наследования `YFunc`.
 *
 * @typedef {{[p in Exclude<keyof DFunc,keyof SFunc>|Exclude<keyof SFunc,keyof DFunc>]:(DFunc[p]&SFunc[p])}} YFuncTE
 *
*/
/** ### YFuncTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `func`
 *
 * Уникальные параметры `YFunc`.
 *
 * @typedef YFuncTU
 * @prop {any} _
 *
*/

//#endregion

class SFunc extends YJect {



};
class DFunc extends SFunc {



};
class IFunc extends DFunc {



};
class MFunc extends IFunc {



};
class FFunc extends MFunc {

    /**
     * ### YFunc.constructor
     *
     *
     *
     * ***
     * @arg {...YFuncT} t
    */
    constructor(...t) {

        super(Object.assign(t = FFunc.#before(t), {}));

        FFunc.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YFuncT} */
        let r = {};

        if (t?.length === 1 && [Object, YFunc].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YFuncT} t @this {YFunc} */
    static #deceit(t) {

        try {

            FFunc.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YFuncT} t @this {YFunc} */
    static #verify(t) {

        const {



        } = t;

        FFunc.#handle.apply(this, [t]);

    };
    /** @arg {YFuncT} t @this {YFunc} */
    static #handle(t) {



        FFunc.#create.apply(this, [t]);

    };
    /** @arg {YFuncT} t @this {YFunc} */
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
 * ### YFunc
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `func`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YFunc extends FFunc {



};