//#region YI

import os from 'os';
import net from 'net';
import { YError } from '../../error/class.mjs';
import configY from '../../config.mjs';

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

/** ### netT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\net`
 * 
 * Основной параметр модуля `net`.
 * 
 * @typedef netT
 * @prop {any} _
 * 
*/

//#endregion
//#region YV



//#endregion

//#region getIp 0.0.0

/** ### netTFGetIp
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\net`
 * ***
 * 
 * Результирующие параметры функции `getIp`.
 * 
 * @typedef {netTFUGetIp&netT} netTFGetIp
 * 
*/
/** ### netTFUGetIp
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\net`
 * 
 * Уникальные параметры функции `getIp`.
 * 
 * @typedef netTFUGetIp
 * @prop {any} _
*/

/** @arg {netTFGetIp} t */
function getIpDeceit(t) {
    
    try {
        
        return getIpVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {netTFGetIp} t */
function getIpVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return getIpHandle(t);
   
};
/** @arg {netTFGetIp} t */
function getIpHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return getIpComply(t);
   
};
/** @arg {netTFGetIp} t */
function getIpComply(t) {
   
    const {
    
    
    
    } = t;
    
    const net = Object.entries(os.networkInterfaces()).find(network => {

        if (network[0].includes(config.wirelessNames[configY.local])) {

            return true;

        };

    });

    return net ? net[1][1].address : undefined;
    
};

/**
 * ### netGetIp
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\net`
 * ***
 * 
 * Функция получения IP беспроводной сети.
 * 
 * *** 
*/
export function netGetIp() {

    return getIpDeceit({});

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/