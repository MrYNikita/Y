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

/** ### testT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `test`
 *
 * Основной параметр модуля `test`.
 *
 * @typedef testT
 * @prop {any} _
 *
*/

//#endregion
//#region YV

/**
 * ### testVStringRuler
 * - Версия `0.0.0`
 * - Модуль `test`
 *
 * Значение представленное строкой с числами от 0 до 9 идущими подряд.
 *
 * ***
 * @type {string}
*/
export const testVStringRuler = '0123456789';
/**
 * ### testVStringSquare
 * - Версия `0.0.0`
 * - Модуль `test`
 *
 * Значение представленное многолинейной строкой с различными значениями.
 *
 * ***
 *
*/
export const testVStringSquare = `xxxxxxxxxx\nyyyyyyyyyy\nzzzzzzzzzz\niiiiiiiiii\nwwwwwwwwww`;

//#endregion

//#region compare 0.0.0

/**
 * @typedef TBcompare
 * @prop {number} iterate
 * @prop {Array<TfixExecuteTime>} funcs
 * @typedef {TBcompare} Tcompare
*/

/** @arg {Tcompare} t */
function compareDeceit(t) {

    try {

        return compareVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tcompare} t */
function compareVerify(t) {

    const {



    } = t;

    return compareHandle(t);

};
/** @arg {Tcompare} t */
function compareHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return compareComply(t);

};
/** @arg {Tcompare} t */
function compareComply(t) {

    const {

        funcs,
        iterate,

    } = t;

    const ystr = new YString().addTemplate('l', '---\n');
    /** @type {number[][]} */
    const iterates = new Array(iterate).fill(0).map(_ => new Array(funcs.length).fill(0));
    /** @type {number[]} */
    const results = new Array(funcs.length).fill(0);
    /** @type {number[]} */
    const errors = new Array(funcs.length).fill(0);

    for (let count = 0; count < iterate; count++) {

        funcs.forEach((f, i) => {

            try {

                iterates[count][i] = fixExecuteTimeDeceit({ ...f })

            } catch (e) {

                iterates[count][i] = -1;
                errors[i]++;

            };

        });

        const min = Math.min(...iterates[count]);
        const max = Math.max(...iterates[count]);

        iterates[count].map(r => r === -1 ? r = max < 0 ? 0 : max + 1 : r);

        results[iterates[count].findIndex(r => r === min)]++;

    };

    const min = Math.min(...results);
    const max = Math.max(...results);

    const stability = new Array(funcs.length).fill(0).map((_, i) => iterates.reduce((p, c) => p + c[i], 0) / iterate).map(r => r > 1 ? r - 1 : 1 - r);
    const stabilityMin = Math.max(...stability);
    const stabilityMax = Math.min(...stability);

    const errorMin = Math.min(...errors);
    const errorMax = Math.max(...errors);

    ystr

        .changePostfix(';\n')
        .paste(

            `Быстрая функция: F${results.findIndex(r => r === max)}`,
            `Медленная функция: F${results.findIndex(r => r === min)}`,
            `Стабильная фунцкия: F${stability.findIndex(r => r === stabilityMax)}`,
            `Нестабильная фунцкия: F${stability.findIndex(r => r === stabilityMin)}`,
            `Надёжная фунцкия: F${errors.findIndex(r => r === errorMin)}`,
            `Ненадёжная фунцкия: F${errors.findIndex(r => r === errorMax)}`,

        )
        .pasteTemplate('l')
        .paste(

            `Коэффициенты: ${results.map((r, i) => `F${i}: ${r / (iterate / 100)}%`).join(', ')}`,
            `Стабильность: ${stability.map((r, i) => `F${i}: ${r}`).join(', ')}`,
            `Ошибки: ${errors.map((r, i) => `F${i}: ${r}`).join(', ')}`,

        )
        .castToYReport()
        .display();

};

/**
 * Функция для сравнения функций.
 * Данная функция сравнения учитывает возможность появления ошибок в ходе работы функций.
 *
 * `Производительность` функций определяется за счет функции фиксирования времени исполнения.
 * Производится анализ выборки по скорости работы функции. Среди всех определяется самая производительная.
 * В случае ошибки при работе одной из функций, ей будет присвоено максимальное время производительности среди всех функций увеличенное на 1 -
 * такие функции всегда будут самыми медленными.
 *
 * `Стабильность` определяется за счет выявления самой стабильной по времени работы функции.
 * Выявление осуществялется по сравнению среднего арифметического и его близостью к 1.
 * Функция с минимальным отклонением от 1 будет признана стабильной, а с максимальным - нестабильной.
 *
 * `Надёжность` определяется за счет отлова ошибок в ходе исполнения.
 * Ошибки учитываются количественно. Функция с наименьшим кол-вом ошибок будет признана самой надёжной.
 * Функция с наибольшим количеством ошибок будет следовательно признана самой ненадежной.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} iterate Кол-во итераций.
 * Определяет кол-во итераций за которое будет проводиться сравнение.
 * Наибольшее кол-во итераций улучшает точность сравнения.
 * - По умолчанию `3`.
 * @arg {Array<TfixExecuteTime>} funcs Массив функций|конструкторов.
 * Каждый элемент подобен любому варианту функции fixExecuteTime.
 * Это означает, что здесь могут быть приведены функции, функции с контекстом или конструкторы.
 * Для того, чтобы указать функцию, необходимо передать её параметры в виде объекта.
*/
export function testCompare(iterate = 3, ...funcs) {

    return compareDeceit({ iterate, funcs, });

};

//#endregion
//#region fixExecute 0.0.0

/**
 * @typedef TBfixExecute
 * @prop {{}} ject
 * @prop {typeof Object} cl
 * @prop {function} func
 * @prop {Array<any>} transmits
 * @typedef {TBfixExecute} TfixExecute
*/

/** @arg {TfixExecute} t */
function fixExecuteDeceit(t) {

    try {

        return fixExecuteVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TfixExecute} t */
function fixExecuteVerify(t) {

    const {



    } = t;

    return fixExecuteHandle(t);

};
/** @arg {TfixExecute} t */
function fixExecuteHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return fixExecuteComply(t);

};
/** @arg {TfixExecute} t */
function fixExecuteComply(t) {

    const {

        cl,
        ject,
        func,
        transmits,

    } = t;

    return [testFixExecuteTime(t), testFixExecuteMemory(t)];

};

/**
 * Функция получения данных о выполнеии указанной функции.
 * В качестве результата приходит массив данных.
 * В данных хранится информация о времени работы функции и кол-ве памяти, потребовавшиеся ей для выполения.
 *
 * Первое значение итогового массива является `временем`, затраченным функцией на выполнение.
 * Оно вычисляется за счет функции fixExecuteTime.
 * Данное значение посчитано в `ms`.
 *
 * Второе значение итогового массива является `памятью` задействованой при выполнении функции.
 * Она вычисляется за счет функции fixExecuteMemory.
 * Данное значение посчитано в `kb`.
 * @arg {function} func Исходная функция.
 * @arg {...any} transmits Объект-носитель аргументов для функции.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function testFixExecuteFunc(func, ...transmits) {

    return fixExecuteDeceit({ func, transmits, });

};

//#endregion
//#region fixExecuteTime 0.0.0

/**
 * @typedef TBfixExecuteTime
 * @prop {{}} ject
 * @prop {typeof Object} cl
 * @prop {function} func
 * @prop {Array<any>} transmits
 * @typedef {TBfixExecuteTime} TfixExecuteTime
*/

/** @arg {TfixExecuteTime} t */
function fixExecuteTimeDeceit(t) {

    try {

        return fixExecuteTimeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TfixExecuteTime} t */
function fixExecuteTimeVerify(t) {

    const {



    } = t;

    return fixExecuteTimeHandle(t);

};
/** @arg {TfixExecuteTime} t */
function fixExecuteTimeHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return fixExecuteTimeComply(t);

};
/** @arg {TfixExecuteTime} t */
function fixExecuteTimeComply(t) {

    const {

        cl,
        func,
        ject,
        transmits = [],

    } = t;

    if (ject) {

        const d = new Date();

        func.apply(ject, [...transmits]);

        return new Date() - d;

    } else if (cl) {

        const d = new Date();

        new cl(...transmits);

        return new Date() - d;

    } else {

        const d = new Date();

        func(...transmits);

        return new Date() - d;

    };

};

/**
 * Функция для фиксирования времени исполнения функции, конструктора или функции с контекстом.
 * Результирующее значение представлено в `ms`.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {TfixExecute} transmits Объект-носитель аргументов.
 * - По умолчанию `{}`
*/
export function testFixExecuteTime(transmits = {}) {

    return fixExecuteTimeDeceit(transmits);

};
/**
 * Функция для фиксирования времени исполнения указанной функции.
 * Результирующее значение предоставлено в `ms`.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {function} func Функция, время которой необходимо зафиксировать.
 * @arg {...any} Аргументы для функции.
*/
export function testFixExecuteTimeFunc(func, ...transmits) {

    return fixExecuteTimeDeceit({ func, transmits });

};
/**
 * Функция для фиксирования времени исполнения указанного конструктора.
 * Результирующее значение предоставлено в `ms`.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {typeof Object} cl Класс.
 * @arg {...any} transmits Аргументы для конструктора.
*/
export function testFixExecuteTimeClass(cl, ...transmits) {

    return fixExecuteTimeDeceit({ cl, transmits });

};
/**
 * Функция для фиксирования времени исполнения указанной функции с указанием контекста вызова.
 * Результирующее значение предоставлено в `ms`.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {{}} ject Объект вызова.
 * @arg {function} func Исходная функция.
 * @arg {...any} transmits Аргументы для функции.
*/
export function testFixExecuteTimeFuncApply(func, ject, ...transmits) {

    return fixExecuteTimeDeceit({ func, ject, transmits, });

};

//#endregion
//#region fixExecuteMemory 0.0.0

/**
 * @typedef TBfixExecuteMemory
 * @prop {any} _
 * @typedef {TBfixExecuteMemory&TfixExecute} TfixExecuteMemory
*/

/** @arg {TfixExecuteMemory} t */
function fixExecuteMemoryDeceit(t) {

    try {

        return fixExecuteMemoryVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TfixExecuteMemory} t */
function fixExecuteMemoryVerify(t) {

    const {



    } = t;

    return fixExecuteMemoryHandle(t);

};
/** @arg {TfixExecuteMemory} t */
function fixExecuteMemoryHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return fixExecuteMemoryComply(t);

};
/** @arg {TfixExecuteMemory} t */
function fixExecuteMemoryComply(t) {

    const {

        cl,
        func,
        ject,
        transmits,

    } = t;

    if (ject) {

        const m = process.memoryUsage().heapUsed;

        func.apply(ject, [...transmits]);

        return process.memoryUsage().heapUsed - m;

    } else if (cl) {

        const m = process.memoryUsage().heapUsed;

        func.apply(ject, [...transmits]);

        return process.memoryUsage().heapUsed - m;

    } else {

        const m = process.memoryUsage().heapUsed;

        func.apply(ject, [...transmits]);

        return process.memoryUsage().heapUsed - m;

    };

};

/**
 * Функция для фиксирования памяти занятой при исполнении функции, конструктора или функции с контекстом.
 * Результирующее значение представлено в `kb`.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {TfixExecute} transmits Объект-носитель аргументов.
 * - По умолчанию `{}`
*/
export function testFixExecuteMemory(transmits = {}) {

    return fixExecuteMemoryDeceit(transmits);

};
/**
 * Функция для фиксирования памяти занятой при исполнении указанной функцией.
 * Результирующее значение предоставлено в `kb`.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {function} func Исходная функция.
 * @arg {...any} Аргументы для функции.
*/
export function testFixExecuteMemoryFunc(func, ...transmits) {

    return fixExecuteMemoryDeceit({ func, transmits });

};
/**
 * Функция для фиксирования памяти занятой при исполнении указанного конструктора.
 * Результирующее значение предоставлено в `kb`.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {typeof Object} cl Класс.
 * @arg {...any} transmits Аргументы для конструктора.
*/
export function testFixExecuteMemoryClass(cl, ...transmits) {

    return fixExecuteMemoryDeceit({ cl, transmits });

};
/**
 * Функция для фиксирования памяти занятой при исполнении указанной функцией с указанием контекста вызова.
 * Результирующее значение предоставлено в `kb`.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {{}} ject Объект вызова.
 * @arg {function} func Исходная функция.
 * @arg {...any} transmits Аргументы для функции.
*/
export function testFixExecuteMemoryFuncApply(func, ject, ...transmits) {

    return fixExecuteMemoryDeceit({ func, ject, transmits, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/