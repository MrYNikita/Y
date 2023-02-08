import { config } from "../config.mjs";

//#region YT

/** ### dateT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `date`
 *
 * Основной параметр модуля `date`.
 *
 * @typedef dateT
 * @prop {Date} date
 *
*/
/** ### dateTMesuare
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `date`
 *
 *
 *
 * @typedef dateTMesuare
 * @prop {number} day
 * @prop {number} year
 * @prop {number} hour
 * @prop {number} month
 * @prop {number} second
 * @prop {number} minute
 * @prop {number} milisecond
 *
*/

//#endregion
//#region YV



//#endregion

//#region change 0.0.0

/** ### dateTFChange
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `date`
 * ***
 *
 * Результирующие параметры функции `change`.
 *
 * @typedef {dateTFUChange&dateT&dateTMesuare} dateTFChange
 *
*/
/** ### dateTFUChange
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `date`
 *
 * Уникальные параметры функции `change`.
 *
 * @typedef dateTFUChange
 * @prop {any} _
*/

/** @arg {dateTFChange} t */
function changeDeceit(t) {

    try {

        return changeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {dateTFChange} t */
function changeVerify(t) {

    const {



    } = t;

    return changeHandle(t);

};
/** @arg {dateTFChange} t */
function changeHandle(t) {

    const {



    } = t;

    if (!t.day && t.day !== 0) {

        t.day = 0;

    };

    if (!t.hour && t.hour !== 0) {

        t.hour = 0;

    };

    if (!t.year && t.year !== 0) {

        t.year = 0;

    };

    if (!t.month && t.month !== 0) {

        t.month = -1;

    } else {

        t.month -= 1;

    };

    if (!t.minute && t.minute !== 0) {

        t.minute = 0;

    };

    if (!t.second && t.second !== 0) {

        t.second = 0;

    };

    if (!t.milisecond && t.milisecond !== 0) {

        t.milisecond = 0;

    };

    return changeComply(t);

};
/** @arg {dateTFChange} t */
function changeComply(t) {

    const {

        day,
        year,
        date,
        hour,
        month,
        minute,
        second,
        milisecond,

    } = t;

    const mm = [year, month, day, hour, minute, second, milisecond];

    const mr = dateGetMesuares(date).map((m, mi) => m += mm[mi]);

    return new Date(...mr);

};

/**
 * ### dateChange
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `date`
 * ***
 *
 * Функция изменения указанной даты.
 *
 * Позволяет сместить указанную дату на указанное кол-во лет, месяцев, дней, часов, минут, секунд и милисекунд, увеличив или уменьшив их без потери точности.
 *
 * В качестве результата возвращает новую результирующую дату.
 *
 * ***
 * @arg {Date} date `Дата`
 * @arg {number} day `Дни`
 * @arg {number} hour `Часы`
 * @arg {number} year `Года`
 * @arg {number} month `Месяца`
 * @arg {number} second `Секунды`
 * @arg {number} minute `Минуты`
 * @arg {number} milisecond `Милисекунды`
*/
export function dateChange(date, year, month, day, hour, minute, second, milisecond) {

    return changeDeceit({ date, year, month, day, hour, minute, second, milisecond, });

};

//#endregion

//#region getMesuares 0.0.0

/** ### dateTFGetMesuares
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `date`
 * ***
 *
 * Результирующие параметры функции `getMesuares`.
 *
 * @typedef {dateTFUGetMesuares&dateT} dateTFGetMesuares
 *
*/
/** ### dateTFUGetMesuares
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `date`
 *
 * Уникальные параметры функции `getMesuares`.
 *
 * @typedef dateTFUGetMesuares
 * @prop {any} _
*/

/** @arg {dateTFGetMesuares} t */
function getMesuaresDeceit(t) {

    try {

        return getMesuaresVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {dateTFGetMesuares} t */
function getMesuaresVerify(t) {

    const {



    } = t;

    return getMesuaresHandle(t);

};
/** @arg {dateTFGetMesuares} t */
function getMesuaresHandle(t) {

    const {



    } = t;

    return getMesuaresComply(t);

};
/** @arg {dateTFGetMesuares} t */
function getMesuaresComply(t) {

    const {

        date,

    } = t;

    return [

        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds(),

    ];

};

/**
 * ### dateGetMesuares
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `date`
 * ***
 *
 * Функция получения массива всех велечин измерения времени по убыванию.
 *
 * ***
 * @arg {Date} date `Дата`
*/
export function dateGetMesuares(date = new Date()) {

    return getMesuaresDeceit({ date });

};

//#endregion