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

/** @arg {TgetFile} t */
function getFileDeceit(t) {

    try {

        return getFileVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetFile} t */
function getFileVerify(t) {

    const {



    } = t;

    return getFileHandle(t);

};
/** @arg {TgetFile} t */
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
/** @arg {TgetFile} t */
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
 * @arg {string|RegExp} fragment Фрагмент поиска.
 * @arg {[string]|string} paths Пути папки.
*/
export function directoryGetDir(paths, fragment) {

    return getFileDeceit({ paths, fragment, dir: true });

};
/**
 * Функция для получения файла из данной директории по указанному фрагменту пути.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string|RegExp} fragment Фрагмент поиска.
 * @arg {[string]|string} paths Пути папки.
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

/** @arg {TgetCount} t */
function getCountDeceit(t) {

    try {

        return getCountVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetCount} t */
function getCountVerify(t) {

    const {



    } = t;

    return getCountHandle(t);

};
/** @arg {TgetCount} t */
function getCountHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return getCountComply(t);

};
/** @arg {TgetCount} t */
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