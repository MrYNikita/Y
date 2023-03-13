//#region YI

import { YEntity } from '../class.mjs';

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

/** ### YConsoleT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\console`
 *
 * Основной параметр модуля `YConsole`.
 *
 * @typedef {YConsoleTE&YConsoleTU} YConsoleT
 *
*/
/** ### YConsoleTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\console`
 *
 * Параметр наследования `YConsole`.
 *
 * @typedef {{[p in Exclude<keyof DConsole,keyof SConsole>|Exclude<keyof SConsole,keyof DConsole>]:(DConsole[p]&SConsole[p])}} YConsoleTE
 *
*/
/** ### YConsoleTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\console`
 *
 * Уникальные параметры `YConsole`.
 *
 * @typedef YConsoleTU
 * @prop {any} _
 *
*/

//#endregion

class SConsole extends YEntity {

    /**
     * ### get
     * - Версия `0.0.0`
     * - Модуль `ject\entity\console`
     * ***
     *
     * Метод получения содержимого консоли.
     *
     * ***
     * @public
    */
    static get() {

        return process;

    };

};
class DConsole extends SConsole {



};
class IConsole extends DConsole {



};
class MConsole extends IConsole {



};
class FConsole extends MConsole {

    /**
     * ### YConsole.constructor
     *
     *
     *
     * ***
     * @arg {YConsoleT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FConsole.#before(t), {}));

        FConsole.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YConsoleT} */
        let r = {};

        if (t?.length === 1 && [Object, YConsole].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YConsoleT} t @this {YConsole} */
    static #deceit(t) {

        try {

            FConsole.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YConsoleT} t @this {YConsole} */
    static #verify(t) {

        const {



        } = t;

        FConsole.#handle.apply(this, [t]);

    };
    /** @arg {YConsoleT} t @this {YConsole} */
    static #handle(t) {



        FConsole.#create.apply(this, [t]);

    };
    /** @arg {YConsoleT} t @this {YConsole} */
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
 * ### YConsole
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\console`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YConsole extends FConsole {



};