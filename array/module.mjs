//#region YI

import { condIsNumberLimit } from '../bool/cond/module.mjs';

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

/** ### arrayT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `array`
 *
 * Основной параметр модуля `array`.
 *
 * @typedef arrayT
 * @prop {any[]} array
 *
*/

//#endregion
//#region YV



//#endregion

//#region getSlice 0.0.0

/** ### arrayTFGetSlice
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `array`
 * ***
 *
 * Результирующие параметры функции `getSlice`.
 *
 * @typedef {arrayTFUGetSlice&arrayT} arrayTFGetSlice
 *
*/
/** ### arrayTFUGetSlice
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `array`
 *
 * Уникальные параметры функции `getSlice`.
 *
 * @typedef arrayTFUGetSlice
 * @prop {number[]} indexs
*/

/** @arg {arrayTFGetSlice} t */
function getSliceDeceit(t) {

    try {

        return getSliceVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {arrayTFGetSlice} t */
function getSliceVerify(t) {

    const {



    } = t;

    return getSliceHandle(t);

};
/** @arg {arrayTFGetSlice} t */
function getSliceHandle(t) {

    const {



    } = t;

    return getSliceComply(t);

};
/** @arg {arrayTFGetSlice} t */
function getSliceComply(t) {

    const {

        array,
        indexs,

    } = t;

    let slice = array;

    for (const i of indexs) {

        slice = slice[i];

    };

    return slice;

};

/**
 * ### arrayGetSlice
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `array`
 * ***
 *
 * Функция получения среза с размерного массива.
 *
 * ***
 * @arg {any[]} array `Массив`
 * @arg {...number} indexs `Индексы`
*/
export function arrayGetSlice(array, ...indexs) {

    return getSliceDeceit({ array, indexs });

};

//#endregion
//#region getDimension 0.0.0

/** ### arrayTFGetDimension
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `array`
 * ***
 *
 * Результирующие параметры функции `getDimension`.
 *
 * @typedef {arrayTFUGetDimension&arrayT} arrayTFGetDimension
 *
*/
/** ### arrayTFUGetDimension
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `array`
 *
 * Уникальные параметры функции `getDimension`.
 *
 * @typedef arrayTFUGetDimension
 * @prop {any} _
*/

/** @arg {arrayTFGetDimension} t */
function getDimensionDeceit(t) {

    try {

        return getDimensionVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {arrayTFGetDimension} t */
function getDimensionVerify(t) {

    const {



    } = t;

    return getDimensionHandle(t);

};
/** @arg {arrayTFGetDimension} t */
function getDimensionHandle(t) {

    const {



    } = t;

    return getDimensionComply(t);

};
/** @arg {arrayTFGetDimension} t */
function getDimensionComply(t) {

    const {

        array,

    } = t;

    let result = [array.length];

    const levelC = [...array];

    do {

        if (levelC.length && levelC.every(slice => slice.length && slice.every(elem => elem instanceof Array))) {

            result.push(levelC[0].length);

            levelC.splice(0, levelC.length, ...levelC.flat());

        } else {

            result.push(levelC.map(slice => slice.length));

            if (result.at(-1).every(n => n === result.at(-1)[0])) {

                result.splice(-1, 1, result.at(-1)[0]);

                result = result.filter(n => n !== undefined);

            };

            break;

        };

    } while (levelC.length);

    return result;

};

/**
 * ### arrayGetDimension
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `array`
 * ***
 *
 * Функция возвращающая кол-во измерений указанного массива.
 *
 * Под измерениями функция понимает те уровни указанного массива, где все элементы представлены массивами без исключения.
 *
 * ***
 * @arg {any[]} array `Массив`
*/
export function arrayGetDimension(array) {

    return getDimensionDeceit({ array });

};

//#endregion
//#region getDevideByCount 0.0.0

/** ### arrayTFGetDevideByCount
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `array`
 * ***
 *
 * Результирующие параметры функции `getDevideByCount`.
 *
 * @typedef {arrayTFUGetDevideByCount&arrayT} arrayTFGetDevideByCount
 *
*/
/** ### arrayTFUGetDevideByCount
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `array`
 *
 * Уникальные параметры функции `getDevideByCount`.
 *
 * @typedef arrayTFUGetDevideByCount
 * @prop {number} count
*/

/** @arg {arrayTFGetDevideByCount} t */
function getDevideByCountDeceit(t) {

    try {

        return getDevideByCountVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {arrayTFGetDevideByCount} t */
function getDevideByCountVerify(t) {

    const {



    } = t;

    return getDevideByCountHandle(t);

};
/** @arg {arrayTFGetDevideByCount} t */
function getDevideByCountHandle(t) {

    const {



    } = t;

    return getDevideByCountComply(t);

};
/** @arg {arrayTFGetDevideByCount} t */
function getDevideByCountComply(t) {

    const {

        array,
        count,

    } = t;

    const result = [];

    for (let i = 0; i < array.length; i += count) {

        result.push(array.slice(i, i + count));

    };

    return result;

};

/**
 * ### arrayGetDevideByCount
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `array`
 * ***
 *
 * Функция для деления указанного массива на массив подмассивов, где каждый подмассив содержит указанное количество элементов исходного массива.
 *
 * ***
 * @arg {any[]} array `Массив`
 * @arg {number} count `Количество`
*/
export function arrayGetDevideByCount(array, count) {

    return getDevideByCountDeceit({ array, count, });

};

//#endregion

//#region bring 0.0.0

/** ### arrayTFBring
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `array`
 * ***
 *
 * Результирующие параметры функции `bring`.
 *
 * @typedef {arrayTFUBring&arrayT} arrayTFBring
 *
*/
/** ### arrayTFUBring
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `array`
 *
 * Уникальные параметры функции `bring`.
 *
 * @typedef arrayTFUBring
 * @prop {any} append
 * @prop {number} length
*/

/** @arg {arrayTFBring} t */
function bringDeceit(t) {

    try {

        return bringVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {arrayTFBring} t */
function bringVerify(t) {

    const {



    } = t;

    return bringHandle(t);

};
/** @arg {arrayTFBring} t */
function bringHandle(t) {

    const {



    } = t;

    return bringComply(t);

};
/** @arg {arrayTFBring} t */
function bringComply(t) {

    const {

        array,
        length,
        append,

    } = t;

    while (array.length < length) {

        array.push(append instanceof Function ? append() : append);

    };

    return array;

};

/**
 * ### arrayBring
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `array`
 * ***
 *
 * Функция доведения массива до указанной длинны указанным дополнителем.
 *
 * В качестве новых элементов выступают указанные значения.
 *
 * ***
 * @arg {T} array `Массив`
 * @arg {any} append `Дополнитель`
 * Может выступать значением или функцией.
 *
 * В первом случае функция будет доводить длинну массива до указанного значения, добавляя постоянный указанный дополнитель.
 * В случае дополнителя являющегося функцией, будет добавляться результат данной функции.
 * @arg {number} length `Длина`
 * @template {any[]} T
*/
export function arrayBring(array, length, append) {

    return bringDeceit({ array, length, append });

};

//#endregion

//#region calculatePosition 0.0.0

/** ### arrayTFCalculatePosition
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `array`
 * ***
 *
 * Результирующие параметры функции `calculatePosition`.
 *
 * @typedef {arrayTFUCalculatePosition&arrayT} arrayTFCalculatePosition
 *
*/
/** ### arrayTFUCalculatePosition
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `array`
 *
 * Уникальные параметры функции `calculatePosition`.
 *
 * @typedef arrayTFUCalculatePosition
 * @prop {number[]} indexs
*/

/** @arg {arrayTFCalculatePosition} t */
function calculatePositionDeceit(t) {

    try {

        return calculatePositionVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {arrayTFCalculatePosition} t */
function calculatePositionVerify(t) {

    const {



    } = t;

    return calculatePositionHandle(t);

};
/** @arg {arrayTFCalculatePosition} t */
function calculatePositionHandle(t) {

    const {



    } = t;

    return calculatePositionComply(t);

};
/** @arg {arrayTFCalculatePosition} t */
function calculatePositionComply(t) {

    const {

        array,
        indexs,

    } = t;

    const dimensions = arrayGetDimension(array);

    indexs.splice(dimensions.length);

    console.log(dimensions);

    if (indexs[0] >= dimensions[0]) {

        indexs[0] = dimensions[0] - 1;

    };

    console.log(indexs);

    for (const i in indexs) {

        const indexC = indexs[i];
        const indexN = indexs[+i - 1];
        const slice = arrayGetSlice(dimensions, dimensions.length - 1, indexN);

    };

    return indexs;

};

/**
 * ### arrayCalculatePosition
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `array`
 * ***
 *
 * Функция для вычисления позиции в указанном массиве по указанным данным.
 *
 * Позиция берет своё начало в указанных индексах, после чего модифицирует их таким образом, чтобы они:
 * - Попадали в диапазон массива.
 * - Сдвигались при переполнении.
 *
 * ***
 * @arg {any[]} array `Массив`
 * @arg {...number} indexs `Индексы`
*/
export function arrayCalculatePosition(array, ...indexs) {

    return calculatePositionDeceit({ array, indexs, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/