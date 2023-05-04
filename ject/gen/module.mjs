//#region YI

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

/** ### genT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\gen`
 *
 * Основной параметр модуля `gen`.
 *
 * @typedef genT
 * @prop {any} _
 *
*/

//#endregion
//#region YV



//#endregion

//#region number 0.0.0

/** ### genTFNumber
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject\gen`
 * ***
 *
 * Результирующие параметры функции `number`.
 *
 * @typedef {genTFUNumber&genT} genTFNumber
 *
*/
/** ### genTFUNumber
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject\gen`
 *
 * Уникальные параметры функции `number`.
 *
 * @typedef genTFUNumber
 * @prop {any} _
*/

/** @arg {genTFNumber} t */
function numberDeceit(t) {

    try {

        return numberVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {genTFNumber} t */
function numberVerify(t) {

    const {



    } = t;

    return numberHandle(t);

};
/** @arg {genTFNumber} t */
function numberHandle(t) {

    const {



    } = t;

    return numberComply(t);

};
/** @arg {genTFNumber} t */
function numberComply(t) {

    const {



    } = t;



};

/**
 * ### genNumber
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject\gen`
 * ***
 *
 *
 *
 * ***
 *
*/
export function genNumber() {

    return numberDeceit({});

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/