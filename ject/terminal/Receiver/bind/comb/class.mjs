//#region YI

import { YBasic } from "../../../../YBasic/YBasic.mjs";

//#endregion
//#region YT

/** ### YCombT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver\comb`
 *
 * Основной параметр модуля `YComb`.
 *
 * @typedef {YCombTE&YCombTU} YCombT
 *
*/
/** ### YCombTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver\comb`
 *
 * Параметр наследования `YComb`.
 *
 * @typedef {{[p in Exclude<keyof DComb,keyof SComb>|Exclude<keyof SComb,keyof DComb>]:(DComb[p]&SComb[p])}} YCombTE
 *
*/
/** ### YCombTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver\comb`
 *
 * Уникальные параметры `YComb`.
 *
 * @typedef YCombTU
 * @prop {any} _
 *
*/

//#endregion

class SComb extends YBasic {



};
class DComb extends SComb {

    /**
     * ### name
     *
     * Наименование клавиши.
     *
     * ***
     * @type {string}
     * @public
    */
    name;
    /**
     * ### ctrl
     *
     * Ctrl.
     *
     * ***
     * @type {boolean}
     * @public
    */
    ctrl = false;
    /**
     * ### shift
     *
     * Shift.
     *
     * ***
     * @type {boolean}
     * @public
    */
    shift = false;

};
class IComb extends DComb {



};
class MComb extends IComb {



};
class FComb extends MComb {

    /**
     * ### YComb.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YCombT} t
    */
    constructor(...t) {

        t = FComb.#before(t);

        super(Object.assign(t, {}));

        FComb.#handle.apply(this, [t]);
        FComb.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YComb].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YCombT} */
            const r = {};

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3: r.ctrl = t[2];
                case 2: r.shift = t[1];
                case 1: r.name = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YCombT} t @this {YComb} */
    static #deceit(t) {

        try {

            FComb.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YCombT} t @this {YComb} */
    static #verify(t) {

        const {



        } = t;

        FComb.#handle(t);

    };
    /** @arg {YCombT} t @this {YComb} */
    static #handle(t) {



    };
    /** @arg {YCombT} t @this {YComb} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YComb
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver\comb`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YComb extends FComb {



};