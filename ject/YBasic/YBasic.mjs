import { jectCopyDeep, jectFill } from "../ject.mjs";

//#region YT

/** ### YBasicT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YBasic`
 *
 * Основной параметр модуля `YBasic`.
 *
 * @typedef {YBasicTE&YBasicTU} YBasicT
 *
*/
/** ### YBasicTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YBasic`
 *
 * Параметр наследования `YBasic`.
 *
 * @typedef {{[p in Exclude<keyof DBasic,keyof SBasic>|Exclude<keyof SBasic,keyof DBasic>]:(DBasic[p]&SBasic[p])}} YBasicTE
 *
*/
/** ### YBasicTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YBasic`
 *
 * Уникальные параметры `YBasic`.
 *
 * @typedef YBasicTU
 * @prop {any} _
 *
*/

//#endregion

class SBasic {



};
class DBasic extends SBasic {



};
class IBasic extends DBasic {



};
class MBasic extends IBasic {



};
class FBasic extends MBasic {

    /**
     * ### YBasic.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YBasicT} t
    */
    constructor(t = {}) {

        t = FBasic.#before(Object.values(arguments));

        FBasic.#deceit(t);

        super(t);

        FBasic.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YBasic].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YBasicT} */
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
    /** @arg {YBasicT} t @this {YBasic} */
    static #deceit(t) {

        try {

            FBasic.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YBasicT} t @this {YBasic} */
    static #verify(t) {

        const {



        } = t;

        FBasic.#handle(t);

    };
    /** @arg {YBasicT} t @this {YBasic} */
    static #handle(t) {



    };
    /** @arg {YBasicT} t @this {YBasic} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * ### YBasic
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Модуль `YBasic`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YBasic extends FBasic {

    /**
     * ### copy
     * - Версия `0.0.0`
     * - Модуль `YBasic`
     * ***
     *
     * Метод {@link jectCopyDeep|глубокого копирования объекта}.
     *
     * ***
     * @arg {boolean} `Режим сохранения ссылочной структуры`
     *
     * - По умолчанию `true`
     * @public
    */
    copy(link = true) {

        return jectCopyDeep(this, link);

    };

};