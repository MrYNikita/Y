import { arrayAppend } from "../../array/array.mjs";
import { existsSync, lstatSync, readdirSync } from "fs";
import { config, configOS, configPath, } from "../../config.mjs";
import { fileREName, fileREPart } from "../file/file.mjs";
import { stringFind } from "../../string/string.mjs";
import { YFunc } from "../../func/YFunc/YFunc.mjs";
import { YProc } from "../../func/YFunc/YProc/YProc.mjs";
import { jectReplaceDeep, jectSetDeep } from "../../ject/ject.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { YCMD } from "../program/YCMD/YCMD.mjs";

//#region get 0.2.0

/**
 * @typedef TBget
 * @prop {number} limit
 * @prop {boolean} full
 * @prop {Array<string>} paths
 * @prop {string|RegExp} fragment
 * @typedef {TBget} Tget
*/

const yfGetDeceit = new YFunc().changeCard({

    conditionDebug: 'conditionDebug',
    conditionLimit: 'conditionLimit',
    conditionFragment: 'conditionFragment',
    extractPath: 'extractPath',
    count: 'count',
    checkFragment: 'checkFragment',
    append: 'append',
    checkLimit: 'checkLimit',
    additemPath: 'additemPath',
    report: 'report',
    conditionCiclePath: 'conditionCiclePath',

}).appendProcedure(

    ['conditionDebug', function (t) {

        if (!t.debug) this.excludeByCategory('debug');

    }],
    ['conditionLimit', function (t) {

        if (!t.limit) {

            this.excludeByCategory('limit');

            t.notic.paste(`Проверка лимитов отключена!`);

        } else t.notic.paste(`Проверка лимитов включена! Лимит: ${t.limit}`);


    }, 'limit'],
    ['conditionFragment', function (t) {

        if (!t.fragment) {

            this.excludeByCategory('fragment');

            t.notic.paste(`Проверка фрагментов отключена!`);

        } else t.notic.paste(`Проверка фрагментов включена! Фрагмент: ${t.fragment.source ?? t.fragment}`);

    }, 'fragment'],
    ['extractPath', function (t) {

        t.p = t.paths.pop();

        t.notic.paste(

            `Итерация: ${t.n}`,
            `Извлечен путь: ${t.p}`,

        );

    }],
    ['checkLimit', function (t) {

        if (t.limit === t.results.length) this.finish();

    }, 'limit'],
    ['count', function (t) {

        t.notic.paste(`Счетчик увеличен с ${t.n} до ${++t.n}`);

    }],
    ['report', function (t) {

        t.notic

            .paste(

                `Путей на данный момент: ${t.results.length}`,
                `Кандидаты: ${t.paths.length}`

            )
            .pasteTemplate('l')
            .display();

        t.notic.value = '';

    }, 'debug'],
    ['checkFragment', function (t) {

        if (t.p.match(t.fragment)) this.moveIndexByAlias('append');
        else this.moveIndexByAlias('additemPath');

    }, 'fragment'],
    ['append', function (t) {

        t.notic.paste(`Путь ${t.p} входит в фрагмент ${t.fragment.source} и был добавлен в результат.`);

        t.results.push(t.p);

    }],
    ['additemPath', function (t) {

        if (lstatSync(t.pathProject + '/' + t.p).isDirectory()) arrayAppend(t.paths, ...readdirSync(t.pathProject + '/' + t.p).map(e => `${t.p}/${e}`));

    }],
    ['conditionCiclePath', function (t) {

        if (t.paths.length) this.moveIndexByAlias('extractPath');
        else this.finish();

    }],

);

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
        paths = readdirSync(configPath.pathProject),
        fragment,

    } = t, {

        pathProject,

    } = configPath;

    /** @type {Array<string>} */
    const results = [];

    if (existsSync(fragment.source)) return [fragment.source];

    new YCMD().report();

    // yfGetDeceit.setTransmit({

    //     n: 0,
    //     full,
    //     p: null,
    //     paths,
    //     pathProject,
    //     limit,
    //     results,
    //     fragment,
    //     debug: configPath.debug,
    //     notic: new YString()

    //         .changePrefix(' * ')
    //         .changePostfix(';\n')
    //         .addTemplate('l', '---\n')

    // }).exec();

    return results;

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

    return getDeceit({ fragment, limit: 1, full });

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