import { pathGet, pathGetProject } from "../path/path.mjs";
import { existsSync, readFileSync, renameSync, unlinkSync, writeFileSync } from "fs";
import { config, configOSFile } from "../../config.mjs";
import { arrayAppend } from "../../array/array.mjs";
import { YPath } from "../path/YPath/YPath.mjs";

//#region YT

/** ### fileT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 * Основной параметр модуля `file`.
 *
 * @typedef fileT
 * @prop {any} _
 *
*/
/** ### fileTData
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 *
 *
 * @typedef fileTData
 * @prop {fileTTData} data
 *
*/
/** ### fileTExpand
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 *
 *
 * @typedef fileTExpand
 * @prop {fileTTExpand} expand
 *
*/
/** ### fileTFragment
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 *
 *
 * @typedef fileTFragment
 * @prop {fileTTFragment} fragment
 *
*/

/** ### fileTTData
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 *
 *
 * @typedef {string|[]|[][]|{}} fileTTData
 *
*/
/** ### fileTTExpand
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 *
 *
 * @typedef {'csv'|'txt'|'json'} fileTTExpand
 *
*/
/** ### fileTTFragment
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 *
 *
 * @typedef {import("../path/path.mjs").pathTTFragment} fileTTFragment
 *
*/

//#endregion
//#region YV

/**
 * ### fileVREName
 * - Тип `VE`
 * - Версия `0.0.2`
 * - Модуль `file`
 *
 * Регулярное выражение для извлечения имени файла.
 *
 * ***
 * @type {RegExp}
*/
export const fileVREName = /.*?([.\w]+?)(?:\.|$)/;
/**
 * ### fileVREPart
 * - Тип `VE`
 * - Версия `0.0.2`
 * - Модуль `file`
 *
 * Регулярное выражение для извлечения вложенного пути.
 *
 * ***
 * @type {RegExp}
*/
export const fileVREPart = /.+?(\/|$)/g;
/**
 * ### fileVREExpand
 * - Тип `VE`
 * - Версия `0.1.0`
 * - Модуль `file`
 *
 * Регулярное выражение для извлечения расширения файла.
 *
 * ***
 * @type {RegExp}
*/
export const fileVREExpand = /(?:\.)(.+)$/;
/**
 * ### fileVRELocation
 * - Тип `VE`
 * - Версия `0.0.2`
 * - Модуль `file`
 *
 * Регулярное выражение для извлечения места размещения файла.
 *
 * ***
 * @type {RegExp}
*/
export const fileVRELocation = /(.+)(?:\/)/;

//#endregion

//#region read 0.1.0

/** ### fileTFRead
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `file`
 * ***
 *
 * Результирующие параметры функции `read`.
 *
 * @typedef {fileTFURead&fileT&fileTFragment&fileTExpand} fileTFRead
 *
*/
/** ### fileTFURead
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 * Уникальные параметры функции `read`.
 *
 * @typedef fileTFURead
 * @prop {any} _
*/

/** @arg {fileTFRead} t */
function readDeceit(t) {

    try {

        return readVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {fileTFRead} t */
function readVerify(t) {

    const {



    } = t;

    return readHandle(t);

};
/** @arg {fileTFRead} t */
function readHandle(t) {

    const {



    } = t;

    return readComply(t);

};
/** @arg {fileTFRead} t */
function readComply(t) {

    const {

        expand,
        fragment,

    } = t;

    const r = readFileSync(pathGet(fragment), 'utf8');

    switch (expand) {

        case 'json': {

            return JSON.parse(r);

        };
        default: {

            return r;

        };

    };

};

/**
 * ### fileRead
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `file`
 * ***
 *
 * Функция считывания файла по указанному фрагменту пути.
 *
 * Для файла также указывается одно из допустимых расширений.
 *
 * Если расширение указано, как допустимое, то это означает, что можно получить файл в особом формате.
 * Например, для `json` расширения это будет объект, а для `csv` - многомерный массив.
 *
 * В проивном случае, если расширение не указано или не допустимо, то файл будет считан как текст, подобно расширению `csv`.
 *
 * ***
 * @arg {fileTTExpand} expand `Расширение`
 * @arg {fileTTFragment} fragment `Фрагмент`
*/
export function fileRead(fragment, expand) {

    return readDeceit({ fragment, expand, });

};
/**
 * ### fileReadJson
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `file`
 * ***
 *
 * Функция {@link fileRead|считывания} `JSON` файла по указанному фрагменту пути.
 *
 * ***
 * @arg {fileTTFragment} fragment `Фрагмент`
*/
export function fileReadJson(fragment) {

    return readDeceit({ fragment, expand: 'json', });

};

//#endregion
//#region move 0.1.0

/** ### fileTFMove
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `file`
 * ***
 *
 * Результирующие параметры функции `move`.
 *
 * @typedef {fileTFUMove&fileT&fileTFragment} fileTFMove
 *
*/
/** ### fileTFUMove
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 * Уникальные параметры функции `move`.
 *
 * @typedef fileTFUMove
 * @prop {fileTTFragment} location
*/

/** @arg {fileTFMove} t */
function moveDeceit(t) {

    try {

        return moveVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {fileTFMove} t */
function moveVerify(t) {

    const {



    } = t;

    return moveHandle(t);

};
/** @arg {fileTFMove} t */
function moveHandle(t) {

    const {

        fragment,
        location,

    } = t;

    t.fragment = pathGet(t.fragment) ?? t.fragment;
    t.location = pathGet(t.location) ?? t.fragment;

    return moveComply(t);

};
/** @arg {fileTFMove} t */
function moveComply(t) {

    const {

        fragment,
        location,

    } = t;

    const l = new YPath(location);

    if (l.check()) {

        const ln = fragment.replace(fragment.match(fileVRELocation)[0], l.get() + '/');

        renameSync(fragment, ln);

        return ln;

    };

    return l.get();

};

/**
 * ### fileMove
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `file`
 * ***
 *
 * Функция перемещения файла.
 *
 * ***
 * @arg {fileTTFragment} fragment `Фрагмент`
 * @arg {fileTTFragment} location `Размещение`
*/
export function fileMove(fragment, location) {

    return moveDeceit({ fragment, location });

};

//#endregion
//#region write 0.1.0

/** ### fileTFWrite
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `file`
 * ***
 *
 * Результирующие параметры функции `write`.
 *
 * @typedef {fileTFUWrite&fileT&fileTExpand&fileTFragment} fileTFWrite
 *
*/
/** ### fileTFUWrite
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 * Уникальные параметры функции `write`.
 *
 * @typedef fileTFUWrite
 * @prop {{}|[]|[][]|string} data
*/

/** @arg {fileTFWrite} t */
function writeDeceit(t) {

    try {

        return writeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {fileTFWrite} t */
function writeVerify(t) {

    const {



    } = t;

    return writeHandle(t);

};
/** @arg {fileTFWrite} t */
function writeHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment) ?? t.fragment;

    return writeComply(t);

};
/** @arg {fileTFWrite} t */
function writeComply(t) {

    const {

        data,
        expand,
        fragment,

    } = t;

    switch (expand) {

        case 'json': {

            writeFileSync(fragment, JSON.stringify(data, null, 4));

        }; break;
        default: {

            writeFileSync(fragment, data, 'utf8');

        }; break;

    };

    return fragment;

};

/**
 * ### fileWrite
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `file`
 * ***
 *
 * Функция записи в файл в формат поддерживаемого расширения.
 *
 * При обычном вызове без указания данных, очистит файл.
 *
 * Если расширение не было указано или не поддерживается, то данные будут записаны как текст.
 *
 * ***
 * @arg {string} data `Данные`
 * @arg {fileTTExpand} expand `Расширение`
 * @arg {fileTTFragment} fragment `Фрагмент`
*/
export function fileWrite(fragment, data, expand) {

    return writeDeceit({ fragment, data, expand });

};
/**
 * ### fileWriteCSV
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `file`
 * ***
 *
 * Функция записи в файл данных в формате csv.
 *
 * ***
 * @arg {[]|[][]|string} data `данные`
 * @arg {fileTTFragment} fragment `Фрагмент`
*/
export function fileWriteCsv(fragment, data) {

    return writeDeceit({ data, fragment, expand: 'csv', });

};
/**
 * ### fileWriteJSON
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `file`
 * ***
 *
 * Функция записи в файл данных формата `JSON`.
 *
 * В качестве данных требуется указание объекта.
 *
 * ***
 * @arg {{}|Object} data `Данные`
 * @arg {fileTTFragment} fragment `Фрагмент`
*/
export function fileWriteJson(fragment, data) {

    return writeDeceit({ fragment, data, expand: 'json' });

};

//#endregion
//#region append 0.1.0

/** ### fileTFAppend
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `file`
 * ***
 *
 * Результирующие параметры функции `append`.
 *
 * @typedef {fileTFUAppend&fileT&fileTFragment&fileTExpand&fileTData} fileTFAppend
 *
*/
/** ### fileTFUAppend
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 * Уникальные параметры функции `append`.
 *
 * @typedef fileTFUAppend
 * @prop {any} _
*/

/** @arg {fileTFAppend} t */
function appendDeceit(t) {

    try {

        return appendVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {fileTFAppend} t */
function appendVerify(t) {

    const {



    } = t;

    return appendHandle(t);

};
/** @arg {fileTFAppend} t */
function appendHandle(t) {

    const {



    } = t;

    return appendComply(t);

};
/** @arg {fileTFAppend} t */
function appendComply(t) {

    const {

        data,
        expand,
        fragment,

    } = t;

    switch (expand) {

        default: {

            fileWrite(fragment, fileRead(fragment) + data);

        }; break;

    };

    return fragment;

};

/**
 * ### fileAppend
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `file`
 * ***
 *
 * Функция дополнения данных файла по указанному фргаменту пути.
 *
 * ***
 * @arg {fileTTExpand} expand `Расширение`
 * @arg {string|[]|[][]|{}} data `Данные`
 * @arg {fileTTFragment} fragment `Фрагмент`
*/
export function fileAppend(fragment, data, expand) {

    return appendDeceit({ fragment, data, expand, });

};
/**
 * ### fileAppendCsv
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `file`
 * ***
 *
 *
 *
 * ***
 *
*/
export function fileAppendCsv() {



};
/**
 * ### fileAppendJson
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `file`
 * ***
 *
 *
 *
 * ***
 *
*/
export function fileAppendJson() {



};

//#endregion
//#region delete 0.1.0

/** ### fileTFDelete
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `file`
 * ***
 *
 * Результирующие параметры функции `delete`.
 *
 * @typedef {fileTFUDelete&fileTFragment} fileTFDelete
 *
*/
/** ### fileTFUDelete
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 * Уникальные параметры функции `delete`.
 *
 * @typedef fileTFUDelete
 * @prop {any} _
*/

/** @arg {fileTFDelete} t */
function deleteDeceit(t) {

    try {

        return deleteVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {fileTFDelete} t */
function deleteVerify(t) {

    const {



    } = t;

    return deleteHandle(t);

};
/** @arg {fileTFDelete} t */
function deleteHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment);

    return deleteComply(t);

};
/** @arg {fileTFDelete} t */
function deleteComply(t) {

    const {

        fragment,

    } = t;

    if (existsSync(fragment)) {

        unlinkSync(fragment);

    };

    return fragment;

};

/**
 * ### fileDelete
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `file`
 * ***
 *
 * Функция удаления указанного файла по фрагменту пути.
 *
 * ***
 * @arg {fileTTFragment} fragment `Фрагмент`
*/
export function fileDelete(fragment) {

    return deleteDeceit({ fragment });

};

//#endregion
//#region rename 0.1.0

/** ### fileTFRename
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `file`
 * ***
 *
 * Результирующие параметры функции `rename`.
 *
 * @typedef {fileTFURename&fileTFragment} fileTFRename
 *
*/
/** ### fileTFURename
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `file`
 *
 * Уникальные параметры функции `rename`.
 *
 * @typedef fileTFURename
 * @prop {string} name
*/

/** @arg {fileTFRename} t */
function renameDeceit(t) {

    try {

        return renameVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {fileTFRename} t */
function renameVerify(t) {

    const {



    } = t;

    return renameHandle(t);

};
/** @arg {fileTFRename} t */
function renameHandle(t) {

    const {



    } = t;

    t.fragment = pathGet(t.fragment) ?? t.fragment;

    return renameComply(t);

};
/** @arg {fileTFRename} t */
function renameComply(t) {

    const {

        name,
        fragment

    } = t;

    const expand = fragment.match(fileVREExpand)[1];
    const location = fragment.match(fileVRELocation)[0];

    const result = location + name + '.' + expand;

    renameSync(t.fragment, result);

    return result;

};

/**
 * ### fileRename
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `file`
 * ***
 *
 * Функция переименования файла.
 *
 * ***
 * @arg {string} name `Наименование`
 * @arg {fileTTFragment} fragment `Фргамент`
*/
export function fileRename(fragment, name) {

    return renameDeceit({ fragment, name });

};

//#endregion

/**
 * @file file.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/