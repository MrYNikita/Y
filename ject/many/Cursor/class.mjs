//#region YI

import { condIsNumber } from '../../../bool/cond/module.mjs';
import { YJect } from '../../class.mjs';

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

/** ### YCursorT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\many\cursor`
 *
 * Основной параметр модуля `YCursor`.
 *
 * @typedef {YCursorTE&YCursorTU} YCursorT
 *
*/
/** ### YCursorTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\many\cursor`
 *
 * Параметр наследования `YCursor`.
 *
 * @typedef {{[p in Exclude<keyof DCursor,keyof SCursor>|Exclude<keyof SCursor,keyof DCursor>]:(DCursor[p]&SCursor[p])}} YCursorTE
 *
*/
/** ### YCursorTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\many\cursor`
 *
 * Уникальные параметры `YCursor`.
 *
 * @typedef YCursorTU
 * @prop {} _
 *
*/

//#endregion

class SCursor extends YJect {



};
class DCursor extends SCursor {

    /**
     * ### indexs
     *
     * Индексы.
     *
     * ***
     * @type {number[]}
     * @public
    */
    indexs;

};
class ICursor extends DCursor {



};
class MCursor extends ICursor {



};
class FCursor extends MCursor {

    /**
     * ### YCursor.constructor
     *
     *
     *
     * ***
     * @arg {...YCursorT} t
    */
    constructor(...t) {

        super(Object.assign(t = FCursor.#before(t), {}));

        FCursor.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YCursorT} */
        let r = {};

        if (t?.length === 1 && [Object, YCursor].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.indexs = t;

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #deceit(t) {

        try {

            FCursor.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #verify(t) {

        const {



        } = t;

        FCursor.#handle.apply(this, [t]);

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #handle(t) {



        FCursor.#create.apply(this, [t]);

    };
    /** @arg {YCursorT} t @this {YCursor} */
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
 * ### YCursor
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\many\cursor`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YCursor extends FCursor {

    /**
     * ### move
     * - Версия `0.0.0`
     * - Модуль `ject\many\cursor`
     * ***
     *
     * Метод смещения курсоров.
     *
     * ***
     * @arg {...number} bias `Смещение`
     * @public
    */
    move(...bias) {

        bias.filter(bias => condIsNumber(bias)).map((bias, i) => this.indexs[i] += bias);

        return this;

    };
    /**
     * ### setIndexs
     * - Версия `0.0.0`
     * - Модуль `ject\many\cursor`
     * ***
     *
     * Метод установки координат для курсора.
     *
     * ***
     * @arg {...number} coords `Коориднаты`
     * @public
    */
    setIndexs(...coords) {

        this.indexs = coords;

        return this;

    };

};