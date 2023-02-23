//#region YI

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
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

//#region equal 0.0.0

/** ### arrayTFEqual
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `array`
 * ***
 *
 * Результирующие параметры функции `equal`.
 *
 * @typedef {arrayTFUEqual&arrayT} arrayTFEqual
 *
*/
/** ### arrayTFUEqual
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `array`
 *
 * Уникальные параметры функции `equal`.
 *
 * @typedef arrayTFUEqual
 * @prop {any[]} equal
*/

/** @arg {arrayTFEqual} t */
function equalDeceit(t) {

    try {

        return equalVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {arrayTFEqual} t */
function equalVerify(t) {

    const {



    } = t;

    return equalHandle(t);

};
/** @arg {arrayTFEqual} t */
function equalHandle(t) {

    const {



    } = t;

    return equalComply(t);

};
/** @arg {arrayTFEqual} t */
function equalComply(t) {

    const {

        array,
        equal,

    } = t;

    if (array.length === equal.length) {

        for (const index in array) {

            if (array[index] !== equal[index]) {

                return false;

            };

        };

        return true;

    } else {

        return false;

    };

};

/**
 * ### arrayEqual
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `array`
 * ***
 *
 * Функция для сравнения массивов.
 *
 * Функия проверяет элементы массивов и если они одного типа или ссылаются на один экземпляр, то функция вернет true, иначе false.
 *
 * ***
 * @arg {T} array `Массив`
 * @arg {T} equal `Эквивалент`
 * @template {any[]} T
*/
export function arrayEqual(array, equal) {

    return equalDeceit({ array, equal, });

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

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/