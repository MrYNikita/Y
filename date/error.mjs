//#region YI

import { YError } from '../error/class.mjs';



//#endregion
//#region YT

/** ### dateTError
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `date`
 *
 * Ошибка модуля `date`.
 *
 * @typedef {YError<import('./class.mjs').YDate>} dateTError
 *
*/

//#endregion
//#region YV



//#endregion

export default {

    /**
     * ### notDate
     *
     * Ошибка типа.
     *
     * ***
     * @type {dateTError}
     * @public
    */
    notDate: new YError({

        id: 1,
        advice: `проверьте переданное значение в конструктор и убедитесь, что оно является датой или строкой её содержащей`,
        correct: t => t.value = new Date(),
        description: 'указанное значение value не является Date',
        clarification: t => `аргумент = ${t}`,

    }),

};