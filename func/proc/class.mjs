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

/** ### YProcT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `func\proc`
 *
 * Основной параметр модуля `YProc`.
 *
 * @typedef {YProcTE&YProcTU} YProcT
 *
*/
/** ### YProcTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `func\proc`
 *
 * Параметр наследования `YProc`.
 *
 * @typedef {{[p in Exclude<keyof DProc,keyof SProc>|Exclude<keyof SProc,keyof DProc>]:(DProc[p]&SProc[p])}} YProcTE
 *
*/
/** ### YProcTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `func\proc`
 *
 * Уникальные параметры `YProc`.
 *
 * @typedef YProcTU
 * @prop {any} _
 *
*/

//#endregion

class SProc extends YJect {



};
class DProc extends SProc {



};
class IProc extends DProc {



};
class MProc extends IProc {



};
class FProc extends MProc {

    /**
     * ### YProc.constructor
     *
     *
     *
     * ***
     * @arg {...YProcT} t
    */
    constructor(...t) {

        super(Object.assign(t = FProc.#before(t), {}));

        FProc.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YProcT} */
        let r = {};

        if (t?.length === 1 && [Object, YProc].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YProcT} t @this {YProc} */
    static #deceit(t) {

        try {

            FProc.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YProcT} t @this {YProc} */
    static #verify(t) {

        const {



        } = t;

        FProc.#handle.apply(this, [t]);

    };
    /** @arg {YProcT} t @this {YProc} */
    static #handle(t) {



        FProc.#create.apply(this, [t]);

    };
    /** @arg {YProcT} t @this {YProc} */
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
 * ### YProc
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `func\proc`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YProc extends FProc {



};