import { config } from "process";
import { pathGet, pathGetAll, pathGetIn } from "../../../path/path.mjs";

//#region getFile 0.0.0

/**
 * @typedef TBgetFile
 * @prop {boolean} dir
 * @prop {string|RegExp} fragment
 * @prop {[string]|string} paths
 * @typedef {TBgetFile} TgetFile
*/
  
/** @param {TgetFile} t */
function getFileDeceit(t) {
    
    try {
        
        return getFileVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {TgetFile} t */
function getFileVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return getFileHandle(t);
   
};
/** @param {TgetFile} t */
function getFileHandle(t) {
   
    let {
    
        fragment,
    
    } = t;
    
    if (t.paths.constructor === String) t.paths = pathGetAll(t.paths);
    if (fragment.constructor === String) t.fragment = new RegExp(t.fragment);

    t = {
        
        ...t,
        
    };
   
    return getFileComply(t);
   
};
/** @param {TgetFile} t */
function getFileComply(t) {
   
    const {
    
        paths,
        fragment,
    
    } = t;
    
    return pathGetIn(paths, fragment);
    
};

/**
 * Функция для получения указанной папки из данной директории по фрагменту пути.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string|RegExp} fragment Фрагмент поиска.
 * @param {[string]|string} paths Пути папки.
*/
export function directoryGetDir(paths, fragment) {

    return getFileDeceit({ paths, fragment, dir: true });

};
/**
 * Функция для получения файла из данной директории по указанному фрагменту пути.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string|RegExp} fragment Фрагмент поиска.
 * @param {[string]|string} paths Пути папки.
 */
export function directoryGetFile(paths, fragment) {

    return getFileDeceit({ paths, fragment })

};

//#endregion
//#region getCount 0.0.0

/**
 * @typedef TBgetCount
 * 
 * @typedef {TBgetCount} TgetCount
*/
  
/** @param {TgetCount} t */
function getCountDeceit(t) {
    
    try {
        
        return getCountVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {TgetCount} t */
function getCountVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return getCountHandle(t);
   
};
/** @param {TgetCount} t */
function getCountHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return getCountComply(t);
   
};
/** @param {TgetCount} t */
function getCountComply(t) {
   
    const {
    
    
    
    } = t;
    
    
    
};

/**
 * Функция для подсчета всех папок в директории.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function directoryGetCountDir() {



};
/**
 * Функция для подсчета всех файлов в директории.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function directoryGetCountFile() {



};

//#endregion