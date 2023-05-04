//#region YI

import { YError } from '../../error/class.mjs';
import { unlinkSync, statSync, renameSync, } from 'fs';
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

/** ### objectT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `object`
 *
 * Основной параметр модуля `object`.
 *
 * @typedef objectT
 * @prop {any} _
 *
*/
/** ### objectTData
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `object`
 *
 *
 *
 * @typedef objectTData
 * @prop {objectTTData} data
 *
*/
/** ### objectTExpand
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `object`
 *
 *
 *
 * @typedef objectTExpand
 * @prop {objectTTExpand} expand
 *
*/
/** ### objectTFragment
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `object`
 *
 *
 *
 * @typedef objectTFragment
 * @prop {objectTTFragment} fragment
 *
*/
/** ### objectTEncoding
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * 
 * 
 * 
 * @typedef objectTEncoding
 * @prop {objectTTEncoding} encoding
 * 
*/

/** ### objectTTData
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `object`
 *
 *
 *
 * @typedef {string|[]|[][]|{}} objectTTData
 *
*/
/** ### objectTTExpand
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `object`
 *
 *
 *
 * @typedef {'csv'|'txt'|'json'} objectTTExpand
 *
*/
/** ### objectTTFragment
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `object`
 *
 *
 *
 * @typedef {import("../path/module.mjs").pathTTFragment} objectTTFragment
 *
*/
/** ### objectTTEncoding
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * 
 * 
 * 
 * @typedef {string} objectTTEncoding
 * 
*/

//#endregion
//#region YV



//#endregion

//#region getName 0.0.0

/** ### objectTFGetName
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * ***
 * 
 * Результирующие параметры функции `getName`.
 * 
 * @typedef {objectTFUGetName&objectT&objectTFragment} objectTFGetName
 * 
*/
/** ### objectTFUGetName
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * 
 * Уникальные параметры функции `getName`.
 * 
 * @typedef objectTFUGetName
 * @prop {any} _
*/

/** @arg {objectTFGetName} t */
function getNameDeceit(t) {

    try {

        return getNameVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {objectTFGetName} t */
function getNameVerify(t) {

    const {



    } = t;

    return getNameHandle(t);

};
/** @arg {objectTFGetName} t */
function getNameHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return getNameComply(t);

};
/** @arg {objectTFGetName} t */
function getNameComply(t) {

    const {

        fragment,

    } = t;

    return objectGetNameFull(fragment).split('.')[0];

};

/**
 * ### objectGetname
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\object`
 * ***
 * 
 * Функция получения имени файла, полученного по указанному фргаменту.
 * 
 * ***
 * @arg {objectTTFragment} fragment `Фрагмент`
*/
export function objectGetName(fragment) {

    return getNameDeceit({ fragment, });

};

//#endregion
//#region getNameFull 0.0.0

/** ### objectTFGetNameFull
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * ***
 * 
 * Результирующие параметры функции `getNameFull`.
 * 
 * @typedef {objectTFUGetNameFull&objectT&objectTFragment} objectTFGetNameFull
 * 
*/
/** ### objectTFUGetNameFull
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * 
 * Уникальные параметры функции `getNameFull`.
 * 
 * @typedef objectTFUGetNameFull
 * @prop {any} _
*/

/** @arg {objectTFGetNameFull} t */
function getNameFullDeceit(t) {

    try {

        return getNameFullVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {objectTFGetNameFull} t */
function getNameFullVerify(t) {

    const {



    } = t;

    return getNameFullHandle(t);

};
/** @arg {objectTFGetNameFull} t */
function getNameFullHandle(t) {

    const {



    } = t;

    return getNameFullComply(t);

};
/** @arg {objectTFGetNameFull} t */
function getNameFullComply(t) {

    const {

        fragment,

    } = t;

    return fragment.split('/').at(-1);

};

/**
 * ### objectGetNameFull
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\object`
 * ***
 * 
 * Функция получения полного имени файла по указанному фрагменту.
 * 
 * ***
 * @arg {objectTTFragment} fragment `Фрагмент`
*/
export function objectGetNameFull(fragment) {

    return getNameFullDeceit({ fragment, });

};

//#endregion
//#region getExpand 0.0.0

/** ### objectTFGetExpand
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * ***
 * 
 * Результирующие параметры функции `getExpand`.
 * 
 * @typedef {objectTFUGetExpand&objectT&objectTFragment} objectTFGetExpand
 * 
*/
/** ### objectTFUGetExpand
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * 
 * Уникальные параметры функции `getExpand`.
 * 
 * @typedef objectTFUGetExpand
 * @prop {any} _
*/

/** @arg {objectTFGetExpand} t */
function getExpandDeceit(t) {

    try {

        return getExpandVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {objectTFGetExpand} t */
function getExpandVerify(t) {

    const {



    } = t;

    return getExpandHandle(t);

};
/** @arg {objectTFGetExpand} t */
function getExpandHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return getExpandComply(t);

};
/** @arg {objectTFGetExpand} t */
function getExpandComply(t) {

    const {

        fragment,

    } = t;


    const name = fragment.split('/').at(-1);
    const countDot = name.match(/\./g)?.length;

    if (!countDot) {

        const isDir = statSync(fragment).isDirectory();

        return isDir ? 'dir' : '';

    } else {

        return name.split('.').at(-1);

    };

};

/**
 * ### objectGetExpand
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\object`
 * ***
 * 
 * Метод получения расширения файла, полученного по указанному пути.
 * 
 * ***
 * @arg {objectTTFragment} fragment `Фрагмент`
 * @returns {string}
*/
export function objectGetExpand(fragment) {

    return getExpandDeceit({ fragment, });

};

//#endregion
//#region getLocation 0.0.0

/** ### objectTFGetLocation
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * ***
 * 
 * Результирующие параметры функции `getLocation`.
 * 
 * @typedef {objectTFUGetLocation&objectT&objectTFragment} objectTFGetLocation
 * 
*/
/** ### objectTFUGetLocation
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * 
 * Уникальные параметры функции `getLocation`.
 * 
 * @typedef objectTFUGetLocation
 * @prop {any} _
*/

/** @arg {objectTFGetLocation} t */
function getLocationDeceit(t) {

    try {

        return getLocationVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {objectTFGetLocation} t */
function getLocationVerify(t) {

    const {



    } = t;

    return getLocationHandle(t);

};
/** @arg {objectTFGetLocation} t */
function getLocationHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return getLocationComply(t);

};
/** @arg {objectTFGetLocation} t */
function getLocationComply(t) {

    const {

        fragment,

    } = t;

    return fragment.split('/').slice(0, -1).join('/');

};

/**
 * ### objectGetLocation
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\object`
 * ***
 * 
 * Функция получения расположения файла, полученного по указанному фрагменту.
 * 
 * ***
 * @arg {objectTTFragment} fragment `Фрагмент`
*/
export function objectGetLocation(fragment) {

    return getLocationDeceit({ fragment, });

};

//#endregion

//#region move 0.1.0

/** ### objectTFMove
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `object`
 * ***
 *
 * Результирующие параметры функции `move`.
 *
 * @typedef {objectTFUMove&objectT&objectTFragment} objectTFMove
 *
*/
/** ### objectTFUMove
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `object`
 *
 * Уникальные параметры функции `move`.
 *
 * @typedef objectTFUMove
 * @prop {objectTTFragment} location
*/

/** @arg {objectTFMove} t */
function moveDeceit(t) {

    try {

        return moveVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {objectTFMove} t */
function moveVerify(t) {

    const {



    } = t;

    return moveHandle(t);

};
/** @arg {objectTFMove} t */
function moveHandle(t) {

    const {

        fragment,
        location,

    } = t;

    t.fragment = pathGet(t.fragment);
    t.location = pathGet(t.location);

    return moveComply(t);

};
/** @arg {objectTFMove} t */
function moveComply(t) {

    const {

        fragment,
        location,

    } = t;

    if (pathExists(location)) {

        const result = location + '/' + objectGetNameFull(fragment);

        renameSync(fragment, location + '/' + objectGetNameFull(fragment));

        return result;

    };

    return fragment;

};

/**
 * ### objectMove
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `object`
 * ***
 *
 * Функция перемещения файла.
 *
 * ***
 * @arg {objectTTFragment} fragment `Фрагмент`
 * @arg {objectTTFragment} location `Размещение`
*/
export function objectMove(fragment, location) {

    return moveDeceit({ fragment, location });

};

//#endregion
//#region exists 0.0.0

/** ### objectTFExists
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * ***
 * 
 * Результирующие параметры функции `exists`.
 * 
 * @typedef {objectTFUExists&objectT&objectTFragment} objectTFExists
 * 
*/
/** ### objectTFUExists
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\object`
 * 
 * Уникальные параметры функции `exists`.
 * 
 * @typedef objectTFUExists
 * @prop {any} _
*/

/** @arg {objectTFExists} t */
function existsDeceit(t) {

    try {

        return existsVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {objectTFExists} t */
function existsVerify(t) {

    const {



    } = t;

    return existsHandle(t);

};
/** @arg {objectTFExists} t */
function existsHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return existsComply(t);

};
/** @arg {objectTFExists} t */
function existsComply(t) {

    const {

        fragment,

    } = t;

    if (pathExists(t.fragment)) {

        return !!statSync(t.fragment);

    };

    return false;

};

/**
 * ### objectexists
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\object`
 * ***
 * 
 * Функция проверки файла полученного по указанному фрагменту на принадлежность к файлам.
 * 
 * ***
 * @arg {objectTTFragment} fragment `Фрагмент`
*/
export function objectExists(fragment) {

    return existsDeceit({ fragment, });

};

//#endregion
//#region delete 0.1.0

/** ### objectTFDelete
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `object`
 * ***
 *
 * Результирующие параметры функции `delete`.
 *
 * @typedef {objectTFUDelete&objectTFragment} objectTFDelete
 *
*/
/** ### objectTFUDelete
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `object`
 *
 * Уникальные параметры функции `delete`.
 *
 * @typedef objectTFUDelete
 * @prop {any} _
*/

/** @arg {objectTFDelete} t */
function deleteDeceit(t) {

    try {

        return deleteVerify(t);

    } catch (e) {

        console.log(e);

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {objectTFDelete} t */
function deleteVerify(t) {

    const {



    } = t;

    return deleteHandle(t);

};
/** @arg {objectTFDelete} t */
function deleteHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return deleteComply(t);

};
/** @arg {objectTFDelete} t */
function deleteComply(t) {

    const {

        fragment,

    } = t;

    unlinkSync(fragment);

    return fragment;

};

/**
 * ### objectDelete
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `object`
 * ***
 *
 * Функция удаления указанного файла по фрагменту пути.
 *
 * ***
 * @arg {objectTTFragment} fragment `Фрагмент`
*/
export function objectDelete(fragment) {

    return deleteDeceit({ fragment });

};

//#endregion
//#region rename 0.1.0

/** ### objectTFRename
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `object`
 * ***
 *
 * Результирующие параметры функции `rename`.
 *
 * @typedef {objectTFURename&objectTFragment} objectTFRename
 *
*/
/** ### objectTFURename
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `object`
 *
 * Уникальные параметры функции `rename`.
 *
 * @typedef objectTFURename
 * @prop {string} name
*/

/** @arg {objectTFRename} t */
function renameDeceit(t) {

    try {

        return renameVerify(t);

    } catch (e) {

        console.log(e);

        if (config.strict) throw e;

        return undefined;

    } finally {



    };

};
/** @arg {objectTFRename} t */
function renameVerify(t) {

    const {



    } = t;

    return renameHandle(t);

};
/** @arg {objectTFRename} t */
function renameHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return renameComply(t);

};
/** @arg {objectTFRename} t */
function renameComply(t) {

    const {

        name,
        fragment

    } = t;

    const expand = objectGetExpand(fragment);
    const location = objectGetLocation(fragment);

    const result = `${location}/${name}${['dir', ''].includes(expand) ? '' : '.' + expand}`;

    renameSync(t.fragment, result);

    return result;

};

/**
 * ### objectRename
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `object`
 * ***
 *
 * Функция переименования объекта файловой системы.
 *
 * ***
 * @arg {string} name `Наименование`
 * @arg {objectTTFragment} fragment `Фргамент`
*/
export function objectRename(fragment, name) {

    return renameDeceit({ fragment, name });

};

//#endregion

/**
 * @object module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/