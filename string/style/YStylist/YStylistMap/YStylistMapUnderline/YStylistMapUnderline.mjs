import { jectAdopt } from "../../../../../ject/ject.mjs";
import { YStylistMap } from "../YStylistMap.mjs";

//#region YT

/** ### YStylistMapUnderlineT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapUnderline`
 *
 * Основной параметр модуля `YStylistMapUnderline`.
 *
 * @typedef {YStylistMapUnderlineTE&YStylistMapUnderlineTU} YStylistMapUnderlineT
 *
*/
/** ### YStylistMapUnderlineTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapUnderline`
 *
 * Параметр наследования `YStylistMapUnderline`.
 *
 * @typedef {{[p in Exclude<keyof DStylistMapUnderline,keyof SStylistMapUnderline>|Exclude<keyof SStylistMapUnderline,keyof DStylistMapUnderline>]:(DStylistMapUnderline[p]&SStylistMapUnderline[p])}} YStylistMapUnderlineTE
 *
*/
/** ### YStylistMapUnderlineTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapUnderline`
 *
 * Уникальные параметры `YStylistMapUnderline`.
 *
 * @typedef YStylistMapUnderlineTU
 * @prop {any} _
 *
*/

//#endregion

class SStylistMapUnderline extends YStylistMap {



};
class DStylistMapUnderline extends SStylistMapUnderline {



};
class IStylistMapUnderline extends DStylistMapUnderline {



};
class MStylistMapUnderline extends IStylistMapUnderline {



};
class FStylistMapUnderline extends MStylistMapUnderline {

    /**
     * ### YStylistMapUnderline.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YStylistMapUnderlineT} t
    */
    constructor(t = {}) {

        t = FStylistMapUnderline.#before(Object.values(arguments));

        FStylistMapUnderline.#deceit(t);

        super(t);

        FStylistMapUnderline.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YStylistMapUnderline].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YStylistMapUnderlineT} */
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
    /** @arg {YStylistMapUnderlineT} t @this {YStylistMapUnderline} */
    static #deceit(t) {

        try {

            FStylistMapUnderline.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YStylistMapUnderlineT} t @this {YStylistMapUnderline} */
    static #verify(t) {

        const {



        } = t;

        FStylistMapUnderline.#handle(t);

    };
    /** @arg {YStylistMapUnderlineT} t @this {YStylistMapUnderline} */
    static #handle(t) {



    };
    /** @arg {YStylistMapUnderlineT} t @this {YStylistMapUnderline} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);



    };

};

/**
 * ### YStylistMapUnderline
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapUnderline`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YStylistMapUnderline extends FStylistMapUnderline {



};