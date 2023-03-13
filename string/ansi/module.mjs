//#region YI

import { condIsNumberLimit } from '../../bool/cond/module.mjs';
import { YError } from '../../error/class.mjs';

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

/** ### ansiT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 *
 * Основной параметр модуля `ansi`.
 *
 * @typedef ansiT
 * @prop {any} _
 *
*/

//#endregion
//#region YV



//#endregion

//#region setCursorTo 0.0.0

/** ### ansiTFSetCursorTo
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * ***
 *
 * Результирующие параметры функции `setCursorTo`.
 *
 * @typedef {ansiTFUSetCursorTo&ansiT} ansiTFSetCursorTo
 *
*/
/** ### ansiTFUSetCursorTo
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 *
 * Уникальные параметры функции `setCursorTo`.
 *
 * @typedef ansiTFUSetCursorTo
 * @prop {number} y
 * @prop {number} x
*/

/** @arg {ansiTFSetCursorTo} t */
function setCursorToDeceit(t) {

    try {

        return setCursorToVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {ansiTFSetCursorTo} t */
function setCursorToVerify(t) {

    const {



    } = t;

    return setCursorToHandle(t);

};
/** @arg {ansiTFSetCursorTo} t */
function setCursorToHandle(t) {

    const {



    } = t;

    if (condIsNumberLimit(t.x)) {

        t.x++;

    };
    if (condIsNumberLimit(t.y)) {

        t.y++;

    };

    return setCursorToComply(t);

};
/** @arg {ansiTFSetCursorTo} t */
function setCursorToComply(t) {

    const {

        y,
        x,

    } = t;

    return `${config.code}${y};${x}${config.codePosition}`;

};

/**
 * ### ansiSetCursorTo
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string\ansi`
 * ***
 *
 * Функция с добавлением вставки для установки положения курсора в указанную позицию.
 *
 * ***
 * @arg {number} y `Линия`
 * @arg {number} x `Столбец`
*/
export function ansiSetCursorTo(y, x) {

    return setCursorToDeceit({ y, x });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/