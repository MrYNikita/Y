//#region YI

import { YJect } from '../../ject/class.mjs';

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

/** ### YInsertT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string\insert`
 *
 * Основной параметр модуля `YInsert`.
 *
 * @typedef {YInsertTE&YInsertTU} YInsertT
 *
*/
/** ### YInsertTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `string\insert`
 *
 * Параметр наследования `YInsert`.
 *
 * @typedef {{[p in Exclude<keyof DInsert,keyof SInsert>|Exclude<keyof SInsert,keyof DInsert>]:(DInsert[p]&SInsert[p])}} YInsertTE
 *
*/
/** ### YInsertTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `string\insert`
 *
 * Уникальные параметры `YInsert`.
 *
 * @typedef YInsertTU
 * @prop {any} _
 *
*/

//#endregion

class SInsert extends YJect {



};
class DInsert extends SInsert {

    /**
     * ### find
     *
     * Значение соответствия.
     *
     * ***
     * @type {string}
     * @public
    */
    find;
    /**
     * ### value
     *
     * Значение вставки.
     *
     * ***
     * @type {string}
     * @public
    */
    value;

};
class IInsert extends DInsert {



};
class MInsert extends IInsert {



};
class FInsert extends MInsert {

    /**
     * ### YInsert.constructor
     *
     *
     *
     * ***
     * @arg {YInsertT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FInsert.#before(t), {}));

        FInsert.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YInsertT} */
        let r = {};

        if (t?.length === 1 && [Object, YInsert].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YInsertT} t @this {YInsert} */
    static #deceit(t) {

        try {

            FInsert.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YInsertT} t @this {YInsert} */
    static #verify(t) {

        const {



        } = t;

        FInsert.#handle.apply(this, [t]);

    };
    /** @arg {YInsertT} t @this {YInsert} */
    static #handle(t) {



        FInsert.#create.apply(this, [t]);

    };
    /** @arg {YInsertT} t @this {YInsert} */
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
 * ### YInsert
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `string\insert`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YInsert extends FInsert {



};