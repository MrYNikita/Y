//#region YI

import { YBasic } from "../YBasic/YBasic.mjs";

//#endregion
//#region YT

/** ### YListT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\list`
 *
 * Основной параметр модуля `YList`.
 *
 * @typedef {YListTE&YListTU} YListT
 *
*/
/** ### YListTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\list`
 *
 * Параметр наследования `YList`.
 *
 * @typedef {{[p in Exclude<keyof DList,keyof SList>|Exclude<keyof SList,keyof DList>]:(DList[p]&SList[p])}} YListTE
 *
*/
/** ### YListTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\list`
 *
 * Уникальные параметры `YList`.
 *
 * @typedef YListTU
 * @prop {any} _
 *
*/

//#endregion

class SList extends YBasic {



};
class DList extends SList {



};
class IList extends DList {



};
class MList extends IList {



};
class FList extends MList {

    /**
     * ### YList.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YListT} t
    */
    constructor(t = {}) {

        t = FList.#before(Object.values(arguments));

        FList.#deceit(t);

        super(t);

        FList.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YList].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YListT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YListT} t @this {YList} */
    static #deceit(t) {

        try {

            FList.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YListT} t @this {YList} */
    static #verify(t) {

        const {



        } = t;

        FList.#handle(t);

    };
    /** @arg {YListT} t @this {YList} */
    static #handle(t) {



    };
    /** @arg {YListT} t @this {YList} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YList
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\list`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YList extends FList {



};