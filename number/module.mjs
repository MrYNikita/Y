//#region YI

import { YError } from '../error/class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### numberT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `number`
 *
 * Основной параметр модуля `number`.
 *
 * @typedef numberT
 * @prop {any} _
 *
*/

//#endregion
//#region YV



//#endregion

//#region getRandom 0.0.0

/** ### numberTFGetRandom
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `number`
 * ***
 *
 * Результирующие параметры функции `getRandom`.
 *
 * @typedef {numberTFUGetRandom&numberT} numberTFGetRandom
 *
*/
/** ### numberTFUGetRandom
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `number`
 *
 * Уникальные параметры функции `getRandom`.
 *
 * @typedef numberTFUGetRandom
 * @prop {number} min
 * @prop {number} max
 * @prop {number} count
 * @prop {boolean} frac
 * @prop {boolean} unique
*/

/** @arg {numberTFGetRandom} t */
function getRandomDeceit(t) {

    try {

        return getRandomVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {numberTFGetRandom} t */
function getRandomVerify(t) {

    const {



    } = t;

    return getRandomHandle(t);

};
/** @arg {numberTFGetRandom} t */
function getRandomHandle(t) {

    const {



    } = t;

    return getRandomComply(t);

};
/** @arg {numberTFGetRandom} t */
function getRandomComply(t) {

    const {

        min,
        max,
        frac,
        count,
        unique,

    } = t;

    if (count && unique && !frac) {

        const results = [];
        const sequence = numberGetSequence(max - min, min);

        while (results.length !== count) {

            results.push(sequence.splice(numberGetRandomReal(0, sequence.length - 1), 1)[0]);

        };

        return results;

    } else if (count && unique && frac) {

        return new Array(count).fill().map(_ => numberGetRandomFrac(min, max)).map((e, i, a) => {

            while (true) {

                const i1 = a.indexOf(e);

                if (i1 !== i && i1 !== -1) {

                    e = numberGetRandomFrac(min, max);

                } else {

                    return e;

                };

            };

        });

    } else if (count) {

        return Array(count).fill(min).map(_ => getRandomComply({ min, max, frac }));

    } else {

        let result = (!frac) ? Math.floor(min + Math.random() * (max + 1 - min)) : min + Math.random() * (max - min);

        if (frac && result > max) {

            result = max;

        };

        return result;

    };

};

/**
 * ### numberGetRandomReal
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `number`
 * ***
 *
 * Функция получения случайного целого числа в указанном диапазоне.
 *
 * ***
 * @arg {number} min `Минимум`
 * @arg {number} max `Максиуму`
*/
export function numberGetRandomReal(min, max) {

    return getRandomDeceit({ min, max });

};
/**
 * ### numberGetRandomFrac
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `number`
 * ***
 *
 * Функция для получения случайного дробного числа в указанном диапазоне.
 *
 * ***
 * @arg {number} min `Минимум`
 * @arg {number} max `Максимум`
*/
export function numberGetRandomFrac(min, max) {

    return getRandomDeceit({ min, max, frac: true, });

};
/**
 * ### numberGetRandomRealMany
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `number`
 * ***
 *
 * Функция для получения массива случайных чисел в указанном диапазоне.
 *
 * ***
 * @arg {number} min `Минимум`
 * @arg {number} max `Максимум`
 * @arg {number} count `Количество`
 * @arg {boolean?} unique `Уникальность`
*/
export function numberGetRandomRealMany(count, min, max, unique) {

    return getRandomDeceit({ count, unique, min, max, });

};
/**
 * ### numberGetRandomFracMany
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `number`
 * ***
 *
 * Функция для получения массива случайных чисел в указанном диапазоне.
 *
 * ***
 * @arg {number} min `Минимум`
 * @arg {number} max `Максимум`
 * @arg {number} count `Количество`
 * @arg {boolean?} unique `Уникальность`
*/
export function numberGetRandomFracMany(count, min, max, unique) {

    return getRandomDeceit({ count, unique, min, max, });

};

//#endregion
//#region getSequence 0.0.0

/** ### numberTFGetSequence
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `number`
 * ***
 *
 * Результирующие параметры функции `getSequence`.
 *
 * @typedef {numberTFUGetSequence&numberT} numberTFGetSequence
 *
*/
/** ### numberTFUGetSequence
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `number`
 *
 * Уникальные параметры функции `getSequence`.
 *
 * @typedef numberTFUGetSequence
 * @prop {number} step
 * @prop {number} begin
 * @prop {number} count
 * @prop {(function(number):number)[]} handlers
*/

/** @arg {numberTFGetSequence} t */
function getSequenceDeceit(t) {

    try {

        return getSequenceVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {numberTFGetSequence} t */
function getSequenceVerify(t) {

    const {



    } = t;

    return getSequenceHandle(t);

};
/** @arg {numberTFGetSequence} t */
function getSequenceHandle(t) {

    const {



    } = t;

    return getSequenceComply(t);

};
/** @arg {numberTFGetSequence} t */
function getSequenceComply(t) {

    const {

        step,
        begin,
        count,
        handlers,

    } = t;

    return new Array(count).fill(0).map((e, i) => {

        e = begin + i * step;

        handlers.forEach(h => {

            e = h(e);

        });

        return e;

    });

};

/**
 * ### numberGetSequence
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * - Модуль `number`
 * ***
 *
 * Функция для получения последовательности чисел от указанного начального значения с указанным правилом.
 *
 * ***
 * @arg {number} step `Шаг`
 * - Дефолт `1`
 * @arg {number} count `Счётчик`
 * - Дефолт `1`
 * @arg {number} begin `Начальное значение`
 * - Дефолт `0`
 * @arg {...function(number):number} handlers `Обработчики`
*/
export function numberGetSequence(count = 1, begin = 0, step = 1, ...handlers) {

    return getSequenceDeceit({ count, begin, step, handlers });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/