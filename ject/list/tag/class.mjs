//#region YI

import { YBasic } from "../../YBasic/YBasic.mjs";

//#endregion
//#region YT

/** ### YTagT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\list\tag`
 *
 * Основной параметр модуля `YTag`.
 *
 * @typedef {YTagTE&YTagTU} YTagT
 *
*/
/** ### YTagTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\list\tag`
 *
 * Параметр наследования `YTag`.
 *
 * @typedef {{[p in Exclude<keyof DTag,keyof STag>|Exclude<keyof STag,keyof DTag>]:(DTag[p]&STag[p])}} YTagTE
 *
*/
/** ### YTagTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\list\tag`
 *
 * Уникальные параметры `YTag`.
 *
 * @typedef YTagTU
 * @prop {any} _
 *
*/

//#endregion

class STag extends YBasic {



};
class DTag extends STag {



};
class ITag extends DTag {



};
class MTag extends ITag {



};
class FTag extends MTag {

    /**
     * ### YTag.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YTagT} t
    */
    constructor(...t) {

        t = FTag.#before(t);

        super(Object.assign(t, {}));

        FTag.#handle.apply(this, [t]);
        FTag.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YTag].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YTagT} */
            const r = {};

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YTagT} t @this {YTag} */
    static #deceit(t) {

        try {

            FTag.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YTagT} t @this {YTag} */
    static #verify(t) {

        const {



        } = t;

        FTag.#handle(t);

    };
    /** @arg {YTagT} t @this {YTag} */
    static #handle(t) {



    };
    /** @arg {YTagT} t @this {YTag} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YTag
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\list\tag`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YTag extends FTag {



};