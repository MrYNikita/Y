import { YDate } from "../../../../../../date/YDate/YDate.mjs";
import { numberGetSequence } from "../../../../../../number/number.mjs";
import { YString } from "../../../../../../string/YString/YString.mjs";
import { jectAdopt } from "../../../../../ject.mjs";
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

    /** @type {[(string|string[]),function(YSelectDate):void,boolean][]} */
    static binds = [

        ['\x1b[A', y => {

            const l = y.terminal.listener;
            const a = numberGetSequence(6, 0, 0);

            a[y.index] += y.modificator;

            y.value.change(...a);

        }],
        ['\x1b[B', y => {

            const l = y.terminal.listener;
            const a = numberGetSequence(6, 0, 0);

            a[y.index] -= y.modificator;

            y.value.change(...a);

        }],
        ['\x1b[D', y => {

            if (--y.index < 0) {

                y.index = 5;

            };

        }, true],
        ['\x1b[C', y => {

            if (++y.index > 5) {

                y.index = 0;

            };

        }, true],
        ['-', y => {

            if (--y.modificator < 1) {

                y.modificator = 1;

            };

        }],
        ['=', y => {

            if (++y.modificator > 10) {

                y.modificator = 10;

            };

        }],
        ['d', y => {

            y.value.drop(1, 1, 1, 1, 1, 1);

        }],

    ];

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
    /**
     * ### index
     *
     * Индекс.
     *
     * ***
     * @type {number}
     * @protected
    */
    index = 2;
    /**
     * ### modificator
     *
     *
     *
     * ***
     * @type {number}
     * @public
    */
    modificator = 1;

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

        jectAdopt(this, t);

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

    /** @return {Date} */
    get() {

        return this.value.getDate();

    };

    getLayout() {

        return new YString()

            .paste(

                this.value.getString('jp'),
                ` | ${this.modificator}`,

            )
            .exec(y => {

                const ds = Array.from(this.value.getString('jp').matchAll(/\d+/g));

                y
                    .setCursorTo(0, ds[this.index].index)
                    .setColor('yellow')
                    .setCursorTo(0, ds[this.index].index + ds[this.index][0].length)
                    .resetColor(1, 1);

            })
            .get(true);

    };

};