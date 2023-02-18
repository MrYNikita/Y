//#region YI

import { YElement } from './class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### elementT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element`
 *
 * Основной параметр модуля `element`.
 *
 * @typedef elementT
 * @prop {YElement} element
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