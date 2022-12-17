import { arrayAppend } from "../../array/array.mjs";
import { lstatSync, readdirSync } from "fs";
import { config, configOSPath, } from "../../config.mjs";
import { fileREName, fileREPart } from "../file/file.mjs";
import { stringFind } from "../../string/string.mjs";

/** @type {regexp} */
export const pathREFileInfo = /(\d+\.){2}\d{4,} *?\d{2}:\d{2} *?(<DIR>)? *?(\d+?)? *?(\w|\.)+/mg;

//#region get 0.2.0

/**
 * @typedef TBget
 * @prop {number} limit
 * @prop {Array<string>} paths
 * @prop {string|RegExp} fragment
 * @typedef {TBget} Tget
*/

/** @arg {Tget} t */
function getDeceit(t) {

    try {

        return getVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tget} t */
function getVerify(t) {

    const {



    } = t;

    return getHandle(t);

};
/** @arg {Tget} t */
function getHandle(t) {

    let {



    } = t;

    if (!t.fragment) t.fragment = new RegExp();
    if (!configOSPath.pathProject) configOSPath.pathProject = pathGetProject();

    return getComply(t);

};
/** @arg {Tget} t */
function getComply(t) {

    const {

        limit,
        paths = readdirSync(configOSPath.pathProject),
        fragment,

    } = t, {

        pathProject,

    } = configOSPath;

    const func0 = path => lstatSync(pathProject + '/' + path).isDirectory() ? arrayAppend(paths, ...readdirSync(pathProject + '/' + path).map(e => `${path}/${e}`)) : 0;
    /** @type {Array<string>} */
    const results = [];

    if (fragment && limit) {

        for (

            let count = 0;
            paths.length && count < limit;

        ) {

            const path = paths.pop();

            if (path.match(fragment)) {

                count++;
                results.push(path);

            };

            func0(path);

        };

    } else if (fragment && !limit) {

        while (paths.length) {

            const path = paths.pop();

            if (path.match(fragment)) results.push(path);

            func0(path);

        };

    } else if (!fragment && limit) {

        for (

            let count = 0;
            count < limit;

        ) {

            const path = paths.pop();

            results.push(path);

            func0(path);

            count++;

        };

    } else {

        while (paths.length) {

            const path = paths.pop();

            results.push(path);

            func0(path);

        };

    };

    return results;

};

/**
 * Функция для получения первого по соответствию фрагменту пути.
 * - Версия `0.1.1`
 * - Цепочка `DVHCa`
 * @arg {string|RegExp} fragment Фрагмент искомого пути.
 * @returns {string}
*/
export function pathGet(fragment) {

    return getDeceit({ fragment, limit: 1 })[0];

};
/**
 * Функция для получения первого по соответствию фрагменту пути в указанном массиве.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {[string]} paths Пути.
 * @arg {string|RegExp} fragment Фрагмент искомого пути.
 * @returns {string}
*/
export function pathGetIn(paths, fragment) {

    return getDeceit({ paths, fragment, limit: 1 })[0];

};
/**
 * Функция для получения путей к файлам проекта.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} fragment Фрагмент искомого пути.
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

/** @arg {TgetDisk} t */
function getDiskDeceit(t) {

    try {

        return getDiskVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetDisk} t */
function getDiskVerify(t) {

    const {



    } = t;

    return getDiskHandle(t);

};
/** @arg {TgetDisk} t */
function getDiskHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return getDiskComply(t);

};
/** @arg {TgetDisk} t */
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

/** @arg {TgetProject} t */
function getProjectDeceit(t) {

    try {

        return getProjectVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetProject} t */
function getProjectVerify(t) {

    const {



    } = t;

    return getProjectHandle(t);

};
/** @arg {TgetProject} t */
function getProjectHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return getProjectComply(t);

};
/** @arg {TgetProject} t */
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

/** @arg {Tdecompose} t */
function decomposeDeceit(t) {

    try {

        return decomposeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tdecompose} t */
function decomposeVerify(t) {

    const {



    } = t;

    return decomposeHandle(t);

};
/** @arg {Tdecompose} t */
function decomposeHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return decomposeComply(t);

};
/** @arg {Tdecompose} t */
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
 * @arg {string|RegExp} fragment
 * @returns {[string]}
*/
export function pathDecompose(fragment) {

    return decomposeDeceit({ fragment, });

};

//#endregion