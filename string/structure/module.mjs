//#region YI

import { condIsString } from '../../bool/cond/module.mjs';
import { YError } from '../../error/class.mjs';
import configString from '../config.mjs';
import { stringGetRows, stringPad } from '../module.mjs';

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

/** ### structureT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string\structure`
 * 
 * Основной параметр модуля `structure`.
 * 
 * @typedef structureT
 * @prop {any} _
 * 
*/

//#endregion
//#region YV



//#endregion

//#region frame 0.0.0

/** ### structureTFFrame
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string\structure`
 * ***
 * 
 * Результирующие параметры функции `frame`.
 * 
 * @typedef {structureTFUFrame&structureT} structureTFFrame
 * 
*/
/** ### structureTFUFrame
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string\structure`
 * 
 * Уникальные параметры функции `frame`.
 * 
 * @typedef structureTFUFrame
 * @prop {string} text
 * @prop {number} sizeY
 * @prop {number} sizeX
 * @prop {string} title
 * @prop {structureTTFrameType} type
*/
/** ### structureTTFrameType
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `string\structure`
 * 
 * 
 * 
 * @typedef {'dotted'|'double'|'thin'} structureTTFrameType
 * 
*/

/** @arg {structureTFFrame} t */
function frameDeceit(t) {
    
    try {
        
        return frameVerify(t);
        
    } catch (e) {
        
        console.log(e);

        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {structureTFFrame} t */
function frameVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return frameHandle(t);
   
};
/** @arg {structureTFFrame} t */
function frameHandle(t) {
   
    const {
    
    
    
    } = t;

    if (condIsString(t.text)) {

        t.text = stringGetRows(t.text);

    };
    if (t.text?.length) {

        const rows = t.text;
        const columns = Math.max(...rows.map(row => row.length));

        if (t.sizeY < rows) {

            t.sizeY = rows;

        };
        if (t.sizeX < columns) {

            t.sizeX = columns;

        };

    };
   
    return frameComply(t);
   
};
/** @arg {structureTFFrame} t */
function frameComply(t) {
   
    const {

        text,
        type,
        sizeY,
        sizeX,
        title,

    } = t;

    let table = configString.symbols.table;
    let result = ``;
    let remainder = sizeX - (title ? title.length + 2 : 0);

    switch (type) {

        case 'thin': table = table.thin; break;
        case 'dotted': table = table.dotted; break;
        case 'double': default: table = table.double; break;

    };

    let vertical = table[1];
    let horizontal = table[0];
    let cornerTopLeft = table[2];
    let cornerTopRight = table[3];
    let cornerDownLeft = table[4];
    let cornerDownRight = table[5];

    switch (type) {

        case 'dotted': {

            cornerDownLeft = cornerDownRight = cornerTopLeft = cornerTopRight = '#';

        }; break;

    };

    result += cornerTopLeft + vertical + (remainder >= 2 && title ? ' ' + title + ' ' + vertical.repeat(remainder - 1) : vertical.repeat(sizeX - 1)) + cornerTopRight + '\n';
    
    if (text?.length) {

        for (const string of text) {

            result += horizontal;

            if (string) {

                result += stringPad(string, ' ', sizeX);

            } else {

                result += ' '.repeat(sizeX);

            };

            result += horizontal + '\n';

        };

    } else {

        result += (horizontal + ' '.repeat(sizeX) + horizontal + '\n').repeat(sizeY);

    };

    result += cornerDownLeft + table[1].repeat(sizeX) + cornerDownRight;

    return result;
    
};

/**
 * ### structureFrame
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string\structure`
 * ***
 * 
 * Функция получения строковой рамки.
 * 
 * ***
 * @arg {string} text `Текст`
 * @arg {number} sizeY `Длина`
 * @arg {number} sizeX `Ширина`
 * @arg {string} title `Заголовок`
 * @arg {structureTTFrameType?} type `Тип`
*/
export function structureFrame(sizeY, sizeX, title, type, text) {

    return frameDeceit({ sizeY, sizeX, title, type, text, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/