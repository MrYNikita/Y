import { pathGet, pathGetProject } from "../path/path.mjs";
import { existsSync, readFileSync, renameSync, unlinkSync, writeFileSync } from "fs";
import { config, configOS, configOSFile } from "../../config.mjs";
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

/** @arg {Tread} t */
function readDeceit(t) {

    try {

        return readVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tread} t */
function readVerify(t) {

    const {



    } = t;

    return readHandle(t);

};
/** @arg {Tread} t */
function readHandle(t) {

    if (t.fragment) {

        if (!t.fragment.includes(pathGetProject())) t.fragment = pathGetProject() + '/' + t.fragment;

    };

    return readComply(t);

};
/** @arg {Tread} t */
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
 * @arg {string} expand
 * @arg {string|RegExp} fragment
 * @returns {{}|string}
*/
export function fileRead(fragment, expand) {

    return readDeceit({ fragment, expand });

};
/**
 * Функция для считывания данных файла как текста.
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * @arg {string|RegExp} fragment
 * @returns {{}|string}
*/
export function fileReadText(fragment) {

    return readDeceit({ fragment, });

};
/**
 * Функция для считывания данных файла как json.
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * @arg {string}
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

/** @arg {Tmove} t */
function moveDeceit(t) {

    try {

        return moveVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tmove} t */
function moveVerify(t) {

    const {



    } = t;

    return moveHandle(t);

};
/** @arg {Tmove} t */
function moveHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return moveComply(t);

};
/** @arg {Tmove} t */
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
 * @arg {string|RegExp} location
 * @arg {string|RegExp} fragment
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

/** @arg {Twrite} t */
function writeDeceit(t) {

    try {

        return writeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Twrite} t */
function writeVerify(t) {

    const {



    } = t;

    return writeHandle(t);

};
/** @arg {Twrite} t */
function writeHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return writeComply(t);

};
/** @arg {Twrite} t */
function writeComply(t) {

    const {

        data,
        expand,
        fragment,

    } = t;

    switch (expand) {

        case 'json': {

            writeFileSync(pathGetProject() + '/' + pathGet(fragment), (data.length === 1) ? JSON.stringify(data[0], null, 4) : JSON.stringify(data, null, 4));

        }; break;
        default: {

            writeFileSync(pathGetProject() + '/' + pathGet(fragment), data.join('\n'));

        } break;

    };

};

/**
 * Функция для перезаписывания файла текстовыми данными.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {...string} data
 * @arg {string|RegExp} fragment
*/
export function fileWrite(fragment, expand, ...data) {

    writeDeceit({ fragment, expand, data });

};
/**
 * Функция для перезаписывания файла текстовыми данными.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {...string} data
 * @arg {string|RegExp} fragment
*/
export function fileWriteText(fragment, ...data) {

    writeDeceit({ fragment, data });

};
/**
 * Функция для перезаписывания файла в формате json.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {...string} data
 * @arg {string|RegExp} fragment
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

/** @arg {Tappend} t */
function appendDeceit(t) {

    try {

        return appendVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tappend} t */
function appendVerify(t) {

    const {



    } = t;

    return appendHandle(t);

};
/** @arg {Tappend} t */
function appendHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return appendComply(t);

};
/** @arg {Tappend} t */
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
 * @arg {...string} data
 * @arg {string|RegExp} fragment
*/
export function fileAppendText(fragment, ...data) {

    return appendDeceit({ fragment, data });

};
/**
 * Функция для дополнения файлка как json.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {...string} data
 * @arg {string|RegExp} fragment
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

/** @arg {Tdelete} t */
function deleteDeceit(t) {

    try {

        return deleteVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tdelete} t */
function deleteVerify(t) {

    const {



    } = t;

    return deleteHandle(t);

};
/** @arg {Tdelete} t */
function deleteHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return deleteComply(t);

};
/** @arg {Tdelete} t */
function deleteComply(t) {

    const {

        fragment,

    } = t;

    const path = pathGet(fragment);

    if (!configOSFile.protects.includes(path)) unlinkSync(pathGet(fragment));

};

/**
 * Функция для удаления файла.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string|RegExp} fragment
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

/** @arg {Trename} t */
function renameDeceit(t) {

    try {

        return renameVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Trename} t */
function renameVerify(t) {

    const {



    } = t;

    return renameHandle(t);

};
/** @arg {Trename} t */
function renameHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return renameComply(t);

};
/** @arg {Trename} t */
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
 * @arg {string} name
 * @arg {string|RegExp} fragment
*/
export function fileRename(fragment, name) {

    renameDeceit({ fragment, name });

};

//#endregion
