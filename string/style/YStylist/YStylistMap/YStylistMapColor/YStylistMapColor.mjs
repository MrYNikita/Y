import { jectFill } from "../../../../../ject/ject.mjs";
import { colorVEREReset } from "../../../color/color.mjs";
import { YStylistMap } from "../YStylistMap.mjs";

//#region YT

/** ### YStylistMapColorT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapColor`
 *
 * Основной параметр модуля `YStylistMapColor`.
 *
 * @typedef {YStylistMapColorTE&YStylistMapColorTU} YStylistMapColorT
 *
*/
/** ### YStylistMapColorTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapColor`
 *
 * Параметр наследования `YStylistMapColor`.
 *
 * @typedef {{[p in Exclude<keyof DStylistMapColor,keyof SStylistMapColor>|Exclude<keyof SStylistMapColor,keyof DStylistMapColor>]:(DStylistMapColor[p]&SStylistMapColor[p])}} YStylistMapColorTE
 *
*/
/** ### YStylistMapColorTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapColor`
 *
 * Уникальные параметры `YStylistMapColor`.
 *
 * @typedef YStylistMapColorTU
 * @prop {any} _
 *
*/

//#endregion

class SStylistMapColor extends YStylistMap {

    static end = [colorVEREReset];

};
class DStylistMapColor extends SStylistMapColor {



};
class IStylistMapColor extends DStylistMapColor {



};
class MStylistMapColor extends IStylistMapColor {



};
class FStylistMapColor extends MStylistMapColor {

    /**
     * ### YStylistMapColor.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YStylistMapColorT} t
    */
    constructor(t = {}) {

        t = FStylistMapColor.#before(Object.values(arguments));

        FStylistMapColor.#deceit(t);

        super(t);

        FStylistMapColor.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YStylistMapColor].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YStylistMapColorT} */
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
    /** @arg {YStylistMapColorT} t @this {YStylistMapColor} */
    static #deceit(t) {

        try {

            FStylistMapColor.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YStylistMapColorT} t @this {YStylistMapColor} */
    static #verify(t) {

        const {



        } = t;

        FStylistMapColor.#handle(t);

    };
    /** @arg {YStylistMapColorT} t @this {YStylistMapColor} */
    static #handle(t) {



    };
    /** @arg {YStylistMapColorT} t @this {YStylistMapColor} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * ### YStylistMapColor
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapColor`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YStylistMapColor extends FStylistMapColor {



};

/**
 * @file YStylistMapColor.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/