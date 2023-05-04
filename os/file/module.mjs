//#region YI

import { YError } from '../../error/class.mjs';
import { readFileSync, writeFileSync } from 'fs';
import { pathExists, pathGet } from '../path/module.mjs';

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

/** ### fileT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 * Основной параметр модуля `file`.
 *
 * @typedef fileT
 * @prop {any} _
 *
*/
/** ### fileTData
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 *
 *
 * @typedef fileTData
 * @prop {fileTTData} data
 *
*/
/** ### fileTExpand
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 *
 *
 * @typedef fileTExpand
 * @prop {fileTTExpand} expand
 *
*/
/** ### fileTFragment
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 *
 *
 * @typedef fileTFragment
 * @prop {fileTTFragment} fragment
 *
*/
/** ### fileTEncoding
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * 
 * 
 * @typedef fileTEncoding
 * @prop {fileTTEncoding} encoding
 * 
*/

/** ### fileTTData
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 *
 *
 * @typedef {string|[]|[][]|{}} fileTTData
 *
*/
/** ### fileTTExpand
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 *
 *
 * @typedef {'csv'|'txt'|'json'} fileTTExpand
 *
*/
/** ### fileTTFragment
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 *
 *
 * @typedef {import("../path/module.mjs").pathTTFragment} fileTTFragment
 *
*/
/** ### fileTTEncoding
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * 
 * 
 * @typedef {string} fileTTEncoding
 * 
*/

//#endregion
//#region YV



//#endregion

//#region read 0.0.0

/** ### fileTFRead
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * ***
 * 
 * Результирующие параметры функции `read`.
 * 
 * @typedef {fileTFURead&fileT&fileTFragment&fileTEncoding} fileTFRead
 * 
*/
/** ### fileTFURead
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * Уникальные параметры функции `read`.
 * 
 * @typedef fileTFURead
 * @prop {any} _
*/

/** @arg {fileTFRead} t */
function readDeceit(t) {

    try {

        return readVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {fileTFRead} t */
function readVerify(t) {

    const {



    } = t;

    return readHandle(t);

};
/** @arg {fileTFRead} t */
function readHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return readComply(t);

};
/** @arg {fileTFRead} t */
function readComply(t) {

    const {

        fragment,
        encoding,

    } = t;

    if (pathExists(fragment)) {

        return readFileSync(fragment, encoding);

    } else {

        return undefined;

    };

};

/**
 * ### fileRead
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\file`
 * ***
 * 
 * Функция считывания содержимого файла полученного по указанному фрагменту пути.
 * 
 * ***
 * @arg {fileTTFragment} fragment `Фрагмент`
 * @arg {fileTTEncoding} encoding `Кодировка`
 * 
 * - Дефолт `utf8`
*/
export function fileRead(fragment, encoding = 'utf8') {

    return readDeceit({ fragment, encoding, });

};

//#endregion
//#region readCsv 0.0.0

/** ### fileTFReadCsv
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * ***
 * 
 * Результирующие параметры функции `readCsv`.
 * 
 * @typedef {fileTFUReadCsv&fileT&fileTFRead} fileTFReadCsv
 * 
*/
/** ### fileTFUReadCsv
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * Уникальные параметры функции `readCsv`.
 * 
 * @typedef fileTFUReadCsv
 * @prop {string} delimiter
*/

/** @arg {fileTFReadCsv} t */
function readCsvDeceit(t) {

    try {

        return readCsvVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {fileTFReadCsv} t */
function readCsvVerify(t) {

    const {



    } = t;

    return readCsvHandle(t);

};
/** @arg {fileTFReadCsv} t */
function readCsvHandle(t) {

    const {



    } = t;

    return readCsvComply(t);

};
/** @arg {fileTFReadCsv} t */
function readCsvComply(t) {

    const {

        fragment,
        encoding,
        delimiter,

    } = t;

    return fileRead(fragment, encoding).split('\n').map(row => {

        row = row.split(delimiter).map(cell => {

            if (parseInt(cell)) {

                return +cell;

            } else {

                return cell.match(/\w+/)[0];

            };

        });

        return row;

    });

};

/**
 * ### fileReadCsv
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\file`
 * ***
 * 
 * Функция считывания содержимого файла полученного по указанному фрагменту пути.
 * 
 * Полученный результат будет представлен js объектом.
 * 
 * ***
 * @arg {fileTTFragment} fragment `Фрагмент`
 * @arg {fileTTEncoding} encoding `Кодировка`
 * 
 * - Дефолт `utf8`
*/
export function fileReadCsv(fragment, encoding, delimiter = ' ') {

    return readCsvDeceit({ fragment, encoding, delimiter, });

};

//#endregion
//#region readJson 0.0.0

/** ### fileTFReadJson
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * ***
 * 
 * Результирующие параметры функции `readJson`.
 * 
 * @typedef {fileTFUReadJson&fileT&fileTFRead} fileTFReadJson
 * 
*/
/** ### fileTFUReadJson
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * Уникальные параметры функции `readJson`.
 * 
 * @typedef fileTFUReadJson
 * @prop {any} _
*/

/** @arg {fileTFReadJson} t */
function readJsonDeceit(t) {

    try {

        return readJsonVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {fileTFReadJson} t */
function readJsonVerify(t) {

    const {



    } = t;

    return readJsonHandle(t);

};
/** @arg {fileTFReadJson} t */
function readJsonHandle(t) {

    const {



    } = t;

    return readJsonComply(t);

};
/** @arg {fileTFReadJson} t */
function readJsonComply(t) {

    const {

        fragment,
        encoding,

    } = t;

    const result = JSON.parse(fileRead(fragment, encoding));

    return result;

};

/**
 * ### fileReadJson
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\file`
 * ***
 * 
 * Функция считывания содержимого файла полученного по указанному фрагменту пути.
 * 
 * Полученный результат будет представлен js объектом.
 * 
 * ***
 * @arg {fileTTFragment} fragment `Фрагмент`
 * @arg {fileTTEncoding} encoding `Кодировка`
 * 
 * - Дефолт `utf8`
*/
export function fileReadJson(fragment, encoding) {

    return readJsonDeceit({ fragment, encoding, });

};

//#endregion

//#region write 0.0.0

/** ### fileTFWrite
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * ***
 * 
 * Результирующие параметры функции `write`.
 * 
 * @typedef {fileTFUWrite&fileT&fileTFRead} fileTFWrite
 * 
*/
/** ### fileTFUWrite
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * Уникальные параметры функции `write`.
 * 
 * @typedef fileTFUWrite
 * @prop {string} data
*/

/** @arg {fileTFWrite} t */
function writeDeceit(t) {
    
    try {
        
        return writeVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {fileTFWrite} t */
function writeVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return writeHandle(t);
   
};
/** @arg {fileTFWrite} t */
function writeHandle(t) {
   
    const {
    
    
    
    } = t;

    t.fragment = pathGet(t.fragment);
   
    return writeComply(t);
   
};
/** @arg {fileTFWrite} t */
function writeComply(t) {
   
    const {
    
        data,
        fragment,
        encoding,
    
    } = t;
    
    writeFileSync(fragment, data, encoding);

    return fragment;
    
};

/**
 * ### fileWrite
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\file`
 * ***
 * 
 * Функция перезаписывания файла, полученного по указанному фрагменту указанными данными.
 * 
 * ***
 * @arg {string} data `Данные`
 * @arg {fileTTFragment} fragment `Фрагмент`
 * @arg {fileTTEncoding} encoding `Кодировка`
 * 
 * - Дефолт `utf8`
*/
export function fileWrite(fragment, data, encoding = 'utf8') {

    return writeDeceit({ data, fragment, encoding, });

};

//#endregion
//#region writeCsv 0.0.0

/** ### fileTFWriteCsv
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * ***
 * 
 * Результирующие параметры функции `writeCsv`.
 * 
 * @typedef {fileTFUWriteCsv&fileT&fileTFWrite} fileTFWriteCsv
 * 
*/
/** ### fileTFUWriteCsv
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * Уникальные параметры функции `writeCsv`.
 * 
 * @typedef fileTFUWriteCsv
 * @prop {string} delimiter
*/

/** @arg {fileTFWriteCsv} t */
function writeCsvDeceit(t) {
    
    try {
        
        return writeCsvVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {fileTFWriteCsv} t */
function writeCsvVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return writeCsvHandle(t);
   
};
/** @arg {fileTFWriteCsv} t */
function writeCsvHandle(t) {
   
    const {
    
    
    
    } = t;

    t.fragment = pathGet(t.fragment);
   
    return writeCsvComply(t);
   
};
/** @arg {fileTFWriteCsv} t */
function writeCsvComply(t) {
   
    const {
    
        data,
        fragment,
        delimiter,
    
    } = t;

    fileWrite(fragment, data.map(row => row.join(delimiter)).join('\n'));

    return fragment;
    
};

/**
 * ### fileWriteCsv
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\file`
 * ***
 * 
 * Функция записи в файл по указанному фрагменту с указанным массив.
 * 
 * ***
 * @arg {string} delimiter `Разделитель`
 * @arg {any[][]} data `Массив`
 * @arg {fileTTFragment} fragment `Фрагмент`
*/
export function fileWriteCsv(fragment, data, delimiter = ' ') {

    return writeCsvDeceit({ fragment, data, delimiter, });

};

//#endregion
//#region writeJson 0.0.0

/** ### fileTFWriteJson
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * ***
 * 
 * Результирующие параметры функции `writeJson`.
 * 
 * @typedef {fileTFUWriteJson&fileT&fileTFRead} fileTFWriteJson
 * 
*/
/** ### fileTFUWriteJson
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * Уникальные параметры функции `writeJson`.
 * 
 * @typedef fileTFUWriteJson
 * @prop {G} data
 * @template G
*/

/** @arg {fileTFWriteJson} t */
function writeJsonDeceit(t) {
    
    try {
        
        return writeJsonVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {fileTFWriteJson} t */
function writeJsonVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return writeJsonHandle(t);
   
};
/** @arg {fileTFWriteJson} t */
function writeJsonHandle(t) {
   
    const {
    
    
    
    } = t;

    t.fragment = pathGet(t.fragment);
   
    return writeJsonComply(t);
   
};
/** @arg {fileTFWriteJson} t */
function writeJsonComply(t) {
   
    const {
        
        data,
        fragment,
    
    } = t;

    writeFileSync(fragment, JSON.stringify(data, null, 4));

    return fragment;
    
};

/**
 * ### fileWriteJson
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\file`
 * ***
 * 
 * Функция перезаписывания файла, полученного по указанному фрагменту указанными данными.
 * 
 * ***
 * @arg {G} data `Данные`
 * @arg {fileTTFragment} fragment `Фрагмент`
 * @returns {G}
 * @template G
 * 
 * - Дефолт `utf8`
*/
export function fileWriteJson(fragment, data) {

    return writeJsonDeceit({ fragment, data, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/