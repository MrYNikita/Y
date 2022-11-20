import { arrayAppend } from "../../array/array.mjs";
import { existsSync, lstatSync, readdirSync } from "fs";
import { config, configOS, configPath, } from "../../config.mjs";
import { fileREName, fileREPart } from "../file/file.mjs";
import { stringFind } from "../../string/string.mjs";

//#region get 0.1.0

/**
 * @typedef TBget
 * @prop {number} limit
 * @prop {boolean} full
 * @prop {Array<string>} paths
 * @prop {string|RegExp} fragment
 * @typedef {TBget} Tget
*/

/** @param {Tget} t */
function getDeceit(t) {

    try {

        return getVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tget} t */
function getVerify(t) {

    const {



    } = t;

    return getHandle(t);

};
/** @param {Tget} t */
function getHandle(t) {

    let {



    } = t;

    if (!t.fragment) t.fragment = new RegExp();
    if (!configPath.pathProject) configPath.pathProject = pathGetProject();

    return getComply(t);

};
/** @param {Tget} t */
function getComply(t) {

    const {

        full,
        limit,
        paths,
        fragment,

    } = t;

    if (existsSync(fragment.source)) {

        return [fragment.source];

    } else {

        const {

            pathProject,

        } = configPath;

        const results = [];
        const originals = paths ?? readdirSync(pathProject);

        for (

            let c = 0;
            originals.length && ((c < limit) || !limit);

        ) {

            const path = originals.pop();

            if (limit && fragment && path.match(fragment)) {

                c++;
                results.push(path);

            } else if (!limit && fragment && path.match(fragment)) {

                results.push(path);

            } else if (limit && !fragment && originals.length >= limit) {

                return originals.splice(0, (limit <= originals.length) ? limit : originals.length);

            } else if (!limit && !fragment) {

                results.push(path);

            };

            if (lstatSync(pathProject + '/' + path).isDirectory()) arrayAppend(originals, ...readdirSync(pathProject + '/' + path).map(e => `${path}/${e}`));

        };

        return (full) ? results.map(r => configPath.pathProject + '/' + r) : results;

    };

};

/**
 * Функция для получения первого по соответствию фрагменту пути.
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * @param {boolean} full Логическое значение, определяющее полноту возвращаемого пути. Если `true`, то вернется полный путь до файла, `иначе` относительный.
 * @param {string|RegExp} fragment Фрагмент искомого пути.
 * @returns {string}
*/
export function pathGet(fragment, full = configPath.full) {

    return getDeceit({ fragment, limit: 1, full })[0];

};
/**
 * Функция для получения первого по соответствию фрагменту пути в указанном массиве.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {[string]} paths Пути.
 * @param {string|RegExp} fragment Фрагмент искомого пути.
 * @returns {string}
*/
export function pathGetIn(paths, fragment) {

    return getDeceit({ paths, fragment, limit: 1 })[0];

};
/**
 * Функция для получения путей к файлам проекта.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} fragment Фрагмент искомого пути.
 * @returns {[string]}
*/
export function pathGetAll(fragment = '.', limit) {

    return getDeceit({ fragment, limit });

};

//#endregion
//#region getDisk 0.0.0

/**
 * @typedef TBgetDisk
 * 
 * @typedef {TBgetDisk} TgetDisk
*/
  
/** @param {TgetDisk} t */
function getDiskDeceit(t) {
    
    try {
        
        return getDiskVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {TgetDisk} t */
function getDiskVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return getDiskHandle(t);
   
};
/** @param {TgetDisk} t */
function getDiskHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return getDiskComply(t);
   
};
/** @param {TgetDisk} t */
function getDiskComply(t) {
   
    const {
    
    
    
    } = t;
    
    return stringFind(import.meta.url.slice(8), /(?<f>\w+?):/);
    
};

/**
 * Функция для получения текущего диска расположения проекта.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function pathGetDisk() {

    return getDiskDeceit({});

};

//#endregion
//#region getProject 0.0.0

/**
 * @typedef TBgetProject
 * 
 * @typedef {TBgetProject} TgetProject
*/
  
/** @param {TgetProject} t */
function getProjectDeceit(t) {
    
    try {
        
        return getProjectVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {TgetProject} t */
function getProjectVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return getProjectHandle(t);
   
};
/** @param {TgetProject} t */
function getProjectHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return getProjectComply(t);
   
};
/** @param {TgetProject} t */
function getProjectComply(t) {
   
    const {
    
    
    
    } = t;
    
    return import.meta.url.slice(8).split('/').slice(0, -3).join('/');
    
};

/**
 * Функция для получения полного пути до проекта.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function pathGetProject() {

    return getProjectDeceit({});

};

//#endregion

//#region decompose 0.0.1

/**
 * @typedef TBdecompose
 * @prop {...string|RegExp}
 * @typedef {TBdecompose} Tdecompose
*/
  
/** @param {Tdecompose} t */
function decomposeDeceit(t) {
    
    try {
        
        return decomposeVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {Tdecompose} t */
function decomposeVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return decomposeHandle(t);
   
};
/** @param {Tdecompose} t */
function decomposeHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return decomposeComply(t);
   
};
/** @param {Tdecompose} t */
function decomposeComply(t) {
   
    const {

        fragment,

    } = t;

    const path = pathGet(fragment);
    const parts = path.match(fileREPart);

    if (parts) return parts.map((e, i, a) => a.slice(0, i + 1).join(''));
    else return [path.match(fileREName)[1]];
    
};

/**
 * Функция для разложения пути на составные части.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string|RegExp} fragment
 * @returns {[string]}
*/
export function pathDecompose(fragment) {

    return decomposeDeceit({ fragment, });

};

//#endregion