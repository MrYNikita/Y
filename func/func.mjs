import { config } from "../config.mjs";

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

        if (config.strict) throw e;

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

    let result = functions.splice(0, 1)[0];

    result = result[0](value, result.slice(1));

    while (functions.reverse().length) {

        const f = functions.pop();

        result = f[0](result, ...f.splice(1));

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