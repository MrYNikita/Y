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

/** ### funcT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `func`
 *
 * Основной параметр модуля `func`.
 *
 * @typedef funcT
 * @prop {any} _
 *
*/

//#endregion
//#region YV



//#endregion

//#region bypass 0.0.0

/** ### funcTFbypass
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `func`
 *
 * Результирующие параметры функции `bypass`.
 *
 * @typedef {funcTFUbypass} funcTFbypass
 *
*/
/** ### funcTFUbypass
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `func`
 *
 * Уникальные параметры функции `bypass`.
 *
 * @typedef funcTFUbypass
 * @prop {any} value
 * @prop {[function, ...any]} functions
*/

/** @arg {funcTFbypass} t */
function bypassDeceit(t) {

    try {

        return bypassVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    };

};
/** @arg {funcTFbypass} t */
function bypassVerify(t) {



    return bypassHandle(t);

};
/** @arg {funcTFbypass} t */
function bypassHandle(t) {



    return bypassComply(t);

};
/** @arg {funcTFbypass} t */
function bypassComply(t) {

    const {

        value,
        functions,

    } = t;

    let result = value;

    for (const func of functions) {

        result = func[0](result, ...func.slice(1));

    };

    return result;

};

/**
 * ### funcBypass
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `func`
 *
 * Функция обхода указанных функций.
 *
 * Для исходного набора функций создается копия.
 * Каждая функция последовательно извлекается из копии.
 * Для первой функции в качестве аргументов будут переданы `value` (значение) и все указанные к ней аргументы.
 * В отличии от первой, остальные функции будут получать в качестве первого аргумента результат вызова предыдущей функции.
 * ***
 * @arg {any} value `Значение`
 * @arg {...[function, ...any]} functions `Функциональная последовательность`
 *
 * Представлена массивом, где первый элемент всегда является функцией, которая будет вызываться последовательностью.
 * Все прочие элементы будут переданы ей как аргументы.
*/
export function funcBypass(value, ...functions) {

    return bypassDeceit({ value, functions, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/