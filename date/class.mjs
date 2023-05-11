//#region YI

import { YJect } from '../ject/class.mjs';
import { stringFormatDate } from '../string/module.mjs';
import { dateChange, dateGetMesuares } from './module.mjs';

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

class SDate extends YJect {



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
    valueDrop = null;

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
                case 1: r.value = t[0];

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

        FDate.#handle.apply(this, [t]);

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

        FDate.#create.apply(this, [t]);

    };
    /** @arg {YDateT} t @this {YDate} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

    };

};

/**
 * ### YDate
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `date`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
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
     * ### toString
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
    toString(local = 'ru') {

        return stringFormatDate(this.getDate(), local);

    };

    /**
     * ### flow
     * - Версия `0.0.0`
     * ***
     * 
     * Метод течения времени.
     * 
     * ***
     * @arg {import('./module.mjs').dateTMesuare} date `Изменения`
     * @public
    */
    flowByJect(date) {

        this.flow(date.year, date.month, date.day, date.hour, date.minute, date.second, date.milisecond);

        return this;
        
    };
    /**
     * ### flow
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
    flow(year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0, milisecond = 0) {

        this.value = dateChange(this.value, year, month, day, hour, minute, second, milisecond);

        return this;

    };
    /**
     * ### flowDay
     * - Версия `0.0.0`
     * ***
     * 
     * Метод течения дней.
     * 
     * ***
     * @arg {number} day `Дни`
     * @public
    */
    flowDay(day = 1) {
        
        this.flowByJect({ day });

        return this;
        
    };
    /**
     * ### flowHour
     * - Версия `0.0.0`
     * ***
     * 
     * Метод течения часов.
     * 
     * ***
     * @arg {number} hour `Часы`
     * @public
    */
    flowHour(hour = 1) {
        
        this.flowByJect({ hour });

        return this;
        
    };
    /**
     * ### flowYear
     * - Версия `0.0.0`
     * ***
     * 
     * Метод течения лет.
     * 
     * ***
     * @arg {number} year `Год`
     * @public
    */
    flowYear(year = 1) {
        
        this.flowByJect({ year });

        return this;
        
    };
    /**
     * ### flowMonth
     * - Версия `0.0.0`
     * ***
     * 
     * Метод течения месяцев.
     * 
     * ***
     * @arg {number} month `Месяца`
     * @public
    */
    flowMonth(month = 1) {

        this.flowByJect({ month });

        return this;
        
    };
    /**
     * ### flowMinute
     * - Версия `0.0.0`
     * ***
     * 
     * Метод течения минут.
     * 
     * ***
     * @arg {number} minute `Минута`
     * @public
    */
    flowMinute(minute = 1) {
        
        this.flowByJect({ minute });

        return this;
        
    };
    /**
     * ### flowSecond
     * - Версия `0.0.0`
     * ***
     * 
     * Метод течения секунд.
     * 
     * ***
     * @arg {number} second `Секунда`
     * @public
    */
    flowSecond(second = 1) {
        
        this.flowByJect({ second });

        return this;
        
    };
    /**
     * ### flowMilisecond
     * - Версия `0.0.0`
     * ***
     * 
     * Метод течения милисекунд.
     * 
     * ***
     * @arg {number} milisecond `Милисекунды`
     * @public
    */
    flowMilisecond(milisecond = 1) {
        
        this.flowByJect({ milisecond });

        return this;
        
    };

    /**
     * ### getDay
     * - Версия `0.0.0`
     * ***
     * 
     * Метод получения дней.
     * 
     * ***
     * @public
    */
    getDay() {
        
        return this.value.getDate();
        
    };
    /**
     * ### getYear
     * - Версия `0.0.0`
     * ***
     * 
     * Метод получения года.
     * 
     * ***
     * @public
    */
    getYear() {
        
        return this.value.getFullYear();
        
    };
    /**
     * ### getHour
     * - Версия `0.0.0`
     * ***
     * 
     * Метод получения часов.
     * 
     * ***
     * @public
    */
    getHour() {
        
        return this.value.getHours();
        
    };
    /**
     * ### getMonth
     * - Версия `0.0.0`
     * ***
     * 
     * Метод получения месяцев.
     * 
     * ***
     * @public
    */
    getMonth() {
        
        return this.value.getMonth() + 1;
        
    };
    /**
     * ### getMinute
     * - Версия `0.0.0`
     * ***
     * 
     * Метод получения минут.
     * 
     * ***
     * @public
    */
    getMinute() {
        
        return this.value.getMinutes();
        
    };
    /**
     * ### getSecond
     * - Версия `0.0.0`
     * ***
     * 
     * Метод получения секунд.
     * 
     * ***
     * @public
    */
    getSecond() {
        
        return this.value.getSeconds();
        
    };
    /**
     * ### getMilisecond
     * - Версия `0.0.0`
     * ***
     * 
     * Метод получения милисекунд.
     * 
     * ***
     * @public
    */
    getMilisecond() {
        
        return this.value.getMilisecond();
        
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
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/