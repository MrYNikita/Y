import { config, } from "../../config.mjs";
import { fileVREName, fileVREPart } from "../file/file.mjs";
import { stringFind, stringUnifyBySymbol } from "../../string/string.mjs";
import { existsSync, lstatSync, readdirSync } from "fs";

//#region YT

/** ### pathT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `path`
 *
 * Основной параметр модуля `path`.
 *
 * @typedef pathT
 * @prop {string} path
 *
*/
/** ### pathTLimit
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `path`
 *
 *
 *
 * @typedef {import("../../array/array.mjs").arrayTLimit} pathTLimit
 *
*/
/** ### pathTPaths
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `path`
 *
 *
 *
 * @typedef pathTPaths
 * @prop {string[]} paths
 *
*/
/** ### pathTFragment
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os.path`
 *
 *
 *
 * @typedef pathTFragment
 * @prop {pathTTFragment} fragment
 *
*/

/** ### pathTTFragment
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `path`
 *
 * Параметр фрагмент.
 *
 * Данный тип позволяет указывать в качестве фрагмента пути строки или регулярные выражения.
 *
 * @typedef {string|RegExp} pathTTFragment
 *
*/

//#endregion
//#region YV

/**
 * ### pathVREFileInfo
 * - Тип `VE`
 * - Версия `0.0.0`
 * - Модуль `path`
 *
 * Регулярное выражение для получения информации о файле из консоли windows.
 *
 * ***
 * @type {RegExp}
*/
export const pathVREFileInfo = /(\d+\.){2}\d{4,} *?\d{2}:\d{2} *?(<DIR>)? *?(\d+?)? *?(\w|\.)+/mg;

//#endregion

//#region get 0.3.0

/** ### pathTFGet
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `path`
 * ***
 *
 * Результирующие параметры функции `get`.
 *
 * @typedef {pathTFUGet&pathTFragment&pathTPaths&pathTLimit} pathTFGet
 *
*/
/** ### pathTFUGet
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `path`
 *
 * Уникальные параметры функции `get`.
 *
 * @typedef pathTFUGet
 * @prop {any} _
*/

/** @arg {pathTFGet} t */
function getDeceit(t) {

    try {

        return getVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {pathTFGet} t */
function getVerify(t) {

    const {



    } = t;

    return getHandle(t);

};
/** @arg {pathTFGet} t */
function getHandle(t) {

    const {



    } = t;

    if (!t.paths || !t.paths.length) {

        const pathProject = pathGetProject();

        t.paths = readdirSync(pathProject).map(p => pathConcat(pathProject, p));

    };

    return getComply(t);

};
/** @arg {pathTFGet} t */
function getComply(t) {

    const {

        paths,
        limit,
        fragment,

    } = t;

    /** @type {string[]} */
    const results = [];

    if (fragment && limit) {

        while (paths.length && results.length < limit) {

            const p = paths.pop();

            if (p.match(fragment)) {

                results.push(p);

            };

            if (results.length === limit) {

                break;

            } else {

                const ps = pathGetIn(p);

                if (ps) {

                    paths.push(...ps);

                };

            };

        };

    } else if (fragment && !limit) {

        while (paths.length) {

            const p = paths.pop();

            if (p.match(fragment)) {

                results.push(p);

            };

            const ps = pathGetIn(p);

            if (ps) {

                paths.push(...ps);

            };

        };

    } else if (!fragment && limit) {

        while (paths.length && results.length < limit) {

            const p = paths.pop();

            results.push(p);

            if (results.length === limit) {

                break;

            } else {

                const ps = pathGetIn(p);

                paths.push(...ps);

            };

        };

    } else {

        while (paths.length) {

            const p = paths.pop();
            const ps = pathGetIn(p);

            if (ps) {

                paths.push(...ps);

            };

            results.push(p);

        };

    };

    return results;

};

/**
 * ### pathGet
 * - Версия `0.3.0`
 * - Цепочка `DVHCa`
 * - Модуль `path`
 * ***
 *
 *
 *
 * ***
 * @arg {number} limit `Предел`
*/
export function pathGet(fragment) {

    return getDeceit({ fragment, limit: 1, })[0];

};
/**
 * ### pathGetAll
 * - Версия `0.3.0`
 * - Цепочка `DVHCa`
 * - Модуль `path`
 * ***
 *
 * Функция получения всех путей текущего проекта.
 *
 * ***
 * @arg {number?} limit `Предел`
 * @arg {pathTTFragment} fragment `Фрагмент`
*/
export function pathGetAll(fragment, limit) {

    return getDeceit({ fragment, limit });

};

//#endregion
//#region getIn 0.0.0

/** ### pathTFGetIn
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `path`
 * ***
 *
 * Результирующие параметры функции `getIn`.
 *
 * @typedef {pathTFUGetIn&pathTFragment} pathTFGetIn
 *
*/
/** ### pathTFUGetIn
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `path`
 *
 * Уникальные параметры функции `getIn`.
 *
 * @typedef pathTFUGetIn
 * @prop {any} _
*/

/** @arg {pathTFGetIn} t */
function getInDeceit(t) {

    try {

        return getInVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {pathTFGetIn} t */
function getInVerify(t) {

    const {



    } = t;

    return getInHandle(t);

};
/** @arg {pathTFGetIn} t */
function getInHandle(t) {

    const {



    } = t;

    return getInComply(t);

};
/** @arg {pathTFGetIn} t */
function getInComply(t) {

    const {

        fragment,

    } = t;

    if (existsSync(fragment) && lstatSync(fragment).isDirectory()) {

        return readdirSync(fragment).map(f => pathConcat(fragment, f));

    };

    return null;

};

/**
 * ### pathGetIn
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `path`
 * ***
 *
 * Функция получения внутренних путей.
 *
 * Извлекаются все пути, лежащие в указанном пути.
 *
 * ***
 * @arg {pathTTFragment} fragment `Фрагмент`
*/
export function pathGetIn(fragment) {

    return getInDeceit({ fragment });

};

//#endregion
//#region getDisk 0.0.1

/** ### pathTFGetDisk
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `path`
 * ***
 *
 * Результирующие параметры функции `getDisk`.
 *
 * @typedef {pathTFUGetDisk&pathT} pathTFGetDisk
 *
*/
/** ### pathTFUGetDisk
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `path`
 *
 * Уникальные параметры функции `getDisk`.
 *
 * @typedef pathTFUGetDisk
 * @prop {any} _
*/

/** @arg {pathTFGetDisk} t */
function getDiskDeceit(t) {

    try {

        return getDiskVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {pathTFGetDisk} t */
function getDiskVerify(t) {

    const {



    } = t;

    return getDiskHandle(t);

};
/** @arg {pathTFGetDisk} t */
function getDiskHandle(t) {

    const {



    } = t;

    return getDiskComply(t);

};
/** @arg {pathTFGetDisk} t */
function getDiskComply(t) {

    const {



    } = t;

    return stringFind(import.meta.url.slice(8), /(?<f>\w+?):/);

};

/**
 * ### pathGetDisk
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `path`
 * ***
 *
 * Функция получения текущего диска расположения проекта.
 *
 * ***
 *
*/
export function pathGetDisk() {

    return getDiskDeceit({});

};

//#endregion
//#region getProject 0.0.1

/** ### pathTFgetProject
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `path`
 * ***
 *
 * Результирующие параметры функции `getProject`.
 *
 * @typedef {pathTFUgetProject} pathTFgetProject
 *
*/
/** ### pathTFUgetProject
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `path`
 *
 * Уникальные параметры функции `getProject`.
 *
 * @typedef pathTFUgetProject
 * @prop {any} _
*/

/** @arg {pathTFgetProject} t */
function getProjectDeceit(t) {

    try {

        return getProjectVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {pathTFgetProject} t */
function getProjectVerify(t) {

    const {



    } = t;

    return getProjectHandle(t);

};
/** @arg {pathTFgetProject} t */
function getProjectHandle(t) {

    const {



    } = t;

    return getProjectComply(t);

};
/** @arg {pathTFgetProject} t */
function getProjectComply(t) {

    const {



    } = t;

    return import.meta.url.slice(8).split('/').slice(0, -3).join('/');

};

/**
 * ### pathgetProject
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * - Модуль `path`
 * ***
 *
 * Функция получения полного пути до корневой папки текущего проекта.
 *
 * ***
 *
*/
export function pathGetProject() {

    return getProjectDeceit({});

};

//#endregion

//#region concat 0.0.0

/** ### pathTFConcat
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `path`
 * ***
 *
 * Результирующие параметры функции `concat`.
 *
 * @typedef {pathTFUConcat&pathT} pathTFConcat
 *
*/
/** ### pathTFUConcat
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `path`
 *
 * Уникальные параметры функции `concat`.
 *
 * @typedef pathTFUConcat
 * @prop {string} concat
*/

/** @arg {pathTFConcat} t */
function concatDeceit(t) {

    try {

        return concatVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {pathTFConcat} t */
function concatVerify(t) {

    const {



    } = t;

    return concatHandle(t);

};
/** @arg {pathTFConcat} t */
function concatHandle(t) {

    const {



    } = t;

    [t.path, t.concat] = [t.path, t.concat].map(p => pathNormilize(p));

    return concatComply(t);

};
/** @arg {pathTFConcat} t */
function concatComply(t) {

    const {

        path,
        concat,

    } = t;

    return path + '/' + concat;

};

/**
 * ### pathConcat
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `path`
 * ***
 *
 * Функция склейки указанных путей.
 *
 * Порядок важен: первый путь склеится с первым.
 *
 * ***
 * @arg {string} path
 * @arg {string} concat
*/
export function pathConcat(path, concat) {

    return concatDeceit({ path, concat, });

};

//#endregion
//#region normalize 0.0.0

/** ### pathTFNormalize
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `path`
 * ***
 *
 * Результирующие параметры функции `normalize`.
 *
 * @typedef {pathTFUNormalize&pathT} pathTFNormalize
 *
*/
/** ### pathTFUNormalize
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `path`
 *
 * Уникальные параметры функции `normalize`.
 *
 * @typedef pathTFUNormalize
 * @prop {any} _
*/

/** @arg {pathTFNormalize} t */
function normalizeDeceit(t) {

    try {

        return normalizeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {pathTFNormalize} t */
function normalizeVerify(t) {

    const {



    } = t;

    return normalizeHandle(t);

};
/** @arg {pathTFNormalize} t */
function normalizeHandle(t) {

    const {



    } = t;

    return normalizeComply(t);

};
/** @arg {pathTFNormalize} t */
function normalizeComply(t) {

    let path = stringUnifyBySymbol(t.path, '/');

    if (path[0] === '/') {

        path = path.slice(1);

    };

    if (path.at(-1) === '/') {

        path = path.slice(0, -1);

    };

    return path;

};

/**
 * ### pathNormilize
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `path`
 * ***
 *
 * Функция нормолизации пути.
 *
 * Нормализация убирает возможные дефекты пути, по типу избыточных слешей.
 *
 * ***
 * @arg {string} path `Путь`
*/
export function pathNormilize(path) {

    return normalizeDeceit({ path, });

};

//#endregion
//#region decompose 0.0.2

/** ### pathTFDecompose
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `path`
 * ***
 *
 * Результирующие параметры функции `decompose`.
 *
 * @typedef {pathTFUDecompose&pathT} pathTFDecompose
 *
*/
/** ### pathTFUDecompose
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `path`
 *
 * Уникальные параметры функции `decompose`.
 *
 * @typedef pathTFUDecompose
 * @prop {any} _
*/

/** @arg {pathTFDecompose} t */
function decomposeDeceit(t) {

    try {

        return decomposeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {pathTFDecompose} t */
function decomposeVerify(t) {

    const {



    } = t;

    return decomposeHandle(t);

};
/** @arg {pathTFDecompose} t */
function decomposeHandle(t) {

    const {



    } = t;

    return decomposeComply(t);

};
/** @arg {pathTFDecompose} t */
function decomposeComply(t) {

    const {



    } = t;

    const {

        fragment,

    } = t;

    const parts = fragment.match(fileVREPart);

    if (parts) return parts.map((e, i, a) => a.slice(0, i + 1).join(''));
    else return [path.match(fileVREName)[1]];

};

/**
 * ### pathDecompose
 * - Версия `0.0.2`
 * - Цепочка `DVHCa`
 * - Модуль `path`
 * ***
 *
 *
 *
 * ***
 * @arg {pathTTFragment} fragment `Фрагмент`
*/
export function pathDecompose(fragment) {

    return decomposeDeceit({ fragment, });

};

//#endregion

/**
 * @file path.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/