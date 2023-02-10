import { YString } from "./YString/YString.mjs";
import { YRegExp } from "../regexp/YRegExp/YRegExp.mjs";
import { funcBypass } from "../func/func.mjs";
import { config, configString, configYInsert } from "../config.mjs";
import { numberGetRandomReal, numberGetSequence } from "../number/number.mjs";
import { arrayGetRandomElement, arrayGetRandomElementMany, arrayReplace, } from "../array/array.mjs";

//#region YT

/** ### stringT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Пространство `string`
 *
 * Основной параметр модуля `string`.
 *
 * @typedef stringT
 * @prop {stringTVString} string
 *
*/
/** ### stringTLimit
 * - Тип `T`
 * - Версия `0.0.0`
 * - Пространство `string`
 *
 *
 *
 * @typedef {import("../array/array.mjs").arrayTLimit} stringTLimit
 *
*/
/** ### stringTIndex
 * - Тип `T`
 * - Версия `0.0.0`
 * - Пространство `string`
 *
 *
 *
 * @typedef {import("../array/array.mjs").arrayTIndex} stringTIndex
 *
*/
/** ### stringTPosition
 * - Тип `T`
 * - Версия `0.0.0`
 * - Пространство `string`
 *
 *
 *
 * @typedef {import("../array/array.mjs").arrayTPosition} stringTPosition
 *
*/
/** ### stringTIndexD
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {import("../array/array.mjs").arrayTIndexD} stringTIndexD
 *
*/
/** ### stringTSize
 * - Тип `TV`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {import("../array/array.mjs").arrayTSize} stringTSize
 *
*/
/** ### stringTBack
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Параметр обратного режима.
 *
 * @typedef stringTBack
 * @prop {boolean} back
 *
*/
/** ### stringTLength
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef stringTLength
 * @prop {number} length
 *
*/

/** ### stringTVString
 * - Тип `TV`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {string} stringTVString
 *
*/

//#endregion
//#region YV



//#endregion

//#region get 0.0.0

/** ### stringTFGet
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `get`.
 *
 * @typedef {stringTFUGet&stringTIndexD&stringTString} stringTFGet
 *
*/
/** ### stringTFUGet
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `get`.
 *
 * @typedef stringTFUGet
 * @prop {any} _
*/

/** @arg {stringTFGet} t */
function getDeceit(t) {

    try {

        return getVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {stringTFGet} t */
function getVerify(t) {

    const {



    } = t;

    return getHandle(t);

};
/** @arg {stringTFGet} t */
function getHandle(t) {

    const {



    } = t;

    return getComply(t);

};
/** @arg {stringTFGet} t */
function getComply(t) {

    const {

        y,
        x,
        string,

    } = t;

    const result = string.split('\n')?.[y]?.[x];

    return result ? result : null;

};

/**
 * ### stringGet
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Метод получения символа в указанной линии и указанной позиции.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {number} y `Индекс линии`
 * @arg {number} x `Индекс позиции`
*/
export function stringGet(string, y, x) {

    return getDeceit({ string, y, x });

};

//#endregion

//#region pad 0.1.0

/** ### stringTFpad
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Пространство `string`
 *
 * Результирующие параметры функции `pad`.
 *
 * @typedef {stringTFUpad&stringTString&stringTIndex&stringTLimit} stringTFpad
 *
*/
/** ### stringTFUpad
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Пространство `string`
 *
 * Уникальные параметры функции `pad`.
 *
 * @typedef stringTFUpad
 * @prop {string} pad
*/

/** @arg {stringTFpad} t */
function padDeceit(t) {

    try {

        return padVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {stringTFpad} t */
function padVerify(t) {



    return padHandle(t);

};
/** @arg {stringTFpad} t */
function padHandle(t) {

    return padComply(t);

};
/** @arg {stringTFpad} t */
function padComply(t) {

    const {

        pad,
        limit,
        index,
        string,

    } = t;

    const c = Math.floor((t.limit - t.string.length) / t.pad.length);
    const l = t.limit - (c * t.pad.length + t.string.length);

    if (t.string.length >= t.limit) return t.string;
    else return stringAppend(t.string, t.index, t.pad.repeat(c) + t.pad.slice(0, l > 0 ? l : 0));

};

/**
 * ### stringPad
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Пространство `string`
 *
 * Функция доведения указанной `строки` до указанного `лимита` символов `строкой доведения`.
 *
 * В отличии от обычной функции `pad` позволяет доводить строку до указанного лимита с указанной позиции.
 * ***
 * @arg {string} pad `Строка доведения`
 * @arg {number} limit `Лимит`
 * @arg {number} index `Позиция`
 * @arg {string} string `Строка`
*/
export function stringPad(string, pad, limit, index = string.length) {

    return padDeceit({ string, limit, index, pad, });

};

//#endregion
//#region trim 0.1.0

/** ### stringTFtrim
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Пространство `string`
 *
 * Результирующие параметры функции `trim`.
 *
 * @typedef {stringTFUtrim&stringTString} stringTFtrim
 *
*/
/** ### stringTFUtrim
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Пространство `string`
 *
 * Уникальные параметры функции `trim`.
 *
 * @typedef stringTFUtrim
 * @prop {boolean} end
 * @prop {boolean} start
*/

/** @arg {stringTFtrim} t */
function trimDeceit(t) {

    try {

        return trimVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {stringTFtrim} t */
function trimVerify(t) {



    return trimHandle(t);

};
/** @arg {stringTFtrim} t */
function trimHandle(t) {



    return trimComply(t);

};
/** @arg {stringTFtrim} t */
function trimComply(t) {

    const {

        end,
        start,
        string,

    } = t;

    return (!end && !start) ? string : string.split('\n').map(s => {

        if (end) s = s.trimEnd();
        if (start) s = s.trimStart();

        return s;

    }).join('\n');

};

/**
 * ### stringTrim
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Пространство `string`
 *
 * Функция обрезки каждой линии строки и самой строки от свободных линий.
 * ***
 * @arg {string} string `Строка`
 * @arg {boolean} end `Обрезка конца строки`
 * - По умолчанию `true`
 * @arg {boolean} start `Обрезка начала строки`
 * - По умолчанию `false`
*/
export function stringTrim(string, end = true, start = false) {

    return trimDeceit({ string, start, end, });

};

//#endregion

//#region unify 0.0.0

/** ### stringTFUnify
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `unify`.
 *
 * @typedef {stringTFUUnify&stringT} stringTFUnify
 *
*/
/** ### stringTFUUnify
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `unify`.
 *
 * @typedef stringTFUUnify
 * @prop {string} symbols
*/

/** @arg {stringTFUnify} t */
function unifyDeceit(t) {

    try {

        return unifyVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {stringTFUnify} t */
function unifyVerify(t) {

    const {



    } = t;

    return unifyHandle(t);

};
/** @arg {stringTFUnify} t */
function unifyHandle(t) {

    const {



    } = t;

    return unifyComply(t);

};
/** @arg {stringTFUnify} t */
function unifyComply(t) {

    let {

        string,

    } = t;

    const {

        symbols,

    } = t;

    for (let i = 0; i < string.length; i++) {

        if (string[i + 1] && string[i] === string[i + 1] && (!symbols || (symbols && symbols.includes(string[i])))) {

            string = stringRemove(string, i, 1);

            i--;

        };

    };

    return string;

};

/**
 * ### stringUnify
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция унифицирования содержимого строки.
 *
 * Унификация исключает дублирование символов идущих подряд, удаляя дубли.
 *
 * ***
 * @arg {string} string `Строка`
*/
export function stringUnify(string) {

    return unifyDeceit({ string, });

};
/**
 * ### stringUnifyBySymbol
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция {@link stringUnify|унифицирования} по указанным символам.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {string} symbols `Символы`
*/
export function stringUnifyBySymbol(string, symbols) {

    return unifyDeceit({ string, symbols, });

};

//#endregion

//#region insert 0.1.0

/** ### stringTFinsert
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Пространство `string`
 *
 * Результирующие параметры функции `insert`.
 *
 * @typedef {stringTFUinsert&stringTString} stringTFinsert
 *
*/
/** ### stringTFUinsert
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Пространство `string`
 *
 * Уникальные параметры функции `insert`.
 *
 * @typedef stringTFUinsert
 * @prop {string} defaultValue
 * @prop {string[]} inserts
*/

/** @arg {stringTFinsert} t */
function insertDeceit(t) {

    try {

        return insertVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {stringTFinsert} t */
function insertVerify(t) {



    return insertHandle(t);

};
/** @arg {stringTFinsert} t */
function insertHandle(t) {

    if (!t.defaultValue) t.defaultValue = configString.insert.defaultValue;

    t.inserts.forEach((e, ei, a) => {

        if (e.constructor === String) a[ei] = e.split(configString.insert.delimiter);

    });

    return insertComply(t);

};
/** @arg {stringTFinsert} t */
function insertComply(t) {

    const {

        string,
        inserts,
        defaultValue,

    } = t;

    let result = string;

    inserts.forEach(i => result = stringReplaceAll(result, i[1] ?? i[2] ?? defaultValue, configYInsert.borderL + i[0] + configYInsert.borderR));

    return stringReplaceAll(result, defaultValue, configYInsert.borderL + '.' + configYInsert.borderR);

};

/**
 * ### stringInsert
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Пространство `string`
 *
 * Функция вставки в поля указанных значений.
 * `Поле` - место в строке, обозначенное по правилам вставки.
 * На место поля вставляется соответсвующее ему значение.
 *
 * Поля обозначаются в соответствии с правилами вставки.
 * Заполнить поле можно, передав функции вставку с указанием соответствующего символа, например, для строки `1234<i>5` поля `<i>` это будет вставка `i-WW`.
 * Таким образом результат: `1234WW5`.
 * ***
 * @arg {string} string `Строка`
 * @arg {...string} inserts `Вставки`
*/
export function stringInsert(string, ...inserts) {

    return insertDeceit({ string, inserts });

};
/**
 * ### stringInsertByArray
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Пространство `string`
 *
 * Модификация {@link stringInsert}.
 * Вставляет значения через массивы.
 * Может принимать значение по умолчанию.
 * ***
 * @arg {string} string `Строка`
 * @arg {string} defaultValue `Значение по умолчанию`
 * @arg {...(string|[string,string,string])} inserts `Вставки`
*/
export function stringInsertByArray(string, defaultValue, ...inserts) {

    return insertDeceit({ string, defaultValue, inserts, });

};

//#endregion

//#region shield 0.0.2

/**
 * @typedef TBshield
 * @prop {string} string
 * @typedef {TBshield} Tshield
*/

/** @arg {Tshield} t */
function shieldDeceit(t) {

    try {

        return shieldVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tshield} t */
function shieldVerify(t) {

    const {



    } = t;

    return shieldHandle(t);

};
/** @arg {Tshield} t */
function shieldHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return shieldComply(t);

};
/** @arg {Tshield} t */
function shieldComply(t) {

    const {

        string,

    } = t;

    return stringReplaceAllMore(string,

        ['\\\\', /\\/g,],
        ['\\/', /\//g,],
        ['\\*', /\*/g,],
        ['\\.', /\./g,],
        ['\\+', /\+/g,],
        ['\\?', /\?/g,],
        ['\\]', /\]/g,],
        ['\\[', /\[/g,],
        ['\\)', /\)/g,],
        ['\\(', /\(/g,],
        ['\\}', /\}/g,],
        ['\\{', /\{/g,],
        ['\\>', /\>/g,],
        ['\\<', /\</g,],

    );

};

/**
 * Функция для экранирования специальных символов строки.
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
*/
export function stringShield(string) {

    return shieldDeceit({ string, });

};

//#endregion
//#region append 0.0.0

/**
 * @typedef TBappend
 * @prop {number} index
 * @prop {string} string
 * @prop {[string|number]} appends
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

        index,
        string,
        appends,

    } = t;

    return string.slice(0, index) + appends.join('') + string.slice(index);

};

/**
 * Функция для добавления текста с указанного индекса к указанной строке.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} index Индекс добавления текста.
 * @arg {string} string исходная строка.
 * @arg {...string|number} appends Строки добавления.
*/
export function stringAppend(string, index, ...appends) {

    return appendDeceit({ string, index, appends, });

};
/**
 * Функция для добавления текста к началу указанной строки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string исходная строка.
 * @arg {...string|number} appends Строки добавления.
*/
export function stringAppendLeft(string, ...appends) {

    return appendDeceit({ string, index: 0, appends, });

};
/**
 * Функция для добавления текста к концу указанной строки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string исходная строка.
 * @arg {...string|number} appends Строки добавления.
*/
export function stringAppendRight(string, ...appends) {

    return appendDeceit({ string, index: string.length, appends, });

};

//#endregion
//#region remove 0.0.2

/**
 * @typedef TBremove
 * @prop {number} end
 * @prop {number} start
 * @prop {number} start
 * @prop {number} length
 * @prop {string} string
 * @typedef {TBremove} Tremove
*/

/** @arg {Tremove} t */
function removeDeceit(t) {

    try {

        return removeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tremove} t */
function removeVerify(t) {

    const {



    } = t;

    return removeHandle(t);

};
/** @arg {Tremove} t */
function removeHandle(t) {


    if (t.start < 0) t.start = 0;
    if (t.start >= t.string.length) t.start = t.string.length;

    if (t.end < 0 && t.end + t.start < 0) [t.start, t.end] = [null, t.start + 1];
    else if (t.end > 0 && t.end + t.start >= t.string.length) [t.start, t.end] = [t.start, null];
    else if (t.end > 0) [t.start, t.end] = [t.start, t.start + t.end];
    else[t.start, t.end] = [t.start + t.end + 1, t.start + 1];

    return removeComply(t);

};
/** @arg {Tremove} t */
function removeComply(t) {

    const {

        end,
        start,
        string,

    } = t;

    if (!start && start !== 0) return string.slice(end);
    else if (!end && end !== 0) return string.slice(0, start);
    else return string.slice(0, start) + string.slice(end);

};

/**
 * Функция для удаления фрагмента строки начиная с указанного индекса.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} index Индекс.
 * @arg {number} length Длина удаления.
 * @arg {string} string Исходная строка.
 * @return {string}
*/
export function stringRemove(string, index, length) {

    return removeDeceit({ string, start: index, end: length });

};
/**
 * Функция для удаления фрагмента строки начиная с указанного индекса.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} length Длина удаления.
 * @arg {string} string Исходная строка.
 * @return {string}
*/
export function stringRemoveLeft(string, length) {

    return removeDeceit({ string, start: 0, end: length });

};
/**
 * Функция для удаления фрагмента строки начиная с указанного индекса.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} length Длина удаления.
 * @arg {string} string Исходная строка.
 * @return {string}
*/
export function stringRemoveRight(string, length) {

    return removeDeceit({ string, start: string.length - length, end: length });

};

//#endregion
//#region filter 0.0.1

/**
 * @typedef TBfilter
 * @prop {string} string
 * @prop {[string|RegExp]} filters
 * @typedef {TBfilter} Tfilter
*/

/** @arg {Tfilter} t */
function filterDeceit(t) {

    try {

        return filterVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tfilter} t */
function filterVerify(t) {

    const {



    } = t;

    return filterHandle(t);

};
/** @arg {Tfilter} t */
function filterHandle(t) {

    return filterComply(t);

};
/** @arg {Tfilter} t */
function filterComply(t) {

    const {

        string,
        filters,

    } = t;

    return stringReplaceAllMore(string, ...filters.map(f => ['', f]));

};

/**
 * Функция для удаления из строки указанных фрагментов.
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * @arg {string} string
 * @arg {...string|RegExp} filters
*/
export function stringFilter(string, ...filters) {

    return filterDeceit({ string, filters });

};

//#endregion
//#region handle 0.0.3

/**
 * @typedef TBhandle
 * @prop {string} string
 * @prop {function} handle
 * @prop {[string|RegExp]} fragments
 * @typedef {TBhandle} Thandle
*/

/** @arg {Thandle} t */
function handleDeceit(t) {

    try {

        return handleVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Thandle} t */
function handleVerify(t) {

    const {



    } = t;

    return handleHandle(t);

};
/** @arg {Thandle} t */
function handleHandle(t) {

    let {



    } = t;

    t.fragments.forEach((f, i, a) => {

        if (f.constructor === String) a[i] = f = new RegExp(t.fragments);
        if (f.source.match(/\d|\\d/)) a[i] = new RegExp(f.source.replace(/\\d/, '(?<!\\x1b\\[\\d*?)$&'), f.flags);

    });

    t = {

        ...t,

    };

    return handleComply(t);

};
/** @arg {Thandle} t */
function handleComply(t) {

    const {

        string,
        handle,
        fragments,

    } = t;

    let result = string;

    fragments.forEach(f => {

        let fs = [];

        if (f.flags.includes('g')) fs = Array.from(result.matchAll(f)).reverse();
        else fs = [result.match(f)];

        fs.forEach(m => (m) ? result = stringPaste(result, handle(m[0]), m.index, m[0].length) : 0);

    });

    return result;

};

/**
 * Функция для обработки совпадений.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string
 * @arg {function} handle
 * @arg {...string|RegExp} fragments
*/
export function stringHandle(string, handle, ...fragments) {

    return handleDeceit({ string, handle, fragments });

};

//#endregion
//#region reverse 0.0.0

/**
 * @typedef TBreverse
 * @prop {string} string
 * @typedef {TBreverse} Treverse
*/

/** @arg {Treverse} t */
function reverseDeceit(t) {

    try {

        return reverseVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Treverse} t */
function reverseVerify(t) {

    const {



    } = t;

    return reverseHandle(t);

};
/** @arg {Treverse} t */
function reverseHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return reverseComply(t);

};
/** @arg {Treverse} t */
function reverseComply(t) {

    const {

        string,

    } = t;

    return Array.from(string).reverse().join('');

};

/**
 * Функция для реверса строки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string
*/
export function stringReverse(string) {

    return reverseDeceit({ string });

};

//#endregion
//#region reflect 0.0.0

/**
 * @typedef TBreflect
 * @prop {string} string
 * @prop {boolean} every
 * @prop {Array<[string,string]>} mirrors
 * @typedef {TBreflect} Treflect
*/

/** @arg {Treflect} t */
function reflectDeceit(t) {

    try {

        return reflectVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Treflect} t */
function reflectVerify(t) {

    const {



    } = t;

    return reflectHandle(t);

};
/** @arg {Treflect} t */
function reflectHandle(t) {

    let {



    } = t;

    if (t.mirrors.length) t.mirrors.forEach(m => m[0] = new RegExp(m[0], 'g'));

    t = {

        ...t,

    };

    return reflectComply(t);

};
/** @arg {Treflect} t */
function reflectComply(t) {

    const {

        every,
        string,
        mirrors,

    } = t;

    return every ? string.split('\n').map(s => s + stringReverse(stringReplace(s, ...mirrors))).join('\n') : string + stringReverse(stringReplace(string, ...mirrors));

};

/**
 * Функция для добавления к строке её зеркального отражения.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {boolean} every Логическое значение, которое определяет, как следует проводить отражение.
 * Значение `true` означает, что необходимо зеркально отразить каждую строку с переносом по отдельности.
 * Значение `false` же прибавит инвертированную копию текущей строки на конец исходной.
 * - По умолчанию `false`
 * @arg {...[string,string]} mirrors Зеркальные символы. Представлен парой ключ-значение.
 * По ключу осуществляется поиск символа исходной строки.
 * Найденное совпадение в отражении заменяется значением, если соответсвующий ключ существует.
 * - По умолчанию `[]`
*/
export function stringReflect(string, every = false, ...mirrors) {

    return reflectDeceit({ string, every, mirrors });

};

//#endregion

//#region substring 0.0.0

/** ### stringTFSubstring
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `substring`.
 *
 * @typedef {stringTFUSubstring&stringT&stringTBack&stringTLength&stringTIndex&stringTIndexD} stringTFSubstring
 *
*/
/** ### stringTFUSubstring
 * - Тип `TFU`
 * - Версия `0.0.1`
 * - Модуль `string`
 *
 * Уникальные параметры функции `substring`.
 *
 * @typedef stringTFUSubstring
 * @prop {any} _
*/

/** @arg {stringTFSubstring} t */
function substringDeceit(t) {

    try {

        return substringVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {stringTFSubstring} t */
function substringVerify(t) {

    const {



    } = t;

    return substringHandle(t);

};
/** @arg {stringTFSubstring} t */
function substringHandle(t) {

    const {



    } = t;

    if (!t.index || t.index < 0) {

        t.index = 0;

    } else if (t.index > t.string?.length) {

        t.index = t.string.length - 1;

    };

    if (!t.length && t.length !== 0) {

        t.length = t.string.length - t.index;

    } else if (t.length < 0) {

        t.back = true;
        t.length *= -1;

    };

    if ((t.y || t.y === 0) && (t.x || t.x === 0)) {

        t.index = stringGetPositionRowStartByIndex(t.string, t.y) + t.x;

    };

    return substringComply(t);

};
/** @arg {stringTFSubstring} t */
function substringComply(t) {

    const {

        back,
        index,
        string,
        length,

    } = t;

    console.log(t);

    if ((index === 0 && !length) || ((t.index === 0 || (t.index === t.string.length - 1 && back)) && t.string.length === length)) {

        return string;

    } else if (length === 0) {

        return '';

    };

    if (back) {

        return string.slice(0, index + 1).slice(-length);

    } else {

        return string.slice(index, index + length);

    };

};

/**
 * ### stringSubstring
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция извлечения подстроки из указанной строки начиная с указанного индекса и до указанной длины.
 *
 * ***
 * @arg {boolean} back `Обратный режим`
 *
 * При активации берет символы начиная с указанного индекса, до указанной длины по направлению к началу строке.
 *
 * Если не определен, то работает в стандартном режиме.
 *
 * @arg {string} string `Строка`
 * @arg {number?} length `Длина`
 *
 * Длина определяет кол-во символов начиная с указанного индекса, которое необходимо взять в подстроку.
 *
 * Если не определена, то будут взяты все символы начиная с указанного индекса и до конца строки.
 * @arg {number} index `Индекс`
*/
export function stringSubstring(string, index, length, back) {

    return substringDeceit({ string, index, length, back });

};
/**
 * ### stringSubstringByPosition
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция {@link stringSubstring|извлечения подстроки} из указанной строки начиная с указанной позиции и до указанной длины.
 *
 * ***
 * @arg {number} y `Линия`
 * @arg {number} x `Позиция`
 * @arg {number} length `Длина`
 * @arg {string} string `Строка`
 * @arg {boolean} back `Обратный режим`
*/
export function stringSubstringByPosition(string, length, y, x, back) {

    return substringDeceit({ string, length, y, x, back, });

};

//#endregion

//#region generateWord 0.1.0

/**
 * @typedef TBgenerateWord
 * @prop {string} end
 * @prop {string} begin
 * @prop {number} syllable
 * @prop {string} delimetr
 * @prop {boolean} cutLast
 * @prop {boolean} camelCase
 * @typedef {TBgenerateWord} TgenerateWord
*/

/** @arg {TgenerateWord} t */
function generateWordDeceit(t) {

    try {

        return generateWordVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgenerateWord} t */
function generateWordVerify(t) {

    const {



    } = t;

    return generateWordHandle(t);

};
/** @arg {TgenerateWord} t */
function generateWordHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return generateWordComply(t);

};
/** @arg {TgenerateWord} t */
function generateWordComply(t) {

    const {

        end,
        begin,
        cutLast,
        syllable,
        delimetr,
        camelCase,

    } = t;

    const result = [];

    const s1 = [97, 101, 105, 111, 117, 121];
    const s2 = numberGetSequence(26, 97).filter(e => !s1.includes(e));

    for (let c = 0; c < syllable; c++) {

        if (numberGetRandomReal(0, 1)) {

            result.push(String.fromCharCode(

                arrayGetRandomElement(s2),
                arrayGetRandomElement(s1)

            ));

        } else {

            result.push(String.fromCharCode(

                ...arrayGetRandomElementMany(s2, 2),
                arrayGetRandomElement(s1)

            ));

        };

    };

    if (camelCase) {

        result.forEach((e, i, a) => a[i] = e[0].toUpperCase() + e.slice(1));

    } else result[0] = result[0][0].toUpperCase() + result[0].slice(1);

    if (cutLast) result[result.length - 1] = result.at(-1).slice(0, -1);

    if (end) result[result.length - 1] = result.at(-1) + end;
    if (begin) result[0] = begin + result[0].slice(1);

    return result.filter(f => f).join(delimetr);

};

/**
 * Функция для генерации произвольного слова.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} end Окончание слова. Данная часть будет вставлена в конец слова.
 * @arg {string} begin Начало слова. Данная часть будет вставлена в начало слова.
 * @arg {number} syllable Кол-во слогов.
 * @arg {string} delimetr Разделители. Разделяют слоги.
 * @arg {boolean} cutLast Обрезка последнего символа.
 * @arg {boolean} camelCase Каждый слог с большой буквы.
 * @returns {string}
*/
export function stringGenerateWord(syllable = numberGetRandomReal(1, 3), begin = '', end = '', delimetr = '', camelCase = false, cutLast = true) {

    return generateWordDeceit({ syllable, begin, end, delimetr, camelCase, cutLast });

};

//#endregion

//#region getRowByIndex 0.0.0

/**
 * @typedef TBgetRowByIndex
 * @prop {number} index
 * @prop {string} string
 * @typedef {TBgetRowByIndex} TgetRowByIndex
*/

/** @arg {TgetRowByIndex} t */
function getRowByIndexDeceit(t) {

    try {

        return getRowByIndexVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetRowByIndex} t */
function getRowByIndexVerify(t) {



    return getRowByIndexHandle(t);

};
/** @arg {TgetRowByIndex} t */
function getRowByIndexHandle(t) {



    return getRowByIndexComply(t);

};
/** @arg {TgetRowByIndex} t */
function getRowByIndexComply(t) {

    const {

        index,
        string,

    } = t;

    return string.split('\n')?.[index] ?? null

};

/**
 * Функция для получения вложенной строки, по её индексу.
 * Если строка не будет найдена, то вернется `null`.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} index Индекс строки.
 * @arg {string} string Исходная строка.
*/
export function stringGetRowByIndex(string, index) {

    return getRowByIndexDeceit({ string, index });

};

//#endregion
//#region getRowByPosition 0.0.0

/**
 * @typedef TBgetRowByPosition
 * @prop {string} string
 * @prop {number} position
 * @typedef {TBgetRowByPosition} TgetRowByPosition
*/

/** @arg {TgetRowByPosition} t */
function getRowByPositionDeceit(t) {

    try {

        return getRowByPositionVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetRowByPosition} t */
function getRowByPositionVerify(t) {



    return getRowByPositionHandle(t);

};
/** @arg {TgetRowByPosition} t */
function getRowByPositionHandle(t) {



    return getRowByPositionComply(t);

};
/** @arg {TgetRowByPosition} t */
function getRowByPositionComply(t) {

    let {

        string,
        position,

    } = t;

    let i = 0;

    for (const s of string.split('\n')) {

        if (s.length > position) return s;
        else position -= s.length;

    };

    return null;

};

/**
 * Получение строки в исходной строке по позиции символа.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {number} position Позиция символа.
*/
export function stringGetRowByPosition(string, position) {

    return getRowByPositionDeceit({ string, position });

};

//#endregion
//#region getPositionEndPaste 0.0.0

/**
 * @typedef TBgetPositionEndPaste
 * @prop {number} y
 * @prop {number} x
 * @prop {number} size
 * @prop {string} paste
 * @prop {string} string
 * @prop {number} position
 * @prop {boolean} wrap
 * @typedef {TBgetPositionEndPaste} TgetPositionEndPaste
*/

/** @arg {TgetPositionEndPaste} t */
function getPositionEndPasteDeceit(t) {

    try {

        return getPositionEndPasteVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetPositionEndPaste} t */
function getPositionEndPasteVerify(t) {



    return getPositionEndPasteHandle(t);

};
/** @arg {TgetPositionEndPaste} t */
function getPositionEndPasteHandle(t) {

    return getPositionEndPasteComply(t);

};
/** @arg {TgetPositionEndPaste} t */
function getPositionEndPasteComply(t) {

    let {

        x,
        y,
        size,
        wrap,
        paste,
        string,

    } = t;

    let result = stringGetPositionRowStartByIndex(string, y, !wrap);
    let ps = paste.split('\n');

    for (let i = 0; i < ps.length - 1; i++) {

        let s = stringGetRowByIndex(string, y + i);
        let d = s.length - x;

        if (d > ps[i].length + x) result += s.length + 1;
        else result += x + ps[i].length - 1;

    };

    result += x + ps.at(-1).length - 1;

    return result;

};

/**
 * Функция определения итоговой позиции вставки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} paste Вставка.
 * @arg {string} string Исходная строка.
 * @arg {number} position Позиция вставки.
 * @arg {number|'auto'} size Размер вставки.
*/
export function stringGetPositionEndPaste(string, paste, position, size = 'auto') {

    return getPositionEndPasteDeceit({ string, paste, position, size, });

};
/**
 * Функция определения итоговой позиции вставки с переносом.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} y Позиция линии.
 * @arg {number} x Позиция столбца.
 * @arg {string} paste Вставка.
 * @arg {string} string Исходная строка.
 * @arg {number|'auto'} size Размер вставки.
*/
export function stringGetPositionEndPasteWrap(string, paste, y, x, size = 'auto') {

    return getPositionEndPasteDeceit({ string, paste, y, x, size, wrap: true, });

};

//#endregion
//#region getPositionEndPasteByBias 0.0.0

/**
 * @typedef TBgetPositionEndPasteByBias
 * @prop {number} end
 * @prop {number} start
 * @prop {number} count
 * @typedef {TBgetPositionEndPasteByBias} TgetPositionEndPasteByBias
*/

/** @arg {TgetPositionEndPasteByBias} t */
function getPositionEndPasteByBiasDeceit(t) {

    try {

        return getPositionEndPasteByBiasVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetPositionEndPasteByBias} t */
function getPositionEndPasteByBiasVerify(t) {



    return getPositionEndPasteByBiasHandle(t);

};
/** @arg {TgetPositionEndPasteByBias} t */
function getPositionEndPasteByBiasHandle(t) {



    return getPositionEndPasteByBiasComply(t);

};
/** @arg {TgetPositionEndPasteByBias} t */
function getPositionEndPasteByBiasComply(t) {

    const {

        end,
        start,
        count,

    } = t;

    return (end - start) / count;

};

/**
 * Функция для вычисления индекса сдвига относительно размера исходной строки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} end Конечный размер.
 * @arg {number} start Начальный размер.
 * @arg {number} count Кол-во сдвигов.
 * - По умолчанию `1`
*/
export function stringGetPositionEndPasteByBias(start, end, count = 1) {

    return getPositionEndPasteByBiasDeceit({ start, end, count, });

};

//#endregion

//#region getLengthToRowByIndex 0.0.0

/**
 * @typedef TBgetLengthToRowByIndex
 * @prop {number} index
 * @prop {string} string
 * @typedef {TBgetLengthToRowByIndex} TgetLengthToRowByIndex
*/

/** @arg {TgetLengthToRowByIndex} t */
function getLengthToRowByIndexDeceit(t) {

    try {

        return getLengthToRowByIndexVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetLengthToRowByIndex} t */
function getLengthToRowByIndexVerify(t) {



    return getLengthToRowByIndexHandle(t);

};
/** @arg {TgetLengthToRowByIndex} t */
function getLengthToRowByIndexHandle(t) {



    return getLengthToRowByIndexComply(t);

};
/** @arg {TgetLengthToRowByIndex} t */
function getLengthToRowByIndexComply(t) {

    const {

        index,
        string,

    } = t;

    return string.split('\n').slice(0, index).reduce((p, c) => p + c.length, 0);

};

/**
 * Метод получения кол-ва символов до указанной линии в исходной строке.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} index Индекс линии.
 * @arg {string} string Исходная строка.
*/
export function stringGetLengthToRowByIndex(string, index) {

    return getLengthToRowByIndexDeceit({ string, index, });

};

//#endregion
//#region getRowIndexByPosition 0.0.0

/**
 * @typedef TBgetRowIndexByPosition
 * @prop {string} string
 * @prop {number} position
 * @typedef {TBgetRowIndexByPosition} TgetRowIndexByPosition
*/

/** @arg {TgetRowIndexByPosition} t */
function getRowIndexByPositionDeceit(t) {

    try {

        return getRowIndexByPositionVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetRowIndexByPosition} t */
function getRowIndexByPositionVerify(t) {



    return getRowIndexByPositionHandle(t);

};
/** @arg {TgetRowIndexByPosition} t */
function getRowIndexByPositionHandle(t) {



    return getRowIndexByPositionComply(t);

};
/** @arg {TgetRowIndexByPosition} t */
function getRowIndexByPositionComply(t) {

    let {

        string,
        position,

    } = t;

    let i = 0;
    let result = null;

    for (const s of string.split('\n')) {

        if (s.length > position) return i;
        else {

            i++;
            position -= s.length;

        };

    };

    return result;

};

/**
 * Функция получения индекса линии по позиции.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {number} position Позиция символа.
*/
export function stringGetRowIndexByPosition(string, position) {

    return getRowIndexByPositionDeceit({ string, position, });

};

//#endregion
//#region getPositionRowStartByIndex 0.0.0

/**
 * @typedef TBgetPositionRowStartByIndex
 * @prop {number} index
 * @prop {string} string
 * @prop {boolean} wrap
 * @typedef {TBgetPositionRowStartByIndex} TgetPositionRowStartByIndex
*/

/** @arg {TgetPositionRowStartByIndex} t */
function getPositionRowStartByIndexDeceit(t) {

    try {

        return getPositionRowStartByIndexVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetPositionRowStartByIndex} t */
function getPositionRowStartByIndexVerify(t) {



    return getPositionRowStartByIndexHandle(t);

};
/** @arg {TgetPositionRowStartByIndex} t */
function getPositionRowStartByIndexHandle(t) {



    return getPositionRowStartByIndexComply(t);

};
/** @arg {TgetPositionRowStartByIndex} t */
function getPositionRowStartByIndexComply(t) {

    const {

        wrap,
        index,
        string,

    } = t;

    let result = 0;
    let i = 0;

    for (const s of string.split('\n')) {

        if (i++ === index) {

            return result;

        };

        result += s.length + (wrap ? 0 : 1);

    };

    return null;

};

/**
 * Функция получения начальной позиции, с которой начинается указанная по счету линия.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} index Индекс линии.
 * @arg {string} string Исходная строка.
 * @arg {boolean} wrap Режим с переносом.
 * - По умолчанию `true`
*/
export function stringGetPositionRowStartByIndex(string, index, wrap = true) {

    return getPositionRowStartByIndexDeceit({ string, index, wrap, });

};

//#endregion

//#region castPositionLine 0.0.0

/**
 * @typedef TBcastPositionLine
 * @prop {string} string
 * @prop {number} position
 * @typedef {TBcastPositionLine} TcastPositionLine
*/

/** @arg {TcastPositionLine} t */
function castPositionLineDeceit(t) {

    try {

        return castPositionLineVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcastPositionLine} t */
function castPositionLineVerify(t) {



    return castPositionLineHandle(t);

};
/** @arg {TcastPositionLine} t */
function castPositionLineHandle(t) {



    return castPositionLineComply(t);

};
/** @arg {TcastPositionLine} t */
function castPositionLineComply(t) {

    let {

        string,
        position,

    } = t;

    for (const s of string.split('\n')) {

        if (position > s.length) {

            position -= s.length;

        } else return position;

    };

    return null;

};

/**
 * Функция превращения строковой позиции в позицию линии.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string
 * @arg {number} position
*/
export function stringCastPositionLine(string, position) {

    return castPositionLineDeceit({ string, position });

};

//#endregion

//#region find 0.1.0

/**
 * @typedef TBfind
 * @prop {string} string
 * @prop {Array<string|RegExp>} fragments
 * @typedef {TBfind} Tfind
*/

/** @arg {Tfind} t */
function findDeceit(t) {

    try {

        return findVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tfind} t */
function findVerify(t) {

    const {



    } = t;

    return findHandle(t);

};
/** @arg {Tfind} t */
function findHandle(t) {

    t.fragments = t.fragments.map(f => new YRegExp(f).removeFlags('g').get());

    return findComply(t);

};
/** @arg {Tfind} t */
function findComply(t) {

    const {

        string,
        fragments,

    } = t;

    /** @type {string?} */
    let result = string;

    for (const f of fragments) {

        result = result.match(f);

        if (!result) {

            break;

        } else if (result?.groups?.f || result?.groups?.f === '') {

            result = result.groups.f;

        } else {

            result = result[0];

        };

    };

    return result;

};

/**
 * Функция для поиска совпадения в строке.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {...string|RegExp} fragments Последовательность фрагментов поиска.
 * Каждый следующий фрагмент поиска будет применяться к результатам поиска предыдущего фрагмента.
 * Если результат поиска будет отрицательным, то исполнение послудующих фрагментов будет пропущено.
 *
 * Фрагменты учитывают при поиске группу `f`. Если такая группа будет указана, то фрагмент вернет её значение в качестве результата.
*/
export function stringFind(string, ...fragments) {

    return findDeceit({ string, fragments });

};

//#endregion
//#region findAll 0.0.0

/**
 * @typedef TBfindAll
 * @prop {any} _
 * @typedef {TBfindAll&Tfind} TfindAll
*/

/** @arg {TfindAll} t */
function findAllDeceit(t) {

    try {

        return findAllVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TfindAll} t */
function findAllVerify(t) {

    const {



    } = t;

    return findAllHandle(t);

};
/** @arg {TfindAll} t */
function findAllHandle(t) {

    t.fragments = t.fragments.map(f => new YRegExp(f, 'g').get());

    return findAllComply(t);

};
/** @arg {TfindAll} t */
function findAllComply(t) {

    const {

        string,
        fragments,

    } = t;

    const result = string ? [string] : [];

    for (const f of fragments) {

        for (const r of result.slice()) {

            if (r) arrayReplace(result, r, ...Array.from(r?.matchAll(f)).map(m => m ? m.groups?.f ? m.groups?.f : m[0] : m).filter(m => m || m === ''));

        };

    };

    return result;

};

/**
 * Функция для поиска всех возможных совпадений.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {...string|RegExp} fragments Последовательность фрагментов поиска.
 * Каждый следующий фрагмент поиска будет применяться к результатам поиска предыдущего фрагмента.
 *
 * Фрагменты учитывают при поиске группу `f`. Если такая группа будет указана, то фрагмент вернет её значение в качестве результата.
*/
export function stringFindAll(string, ...fragments) {

    return findAllDeceit({ string, fragments, });

};

//#endregion
//#region findLevel 0.0.0

/**
 * @typedef TBfindLevel
 * @prop {string} string
 * @prop {string} levelUpper
 * @prop {string} levelLower
 * @prop {number} fIndexResult
 * @typedef {TBfindLevel} TfindLevel
*/

/** @arg {TfindLevel} t */
function findLevelDeceit(t) {

    try {

        return findLevelVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TfindLevel} t */
function findLevelVerify(t) {



    return findLevelHandle(t);

};
/** @arg {TfindLevel} t */
function findLevelHandle(t) {



    return findLevelComply(t);

};
/** @arg {TfindLevel} t */
function findLevelComply(t) {

    const {

        string,
        levelLower,
        levelUpper,
        fIndexResult,

    } = t;

    let i = string.indexOf(levelUpper) + 1;
    let l = 1;
    let r = '';
    let c = 0;

    if (i !== -1) {

        while (i < string.length && l) {

            const s = string[i++];

            if (s === levelUpper) l++;
            else if (s === levelLower) l--;

            r += s;

        };

        return levelUpper + r;

    } else return null;

};

/**
 * Функция уровневого поиска.
 * Находит `значение увеличения` уровня, увеличивая уровень на `1`.
 * После заносит в результат все символы после данного вхождения до тех пор, пока `уровень` не станет равным `0`.
 * Каждое встреченное `значение повышения` уровня будет увеличивать его, а `значение уменьшения` - понижать.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {string} levelLower Значение уменьшения уровня.
 * @arg {string} levelUpper Значение увеличения уровня.
*/
export function stringFindLevel(string, levelUpper, levelLower) {

    return findLevelDeceit({ string, levelUpper, levelLower, });

};

//#endregion
//#region findToJect 0.1.0

/**
 * @typedef TBfindToJect
 * @prop {any} _
 * @typedef {TBfindToJect&TfindAll} TfindToJect
*/

/** @arg {TfindToJect} t */
function findToJectDeceit(t) {

    try {

        return findToJectVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TfindToJect} t */
function findToJectVerify(t) {



    return findToJectHandle(t);

};
/** @arg {TfindToJect} t */
function findToJectHandle(t) {

    t.fragments = t.fragments.map(f => new YRegExp(f, 'g').get());

    return findToJectComply(t);

};
/** @arg {TfindToJect} t */
function findToJectComply(t) {

    const {

        string,
        fragments,

    } = t;

    const result = {};
    const strings = [string];

    for (const f of fragments) {

        for (const r of strings.slice()) {

            arrayReplace(strings, r, ...Array.from(r.matchAll(f)).map(m => {

                if (m) {

                    if (m.groups) {

                        Object.entries(m.groups).filter(p => p[1] !== undefined).forEach(p => {

                            if (result[p[0]]) {

                                if (result[p[0]] instanceof Array) result[p[0]].push(p[1]);
                                else result[p[0]] = [result[p[0]], p[1]];

                            } else result[p[0]] = p[1];

                        });

                        if (m.groups.f) return m.groups.f;

                    } else return m[0];

                };

                return m;

            }).filter(m => m));

        };

    };

    delete result.f;

    return result;

};

/**
 * Функция для поиска совпадений в указанной строке и преобразование соотвествий в объект.
 * Для определения свойств объекта, необходимо указать их в регулярном выражении в качестве именованных скобочных групп.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {...string|RegExp} fragments Последовательность фрагментов поиска.
 * Каждый следующий фрагмент поиска будет применяться к результатам поиска предыдущего фрагмента.
*/
export function stringFindToJect(string, ...fragments) {

    return findToJectDeceit({ string, fragments, });

};

//#endregion
//#region findVariate 0.1.0

/**
 * @typedef TBfindVariate
 * @prop {any} _
 * @typedef {TBfindVariate&TfindAll} TfindVariate
*/

/** @arg {TfindVariate} t */
function findVariateDeceit(t) {

    try {

        return findVariateVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TfindVariate} t */
function findVariateVerify(t) {



    return findVariateHandle(t);

};
/** @arg {TfindVariate} t */
function findVariateHandle(t) {

    t.fragments = t.fragments.map(f => new YRegExp(f, 'g').get());

    return findVariateComply(t);

};
/** @arg {TfindVariate} t */
function findVariateComply(t) {

    const {

        string,
        fragments,

    } = t;

    const result = [string];

    for (const f of fragments) {

        for (const r of result.slice()) {

            const a = [];

            do {

                const i = f.lastIndex;
                const m = f.exec(r);

                if (m) a.push(m?.groups?.f ?? m[0]);

                if (!f.lastIndex) break;
                else if (Math.abs(f.lastIndex - i) > 1) f.lastIndex = i + 1;


            } while (f.lastIndex);

            arrayReplace(result, r, ...a);

        };

    };

    return result;

};

/**
 * Функция для поиска всех возможных вариаций совпадения по строке.
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {...string|RegExp} fragments Последовательность фрагментов поиска.
 * Каждый следующий фрагмент поиска будет применяться к результатам поиска предыдущего фрагмента.
 *
 * Фрагменты учитывают при поиске группу `f`. Если такая группа будет указана, то фрагмент вернет её значение в качестве результата.
*/
export function stringFindVariate(string, ...fragments) {

    return findVariateDeceit({ string, fragments, });

};

//#endregion
//#region findInPosition 0.0.0

/**
 * @typedef TBfindInPosition
 * @prop {string} string
 * @prop {number} position
 * @prop {(string|RegExp)[]} fragments
 * @typedef {TBfindInPosition} TfindInPosition
*/

/** @arg {TfindInPosition} t */
function findInPositionDeceit(t) {

    try {

        return findInPositionVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TfindInPosition} t */
function findInPositionVerify(t) {



    return findInPositionHandle(t);

};
/** @arg {TfindInPosition} t */
function findInPositionHandle(t) {

    t.fragments[0] = new YRegExp(t.fragments[0]).changeFlags('y').changePosition(t.position).get();

    return findInPositionComply(t);

};
/** @arg {TfindInPosition} t */
function findInPositionComply(t) {

    const {

        string,
        fragments,

    } = t;

    const result = fragments[0].exec(string);

    return stringFind(result, ...fragments.splice(1));

};

/**
 * Функция поиска совпадения в указанной позиции.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string
 * @arg {number} position
 * @arg {...string|RegExp} fragments
*/
export function stringFindInPosition(string, position, fragments) {

    return findInPositionDeceit({ string, position, fragments, });

};

//#endregion
//#region findFromPosition 0.0.0

/**
 * @typedef TBfindFromPosition
 * @prop {number} index
 * @prop {string} string
 * @prop {(string|RegExp)[]} fragments
 * @typedef {TBfindFromPosition} TfindFromPosition
*/

/** @arg {TfindFromPosition} t */
function findFromPositionDeceit(t) {

    try {

        return findFromPositionVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TfindFromPosition} t */
function findFromPositionVerify(t) {



    return findFromPositionHandle(t);

};
/** @arg {TfindFromPosition} t */
function findFromPositionHandle(t) {

    t.fragments[0] = new YRegExp(t.fragments[0]).appendFlags('g').changePosition(t.index);

    return findFromPositionComply(t);

};
/** @arg {TfindFromPosition} t */
function findFromPositionComply(t) {

    const {

        string,
        fragments,

    } = t;

    const result = fragments[0].get().exec(string);

    return stringFind(result?.groups?.f ?? result[0], ...fragments.splice(1));

};

/**
 * Функция поиска совпадений с указанной позиции.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} index Индекс поиска.
 * @arg {string} string Исходная строка.
 * @arg {string|RegExp} fragments Фрагменты совпадения.
*/
export function stringFindFromPosition(string, index, ...fragments) {

    return findFromPositionDeceit({ string, index, fragments, });

};

//#endregion

//#region bring 0.0.0

/**
 * @typedef TBbring
 * @prop {string} bring
 * @prop {string} string
 * @prop {number} index
 * @prop {number} length
 * @typedef {TBbring} Tbring
*/

/** @arg {Tbring} t */
function bringDeceit(t) {

    try {

        return bringVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tbring} t */
function bringVerify(t) {

    const {



    } = t;

    return bringHandle(t);

};
/** @arg {Tbring} t */
function bringHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return bringComply(t);

};
/** @arg {Tbring} t */
function bringComply(t) {

    const {

        index,
        bring,
        string,
        length,

    } = t;

    if (string.length < length) return stringAppend(string, index, bring.repeat(length - string.length));
    else return string;

};

/**
 * Функция дополнения строки до указнной длины указанными символами.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} bring Дополнения.
 * @arg {string} string Исходная строка.
 * @arg {number} index Индекс дополнения.
 * @arg {number} length Требуемая длина новой строки.
*/
export function stringBring(string, index, length, bring) {

    return bringDeceit({ string, index, length, bring });

};
/**
 * Функция дополнения строки с её начала до указанной длины указанными символами.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} bring Дополнения.
 * @arg {string} string Исходная строка.
 * @arg {number} length Требуемая длина новой строки.
*/
export function stringBringLeft(string, length, bring) {

    return bringDeceit({ string, length, index: 0, bring })

};
/**
 * Функция дополнения строки с её конца до указанной длины указанными символами.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} bring Дополнения.
 * @arg {string} string Исходная строка.
 * @arg {number} length Требуемая длина новой строки.
*/
export function stringBringRight(string, length, bring) {

    return bringDeceit({ string, length, index: string.length - 1, bring });

};

//#endregion
//#region bringRow 0.0.0

/**
 * @typedef TBbringRow
 * @prop {number} row
 * @prop {string} string
 * @typedef {TBbringRow} TbringRow
*/

/** @arg {TbringRow} t */
function bringRowDeceit(t) {

    try {

        return bringRowVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TbringRow} t */
function bringRowVerify(t) {



    return bringRowHandle(t);

};
/** @arg {TbringRow} t */
function bringRowHandle(t) {



    return bringRowComply(t);

};
/** @arg {TbringRow} t */
function bringRowComply(t) {

    const {

        row,
        string,

    } = t;

    const rc = string.match(/\n/g)?.length ?? 0;

    return row && rc < row ? string + '\n'.repeat(row - rc) : string;

};

/**
 * Функция доведения строки до указанного кол-ва линий.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {number} row Кол-во строк.
*/
export function stringBringRow(string, row) {

    return bringRowDeceit({ string, row });

};

//#endregion
//#region bringColumn 0.0.0

/**
 * @typedef TBbringColumn
 * @prop {number} row
 * @prop {number} column
 * @prop {string} string
 * @typedef {TBbringColumn} TbringColumn
*/

/** @arg {TbringColumn} t */
function bringColumnDeceit(t) {

    try {

        return bringColumnVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TbringColumn} t */
function bringColumnVerify(t) {



    return bringColumnHandle(t);

};
/** @arg {TbringColumn} t */
function bringColumnHandle(t) {



    return bringColumnComply(t);

};
/** @arg {TbringColumn} t */
function bringColumnComply(t) {

    const {

        row,
        column,
        string,

    } = t;

    let result = stringBringRow(string, row);
    let r = stringGetRowByIndex(result, row);
    let n = column - r.length;

    return stringReplaceRowByIndex(result, row, r + ' '.repeat(n <= 0 ? 0 : n));

};

/**
 * Функция дополнения указанной линии до указанного размера.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {number} row Индекс линии.
 * @arg {number} column Индекс длины линии.
*/
export function stringBringColumn(string, row, column) {

    return bringColumnDeceit({ string, row, column, });

};

//#endregion

//#region paste 0.1.0

/** ### stringTFPaste
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `paste`.
 *
 * @typedef {stringTFUPaste&stringTString&stringTIndex&stringTSize} stringTFPaste
 *
*/
/** ### stringTFUPaste
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `paste`.
 *
 * @typedef stringTFUPaste
 * @prop {string} paste
*/

/** @arg {stringTFPaste} t */
function pasteDeceit(t) {

    try {

        return pasteVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {stringTFPaste} t */
function pasteVerify(t) {

    const {



    } = t;

    return pasteHandle(t);

};
/** @arg {stringTFPaste} t */
function pasteHandle(t) {

    const {



    } = t;

    return pasteComply(t);

};
/** @arg {stringTFPaste} t */
function pasteComply(t) {

    let {

        index,
        string,

    } = t;

    const {

        size,
        paste,

    } = t;

    string = stringRemove(string, index, size);

    if (size < -1) {

        const d = index + size;

        if (d < 0) index += size - d;
        else index += size + 1;

    };

    return stringAppend(string, index, paste);

};

/**
 * ### stringPaste
 * - Версия `0.0.2`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция вставки с замещением указанной индексом и размером области в строку.
 *
 * ***
 * @arg {number} size `Размер`
 * @arg {number} index `Индекс`
 *
 * - По умолчанию `string.length ?? 0`
 * @arg {string} paste `Вставка`
 * @arg {string} string `Строка`
*/
export function stringPaste(string, paste, index = string.length ?? 0, size = 0) {

    return pasteDeceit({ string, paste, index, size, });

};

//#endregion
//#region pasteWrap 0.1.0

/** ### stringTFPasteWrap
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `pasteWrap`.
 *
 * @typedef {stringTFUPasteWrap&stringTString&stringTIndexD&stringTSize} stringTFPasteWrap
 *
*/
/** ### stringTFUPasteWrap
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `pasteWrap`.
 *
 * @typedef stringTFUPasteWrap
 * @prop {string} paste
 * @prop {boolean} pass
*/
/** ### stringTpasteWrapSize
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {number|'auto'} stringTPasteWrapSize
 *
*/

/** @arg {stringTFPasteWrap} t */
function pasteWrapDeceit(t) {

    try {

        return pasteWrapVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {stringTFPasteWrap} t */
function pasteWrapVerify(t) {

    const {



    } = t;

    return pasteWrapHandle(t);

};
/** @arg {stringTFPasteWrap} t */
function pasteWrapHandle(t) {

    const {



    } = t;

    return pasteWrapComply(t);

};
/** @arg {stringTFPasteWrap} t */
function pasteWrapComply(t) {

    let {

        x,
        y,
        pass,
        size,
        paste,
        string,

    } = t;

    let result = string;

    paste.split('\n').forEach((p, pi) => {

        let s = stringGetRowByIndex(result, y);

        if (!s && s !== '') {

            result += '\n'.repeat(y - result.split('\n').length + 1);
            s = stringGetRowByIndex(result, y);

        };

        if (!s[x]) {

            result = stringReplaceRowByIndex(result, y, s = s.padEnd(x, ' '));

        };

        if (pass) {

            Array.from(p.matchAll(/ /g)).reverse().forEach(c => {

                p = stringPaste(p, stringGet(string, y + pi, x + c.index), c.index, 1);

            });

        };

        s = stringPaste(s, p, x, size === 'auto' ? p.length : size);

        result = stringReplaceRowByIndex(result, y, s);

        y += 1;

    });

    return result;

};

/**
 * ### stringPasteWrap
 * - Версия `0.2.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция вставки с переносом позиции.
 *
 * Вставляет значения вставки, как обычные значения.
 * Если встречает символы переноса строки `\n`, то вместо из вставки переносит индекс на строку ниже.
 * Если такой строки не существует, то она будет создана и дополнена пробелами до текущей позиции.
 * Иначе строка будет все равно дополнена до указанной позиции, после чего вставка продолжится.
 *
 * Использует в своей работе простую вставку.
 *
 * ***
 * @arg {number} y `Индекс линии`
 * @arg {number} x `Индекс позиции`
 * @arg {string} paste `Вставка`
 * @arg {string} string `Строка`
 * @arg {number|'auto'} size `Размер`
 *
 * Определяет кол-во символов, которое заменит собой данная вставка в исходной строке.
 *
 * Значение `auto` замещает ровно то кол-во символов, которое занимает `вставка` без учета символов переноса.
 *
 * - по умолчанию `auto`
 * @arg {boolean} pass `Режим пропуска`
 *
 * Если активирован, то все значения ` ` (пробелов) будут заменены на значения исходной строки.
 *
 * - По умолчанию `false`
*/
export function stringPasteWrap(string, paste, y, x, size = 'auto', pass) {

    return pasteWrapDeceit({ string, paste, y, x, size, pass, });

};
/**
 * ### stringPasteWrapByPosition
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция {@link stringPasteWrap|вставки с переносом} относительно позиции в исходной строке.
 *
 * ***
 * @arg {string} paste `Вставка`
 * @arg {string} string `Строка`
 * @arg {number} position `Позиция`
 * @arg {number|'auto'} size `Размер`
 * @arg {boolean} pass `Режим пропуска`
*/
export function stringPasteWrapByPosition(string, paste, position, size = 'auto', pass) {

    return pasteWrapDeceit({ string, paste, position, size, });

};

//#endregion

//#region checkStyle 0.0.0

/**
 * @typedef TBcheckStyle
 * @prop {string} string
 * @typedef {TBcheckStyle} TcheckStyle
*/

/** @arg {TcheckStyle} t */
function checkStyleDeceit(t) {

    try {

        return checkStyleVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcheckStyle} t */
function checkStyleVerify(t) {



    return checkStyleHandle(t);

};
/** @arg {TcheckStyle} t */
function checkStyleHandle(t) {



    return checkStyleComply(t);

};
/** @arg {TcheckStyle} t */
function checkStyleComply(t) {

    const {

        string,

    } = t;

    return !!stringFind(string, new YRegExp()

        .appendVariate(/\x1b\[(\d+|;)+?m/)
        .get()

    );

};

/**
 * Функция проверки наличия стилей в указанной строке.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
*/
export function stringCheckStyle(string) {

    return checkStyleDeceit({ string, });

};

//#endregion

//#region replace 0.1.1

/**
 * @typedef TBreplace
 * @prop {string} string
 * @prop {string} replace
 * @prop {string|RegExp} fragment
 * @typedef {TBreplace} Treplace
*/

/** @arg {Treplace} t */
function replaceDeceit(t) {

    try {

        return replaceVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Treplace} t */
function replaceVerify(t) {

    const {



    } = t;

    return replaceHandle(t);

};
/** @arg {Treplace} t */
function replaceHandle(t) {

    if (t.fragment) t.fragment = new YRegExp(t.fragment).removeFlags('g').get();

    return replaceComply(t);

};
/** @arg {Treplace} t */
function replaceComply(t) {

    const {

        string,
        replace,
        fragment,

    } = t;

    const m = string.match(fragment);

    if (m) {

        if (m.groups?.r || m.groups?.r === '') return string.replace(m[0], m[0].replace(m.groups.r, replace));
        else return string.replace(m[0], replace);

    };

};

/**
 * Функция для замены первого совпадения в исходной строке на указанное значение.
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {string} replace Значение замены.
 * @arg {string|RegExp} fragment Фрагмент совпадения.
 * - Флаг `g` не учитывается и будет исключен из регулярного выражения.
 * - Скобочная группа `r` указывает точечное место в совпадении, которое необходимо заменить.
*/
export function stringReplace(string, replace, fragment) {

    return replaceDeceit({ string, replace, fragment, });

};
/**
 * Функция для многократного вызова функции замены.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {...[string, string|RegExp]} replaces Замены.
*/
export function stringReplaceMore(string, ...replaces) {

    replaces.forEach(r => string = stringReplace(string, ...r));

    return string;

};

//#endregion
//#region replaceAll 0.0.1

/**
 * @typedef TBreplaceAll
 * @prop {string} string
 * @prop {string} replace
 * @prop {Array<string|RegExp>} fragment
 * @typedef {TBreplaceAll} TreplaceAll
*/

/** @arg {TreplaceAll} t */
function replaceAllDeceit(t) {

    try {

        return replaceAllVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TreplaceAll} t */
function replaceAllVerify(t) {



    return replaceAllHandle(t);

};
/** @arg {TreplaceAll} t */
function replaceAllHandle(t) {

    if (t.fragment) t.fragment = new YRegExp(t.fragment, 'g').get();

    return replaceAllComply(t);

};
/** @arg {TreplaceAll} t */
function replaceAllComply(t) {

    const {

        string,
        replace,

    } = t;

    let result = string;

    Array.from(string.matchAll(t.fragment)).reverse().forEach(m => {

        if (m.groups?.r || m.groups?.r === '') {

            result = stringPaste(stringRemove(result, m.index, m[0].length), m[0].replace(m.groups.r, replace), m.index);

        } else {

            result = stringPaste(stringRemove(result, m.index, m[0].length), replace, m.index);

        };

    });

    return result;

};

/**
 * Функция для замены всех найденных совпадений в исходной строке на указанное значение.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {string} replace Значение замены.
 * @arg {string|RegExp} fragment Фрагменты замены.
 * - Флаг `g` не учитывается и будет исключен из регулярного выражения.
 * - Скобочная группа `r` указывает точечное место в совпадении, которое необходимо заменить.
*/
export function stringReplaceAll(string, replace, fragment) {

    return replaceAllDeceit({ string, replace, fragment, });

};
/**
 * Функция для замены множества совпадений в исходной строке с индивидуально указанными значениями.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {...[string, string|RegExp]} replaces Замещения.
*/
export function stringReplaceAllMore(string, ...replaces) {

    replaces.filter(f => f).forEach(r => string = stringReplaceAll(string, ...r));

    return string;

};

//#endregion
//#region replaceRowByIndex 0.0.0

/**
 * @typedef TBreplaceRowByIndex
 * @prop {number} index
 * @prop {string} string
 * @prop {string} replace
 * @typedef {TBreplaceRowByIndex} TreplaceRowByIndex
*/

/** @arg {TreplaceRowByIndex} t */
function replaceRowByIndexDeceit(t) {

    try {

        return replaceRowByIndexVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TreplaceRowByIndex} t */
function replaceRowByIndexVerify(t) {



    return replaceRowByIndexHandle(t);

};
/** @arg {TreplaceRowByIndex} t */
function replaceRowByIndexHandle(t) {



    return replaceRowByIndexComply(t);

};
/** @arg {TreplaceRowByIndex} t */
function replaceRowByIndexComply(t) {

    const {

        index,
        string,
        replace,

    } = t;

    const a = string.split('\n');

    a[index] = replace;

    return a.join('\n');

};

/**
 * Функция замены линии по индексу.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {number} index Индекс.
 * @arg {string} string Исходная строка.
 * @arg {string} replace Линия замены.
*/
export function stringReplaceRowByIndex(string, index, replace) {

    return replaceRowByIndexDeceit({ string, index, replace, });

};

//#endregion

//#region mesuare 0.0.0

/**
 * @typedef TBmesuare
 * @prop {string} string
 * @prop {number} step
 * @prop {string[]} substrings
 * @typedef {TBmesuare} Tmesuare
*/

/** @arg {Tmesuare} t */
function mesuareDeceit(t) {

    try {

        return mesuareVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tmesuare} t */
function mesuareVerify(t) {



    return mesuareHandle(t);

};
/** @arg {Tmesuare} t */
function mesuareHandle(t) {



    return mesuareComply(t);

};
/** @arg {Tmesuare} t */
function mesuareComply(t) {

    const {

        step,
        string,
        substrings,

    } = t;

    let result = string;

    for (let i = 0, c = 0, p = 0; i < result.length; i++) {

        if ((i - p) % step === 0 && i !== 0) {

            result = stringPaste(result, substrings[c], i);

            i += substrings[c].length;
            p += substrings[c].length;

        };

    };

    return result;

};

/**
 * Функция для добавления подстрок на каждые указанные n символов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {number} step Размер шага.
 * @arg {...string} substrings Символы вставки.
*/
export function stringMesuare(string, step, ...substrings) {

    return mesuareDeceit({ string, step, substrings, });

};

//#endregion

//#region getTransducer 0.0.0

/**
 * @typedef TBgetTransducer
 * @prop {string} mode
 * @prop {string} string
 * @prop {RegExp[]} regexps
 * @typedef {TBgetTransducer} TgetTransducer
*/

/** @arg {TgetTransducer} t */
function getTransducerDeceit(t) {

    try {

        return getTransducerVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetTransducer} t */
function getTransducerVerify(t) {



    return getTransducerHandle(t);

};
/** @arg {TgetTransducer} t */
function getTransducerHandle(t) {

    t.regexps = [];

    t.regexps.push(stringREANSIColor);

    return getTransducerComply(t);

};
/** @arg {TgetTransducer} t */
function getTransducerComply(t) {

    const {



    } = t;

    const result = [];

    while (true) {

        const f = t.string.match(stringREANSIColor);

        if (!f) break;

        t.string = stringRemove(t.string, f.index, f[0].length);

        result.push([f.index, f[0]]);

    };

    return result;

};

/**
 * Функция для получения карты преобразователей строки.
 *
 * Под термин преобразователей подпадают такие строковые вставки, которые своим пристутсвием видоизменяют визуальное отображение текста или искажают его.
 * К подобным вставкам могут относиться `ANSI Escape Sequence`.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
*/
export function stringGetTranducer(string) {

    return getTransducerDeceit({ string, mode: 'all', });

};
/**
 * Функция для получения карты цветовых преобразователей строки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
*/
export function stringGetTransducerColor(string) {

    return getTransducerDeceit({ string, node: 'color', });

};

//#endregion

//#region formatNumber 0.1.0

/** ### stringTFformatNumber
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Результирующие параметры функции `formatNumber`.
 *
 * @typedef {stringTFUformatNumber} stringTFformatNumber
 *
*/
/** ### stringTFUformatNumber
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `formatNumber`.
 *
 * @typedef stringTFUformatNumber
 * @prop {number} number
 * @prop {boolean|string} spliterPart
 * @prop {boolean|string} spliterDischarge
*/

/** @arg {stringTFformatNumber} t */
function formatNumberDeceit(t) {

    try {

        return formatNumberVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {stringTFformatNumber} t */
function formatNumberVerify(t) {



    return formatNumberHandle(t);

};
/** @arg {stringTFformatNumber} t */
function formatNumberHandle(t) {



    return formatNumberComply(t);

};
/** @arg {stringTFformatNumber} t */
function formatNumberComply(t) {

    const {

        number,
        spliterPart,
        spliterDischarge,

    } = t;

    let parts = new String(number).split('.');

    if (spliterDischarge) {

        parts.forEach((p, pi, pa) => pa[pi] = funcBypass(p,

            [stringReverse],
            [stringMesuare, 3, spliterDischarge === true ? configString.castToNumber.spliterDischarge : spliterDischarge],
            [stringReverse]

        ));

    };

    if (spliterPart) return parts.join((spliterPart === true ? configString.castToNumber.spliterPart[config.local] : spliterPart) ?? '.');
    else return parts[0];

};

/**
 * ### stringFormatNumber
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 *
 * Функция форматирования числа в строку.
 * В итоговой строке числа будут размещены знаки разделения разрядов и частей.
 *
 * Для разделителей задано значение по умолчанию `false`.
 * При таком значении все разряды будут указаны без разделителя, а дробная часть отброшена.
 *
 * При указании значения `true` для любого разделителя он будет использован со значением конфигуратора.
 *
 * Если необходимо указать особый разделитель, то можно явно указать для каждого разделителя его значение.
 * ***
 * @arg {number} number `Число`
 * @arg {boolean|string} spliterPart `Строка-разделитель целой и дробной части`
 * - По умолчанию `false`
 * @arg {boolean|string} spliterDischarge `Строка-разделитель разрядов`
 * - По умолчанию `false`
*/
export function stringFormatNumber(number, spliterPart, spliterDischarge) {

    return formatNumberDeceit({ number, spliterPart, spliterDischarge, });

};

//#endregion

//#region castToJect 0.0.0

/**
 * @typedef TBcastToJect
 * @prop {string} string
 * @typedef {TBcastToJect} TcastToJect
*/

/** @arg {TcastToJect} t */
function castToJectDeceit(t) {

    try {

        return castToJectVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcastToJect} t */
function castToJectVerify(t) {

    const {



    } = t;

    return castToJectHandle(t);

};
/** @arg {TcastToJect} t */
function castToJectHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return castToJectComply(t);

};
/** @arg {TcastToJect} t */
function castToJectComply(t) {

    const {

        string,

    } = t;

    const r = {};

    string.match(/[\w\d_]+:.+;?/g)?.forEach(m => {

        const p = m.split(':');

        r[p[0]] = p[1];

    });

    return r;

};

/**
 * Функция для превращения строки в объект.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string исходная строка.
*/
export function stringCastToJect(string) {

    return castToJectDeceit({ string });

};

//#endregion
//#region castToDate 0.0.0

/**
 * @typedef TBcastToDate
 * @prop {Date} date
 * @prop {string} local
 * @typedef {TBcastToDate} TcastToDate
*/

/** @arg {TcastToDate} t */
function castToDateDeceit(t) {

    try {

        return castToDateVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcastToDate} t */
function castToDateVerify(t) {

    const {



    } = t;

    return castToDateHandle(t);

};
/** @arg {TcastToDate} t */
function castToDateHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return castToDateComply(t);

};
/** @arg {TcastToDate} t */
function castToDateComply(t) {

    const {

        date,
        local,

    } = t;

    switch (local) {

        case 'ru': {

            return stringReplaceAllMore(configString.castToDate.ru,

                [date.getDate().toString().padStart(2, 0), /<d>/],
                [(date.getMonth() + 1).toString().padStart(2, 0), /<m>/],
                [date.getFullYear(), /<y>/],
                [date.getHours().toString().padStart(2, 0), /<hh>/],
                [date.getMinutes().toString().padStart(2, 0), /<mm>/],
                [date.getSeconds().toString().padStart(2, 0), /<ss>/],

            );

        };

    };

};

/**
 * Функция для преобразования даты в строку текущей локали.
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * @arg {Date} date Дата.
 * - По умолчанию `new Date()`
*/
export function stringCastToDate(date = new Date()) {

    return castToDateDeceit({ date, local: config.local });

};
/**
 * Функция для преобразования даты в строку формата даты локального времени.
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * @arg {Date} date Дата.
 * - По умолчанию `new Date()`
*/
export function stringCastToDateRu(date = new Date()) {

    return castToDateDeceit({ date, local: 'ru' });

};

//#endregion
//#region castToSample 0.0.2

/**
 * @typedef TBcastToSample
 * @prop {string} string
 * @typedef {TBcastToSample} TcastToSample
*/

/** @arg {TcastToSample} t */
function castToSampleDeceit(t) {

    try {

        return castToSampleVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcastToSample} t */
function castToSampleVerify(t) {

    const {



    } = t;

    return castToSampleHandle(t);

};
/** @arg {TcastToSample} t */
function castToSampleHandle(t) {

    return castToSampleComply(t);

};
/** @arg {TcastToSample} t */
function castToSampleComply(t) {

    const {

        string,

    } = t;

    return new YString(string).replaceAll(

        ['\\n', /\n/g],
        ['\\r', /\r/g,],
        ['\\t', /\t/g,],
        ['\\x1b', /\x1b/g],

    ).get();

};

/**
 * Функция для преобразования строки в строку с отображением всех спициальных символов.
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
*/
export function stringCastToSample(string) {

    return castToSampleDeceit({ string });

};

//#endregion
//#region castToYReport 0.0.2

/**
 * @typedef TBcastToYReport
 * @prop {string} string
 * @typedef {TBcastToYReport} TcastToYReport
*/

/** @arg {TcastToYReport} t */
function castToYReportDeceit(t) {

    try {

        return castToYReportVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcastToYReport} t */
function castToYReportVerify(t) {

    const {



    } = t;

    return castToYReportHandle(t);

};
/** @arg {TcastToYReport} t */
function castToYReportHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return castToYReportComply(t);

};
/** @arg {TcastToYReport} t */
function castToYReportComply(t) {

    const {

        string,

    } = t;

    return new YString(string)

        .handle(s => s, /[.,:;~\-\[\]\/#]/g)
        .replaceAll(

            ['+', /true/],
            ['_', /null/],
            ['-', /false/],
            ['?', /undefinded/],
            ['\n', /.(?<r>\n\n)/],

        )
        .get()

};

/**
 * Преобразование строки в оформленную строку отчета для Y элементов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
*/
export function stringCastToYReport(string) {

    return castToYReportDeceit({ string });

};

//#endregion
//#region castToNumberPhone 0.0.0

/**
 * @typedef TBcastToNumberPhone
 * @prop {string} local
 * @prop {string} number
 * @typedef {TBcastToNumberPhone} TcastToNumberPhone
*/

/** @arg {TcastToNumberPhone} t */
function castToNumberPhoneDeceit(t) {

    try {

        return castToNumberPhoneVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcastToNumberPhone} t */
function castToNumberPhoneVerify(t) {

    const {



    } = t;

    return castToNumberPhoneHandle(t);

};
/** @arg {TcastToNumberPhone} t */
function castToNumberPhoneHandle(t) {

    let {

        number,

    } = t;

    number = number.replace(/[^\d]/g, '');

    t = {

        ...t,
        number,

    };

    return castToNumberPhoneComply(t);

};
/** @arg {TcastToNumberPhone} t */
function castToNumberPhoneComply(t) {

    const {

        local,
        number,

    } = t;

    let n = number;
    /** @type {string} */
    let result = configString.castToNumberPhone[local];

    switch (local) {

        case 'ua': {

            if (n[0] == 0) n = 380 + n.slice(1);

        }; break;
        case 'blr': {

            if (n[0] == 8) n = n.replace(0, '').replace(8, 375);

        }; break;
        case 'ru': case 'kz': {

            if (n[0] == 8) n = 7 + n.slice(1);

        }; break;

    };


    n.split('').forEach(s => result = result.replace('x', s));

    const i = result.indexOf('x');

    if (i !== -1) result = result.slice(0, i);

    return result;

};

/**
 * Функция для приведения строки к телефонному номеру России.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} number
*/
export function stringCastToPhoneNumberRu(number) {

    return castToNumberPhoneDeceit({ number, local: 'ru' });

};
/**
 * Функция для приведения строки к телефонному номеру Украины.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} number
*/
export function stringCastToPhoneNumberUa(number) {

    return castToNumberPhoneDeceit({ number, local: 'ua' });

};
/**
 * Функция для приведения строки к телефонному номеру Казахстана.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} number
*/
export function stringCastToPhoneNumberKz(number) {

    return castToNumberPhoneDeceit({ number, local: 'kz' });

};
/**
 * Функция для приведения строки к телефонному номеру Беларуссии.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} number
*/
export function stringCastToPhoneNumberBlr(number) {

    return castToNumberPhoneDeceit({ number, local: 'blr' });

};

//#endregion

//#region convertCamelCaseToDelimetr 0.0.0

/**
 * @typedef TBconvertCamelCaseToDelimetr
 * @prop {string} string
 * @prop {string} delimetr
 * @prop {boolean} lower
 * @typedef {TBconvertCamelCaseToDelimetr} TconvertCamelCaseToDelimetr
*/

/** @arg {TconvertCamelCaseToDelimetr} t */
function convertCamelCaseToDelimetrDeceit(t) {

    try {

        return convertCamelCaseToDelimetrVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TconvertCamelCaseToDelimetr} t */
function convertCamelCaseToDelimetrVerify(t) {

    const {



    } = t;

    return convertCamelCaseToDelimetrHandle(t);

};
/** @arg {TconvertCamelCaseToDelimetr} t */
function convertCamelCaseToDelimetrHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return convertCamelCaseToDelimetrComply(t);

};
/** @arg {TconvertCamelCaseToDelimetr} t */
function convertCamelCaseToDelimetrComply(t) {

    const {

        lower,
        string,
        delimetr,

    } = t;

    return lower ? string[0].toLowerCase() + stringHandle(string.slice(1), s => delimetr + s.toLowerCase(), /[A-Z]/g) : stringHandle(string, s => delimetr + s.toLowerCase(), /[A-Z]/g);;

};

/**
 * Функция для трансофрмации строки `CamelCase` в строку с разделителем.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {string} delimetr Разделитель.
 * - По умолчанию `-`
 * @arg {boolean} lower Логическое значение, определяющее стиль `CamelCase` строки, как `lower`.
 * - По умолчанию `true`
*/
export function stringConvertCamelCaseToDelimetr(string, delimetr = '-', lower = true) {

    return convertCamelCaseToDelimetrDeceit({ string, delimetr, lower });

};

//#endregion
//#region convertDelimetrToCamelCase 0.0.0

/**
 * @typedef TBconvertDelimetrToCamelCase
 * @prop {string} string
 * @prop {string} delimetr
 * @prop {boolean} lower
 * @typedef {TBconvertDelimetrToCamelCase} TconvertDelimetrToCamelCase
*/

/** @arg {TconvertDelimetrToCamelCase} t */
function convertDelimetrToCamelCaseDeceit(t) {

    try {

        return convertDelimetrToCamelCaseVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TconvertDelimetrToCamelCase} t */
function convertDelimetrToCamelCaseVerify(t) {

    const {



    } = t;

    return convertDelimetrToCamelCaseHandle(t);

};
/** @arg {TconvertDelimetrToCamelCase} t */
function convertDelimetrToCamelCaseHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return convertDelimetrToCamelCaseComply(t);

};
/** @arg {TconvertDelimetrToCamelCase} t */
function convertDelimetrToCamelCaseComply(t) {

    const {

        lower,
        string,
        delimetr,

    } = t;

    return lower ? string[0].toUpperCase() + stringHandle(string.slice(1), s => s[1].toUpperCase(), `${delimetr}\\w`) : stringHandle(string, s => s[1].toUpperCase(), `${delimetr}\\w`);

};

/**
 * Функция конвертирования delimetr строки в `CamelCase`.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {string} delimetr Разделитель строки.
 * - По умолчанию `false`
 * @arg {boolean} lower Логическо значение определяющее стиль `CamelCase` как `lower`.
 * - По умолчанию `true`
*/
export function stringConverDelimetrToCamelCase(string, delimetr = '-', lower = true) {

    return convertDelimetrToCamelCaseDeceit({ string, delimetr, lower });

};

//#endregion

/**
 * @file string.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/