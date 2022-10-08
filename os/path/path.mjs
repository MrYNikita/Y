import { arrayAppend } from "../../array/array.mjs";
import { existsSync, lstatSync, readdirSync } from "fs";
import { config, configOS, configPath, } from "../../config.mjs";
import { fileREName, fileREPart } from "../file/file.mjs";

//#region get 0.0.1

/**
 * @typedef TBget
 * @prop {number} limit
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

    return getComply(t);

};
/** @param {Tget} t */
function getComply(t) {

    const {

        limit,
        fragment,

    } = t;

    if (existsSync(fragment.source)) {

        return [fragment.source];

    } else {

        const results = [];
        const originals = readdirSync('.');

        for (

            let c = 0;
            originals.length && ((c < limit) || !limit);

        ) {

            const path = originals.pop();

            if (limit && fragment && path.match(fragment)) {

                results.push(path);
                c++;

            } else if (!limit && fragment && path.match(fragment)) {

                results.push(path);

            } else if (limit && !fragment && originals.length >= limit) {

                return originals.splice(0, (limit <= originals.length) ? limit : originals.length);

            } else if (!limit && !fragment) {

                results.push(path);

            };

            if (lstatSync(path).isDirectory()) arrayAppend(originals, ...readdirSync(path).map(e => `${path}/${e}`));

        };

        return results;

    };

};

/**
 * Функция для получения первого по соответствию фрагменту пути.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string|RegExp} fragment Фрагмент искомого пути.
 * @returns {string}
*/
export function pathGet(fragment) {

    return getDeceit({ fragment, limit: 1 })[0];

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