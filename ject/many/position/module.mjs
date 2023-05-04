//#region YI

import { arrayGet } from '../../../array/module.mjs';
import { YError } from '../../../error/class.mjs';

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

/** ### positionT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\many\position`
 *
 * Основной параметр модуля `position`.
 *
 * @typedef positionT
 * @prop {any[]} many
 * @prop {number[]} indexs
 *
*/

//#endregion
//#region YV



//#endregion

//#region min 0.0.0

/** ### positionTFMin
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject\many\position`
 * ***
 *
 * Результирующие параметры функции `min`.
 *
 * @typedef {positionTFUMin&positionT} positionTFMin
 *
*/
/** ### positionTFUMin
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject\many\position`
 *
 * Уникальные параметры функции `min`.
 *
 * @typedef positionTFUMin
 * @prop {any} _
*/

/** @arg {positionTFMin} t */
function minDeceit(t) {

    try {

        return minVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {positionTFMin} t */
function minVerify(t) {

    const {



    } = t;

    return minHandle(t);

};
/** @arg {positionTFMin} t */
function minHandle(t) {

    const {



    } = t;

    return minComply(t);

};
/** @arg {positionTFMin} t */
function minComply(t) {

    const {

        many,

    } = t;

    let next = many;

    const result = [];

    do {

        result.push(0);
        next = next[0];

    } while (next?.length)

    return result;

};

/**
 * ### positionMin
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject\many\position`
 * ***
 *
 * Функция получения начальной позиции в указанном множестве.
 *
 * ***
 * @arg {any[]} many `Множество`
*/
export function positionMin(many) {

    return minDeceit({ many });

};

//#endregion
//#region max 0.0.0

/** ### positionTFMax
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject\many\position`
 * ***
 *
 * Результирующие параметры функции `max`.
 *
 * @typedef {positionTFUMax&positionT} positionTFMax
 *
*/
/** ### positionTFUMax
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject\many\position`
 *
 * Уникальные параметры функции `max`.
 *
 * @typedef positionTFUMax
 * @prop {any} _
*/

/** @arg {positionTFMax} t */
function maxDeceit(t) {

    try {

        return maxVerify(t);

    } catch (e) {

        console.log(e);

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {positionTFMax} t */
function maxVerify(t) {

    const {



    } = t;

    return maxHandle(t);

};
/** @arg {positionTFMax} t */
function maxHandle(t) {

    const {



    } = t;

    return maxComply(t);

};
/** @arg {positionTFMax} t */
function maxComply(t) {

    const {

        many,

    } = t;


    let next = many;

    const result = [];

    while (next instanceof Array) {

        const index = next?.length ? next.length - 1 : 0;

        next = next[index];

        result.push(index);

    };

    return result;

};

/**
 * ### positionMax
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject\many\position`
 * ***
 *
 * Функция получения максимальной позиции в указанном множестве.
 *
 * ***
 * @arg {any[]} many `Множество`
*/
export function positionMax(many) {

    return maxDeceit({ many });

};

//#endregion
//#region correct 0.0.0

/** ### positionTFCorrect
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject\many\position`
 * ***
 *
 * Результирующие параметры функции `correct`.
 *
 * @typedef {positionTFUCorrect&positionT} positionTFCorrect
 *
*/
/** ### positionTFUCorrect
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject\many\position`
 *
 * Уникальные параметры функции `correct`.
 *
 * @typedef positionTFUCorrect
 * @prop {any} _
*/

/** @arg {positionTFCorrect} t */
function correctDeceit(t) {

    try {

        return correctVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {positionTFCorrect} t */
function correctVerify(t) {

    const {



    } = t;

    return correctHandle(t);

};
/** @arg {positionTFCorrect} t */
function correctHandle(t) {

    const {



    } = t;

    return correctComply(t);

};
/** @arg {positionTFCorrect} t */
function correctComply(t) {

    const {

        many,
        indexs,

    } = t;

    while (!arrayGet(many, ...indexs)) {

        if (indexs[0] >= many.length) {

            return positionMax(many);

        } else if (indexs[0] < 0) {

            return positionMin(many);

        };

        for (let i = 1; i < indexs.length; i++) {

            const level = i === 1 ? many : arrayGet(many, ...indexs.slice(0, i));
            const value = arrayGet(many, ...indexs.slice(0, i + 1));

            if (!value && value !== 0) {

                if (indexs[i] >= 0) {

                    const length = level[indexs[i - 1]]?.length;

                    indexs[i - 1]++;

                    if (indexs[i] >= length) {

                        indexs[i - 1]++;
                        indexs[i] -= length;

                    };

                } else if (indexs[i] < 0) {

                    indexs[i - 1]--;

                    const length = level[indexs[i - 1]]?.length;

                    indexs[i] = length ? indexs[i] + length : indexs[i];

                };

            };

        };

    };

    return indexs;

};

/**
 * ### positionCorrect
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject\many\position`
 * ***
 *
 * Функция корректировки позиции в указанном множестве.
 *
 * ***
 * @arg {any[]} many `Множество`
 * @arg {...number} indexs `Индексы`
*/
export function positionCorrect(many, ...indexs) {

    return correctDeceit({ many, indexs, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/