import { YDate } from "../../../../../../date/YDate/YDate.mjs";
import { YString } from "../../../../../../string/YString/YString.mjs";
import { jectFill } from "../../../../../ject.mjs";
import { YInteract } from "../YInteract.mjs";

//#region YT

/** ### YSelectDateT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YSelectDate`
 *
 * Основной параметр модуля `YSelectDate`.
 *
 * @typedef {YSelectDateTE&YSelectDateTU&import("../../YElement.mjs").YElementT} YSelectDateT
 *
*/
/** ### YSelectDateTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YSelectDate`
 *
 * Параметр наследования `YSelectDate`.
 *
 * @typedef {{[p in Exclude<keyof DSelectDate,keyof SSelectDate>|Exclude<keyof SSelectDate,keyof DSelectDate>]:(DSelectDate[p]&SSelectDate[p])}} YSelectDateTE
 *
*/
/** ### YSelectDateTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YSelectDate`
 *
 * Уникальные параметры `YSelectDate`.
 *
 * @typedef YSelectDateTU
 * @prop {YDate} date
 *
*/

//#endregion

class SSelectDate extends YInteract {



};
class DSelectDate extends SSelectDate {



};
class ISelectDate extends DSelectDate {

    /**
     * ### value
     *
     * Значение.
     *
     * ***
     * @type {YDate}
     * @public
    */
    value = new YDate();

};
class MSelectDate extends ISelectDate {



};
class FSelectDate extends MSelectDate {

    /**
     * ### YSelectDate.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YSelectDateT} t
    */
    constructor(t = {}) {

        t = FSelectDate.#before(Object.values(arguments));

        FSelectDate.#deceit(t);

        super(t);

        FSelectDate.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YSelectDate].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YSelectDateT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.value = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YSelectDateT} t @this {YSelectDate} */
    static #deceit(t) {

        try {

            FSelectDate.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YSelectDateT} t @this {YSelectDate} */
    static #verify(t) {

        const {



        } = t;

        FSelectDate.#handle(t);

    };
    /** @arg {YSelectDateT} t @this {YSelectDate} */
    static #handle(t) {

        if (t.date) {

            t.value = t.date;

        };

    };
    /** @arg {YSelectDateT} t @this {YSelectDate} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * ### YSelectDate
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YSelectDate`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YSelectDate extends FSelectDate {

    getLayout() {

        return new YString()

            .get(true);

    };

};