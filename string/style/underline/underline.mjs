import { config } from "../../../config.mjs";
import { configStringANSI, configStringANSIUnderline } from "../../../config.mjs";

//#region YT

/** ### underlineT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `underline`
 *
 * Основной параметр модуля `underline`.
 *
 * @typedef underlineT
 * @prop {any} _
 *
*/

//#endregion
//#region YV



//#endregion

//#region get 0.0.0

/** ### underlineTFget
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `underline`
 * ***
 *
 * Результирующие параметры функции `get`.
 *
 * @typedef {underlineTFUget} underlineTFget
 *
*/
/** ### underlineTFUget
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `underline`
 *
 * Уникальные параметры функции `get`.
 *
 * @typedef underlineTFUget
 * @prop {any} _
*/

/** @arg {underlineTFget} t */
function getDeceit(t) {

    try {

        return getVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {underlineTFget} t */
function getVerify(t) {

    const {



    } = t;

    return getHandle(t);

};
/** @arg {underlineTFget} t */
function getHandle(t) {

    const {



    } = t;

    return getComply(t);

};
/** @arg {underlineTFget} t */
function getComply(t) {

    const {



    } = t;

    return `${configStringANSI.start}${configStringANSIUnderline.value}${configStringANSI.end}`;

};

/**
 * ### underlineGet
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `underline`
 * ***
 *
 * Функция получения `ansi` вставки для отрисовки линии подчеркивания.
 *
 * ***
 *
*/
export function underlineGet() {

    return getDeceit({  });

};

//#endregion
//#region getReset 0.0.0

/** ### underlineTFgetReset
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `underline`
 * ***
 *
 * Результирующие параметры функции `getReset`.
 *
 * @typedef {underlineTFUgetReset} underlineTFgetReset
 *
*/
/** ### underlineTFUgetReset
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `underline`
 *
 * Уникальные параметры функции `getReset`.
 *
 * @typedef underlineTFUgetReset
 * @prop {any} _
*/

/** @arg {underlineTFgetReset} t */
function getResetDeceit(t) {

    try {

        return getResetVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {underlineTFgetReset} t */
function getResetVerify(t) {

    const {



    } = t;

    return getResetHandle(t);

};
/** @arg {underlineTFgetReset} t */
function getResetHandle(t) {

    const {



    } = t;

    return getResetComply(t);

};
/** @arg {underlineTFgetReset} t */
function getResetComply(t) {

    const {



    } = t;

    return `${configStringANSI.start}${configStringANSIUnderline.valueReset}${configStringANSI.end}`;

};

/**
 * ### underlineGetReset
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `underline`
 * ***
 *
 * Функция получения `ansi` вставки сброса линии подчеркивания.
 *
 * ***
 *
*/
export function underlineGetReset() {

    return getResetDeceit({  });

};

//#endregion
