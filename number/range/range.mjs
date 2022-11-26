import { arrayRemoveByIndex, arrayUnique } from "../../array/array.mjs";
import { config } from "../../config.mjs";
import { YRange } from "./YRange/YRange.mjs";

/**
 * @typedef {Array<number|Array<number>>} TRange
*/

//#region cast 0.0.0

/**
 * @typedef TBcast
 * @prop {number} step
 * @prop {TRange} numbers
 * @typedef {TBcast} Tcast
*/

/** @param {Tcast} t */
function castDeceit(t) {

    try {

        return castVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tcast} t */
function castVerify(t) {

    const {



    } = t;

    return castHandle(t);

};
/** @param {Tcast} t */
function castHandle(t) {

    let {



    } = t;

    if (!t.step) t.step = 1;
    else if (t.step < 0) t.step *= -1;

    if (t.numbers) t.numbers = arrayUnique(t.numbers).sort((p, c) => p - c);

    t = {

        ...t,

    };

    return castComply(t);

};
/** @param {Tcast} t */
function castComply(t) {

    const {

        step,
        numbers,

    } = t;

    for (

        let index = 0;
        index < numbers.length - 1;

    ) {

        const now = numbers[index];
        const next = numbers[index + 1];

        if (now.constructor === Number && next.constructor === Number && Math.abs(now - next) === step) {

            numbers[index] = [

                now,
                next,

            ];

            arrayRemoveByIndex(numbers, index + 1);

        } else if (now.constructor === Array && next.constructor === Number && Math.abs(now[1] - next) === step) {

            now[1] = next;

            arrayRemoveByIndex(numbers, index + 1);

        } else index++;

    };

    return numbers;

};

/**
 * Функция сведения к диапазону.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {number} step Шаг.
 * - По умолчанию `1`
 * @param {...number} numbers Числа.
*/
export function rangeCast(step = 1, ...numbers) {

    return castDeceit({ step, numbers, });

};

//#endregion
//#region check 0.0.0

/**
 * @typedef TBcheck
 * @prop {TRange} range
 * @prop {...number} numbers
 * @typedef {TBcheck} Tcheck
*/

/** @param {Tcheck} t */
function checkDeceit(t) {

    try {

        return checkVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tcheck} t */
function checkVerify(t) {

    const {



    } = t;

    return checkHandle(t);

};
/** @param {Tcheck} t */
function checkHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return checkComply(t);

};
/** @param {Tcheck} t */
function checkComply(t) {

    const {

        range,
        numbers,

    } = t;



};

/**
 * Функция для проверки принадлежности значений к диапазону.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function rangeCheck(range, ...numbers) {

    return checkDeceit({ range, ...numbers });

};

//#endregion