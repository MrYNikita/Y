//#region YI

import { YError } from '../../../error/class.mjs';

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

/** ### listT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `list`.
 * 
 * @typedef listT
 * @prop {import('./class.mjs').YList} list
 * 
*/

//#endregion
//#region YV



//#endregion

//#region changeIndex 0.0.0

/** ### listTFChangeIndex
 * - Тип `TF`
 * - Версия `0.0.0`
 * ***
 * 
 * Результирующие параметры функции `changeIndex`.
 * 
 * @typedef {listTFUChangeIndex&listT} listTFChangeIndex
 * 
*/
/** ### listTFUChangeIndex
 * - Тип `TFU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры функции `changeIndex`.
 * 
 * @typedef listTFUChangeIndex
 * @prop {number} number
 * @prop {string} pointsName
*/

/** @arg {listTFChangeIndex} t */
function changeIndexDeceit(t) {
    
    try {
        
        return changeIndexVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {listTFChangeIndex} t */
function changeIndexVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return changeIndexHandle(t);
   
};
/** @arg {listTFChangeIndex} t */
function changeIndexHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return changeIndexComply(t);
   
};
/** @arg {listTFChangeIndex} t */
function changeIndexComply(t) {
   
    const {
    
        list,
        number,
        pointsName,
    
    } = t;

    const length = list[pointsName].length;

    list.index += number;

    if (list.index >= length) {

        list.index %= length;

    } else if (list.index < 0) {

        const remainder = list.index % length;

        if (remainder === 0) {

            list.index = 0;

        } else {

            list.index = length + remainder;

        };

    };

    return list;
    
};

/**
 * ### listChangeIndex
 * - Версия `0.0.0`
 * ***
 * 
 * Функция для смещения индекса указанного индекса на указанное число по правилу списков.
 * 
 * Чтобы определить, какое свойство у указанного списка будет содержать пункты, необходимо явным образом указать его.
 * 
 * Функция работает следующим образом:
 * - Если список содержит свойство `index` отличное от числа, то к нему прибавляется указанное число.
 * - Измененный индекс корректируется в соотвествии с правилом списков.
 * 
 * Правило списков состоит из следующих пунктов:
 * - Если измененный индекс будет больше кол-ва пунктов списка, то перерасчет индекса будет осуществлен сначала списка.
 * - Если измененный индекс будет меньше нуля, то перерасчет индекса будет осуществлен с конца списка.
 * - Если индекс будет находиться в диапазоне от 0 до кол-ва пунктов списка, то списку будет присвоен данный индекс.
 * 
 * ***
 * @arg {G} list `Список`
 * @arg {number} number `Число`
 * @arg {string} pointsName `Свойство с пунктами`
 * @return {G}
 * @template G
*/
export function listChangeIndex(list, number, pointsName) {

    return changeIndexDeceit({ list, number, pointsName, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/