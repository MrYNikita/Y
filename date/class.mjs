//#region YI

import { YBasic } from '../ject/YBasic/YBasic.mjs';

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

/** ### YDateT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `date`
 *
 * Основной параметр модуля `YDate`.
 *
 * @typedef {YDateTE&YDateTU} YDateT
 *
*/
/** ### YDateTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `date`
 *
 * Параметр наследования `YDate`.
 *
 * @typedef {{[p in Exclude<keyof DDate,keyof SDate>|Exclude<keyof SDate,keyof DDate>]:(DDate[p]&SDate[p])}} YDateTE
 *
*/
/** ### YDateTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `date`
 *
 * Уникальные параметры `YDate`.
 *
 * @typedef YDateTU
 * @prop {Date} date
 * @prop {number} day
 * @prop {number} year
 * @prop {number} hour
 * @prop {number} month
 * @prop {number} second
 * @prop {number} minute
 * @prop {number} setYear
 * @prop {number} milisecond
 *
*/

//#endregion

class SDate extends YBasic {



};
class DDate extends SDate {

    /**
     * ### value
     *
     * Значение.
     *
     * ***
     * @type {Date}
     * @protected
    */
    value = new Date();
    /**
     * ### valueDrop
     *
     * Значение сброса.
     *
     * ***
     * @type {Date?}
     * @protected
    */
    valueDrop = null;

};
class IDate extends DDate {



};
class MDate extends IDate {



};
class FDate extends MDate {

    /**
     * ### YDate.constructor
     *
     *
     *
     * ***
     * @arg {...YDateT} t
    */
    constructor(...t) {

        super(Object.assign(t = FDate.#before(t), {}));

        FDate.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YDateT} */
        let r = {};

        if (t?.length === 1 && [Object, YDate].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.value = r.valueDrop = t[0];

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YDateT} t @this {YDate} */
    static #deceit(t) {

        try {

            FDate.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YDateT} t @this {YDate} */
    static #verify(t) {

        const {



        } = t;

        if (t.value && t.value.constructor !== Date) {

            error.notDate.throw(t, t.value);

        };

        FDate.#handle.apply(this, [t]);

    };
    /** @arg {YDateT} t @this {YDate} */
    static #handle(t) {



        FDate.#create.apply(this, [t]);

    };
    /** @arg {YDateT} t @this {YDate} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptByDefault(config);

        };

    };

};

/**
 * ### YDate
 * - Тип `SDIMFY`
 * - Версия `0.2.0`
 * - Модуль `date`
 * - Цепочка `BDVHC`
 * ***
 *
 * Класс дат.
 *
 * ***
 *
*/
export class YDate extends FDate {



};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/