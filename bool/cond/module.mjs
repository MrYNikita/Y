//#region YI

import { YError } from '../../error/class.mjs';
import { YCond } from './class.mjs';

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

/** ### condT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Основной параметр модуля `cond`.
 *
 * @typedef condT
 * @prop {} _
 *
*/
/** ### condTValue
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 *
 *
 * @typedef condTValue
 * @prop {} value
 *
*/

//#endregion
//#region YV



//#endregion

//#region isType 0.0.0

/** ### condTFIsType
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isType`.
 *
 * @typedef {condTFUIsType&condT&condTValue} condTFIsType
 *
*/
/** ### condTFUIsType
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isType`.
 *
 * @typedef condTFUIsType
 * @prop {} type
*/

/** @arg {condTFIsType} t */
function isTypeDeceit(t) {

    try {

        return isTypeVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsType} t */
function isTypeVerify(t) {

    const {



    } = t;

    return isTypeHandle(t);

};
/** @arg {condTFIsType} t */
function isTypeHandle(t) {

    const {



    } = t;

    return isTypeComply(t);

};
/** @arg {condTFIsType} t */
function isTypeComply(t) {

    const {

        type,
        value,

    } = t;

    if (value?.constructor === type) {

        return true;

    } else {

        return false;

    };

};

/**
 * ### condIsType
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки значения на принадлежность к указанному типу.
 *
 * ***
 * @arg value `Значение`
 * @arg {G} type `Тип`
 * @template G
*/
export function condIsType(value, type) {

    return isTypeDeceit({ value, type, });

};

//#endregion
//#region isBool 0.0.0

/** ### condTFIsBool
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isBool`.
 *
 * @typedef {condTFUIsBool&condT&condTValue} condTFIsBool
 *
*/
/** ### condTFUIsBool
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isBool`.
 *
 * @typedef condTFUIsBool
 * @prop {} _
*/

/** @arg {condTFIsBool} t */
function isBoolDeceit(t) {

    try {

        return isBoolVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsBool} t */
function isBoolVerify(t) {

    const {



    } = t;

    return isBoolHandle(t);

};
/** @arg {condTFIsBool} t */
function isBoolHandle(t) {

    const {



    } = t;

    return isBoolComply(t);

};
/** @arg {condTFIsBool} t */
function isBoolComply(t) {

    const {

        value,

    } = t;

    if (value?.constructor === Boolean) {

        return true;

    } else {

        return false;

    };

};

/**
 * ### condIsBool
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки значения на принадлежнсоть к логическим значениям.
 *
 * ***
 * @arg value
*/
export function condIsBool(value) {

    return isBoolDeceit({ value });

};

//#endregion
//#region isValid 0.0.0

/** ### condTFIsValid
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isValid`.
 *
 * @typedef {condTFUIsValid&condT&condTValue} condTFIsValid
 *
*/
/** ### condTFUIsValid
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isValid`.
 *
 * @typedef condTFUIsValid
 * @prop {} _
*/

/** @arg {condTFIsValid} t */
function isValidDeceit(t) {

    try {

        return isValidVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsValid} t */
function isValidVerify(t) {

    const {



    } = t;

    return isValidHandle(t);

};
/** @arg {condTFIsValid} t */
function isValidHandle(t) {

    const {



    } = t;

    return isValidComply(t);

};
/** @arg {condTFIsValid} t */
function isValidComply(t) {

    const {

        value,

    } = t;

    if (value || value === 0) {

        return true;

    } else {

        return false;

    };

};

/**
 * ### condIsValid
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки валидности числа.
 *
 * ***
 * @arg value
*/
export function condIsValid(value) {

    return isValidDeceit({ value });

};

//#endregion

//#region isString 0.0.0

/** ### condTFIsString
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isString`.
 *
 * @typedef {condTFUIsString&condT&condTValue} condTFIsString
 *
*/
/** ### condTFUIsString
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isString`.
 *
 * @typedef condTFUIsString
 * @prop {} _
*/

/** @arg {condTFIsString} t */
function isStringDeceit(t) {

    try {

        return isStringVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsString} t */
function isStringVerify(t) {

    const {



    } = t;

    return isStringHandle(t);

};
/** @arg {condTFIsString} t */
function isStringHandle(t) {

    const {



    } = t;

    return isStringComply(t);

};
/** @arg {condTFIsString} t */
function isStringComply(t) {

    const {

        value,

    } = t;

    if (condIsType(value, String)) {

        return true;

    } else {

        return false;

    };

};

/**
 * ### condIsString
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки значения на принадлежность к строке.
 *
 * ***
 * @arg value
*/
export function condIsString(value) {

    return isStringDeceit({ value });

};

//#endregion
//#region isStringValid 0.0.0

/** ### condTFIsStringValid
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isStringValid`.
 *
 * @typedef {condTFUIsStringValid&condT&condTValue} condTFIsStringValid
 *
*/
/** ### condTFUIsStringValid
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isStringValid`.
 *
 * @typedef condTFUIsStringValid
 * @prop {} _
*/

/** @arg {condTFIsStringValid} t */
function isStringValidDeceit(t) {

    try {

        return isStringValidVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsStringValid} t */
function isStringValidVerify(t) {

    const {



    } = t;

    return isStringValidHandle(t);

};
/** @arg {condTFIsStringValid} t */
function isStringValidHandle(t) {

    const {



    } = t;

    return isStringValidComply(t);

};
/** @arg {condTFIsStringValid} t */
function isStringValidComply(t) {

    const {

        value,

    } = t;

    if (condIsValid(value) && condIsString(value)) {

        return true;

    } else {

        return false;

    };

};

/**
 * ### condIsStringValid
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки значения на принадлежнсоть к валидным строкам.
 *
 * ***
 * @arg value `Значение`
*/
export function condIsStringValid(value) {

    return isStringValidDeceit({ value });

};

//#endregion

//#region isFloat 0.0.0

/** ### condTFIsFloat
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isFloat`.
 *
 * @typedef {condTFUIsFloat&condT&condTValue} condTFIsFloat
 *
*/
/** ### condTFUIsFloat
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isFloat`.
 *
 * @typedef condTFUIsFloat
 * @prop {} _
*/

/** @arg {condTFIsFloat} t */
function isFloatDeceit(t) {

    try {

        return isFloatVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsFloat} t */
function isFloatVerify(t) {

    const {



    } = t;

    return isFloatHandle(t);

};
/** @arg {condTFIsFloat} t */
function isFloatHandle(t) {

    const {



    } = t;

    return isFloatComply(t);

};
/** @arg {condTFIsFloat} t */
function isFloatComply(t) {

    const {

        value,

    } = t;

    if (condIsNumber(value) && value % 1 !== 0) {

        return true;

    } else {

        return false;

    };

};

/**
 * ### condIsFloat
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция для проверки значения на принадлежность к дробным числам.
 *
 * ***
 * @arg value `Значение`
*/
export function condIsFloat(value) {

    return isFloatDeceit({ value });

};

//#endregion
//#region isNumber 0.0.0

/** ### condTFIsNumber
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isNumber`.
 *
 * @typedef {condTFUIsNumber&condT&condTValue} condTFIsNumber
 *
*/
/** ### condTFUIsNumber
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isNumber`.
 *
 * @typedef condTFUIsNumber
 * @prop {} _
*/

/** @arg {condTFIsNumber} t */
function isNumberDeceit(t) {

    try {

        return isNumberVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsNumber} t */
function isNumberVerify(t) {

    const {



    } = t;

    return isNumberHandle(t);

};
/** @arg {condTFIsNumber} t */
function isNumberHandle(t) {

    const {



    } = t;

    return isNumberComply(t);

};
/** @arg {condTFIsNumber} t */
function isNumberComply(t) {

    const {

        value,

    } = t;

    if ((value && condIsType(value, Number)) || value === 0) {

        return true;

    } else {

        return false;

    };

};

/**
 * ### condIsNumber
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки указанного значения на принадлежность к числам.
 *
 * ***
 * @arg {} value `Значение`
*/
export function condIsNumber(value) {

    return isNumberDeceit({ value });

};

//#endregion
//#region isNumberLimit 0.0.0

/** ### condTFIsNumberLimit
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * ***
 *
 * Результирующие параметры функции `isNumberLimit`.
 *
 * @typedef {condTFUIsNumberLimit&condT&condTValue} condTFIsNumberLimit
 *
*/
/** ### condTFUIsNumberLimit
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры функции `isNumberLimit`.
 *
 * @typedef condTFUIsNumberLimit
 * @prop {} _
*/

/** @arg {condTFIsNumberLimit} t */
function isNumberLimitDeceit(t) {

    try {

        return isNumberLimitVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {condTFIsNumberLimit} t */
function isNumberLimitVerify(t) {

    const {



    } = t;

    return isNumberLimitHandle(t);

};
/** @arg {condTFIsNumberLimit} t */
function isNumberLimitHandle(t) {

    const {



    } = t;

    return isNumberLimitComply(t);

};
/** @arg {condTFIsNumberLimit} t */
function isNumberLimitComply(t) {

    const {

        value,

    } = t;

    if (condIsNumber(value) && Math.abs(value) !== Infinity) {

        return true;

    } else {

        return false;

    };

};

/**
 * ### condIsNumberLimit
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `bool\cond`
 * ***
 *
 * Функция проверки значения на принадлежность к конечным числам, отличным от бесконечности.
 *
 * ***
 * @arg value `Значение`
*/
export function condIsNumberLimit(value) {

    return isNumberLimitDeceit({ value });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/