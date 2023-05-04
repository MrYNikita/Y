//#region YI

import { stringUnifyBySymbol } from "../../string/module.mjs";
import { existsSync, lstatSync, readdirSync, readFileSync } from "fs";
import { YError } from '../../error/class.mjs';
import { fileReadJson, fileWriteJson } from "../file/module.mjs";
import { YPath } from "./class.mjs";

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

/** ### pathT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\path`
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
/** ### pathTModeCache
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\path`
 * 
 * 
 * 
 * @typedef pathTModeCache
 * @prop {boolean} modeCache
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
 * ### pathVRETempalte
 * - Версия `0.0.0`
 * 
 * Шаблон регулярного выражения файловых путей.
 * 
 * ***
 * 
*/
export const pathVRETempalte = /^(\w:|\.|\.\.)\/((\.|\.\.|(\d|\w| |\.|\,|\-)+)\/?)+$/;

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
 * @typedef {pathTFUGet&pathTFragment&pathTPaths&pathTModeCache} pathTFGet
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

        console.log(e)

        if (config?.strict) throw e;

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

    t.fragment = pathNormilize(t.fragment);

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
        modeCache,

    } = t;

    /** @type {{ paths: string[] }} */
    const cache = modeCache ? fileReadJson('path/cache.json') : null;
    /** @type {string[]} */
    const results = [];
    /** @type {string[]} */
    const resultsCache = [];

    const pathProject = pathGetProject();


    if (limit === 1 && pathExists(fragment)) {

        results.push(fragment.startsWith(pathProject) ? fragment : pathConcat(pathProject, fragment));

    } else if (fragment && limit) {

        if (cache) {

            for (const path of cache.paths) {

                if (results.length + resultsCache.length >= limit) {

                    break;

                };

                if (path.match(fragment)) {

                    resultsCache.push(path);
                    
                };

            };

        };

        while (paths.length && results.length < limit) {

            const p = paths.pop();

            if (p.match(fragment) && !cache?.paths?.includes?.(p)) {

                results.push(p);

            };

            if (results.length === limit) {

                break;

            } else {

                const ps = pathGetIn(p);

                if (ps) {

                    paths.push(...ps.filter(p => !cache?.paths?.includes?.(p)));

                };

            };

        };

    } else if (fragment && !limit) {

        if (cache) {

            for (const path of cache.paths) {

                if (path.match(fragment)) {

                    resultsCache.push(path);
                    
                };

            };

        };

        while (paths.length) {

            const p = paths.pop();

            if (p.match(fragment) && !cache?.paths?.includes?.(p)) {

                results.push(p);

            };

            const ps = pathGetIn(p);

            if (ps) {

                paths.push(...ps.filter(p => !cache?.paths?.includes?.(p)));

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

    if (cache) {

        results.forEach(result => {

            if (!cache.paths.includes(result)) {
                
                cache.paths.push(result);

            };

        });

        fileWriteJson('path/cache.json', cache);

    };

    return [...results, ...resultsCache];

};

/**
 * ### pathGet
 * - Версия `0.3.0`
 * - Цепочка `DVHCa`
 * - Модуль `path`
 * ***
 *
 * Функция получения пути по указанному фрагменту в текущем проекте.
 *
 * ***
 * @arg {boolean?} modeCache `Режим кэширования`
 * @arg {pathTTFragment} fragment `Фрагмент`
*/
export function pathGet(fragment, modeCache) {

    return getDeceit({ fragment, limit: 1, modeCache, })?.[0];

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
 * @arg {boolean?} modeCache `Режим кэширования`
 * @arg {pathTTFragment} fragment `Фрагмент`
*/
export function pathGetAll(fragment, limit, modeCache) {

    return getDeceit({ fragment, limit, modeCache, });

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

    return import.meta.url.match(/\/\/\/(\w+?):/)[1];

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

//#region back 0.0.0

/** ### pathTFBack
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\path`
 * ***
 * 
 * Результирующие параметры функции `back`.
 * 
 * @typedef {pathTFUBack&pathT} pathTFBack
 * 
*/
/** ### pathTFUBack
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\path`
 * 
 * Уникальные параметры функции `back`.
 * 
 * @typedef pathTFUBack
 * @prop {string} path
 * @prop {number} repeat 
*/

/** @arg {pathTFBack} t */
function backDeceit(t) {
    
    try {
        
        return backVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {pathTFBack} t */
function backVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return backHandle(t);
   
};
/** @arg {pathTFBack} t */
function backHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return backComply(t);
   
};
/** @arg {pathTFBack} t */
function backComply(t) {
   
    const {
    
        path,
        repeat,
    
    } = t;

    return path.split('/').reverse().splice(repeat).reverse().join('/');
    
};

/**
 * ### pathBack
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\path`
 * ***
 * 
 * Функция получения строки пути с подъёмом на указанное кол-во уровней для указанного пути.
 * 
 * ***
 * @arg {string} path `Путь`
 * @arg {number} repeat `Повторения`
*/
export function pathBack(path, repeat = 1) {

    return backDeceit({ path, repeat, });

};

//#endregion
//#region backByName 0.0.0

/** ### pathTFBackByName
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\path`
 * ***
 * 
 * Результирующие параметры функции `backByName`.
 * 
 * @typedef {pathTFUBackByName&pathT} pathTFBackByName
 * 
*/
/** ### pathTFUBackByName
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\path`
 * 
 * Уникальные параметры функции `backByName`.
 * 
 * @typedef pathTFUBackByName
 * @prop {string} name
*/

/** @arg {pathTFBackByName} t */
function backByNameDeceit(t) {
    
    try {
        
        return backByNameVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {pathTFBackByName} t */
function backByNameVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return backByNameHandle(t);
   
};
/** @arg {pathTFBackByName} t */
function backByNameHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return backByNameComply(t);
   
};
/** @arg {pathTFBackByName} t */
function backByNameComply(t) {
   
    const {
    
        path,
        name,
    
    } = t;
    
    const result = path.split('/');

    for (let i = result.length - 1; i >= 0; i--) {

        if (result[i] === name) {

            break;

        } else {

            result.splice(i);

        };

    };

    return result.join('/');
    
};

/**
 * ### pathBackByName
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\path`
 * ***
 * 
 * Функция перехода на вышестояющую директорию до тех пор, пока не удастся найти указанное наименование.
 * 
 * ***
 * @arg {string} path `Путь`
 * @arg {string} name `Имя`
*/
export function pathBackByName(path, name) {

    return backByNameDeceit({ path, name });

};

//#endregion

//#region check 0.0.0

/** ### pathTFCheck
 * - Тип `TF`
 * - Версия `0.0.0`
 * ***
 * 
 * Результирующие параметры функции `check`.
 * 
 * @typedef {pathTFUCheck&pathT} pathTFCheck
 * 
*/
/** ### pathTFUCheck
 * - Тип `TFU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры функции `check`.
 * 
 * @typedef pathTFUCheck
 * @prop {any} _
*/

/** @arg {pathTFCheck} t */
function checkDeceit(t) {
    
    try {
        
        return checkVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {pathTFCheck} t */
function checkVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return checkHandle(t);
   
};
/** @arg {pathTFCheck} t */
function checkHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return checkComply(t);
   
};
/** @arg {pathTFCheck} t */
function checkComply(t) {
   
    const {
    
        path,
    
    } = t;
    
    return pathVRETempalte.test(path);
    
};

/**
 * ### pathCheck
 * - Версия `0.0.0`
 * ***
 * 
 * Функция проверки корректности пути.
 * 
 * ***
 * @arg {string} path `Путь`
*/
export function pathCheck(path) {

    return checkDeceit({ path, });

};

//#endregion
//#region exists 0.0.0

/** ### pathTFExists
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\path`
 * ***
 * 
 * Результирующие параметры функции `exists`.
 * 
 * @typedef {pathTFUExists&pathT} pathTFExists
 * 
*/
/** ### pathTFUExists
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\path`
 * 
 * Уникальные параметры функции `exists`.
 * 
 * @typedef pathTFUExists
 * @prop {any} _
*/

/** @arg {pathTFExists} t */
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
/** @arg {pathTFExists} t */
function existsVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return existsHandle(t);
   
};
/** @arg {pathTFExists} t */
function existsHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return existsComply(t);
   
};
/** @arg {pathTFExists} t */
function existsComply(t) {
   
    const {
    
        path,
    
    } = t;
    
    return existsSync(path);
    
};

/**
 * ### pathExists
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\path`
 * ***
 * 
 * Функция проверки наличия пути. 
 * 
 * ***
 * @arg {string} path `Путь`
*/
export function pathExists(path) {

    return existsDeceit({ path });

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
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/