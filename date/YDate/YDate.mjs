import { configDate } from "../../config.mjs";
import { jectFill } from "../../ject/ject.mjs";
import { YBasic } from "../../ject/YBasic/YBasic.mjs";
import { stringCastToDate } from "../../string/string.mjs";
import { dateChange, dateDrop, dateGetMesuares } from "../date.mjs";

//#region YT

/** ### YDateT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YDate`
 *
 * Основной параметр модуля `YDate`.
 *
 * @typedef {YDateTE&YDateTU} YDateT
 *
*/
/** ### YDateTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YDate`
 *
 * Параметр наследования `YDate`.
 *
 * @typedef {{[p in Exclude<keyof DDate,keyof SDate>|Exclude<keyof SDate,keyof DDate>]:(DDate[p]&SDate[p])}} YDateTE
 *
*/
/** ### YDateTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YDate`
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
     * ### valueDrop
     *
     * Значение сброса.
     *
     * ***
     * @type {Date?}
     * @public
    */
    valueDrop;

};
class IDate extends DDate {

    /**
     * ### value
     *
     * Значение.
     *
     * ***
     * @type {Date}
     * @protected
    */
    value;

};
class MDate extends IDate {



};
class FDate extends MDate {

    /**
     * ### YDate.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YDateT} t
    */
    constructor(t = {}) {

        t = FDate.#before(Object.values(arguments));

        FDate.#deceit(t);

        super(t);

        FDate.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YDate].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YDateT} */
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
    /** @arg {YDateT} t @this {YDate} */
    static #deceit(t) {

        try {

            FDate.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YDateT} t @this {YDate} */
    static #verify(t) {

        const {



        } = t;

        FDate.#handle(t);

    };
    /** @arg {YDateT} t @this {YDate} */
    static #handle(t) {

        if (!t.date) {

            if (t.setYear) {

                t.date = new Date(t.setYear + 1, 0, 0);
                t.date = new Date(t.date.getFullYear(), 0, 1);

            } else {

                t.date = new Date();

            };

        };

        t.value = t.date;

    };
    /** @arg {YDateT} t @this {YDate} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

    };

};

/**
 * ### YDate
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Модуль `YDate`
 * - Цепочка `BDVHC`
 * ***
 * Класс Дат.
 *
 * Данный класс предназначен для расширенного взаимодействия с Date классом.
*/
export class YDate extends FDate {

    /**
     * ### drop
     * - Версия `0.0.0`
     * - Модуль `YDate`
     * ***
     *
     * Метод сброса мер времени.
     *
     * ***
     * @arg {boolean} day `Сброс дней`
     * @arg {boolean} year `Сброс лет`
     * @arg {boolean} hour `Сброс часов`
     * @arg {boolean} month `Сброс месяцев`
     * @arg {boolean} second `Сброс секунд`
     * @arg {boolean} minute `Сброс минут`
     * @arg {boolean} milisecond `Сброс милисекунд`
     * @public
    */
    drop(year, month, day, hour, minute, second, milisecond) {

        if (this.valueDrop) {

            this.value = this.valueDrop;

        } else {

            this.value = dateDrop(this.value, year, month, day, hour, minute, second, milisecond);

        };

        return this;

    };

    /**
     * ### change
     * - Версия `0.0.0`
     * - Модуль `YDate`
     * ***
     *
     * Метод {@link dateChange|изменения} даты.
     *
     * ***
     * @arg {number} day `Дни`
     * @arg {number} hour `Часы`
     * @arg {number} year `Года`
     * @arg {number} month `Месяца`
     * @arg {number} second `Секунды`
     * @arg {number} minute `Минуты`
     * @arg {number} milisecond `Милисекунды`
     * @public
    */
    change(year, month, day, hour, minute, second, milisecond) {

        this.value = dateChange(this.value, year, month, day, hour, minute, second, milisecond);

        return this;

    };

    /**
     * ### toDate
     * - Версия `0.0.1`
     * - Модуль `YDate`
     * ***
     *
     * Метод получения даты.
     *
     * ***
     * @public
     * @return {Date}
    */
    getDate() {

        return this.value;

    };
    /**
     * ### getString
     * - Версия `0.0.0`
     * - Модуль `YDate`
     * ***
     *
     * Метод получения строки.
     *
     * ***
     * @arg {string?} local `Локаль`
     * - Дефолт: `ru`
     * @public
    */
    getString(local = 'ru') {

        return stringCastToDate(this.getDate(), local);

    };
    /**
     * ### getMesuares
     * - Версия `0.0.0`
     * - Модуль `YDate`
     * ***
     *
     * Метод получения всех единиц измерения в порядке убывания.
     *
     * ***
     *
     * @public
    */
    getMesuares() {

        return dateGetMesuares(this.getDate());

    };

};

/**
 * @file YDate.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/