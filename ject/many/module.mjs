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

/** ### manyT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 * Основной параметр модуля `many`.
 *
 * @typedef manyT
 * @prop {any} _
 *
*/
/** ### manyTIndex
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 *
 *
 * @typedef manyTIndex
 * @prop {number} index
 *
*/
/** ### manyTLimit
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 *
 *
 * @typedef manyTLimit
 * @prop {number} limit
 *
*/
/** ### manyTLength
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\many`
 *
 *
 *
 * @typedef manyTLength
 * @prop {number} length
 *
*/

//#endregion
//#region YV



//#endregion



/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/