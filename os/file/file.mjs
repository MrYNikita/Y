import { pathGet, pathGetProject } from "../path/path.mjs";
import { existsSync, readFileSync, renameSync, unlinkSync, writeFileSync } from "fs";
import { config, configOS, configFile } from "../../config.mjs";
import { arrayAppend } from "../../array/array.mjs";
import { jectChangeDeep } from "../../ject/ject.mjs";

/**
 * Регулярное выражение для извлечения имени файла.
 * - Версия `0.0.1`
 * @type {RegExp}
*/
export const fileREName =  /.*?([.\w]+?)(?:\.|$)/;
/**
 * Регулярное выражение для извлечения вложенного пути.
 * - Версия `0.0.1`
 * @type {RegExp}
*/
export const fileREPart = /.+?(\/|$)/g;
/**
 * Регулярное выражение для извлечения расширения файла.
 * - Версия `0.0.1`
 * @type {RegExp}
*/
export const fileREExpand = /(?:\.)([^.]+)$/;
/**
 * Регулярное выражение для извлечения места размещения файла.
 * - Версия `0.0.1`
 * @type {RegExp}
*/
export const fileRELocation = /(.+)(?:\/)/;

//#region read 0.0.0

/**
 * @typedef TBread
 * @prop {string} expand
 * @prop {string|RegExp} fragment
 * @typedef {TBread} Tread
*/

/** @param {Tread} t */
function readDeceit(t) {

    try {

        return readVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tread} t */
function readVerify(t) {

    const {



    } = t;

    return readHandle(t);

};
/** @param {Tread} t */
function readHandle(t) {

    let {



    } = t;

    if (t.fragment) {

        if (!t.fragment.includes(pathGetProject())) t.fragment = pathGet(t.fragment);

    };

    t = {

        ...t,

    };

    return readComply(t);

};
/** @param {Tread} t */
function readComply(t) {

    const {

        expand,
        fragment,

    } = t;

    const r = readFileSync(fragment, 'utf8');

    switch (expand) {

        case 'json': return JSON.parse(r);
        default: return r;

    };

};

/**
 * Функция для считывания данных файла как текста.
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * @param {string} expand
 * @param {string|RegExp} fragment
 * @returns {{}|string}
*/
export function fileRead(fragment, expand) {

    return readDeceit({ fragment, expand });

};
/**
 * Функция для считывания данных файла как текста.
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * @param {string|RegExp} fragment
 * @returns {{}|string}
*/
export function fileReadText(fragment) {

    return readDeceit({ fragment, });

};
/**
 * Функция для считывания данных файла как json.
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * @param {string}
 * @returns {{}|[]|string}
*/
export function fileReadJson(fragment) {

    return readDeceit({ fragment, expand: 'json' });

};

//#endregion
//#region move 0.0.0

/**
 * @typedef TBmove
 * @prop {string|RegExp} fragment
 * @prop {string|RegExp} location
 * @typedef {TBmove} Tmove
*/

/** @param {Tmove} t */
function moveDeceit(t) {

    try {

        return moveVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tmove} t */
function moveVerify(t) {

    const {



    } = t;

    return moveHandle(t);

};
/** @param {Tmove} t */
function moveHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return moveComply(t);

};
/** @param {Tmove} t */
function moveComply(t) {

    const {

        location,
        fragment,

    } = t;

    let l = location;
    const path1 = pathGet(fragment);

    if (!existsSync(l)) l = pathGet(l);

    renameSync(path1, path1.replace(path1.match(fileRELocation)[0], l + '/'));

};

/**
 * Функция для перемещения файла.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string|RegExp} location
 * @param {string|RegExp} fragment
*/
export function fileMove(fragment, location) {

    moveDeceit({ fragment, location });

};

//#endregion
//#region write 0.0.0

/**
 * @typedef TBwrite
 * @prop {string} expand
 * @prop {[string|{}]} data
 * @prop {string|RegExp} fragment
 * @typedef {TBwrite} Twrite
*/

/** @param {Twrite} t */
function writeDeceit(t) {

    try {

        return writeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Twrite} t */
function writeVerify(t) {

    const {



    } = t;

    return writeHandle(t);

};
/** @param {Twrite} t */
function writeHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return writeComply(t);

};
/** @param {Twrite} t */
function writeComply(t) {

    const {

        data,
        expand,
        fragment,

    } = t;

    switch (expand) {

        case 'json': {

            writeFileSync(pathGet(fragment), (data.length === 1) ? JSON.stringify(data[0], null, 4) : JSON.stringify(data, null, 4));

        }; break;
        default: {

            writeFileSync(pathGet(fragment), data.join('\n'));

        } break;

    };

};

/**
 * Функция для перезаписывания файла текстовыми данными.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {...string} data
 * @param {string|RegExp} fragment
*/
export function fileWrite(fragment, expand, ...data) {

    writeDeceit({ fragment, expand, data });

};
/**
 * Функция для перезаписывания файла текстовыми данными.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {...string} data
 * @param {string|RegExp} fragment
*/
export function fileWriteText(fragment, ...data) {

    writeDeceit({ fragment, data });

};
/**
 * Функция для перезаписывания файла в формате json.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {...string} data
 * @param {string|RegExp} fragment
*/
export function fileWriteJson(fragment, ...data) {

    writeDeceit({ fragment, data, expand: 'json' });

};

//#endregion
//#region append 0.0.0

/**
 * @typedef TBappend
 * @prop {string} expand
 * @prop {[{}|string]} data
 * @prop {string|RegExp} fragment
 * @typedef {TBappend} Tappend
*/

/** @param {Tappend} t */
function appendDeceit(t) {

    try {

        return appendVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tappend} t */
function appendVerify(t) {

    const {



    } = t;

    return appendHandle(t);

};
/** @param {Tappend} t */
function appendHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return appendComply(t);

};
/** @param {Tappend} t */
function appendComply(t) {

    const {

        data,
        expand,
        fragment,

    } = t;

    switch (expand) {

        case 'json': {

            const dataLast = fileReadJson(fragment);

            if (Array.isArray(dataLast)) arrayAppend(dataLast, ...data);
            else jectDeepChange(dataLast, ...data);

            fileWriteJson(fragment, dataLast);

        }; break;
        default: {

            fileWriteText(fragment, fileReadText(fragment), ...data);

        }; break;

    };

};

/**
 * Функция для дополнения указанного файла новыми данными.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function fileAppend(fragment, expand, ...data) {

    return appendDeceit({ fragment, expand, data });

};
/**
 * Функция для дополнения файла как текста.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {...string} data
 * @param {string|RegExp} fragment
*/
export function fileAppendText(fragment, ...data) {

    return appendDeceit({ fragment, data });

};
/**
 * Функция для дополнения файлка как json.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {...string} data
 * @param {string|RegExp} fragment
*/
export function fileAppendJson(fragment, ...data) {

    return appendDeceit({ fragment, data, expand: 'json' });

};

//#endregion
//#region delete 0.0.0

/**
 * @typedef TBdelete
 * @prop {string|RegExp} fragment
 * @typedef {TBdelete} Tdelete
*/

/** @param {Tdelete} t */
function deleteDeceit(t) {

    try {

        return deleteVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tdelete} t */
function deleteVerify(t) {

    const {



    } = t;

    return deleteHandle(t);

};
/** @param {Tdelete} t */
function deleteHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return deleteComply(t);

};
/** @param {Tdelete} t */
function deleteComply(t) {

    const {

        fragment,

    } = t;

    const path = pathGet(fragment);

    if (!configFile.protects.includes(path)) unlinkSync(pathGet(fragment));

};

/**
 * Функция для удаления файла.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string|RegExp} fragment
*/
export function fileDelete(fragment) {

    deleteDeceit({ fragment, });

};

//#endregion
//#region rename 0.0.0

/**
 * @typedef TBrename
 * @prop {string} name
 * @prop {string|RegExp} fragment
 * @typedef {TBrename} Trename
*/

/** @param {Trename} t */
function renameDeceit(t) {

    try {

        return renameVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Trename} t */
function renameVerify(t) {

    const {



    } = t;

    return renameHandle(t);

};
/** @param {Trename} t */
function renameHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return renameComply(t);

};
/** @param {Trename} t */
function renameComply(t) {

    const {

        name,
        fragment,

    } = t;

    const path = pathGet(fragment);
    const expand = path.match(fileREExpand)[1];
    const nameLast = path.match(fileREName)[1];
    const location = path.match(fileRELocation)[0];

    renameSync(location + nameLast + '.' + expand, location + name + '.' + expand);

};

/**
 * Функция для переименования файла.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} name
 * @param {string|RegExp} fragment
*/
export function fileRename(fragment, name) {

    renameDeceit({ fragment, name });

};

//#endregion
