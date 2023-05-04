//#region YI

import { arrayUnite } from '../../../../array/module.mjs';
import { YError } from '../../../../error/class.mjs';
import { YResponse } from './response/class.mjs';

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

/** ### receiverT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver`
 * 
 * Основной параметр модуля `receiver`.
 * 
 * @typedef receiverT
 * @prop {receiverTTReceiver} receiver
 * 
*/
/** ### receiverTComb
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 *
 *
 *
 * @typedef receiverTComb
 * @prop {receiverTTComb} comb
 *
*/


/** ### receiverTTComb
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 *
 *
 *
 * @typedef {import('../listener/comb/class.mjs').YComb} receiverTTComb
 *
*/
/** ### receiverTTReceiver
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 *
 *
 *
 * @typedef {import('./class.mjs').YReceiver} receiverTTReceiver
 *
*/


//#endregion
//#region YV



//#endregion

//#region apply

/** ### receiverTFApply
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver`
 * ***
 * 
 * Результирующие параметры функции `apply`.
 * 
 * @typedef {receiverTFUApply&receiverT} receiverTFApply
 * 
*/
/** ### receiverTFUApply
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver`
 * 
 * Уникальные параметры функции `apply`.
 * 
 * @typedef receiverTFUApply
 * @prop {receiverTTComb[]} combs
*/

/** ### applyCore
 * - Тип `S`
 * - Версия `0.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @arg {receiverTFApply}
*/
function applyCore({ receiver, combs, }) {

    try {

        for (const comb of combs) {

            for (const combThis of arrayUnite(receiver.combs, receiver.constructor.combs)) {

                const response = combThis.apply(receiver, ...comb.keys);

                if (response) {
                    
                    return response;
                    
                };
                
            };

        };
        
        return false;
        
    } catch (e) {
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};

/**
 * ### receiverApply
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver`
 * ***
 * 
 * Метод принятия комбинаций.
 * 
 * ***
 * @arg {...receiverTTComb} combs `Комбинации`
 * @arg {receiverTTReceiver} receiver `Приёмник`
*/
export function receiverApply(receiver, ...combs) {

    return applyCore({ receiver, combs, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/