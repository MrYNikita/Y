//#region YI

import { arrayGetDevideByCount } from '../array/module.mjs';
import { condIsNumberLimit, condIsString } from '../bool/cond/module.mjs';
import { YError } from '../error/class.mjs';
import { funcBypass } from '../func/module.mjs';
import configInsert from './insert/config.mjs';

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

/** ### stringT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Основной параметр модуля `string`.
 *
 * @typedef stringT
 * @prop {string} string
 *
*/
/** ### stringTRow
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef stringTRow
 * @prop {number} row
 *
*/
/** ### stringTIndex
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {import('../ject/many/module.mjs').manyTIndex} stringTIndex
 *
*/
/** ### stringTLimit
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {import('../ject/many/module.mjs').manyTLimit} stringTLimit
 *
*/
/** ### stringTLength
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {import('../ject/many/module.mjs').manyTLength} stringTLength
 *
*/
/** ### stringTColumn
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef stringTColumn
 * @prop {number} column
 *
*/
/** ### stringTInsert
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef stringTInsert
 * @prop {string} find
 * @prop {string} value
 *
*/
/** ### stringTPosition
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {stringTRow&stringTColumn} stringTPosition
 *
*/

/** ### stringTTInserts
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {(string|[string,string])} stringTTInserts
 *
*/

//#endregion
//#region YV



//#endregion

//#region get 0.0.0

/** ### stringTFGet
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `get`.
 *
 * @typedef {stringTFUGet&stringT&stringTPosition} stringTFGet
 *
*/
/** ### stringTFUGet
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `get`.
 *
 * @typedef stringTFUGet
 * @prop {any} _
*/

/** @arg {stringTFGet} t */
function getDeceit(t) {

    try {

        return getVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFGet} t */
function getVerify(t) {

    const {



    } = t;

    return getHandle(t);

};
/** @arg {stringTFGet} t */
function getHandle(t) {

    const {



    } = t;

    if (!t.column) {

        [t.column, t.row] = [t.row, null];

    };

    return getComply(t);

};
/** @arg {stringTFGet} t */
function getComply(t) {

    const {

        row,
        column,
        string,

    } = t;

    const rows = string.split('\n');

    if (condIsNumberLimit(row)) {

        return rows[row][column];

    } else {

        return rows[0][column];

    };

};

/**
 * ### stringGet
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Метод получения символа указанной строки в указанной позиции.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {number} row `Линия`
 *
 * Если указывается без `столбца`, то будет предена как столбец.
 * @arg {number} column `Столбец`
*/
export function stringGet(string, row, column) {

    return getDeceit({ string, row, column });

};

//#endregion
//#region getRow 0.0.0

/** ### stringTFGetRow
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `getRow`.
 *
 * @typedef {stringTFUGetRow&stringT&stringTRow} stringTFGetRow
 *
*/
/** ### stringTFUGetRow
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `getRow`.
 *
 * @typedef stringTFUGetRow
 * @prop {any} _
*/

/** @arg {stringTFGetRow} t */
function getRowDeceit(t) {

    try {

        return getRowVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFGetRow} t */
function getRowVerify(t) {

    const {



    } = t;

    return getRowHandle(t);

};
/** @arg {stringTFGetRow} t */
function getRowHandle(t) {

    const {



    } = t;

    return getRowComply(t);

};
/** @arg {stringTFGetRow} t */
function getRowComply(t) {

    const {

        row,
        string,

    } = t;

    const result = string.split('\n')[row];

    if (result) {

        return result;

    } else {

        return undefined;

    };

};

/**
 * ### stringgetRow
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция получения указанной линии из указанной строки.
 *
 * ***
 * @arg {number} row `Линия`
 * @arg {string} string `Строка`
*/
export function stringGetRow(string, row) {

    return getRowDeceit({ string, row });

};

//#endregion
//#region getRows 0.0.0

/** ### stringTFGetRows
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `getRows`.
 *
 * @typedef {stringTFUGetRows&stringT} stringTFGetRows
 *
*/
/** ### stringTFUGetRows
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `getRows`.
 *
 * @typedef stringTFUGetRows
 * @prop {any} _
*/

/** @arg {stringTFGetRows} t */
function getRowsDeceit(t) {

    try {

        return getRowsVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFGetRows} t */
function getRowsVerify(t) {

    const {



    } = t;

    return getRowsHandle(t);

};
/** @arg {stringTFGetRows} t */
function getRowsHandle(t) {

    const {



    } = t;

    return getRowsComply(t);

};
/** @arg {stringTFGetRows} t */
function getRowsComply(t) {

    const {

        string,

    } = t;

    return string.split('\n');

};

/**
 * ### stringGetRows
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция получения всех линий строки в виде массива.
 *
 * ***
 * @arg {string} string `Строка`
*/
export function stringGetRows(string) {

    return getRowsDeceit({ string, });

};

//#endregion
//#region getMatrix 0.0.0

/** ### stringTFGetMatrix
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `getMatrix`.
 *
 * @typedef {stringTFUGetMatrix&stringT} stringTFGetMatrix
 *
*/
/** ### stringTFUGetMatrix
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `getMatrix`.
 *
 * @typedef stringTFUGetMatrix
 * @prop {any} _
*/

/** @arg {stringTFGetMatrix} t */
function getMatrixDeceit(t) {

    try {

        return getMatrixVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFGetMatrix} t */
function getMatrixVerify(t) {

    const {



    } = t;

    return getMatrixHandle(t);

};
/** @arg {stringTFGetMatrix} t */
function getMatrixHandle(t) {

    const {



    } = t;

    return getMatrixComply(t);

};
/** @arg {stringTFGetMatrix} t */
function getMatrixComply(t) {

    const {

        string,

    } = t;

    return string.split('\n').map(row => row.split(''));

};

/**
 * ### stringGetMatrix
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция получения матрицы символов.
 *
 * ***
 * @arg {string} string `Строка`
*/
export function stringGetMatrix(string) {

    return getMatrixDeceit({ string, });

};

//#endregion

//#region pad 0.1.1

/** ### stringTFPad
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `pad`.
 *
 * @typedef {stringTFUPad&stringT&stringTIndex&stringTLimit} stringTFPad
 *
*/
/** ### stringTFUPad
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `pad`.
 *
 * @typedef stringTFUPad
 * @prop {string} pad
 * @prop {boolean} modeCut
*/

/** @arg {stringTFPad} t */
function padDeceit(t) {

    try {

        return padVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFPad} t */
function padVerify(t) {

    const {



    } = t;

    return padHandle(t);

};
/** @arg {stringTFPad} t */
function padHandle(t) {

    const {



    } = t;

    return padComply(t);

};
/** @arg {stringTFPad} t */
function padComply(t) {

    const {

        pad,
        limit,
        index,
        string,
        modeCut,

    } = t;

    if (string.length >= limit || !limit || !pad) {

        return string;

    } else {

        const count = Math.floor((limit - string.length) / pad.length);
        const overflow = t.limit - (count * pad.length + string.length);

        return stringAppend(string, index, pad.repeat(count) + pad.slice(0, overflow > 0 ? overflow : 0));

    };

};

/**
 * ### stringPad
 * - Версия `0.1.1`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция доведения указанной `строки` до указанного `лимита` символов `строкой доведения`.
 *
 * В отличии от обычной функции `pad` позволяет доводить строку до указанного лимита с указанной позиции.
 *
 * ***
 * @arg {string} pad `Строка доведения`
 * @arg {number} limit `Лимит`
 * @arg {number} index `Позиция`
 * @arg {string} string `Строка`
 * @arg {boolean} modeCut `Режим отсечения`
 *
 * Режим отсечения позволяет обрезать ту часть дополнения, что превзошла указанный лимит.
 *
 * - Дефолт `true`
*/
export function stringPad(string, pad, limit, index = string.length, modeCut = true) {

    return padDeceit({ string, limit, index, pad, modeCut });

};

//#endregion
//#region padRow 0.0.0

/** ### stringTFPadRow
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `padColumn`.
 *
 * @typedef {stringTFUPadRow&stringT&stringTFPad} stringTFPadRow
 *
*/
/** ### stringTFUPadRow
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `padColumn`.
 *
 * @typedef stringTFUPadRow
 * @prop {} _
*/

/** @arg {stringTFPadRow} t */
function padRowDeceit(t) {

    try {

        return padRowVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFPadRow} t */
function padRowVerify(t) {

    const {



    } = t;

    return padRowHandle(t);

};
/** @arg {stringTFPadRow} t */
function padRowHandle(t) {

    const {



    } = t;

    return padRowComply(t);

};
/** @arg {stringTFPadRow} t */
function padRowComply(t) {

    const {

        pad,
        limit,
        string,

    } = t;

    return string + pad.repeat(limit - string.split('\n').length, pad);

};

/**
 * ### stringPadColumn
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция приведения указанной строки к указанному количеству строк.
 *
 * ***
 * @arg {string} pad `Дополнитель`
 *
 * - Дефолт `\n`
 * @arg {string} string `Строка`
 * @arg {number} limit `Лимит`
*/
export function stringPadRow(string, limit, pad = config.rowEnd) {

    return padRowDeceit({ string, limit, pad, });

};

//#endregion
//#region padColumn 0.0.0

/** ### stringTFPadColumn
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `padColumn`.
 *
 * @typedef {stringTFUPadColumn&stringT&stringTFPad} stringTFPadColumn
 *
*/
/** ### stringTFUPadColumn
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `padColumn`.
 *
 * @typedef stringTFUPadColumn
 * @prop {any} _
*/

/** @arg {stringTFPadColumn} t */
function padColumnDeceit(t) {

    try {

        return padColumnVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFPadColumn} t */
function padColumnVerify(t) {

    const {



    } = t;

    return padColumnHandle(t);

};
/** @arg {stringTFPadColumn} t */
function padColumnHandle(t) {

    const {



    } = t;

    return padColumnComply(t);

};
/** @arg {stringTFPadColumn} t */
function padColumnComply(t) {

    const {

        pad,
        limit,
        string,

    } = t;

    return string.split('\n').map(row => {

        const r = stringPad(row, pad, limit);

        return r;

    }).join('\n');

};

/**
 * ### stringPadColumn
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция приведения каждой линии указанной строки к указанному кол-ву столбцов.
 *
 * ***
 * @arg {string} pad `Дополнитель`
 *
 * - Дефолт ` `
 * @arg {string} string `Строка`
 * @arg {number} limit `Лимит`
*/
export function stringPadColumn(string, limit, pad = ' ') {

    return padColumnDeceit({ string, limit, pad, });

};

//#endregion

//#region trim 0.2.0

/** ### stringTFTrim
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `trim`.
 *
 * @typedef {stringTFUTrim&stringT} stringTFTrim
 *
*/
/** ### stringTFUTrim
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `trim`.
 *
 * @typedef stringTFUTrim
 * @prop {boolean} end
 * @prop {boolean} start
*/

/** @arg {stringTFTrim} t */
function trimDeceit(t) {

    try {

        return trimVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFTrim} t */
function trimVerify(t) {

    const {



    } = t;

    return trimHandle(t);

};
/** @arg {stringTFTrim} t */
function trimHandle(t) {

    const {



    } = t;

    return trimComply(t);

};
/** @arg {stringTFTrim} t */
function trimComply(t) {

    const {

        end,
        start,
        string,

    } = t;

    let result = string;

    if (end && start) {

        result = result.trim().split('\n').map(row => row.trim()).join('\n');

    } else if (end) {

        result = result.trimEnd().split('\n').map(row => row.trimEnd()).join('\n');

    } else if (start) {

        result = result.trimStart().split('\n').map(row => row.trimStart()).join('\n');

    };

    return result;

};

/**
 * ### stringTrim
 * - Версия `0.2.0`
 * - Цепочка `DVHCa`
 * - Пространство `string`
 *
 * Функция обрезки каждой линии строки и самой строки от свободных линий.
 * ***
 * @arg {string} string `Строка`
 * @arg {boolean} end `Обрезка конца строки`
 * - По умолчанию `true`
 * @arg {boolean} start `Обрезка начала строки`
 * - По умолчанию `false`
*/
export function stringTrim(string, end = true, start = false) {

    return trimDeceit({ string, start, end, });

};

//#endregion
//#region trimRow 0.0.0

/** ### stringTFTrimRow
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `trimRow`.
 *
 * @typedef {stringTFUTrimRow&stringT} stringTFTrimRow
 *
*/
/** ### stringTFUTrimRow
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `trimRow`.
 *
 * @typedef stringTFUTrimRow
 * @prop {any} _
*/

/** @arg {stringTFTrimRow} t */
function trimRowDeceit(t) {

    try {

        return trimRowVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFTrimRow} t */
function trimRowVerify(t) {

    const {



    } = t;

    return trimRowHandle(t);

};
/** @arg {stringTFTrimRow} t */
function trimRowHandle(t) {

    const {



    } = t;

    return trimRowComply(t);

};
/** @arg {stringTFTrimRow} t */
function trimRowComply(t) {

    const {



    } = t;



};

/**
 * ### stringTrimRow
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 *
 *
 * ***
 *
*/
export function stringTrimRow() {

    return trimRowDeceit({});

};

//#endregion

//#region split 0.0.0

/** ### stringTFSplit
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `split`.
 *
 * @typedef {stringTFUSplit&stringT} stringTFSplit
 *
*/
/** ### stringTFUSplit
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `split`.
 *
 * @typedef stringTFUSplit
 * @prop {number} count
 * @prop {string} separator
*/

/** @arg {stringTFSplit} t */
function splitDeceit(t) {

    try {

        return splitVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFSplit} t */
function splitVerify(t) {

    const {



    } = t;

    return splitHandle(t);

};
/** @arg {stringTFSplit} t */
function splitHandle(t) {

    const {



    } = t;

    return splitComply(t);

};
/** @arg {stringTFSplit} t */
function splitComply(t) {

    const {

        count,
        string,
        separator,

    } = t;

    let result = string.split(separator);

    if (count) {

        return [...result.slice(0, count), result.slice(count).join(separator)];

    } else {

        return result;

    };

};

/**
 * ### stringSplit
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция разбивки указанной строки на подстроки по указанному разделителю.
 *
 * С помощью `счётчика` можно задать кол-во разбиений.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {string} separator `Разделитель`
 * @arg {number} count `Счётчик`
*/
export function stringSplit(string, separator, count) {

    return splitDeceit({ string, separator, count, });

};

//#endregion
//#region unify 0.0.1

/** ### stringTFUnify
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `unify`.
 *
 * @typedef {stringTFUUnify&stringT} stringTFUnify
 *
*/
/** ### stringTFUUnify
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `unify`.
 *
 * @typedef stringTFUUnify
 * @prop {string} symbols
*/

/** @arg {stringTFUnify} t */
function unifyDeceit(t) {

    try {

        return unifyVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFUnify} t */
function unifyVerify(t) {

    const {



    } = t;

    return unifyHandle(t);

};
/** @arg {stringTFUnify} t */
function unifyHandle(t) {

    const {



    } = t;

    return unifyComply(t);

};
/** @arg {stringTFUnify} t */
function unifyComply(t) {

    let {

        string,

    } = t;

    const {

        symbols,

    } = t;

    for (let i = 0; i < string.length; i++) {

        if (string[i + 1] && string[i] === string[i + 1] && (!symbols || (symbols && symbols.includes(string[i])))) {

            string = stringRemove(string, i, 1);

            i--;

        };

    };

    return string;

};

/**
 * ### stringUnify
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция унифицирования содержимого строки.
 *
 * Унификация исключает дублирование символов идущих подряд, удаляя дубли.
 *
 * ***
 * @arg {string} string `Строка`
*/
export function stringUnify(string) {

    return unifyDeceit({ string, });

};
/**
 * ### stringUnifyBySymbol
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция {@link stringUnify|унифицирования} по указанным символам.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {string} symbols `Символы`
*/
export function stringUnifyBySymbol(string, symbols) {

    return unifyDeceit({ string, symbols, });

};

//#endregion

//#region paste 0.2.0

/** ### stringTFPaste
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `paste`.
 *
 * @typedef {stringTFUPaste&stringTIndex&stringTLength} stringTFPaste
 *
*/
/** ### stringTFUPaste
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `paste`.
 *
 * @typedef stringTFUPaste
 * @prop {string} paste
*/

/** @arg {stringTFPaste} t */
function pasteDeceit(t) {

    try {

        return pasteVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {stringTFPaste} t */
function pasteVerify(t) {

    const {



    } = t;

    return pasteHandle(t);

};
/** @arg {stringTFPaste} t */
function pasteHandle(t) {

    const {



    } = t;

    return pasteComply(t);

};
/** @arg {stringTFPaste} t */
function pasteComply(t) {

    let {

        index,
        string,

    } = t;

    const {

        paste,
        length,

    } = t;

    string = stringRemove(string, index, length);

    if (length < -1) {

        const d = index + length;

        if (d < 0) {

            index += length - d;

        } else {

            index += length + 1;

        };

    };

    return stringAppend(string, index, paste);

};

/**
 * ### stringPaste
 * - Версия `0.2.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция вставки с замещением указанной индексом и размером области в строку.
 *
 * ***
 * @arg {number} length `Размер`
 * @arg {number} index `Индекс`
 *
 * - Дефолт `string.length ?? 0`
 * @arg {string} paste `Вставка`
 * @arg {string} string `Строка`
*/
export function stringPaste(string, paste, index = string.length ?? 0, length = 0) {

    return pasteDeceit({ string, paste, index, length, });

};

//#endregion

//#region append 0.0.1

/** ### stringTFAppend
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `append`.
 *
 * @typedef {stringTFUAppend&stringT&stringTIndex} stringTFAppend
 *
*/
/** ### stringTFUAppend
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `append`.
 *
 * @typedef stringTFUAppend
 * @prop {string[]} appends
*/

/** @arg {stringTFAppend} t */
function appendDeceit(t) {

    try {

        return appendVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFAppend} t */
function appendVerify(t) {

    const {



    } = t;

    return appendHandle(t);

};
/** @arg {stringTFAppend} t */
function appendHandle(t) {

    const {



    } = t;

    return appendComply(t);

};
/** @arg {stringTFAppend} t */
function appendComply(t) {

    const {

        index,
        string,
        appends,

    } = t;

    if (condIsNumberLimit(index) && index >= 0) {

        return string.slice(0, index) + appends.join('') + string.slice(index);

    } else {

        return string;

    };

};

/**
 * ### stringAppend
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция добавления указанных значений к указанной строке с указанной позиции.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {number} index `Индекс`
 * @arg {string} appends `Добавления`
*/
export function stringAppend(string, index, ...appends) {

    return appendDeceit({ string, index, appends, });

};

//#endregion
//#region remove 0.0.1

/** ### stringTFRemove
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `remove`.
 *
 * @typedef {stringTFURemove&stringT&stringTLength&stringTIndex} stringTFRemove
 *
*/
/** ### stringTFURemove
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `remove`.
 *
 * @typedef stringTFURemove
 * @prop {any} _
*/

/** @arg {stringTFRemove} t */
function removeDeceit(t) {

    try {

        return removeVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFRemove} t */
function removeVerify(t) {

    const {



    } = t;

    return removeHandle(t);

};
/** @arg {stringTFRemove} t */
function removeHandle(t) {

    const {



    } = t;

    if (t.index < 0) t.index = 0;
    if (t.index >= t.string.length) t.index = t.string.length;

    if (t.length < 0 && t.length + t.index < 0) [t.index, t.length] = [null, t.index + 1];
    else if (t.length > 0 && t.length + t.index >= t.string.length) [t.index, t.length] = [t.index, null];
    else if (t.length > 0) [t.index, t.length] = [t.index, t.index + t.length];
    else[t.index, t.length] = [t.index + t.length + 1, t.index + 1];

    return removeComply(t);

};
/** @arg {stringTFRemove} t */
function removeComply(t) {

    const {

        index,
        length,
        string,

    } = t;

    if (!index && index !== 0) {

        return string.slice(length);

    } else if (!length && length !== 0) {

        return string.slice(0, index);

    } else {

        return string.slice(0, index) + string.slice(length);

    };

};

/**
 * ### stringRemove
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция удаления фрагмента из указанной строки начиная с указанного индекса и до указанной длины.
 *
 * ***
 * @arg {number} index `Индекс`
 * @arg {number} length `Длина`
 * @arg {string} string `Строка`
*/
export function stringRemove(string, index, length) {

    return removeDeceit({ string, index, length });

};
/**
 * ### stringRemoveEnd
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция для удаления фрагмента строки начиная с конца строки.
 *
 * ***
 * @arg {number} length `Длина`
 * @arg {string} string `Строка`
*/
export function stringRemoveEnd(string, length) {

    return removeDeceit({ string, index: string.length - length, length });

};
/**
 * ### stringRemoveStart
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция для удаления фрагмента строки начиная с начала строки.
 *
 * ***
 * @arg {number} length `Длина`
 * @arg {string} string `Строка`
*/
export function stringRemoveStart(string, length) {

    return removeDeceit({ string, index: 0, length, });

};

//#endregion
//#region filter 0.0.0

/** ### stringTFFilter
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `filter`.
 *
 * @typedef {stringTFUFilter&stringT} stringTFFilter
 *
*/
/** ### stringTFUFilter
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `filter`.
 *
 * @typedef stringTFUFilter
 * @prop {(string|RegExp)[]} filters
*/

/** @arg {stringTFFilter} t */
function filterDeceit(t) {

    try {

        return filterVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFFilter} t */
function filterVerify(t) {

    const {



    } = t;

    return filterHandle(t);

};
/** @arg {stringTFFilter} t */
function filterHandle(t) {

    const {



    } = t;

    t.filters.forEach((e, i, a) => {

        if (e instanceof RegExp && !e.flags.includes('g')) {

            a[i] = new RegExp(e, 'g');

        };

    });

    return filterComply(t);

};
/** @arg {stringTFFilter} t */
function filterComply(t) {

    const {

        string,
        filters,

    } = t;

    let result = string;

    filters.forEach(filter => {

        result = result.replaceAll(filter, '');

    });

    return result;

};

/**
 * ### stringFilter
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция фильтрации указанной строки указанными фильтрами.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {...(string|RegExp)} filters `Фильтры`
*/
export function stringFilter(string, ...filters) {

    return filterDeceit({ string, filters, });

};

//#endregion
//#region shield 0.1.0

/** ### stringTFShield
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `shield`.
 *
 * @typedef {stringTFUShield&stringT} stringTFShield
 *
*/
/** ### stringTFUShield
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `shield`.
 *
 * @typedef stringTFUShield
 * @prop {any} _
*/

/** @arg {stringTFShield} t */
function shieldDeceit(t) {

    try {

        return shieldVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFShield} t */
function shieldVerify(t) {

    const {



    } = t;

    return shieldHandle(t);

};
/** @arg {stringTFShield} t */
function shieldHandle(t) {

    const {



    } = t;

    return shieldComply(t);

};
/** @arg {stringTFShield} t */
function shieldComply(t) {

    const {

        string,

    } = t;

    let result = string;

    const replaces = [

        '\\',
        '/',
        '?',
        '!',
        '*',
        '.',
        '[',
        ']',
        '(',
        ')',
        '&',
        '^',
        '%',
        '$',
        '#',
        '@',
        '~',
        ',',
        '{',
        '}',
        '"',
        '\'',
        '+',
        '-',
        '_',
        '=',
        '`',
        '|',
        '>',
        '<',
        ':',
        ';',
        '\n',
        '\r',
        '\x1b'

    ].map(replace => [replace, '\\' + replace]).forEach(replace => {

        result = result.replaceAll(...replace);

    });

    return result;

};

/**
 * ### stringShield
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция экранирования символов строки.
 *
 * ***
 * @arg {string} string `Строка`
*/
export function stringShield(string) {

    return shieldDeceit({ string, });

};

//#endregion

//#region insert 0.0.0

/** ### stringTFInsert
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `insert`.
 *
 * @typedef {stringTFUInsert&stringT} stringTFInsert
 *
*/
/** ### stringTFUInsert
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `insert`.
 *
 * @typedef stringTFUInsert
 * @prop {stringTTInserts} inserts
*/

/** @arg {stringTFInsert} t */
function insertDeceit(t) {

    try {

        return insertVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFInsert} t */
function insertVerify(t) {

    const {



    } = t;

    return insertHandle(t);

};
/** @arg {stringTFInsert} t */
function insertHandle(t) {

    const {



    } = t;

    t.inserts.forEach((e, i, a) => {

        if (condIsString(e)) {

            a[i] = stringSplit(e, configInsert.delimiter, 1);

        };

        return e;

    });

    return insertComply(t);

};
/** @arg {stringTFInsert} t */
function insertComply(t) {

    const {

        string,
        inserts,

    } = t;

    let result = string;

    for (const insert of inserts) {

        result = result.replaceAll(insert[0], insert[1]);

    };

    return result;

};

/**
 * ### stringInsert
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция вставки укзанного значения за место указанного соответсвия во всех местах указанной строки.
 *
 * ***
 * @arg {string} find `Поиск`
 * @arg {string} value `Значение`
 * @arg {string} string `Строка`
*/
export function stringInsert(string, find, value) {

    return insertDeceit({ string, inserts: [[find, value]], });

};
/**
 * ### stringInsertMany
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция множественной вставки указанных значений в указанные строки.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {...(string|[string, string])} inserts `Вставки`
 *
 * Могут быть указаны двумя вариантами:
 * - Через строки с разделителем `-`, где первая часть - `поиск`, а вторая - `вставка`.
 * - Через массивы с двумя строковыми значениями, где первое значение - `поиск`, а второе - `вставка`.
 *
 * Оба варианта могут использоваться в перемешку друг с другом, но рекомендуется соблюдать единство параметров.
*/
export function stringInsertMany(string, ...inserts) {

    return insertDeceit({ string, inserts, });

};

//#endregion
//#region insertBypass 0.0.0

/** ### stringTFinsertBypass
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `insertBypass`.
 *
 * @typedef {stringTFUinsertBypass&stringT} stringTFinsertBypass
 *
*/
/** ### stringTFUinsertBypass
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `insertBypass`.
 *
 * @typedef stringTFUinsertBypass
 * @prop {string} find
 * @prop {string[]} values
*/

/** @arg {stringTFinsertBypass} t */
function insertBypassDeceit(t) {

    try {

        return insertBypassVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFinsertBypass} t */
function insertBypassVerify(t) {

    const {



    } = t;

    return insertBypassHandle(t);

};
/** @arg {stringTFinsertBypass} t */
function insertBypassHandle(t) {

    const {



    } = t;

    return insertBypassComply(t);

};
/** @arg {stringTFinsertBypass} t */
function insertBypassComply(t) {

    const {

        find,
        string,
        values,

    } = t;

    let result = string;

    for (const value of values) {

        const change = result.replace(find, value);

        if (result === change) {

            break;

        } else {

            result = change;

        };

    };

    return result;

};

/**
 * ### stringinsertBypass
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция вставки в указанную строку поочередно указанных значений за место указанного значения поиска.
 *
 * ***
 * @arg {string} find `Поиск`
 * @arg {string} string `Строка`
 * @arg {...string} values `Значения`
*/
export function stringInsertBypass(string, find, ...values) {

    return insertBypassDeceit({ string, values, find, });

};

//#endregion

//#region devideByCount 0.0.0

/** ### stringTFDevideByCount
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `devideByCount`.
 *
 * @typedef {stringTFUDevideByCount&stringT} stringTFDevideByCount
 *
*/
/** ### stringTFUDevideByCount
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `devideByCount`.
 *
 * @typedef stringTFUDevideByCount
 * @prop {number} count
*/

/** @arg {stringTFDevideByCount} t */
function devideByCountDeceit(t) {

    try {

        return devideByCountVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFDevideByCount} t */
function devideByCountVerify(t) {

    const {



    } = t;

    return devideByCountHandle(t);

};
/** @arg {stringTFDevideByCount} t */
function devideByCountHandle(t) {

    const {



    } = t;

    return devideByCountComply(t);

};
/** @arg {stringTFDevideByCount} t */
function devideByCountComply(t) {

    const {

        count,
        string,

    } = t;

    return arrayGetDevideByCount(string, count);

};

/**
 * ### stringDevideByCount
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция разбиения указанной строки на подстроки указанной длины.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {number} count `Счётчик`
*/
export function stringDevideByCount(string, count) {

    return devideByCountDeceit({ string, count, });

};

//#endregion

//#region reverse 0.0.1

/** ### stringTFReverse
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `reverse`.
 *
 * @typedef {stringTFUReverse&stringT} stringTFReverse
 *
*/
/** ### stringTFUReverse
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `reverse`.
 *
 * @typedef stringTFUReverse
 * @prop {any} _
*/

/** @arg {stringTFReverse} t */
function reverseDeceit(t) {

    try {

        return reverseVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFReverse} t */
function reverseVerify(t) {

    const {



    } = t;

    return reverseHandle(t);

};
/** @arg {stringTFReverse} t */
function reverseHandle(t) {

    const {



    } = t;

    return reverseComply(t);

};
/** @arg {stringTFReverse} t */
function reverseComply(t) {

    const {

        string,

    } = t;

    let result = '';

    for (let i = string.length - 1; i >= 0; i--) {

        result += string[i];

    };

    return result;

};

/**
 * ### stringReverse
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция переворота строки.
 *
 * ***
 * @arg {string} string `Строка`
*/
export function stringReverse(string) {

    return reverseDeceit({ string, });

};

//#endregion
//#region reflect 0.0.0

/** ### stringTFReflect
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `reflect`.
 *
 * @typedef {stringTFUReflect&stringT} stringTFReflect
 *
*/
/** ### stringTFUReflect
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `reflect`.
 *
 * @typedef stringTFUReflect
 * @prop {(string|[string, string])} mirrors
*/

/** @arg {stringTFReflect} t */
function reflectDeceit(t) {

    try {

        return reflectVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFReflect} t */
function reflectVerify(t) {

    const {



    } = t;

    return reflectHandle(t);

};
/** @arg {stringTFReflect} t */
function reflectHandle(t) {

    const {



    } = t;

    return reflectComply(t);

};
/** @arg {stringTFReflect} t */
function reflectComply(t) {

    const {

        string,
        mirrors,

    } = t;

    const result = string.split('\n');

    for (const i in result) {

        result[i] += funcBypass(result[i],

            [stringInsertMany, mirrors],
            [stringReverse]

        );

    };

    return result.join('\n');

};

/**
 * ### stringReflect
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция дополнения строки её зеркальным отражением.
 *
 * Зеркальное отражение представлено реверсивной копией исходной строки, где также присутствуют отличные от исходных символов отражения.
 *
 * Данные отличия называются зеркалами. Зеркала представлены вставками, которые замещают собой исходные символы.
 *
 * Также отражение не затрагивает символы переноса строки.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {...(string|[string, string])} mirrors `Зеркала`
*/
export function stringReflect(string, ...mirrors) {

    return reflectDeceit({ string, mirrors, });

};

//#endregion
//#region mesuare 0.0.0

/** ### stringTFMesuare
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `mesuare`.
 *
 * @typedef {stringTFUMesuare&stringT} stringTFMesuare
 *
*/
/** ### stringTFUMesuare
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `mesuare`.
 *
 * @typedef stringTFUMesuare
 * @prop {number} step
 * @prop {string[]} mesuares
*/

/** @arg {stringTFMesuare} t */
function mesuareDeceit(t) {

    try {

        return mesuareVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFMesuare} t */
function mesuareVerify(t) {

    const {



    } = t;

    return mesuareHandle(t);

};
/** @arg {stringTFMesuare} t */
function mesuareHandle(t) {

    const {



    } = t;

    return mesuareComply(t);

};
/** @arg {stringTFMesuare} t */
function mesuareComply(t) {

    const {

        step,
        string,
        substrings,

    } = t;

    let result = string;

    for (let i = 0, c = 0, p = 0; i < result.length; i++) {

        if ((i - p) % step === 0 && i !== 0) {

            result = stringPaste(result, substrings[c], i);

            i += substrings[c].length;
            p += substrings[c].length;

        };

    };

    return result;

};

/**
 * ### stringMesuare
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция добавления указанных подстрок в указанную строку через каждое указанное кол-во символов.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {number} step `Шаг`
 * @arg {...string} mesuares `Зарубки`
*/
export function stringMesuare(string, step, ...mesuares) {

    return mesuareDeceit({ string, step, mesuares, });

};

//#endregion

//#region substring 0.0.0

/** ### stringTFSubstring
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `substring`.
 *
 * @typedef {stringTFUSubstring&stringT&stringTLength&stringTIndex} stringTFSubstring
 *
*/
/** ### stringTFUSubstring
 * - Тип `TFU`
 * - Версия `0.0.1`
 * - Модуль `string`
 *
 * Уникальные параметры функции `substring`.
 *
 * @typedef stringTFUSubstring
 * @prop {boolean} back
*/

/** @arg {stringTFSubstring} t */
function substringDeceit(t) {

    try {

        return substringVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {stringTFSubstring} t */
function substringVerify(t) {

    const {



    } = t;

    return substringHandle(t);

};
/** @arg {stringTFSubstring} t */
function substringHandle(t) {

    const {



    } = t;

    if (!t.index || t.index < 0) {

        t.index = 0;

    } else if (t.index > t.string?.length) {

        t.index = t.string.length - 1;

    };

    if (!t.length && t.length !== 0) {

        t.length = t.string.length - t.index;

    } else if (t.length < 0) {

        t.back = true;
        t.length *= -1;

    };

    if ((t.y || t.y === 0) && (t.x || t.x === 0)) {

        t.index = stringGetPositionRowStartByIndex(t.string, t.y) + t.x;

    };

    return substringComply(t);

};
/** @arg {stringTFSubstring} t */
function substringComply(t) {

    const {

        back,
        index,
        string,
        length,

    } = t;

    if ((index === 0 && !length) || ((t.index === 0 || (t.index === t.string.length - 1 && back)) && t.string.length === length)) {

        return string;

    } else if (length === 0) {

        return '';

    };

    if (back) {

        return string.slice(0, index + 1).slice(-length);

    } else {

        return string.slice(index, index + length);

    };

};

/**
 * ### stringSubstring
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция извлечения подстроки из указанной строки начиная с указанного индекса и до указанной длины.
 *
 * ***
 * @arg {boolean} back `Обратный режим`
 *
 * При активации берет символы начиная с указанного индекса, до указанной длины по направлению к началу строке.
 *
 * Если не определен, то работает в стандартном режиме.
 *
 * @arg {string} string `Строка`
 * @arg {number?} length `Длина`
 *
 * Длина определяет кол-во символов начиная с указанного индекса, которое необходимо взять в подстроку.
 *
 * Если не определена, то будут взяты все символы начиная с указанного индекса и до конца строки.
 * @arg {number} index `Индекс`
*/
export function stringSubstring(string, index, length, back) {

    return substringDeceit({ string, index, length, back });

};
/**
 * ### stringSubstringByPosition
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция {@link stringSubstring|извлечения подстроки} из указанной строки начиная с указанной позиции и до указанной длины.
 *
 * ***
 * @arg {number} y `Линия`
 * @arg {number} x `Позиция`
 * @arg {number} length `Длина`
 * @arg {string} string `Строка`
 * @arg {boolean} back `Обратный режим`
*/
export function stringSubstringByPosition(string, length, y, x, back) {

    return substringDeceit({ string, length, y, x, back, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/