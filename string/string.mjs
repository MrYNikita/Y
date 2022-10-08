import { arrayAppend, arrayGetRandomElement, arrayUnique } from "../array/array.mjs";
import { config, configString } from "../config.mjs";
import { numberBefore, numberDevide, numberGetFrac, numberGetRandomReal, numberGetReal, numberGetSequence } from "../number/number.mjs";
import { YString } from "./YString/YString.mjs";

//#region pad 0.0.0

/**
 * @typedef TBpad
 * @prop {string} pad
 * @prop {number} index
 * @prop {number} count
 * @prop {string} string
 * @typedef {TBpad} Tpad
*/

/** @param {Tpad} t */
function padDeceit(t) {

    try {

        return padVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tpad} t */
function padVerify(t) {

    const {



    } = t;

    return padHandle(t);

};
/** @param {Tpad} t */
function padHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return padComply(t);

};
/** @param {Tpad} t */
function padComply(t) {

    const {

        pad,
        index,
        count,
        string,

    } = t;

    return stringAppend(string, index, pad.repeat(count));

};

/**
 * Функция для дополнения строки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} pad Строка дополнения.
 * @param {string} string Исходная строка.
 * @param {number} count Кол-во повторений строки дополнения.
 * @param {boolean} left Место стыка.
*/
export function stringPad(string, pad, count, index = string.length) {

    return padDeceit({ string, pad, index, count });

};

//#endregion
//#region find 0.0.0

/**
 * @typedef TBfind
 * @prop {string} string
 * @prop {boolean} jected
 * @prop {typeof Object} cls
 * @prop {[string|RegExp]} fragments
 * @typedef {TBfind} Tfind
*/

/** @param {Tfind} t */
function findDeceit(t) {

    try {

        return findVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tfind} t */
function findVerify(t) {

    const {



    } = t;

    return findHandle(t);

};
/** @param {Tfind} t */
function findHandle(t) {

    let {

        cls,
        jected,

    } = t;

    if (jected) {

        if (!cls) cls = Object;

    };

    t = {

        ...t,
        cls,

    };

    return findComply(t);

};
/** @param {Tfind} t */
function findComply(t) {

    const {

        cls,
        string,
        fragments,

    } = t;

    /** @type {[]|{}} */
    let results;

    if (cls) {

        results = new cls();

        fragments.forEach(f => {

            const d = string.match(f);

            if (d) Object.keys(d.groups).forEach(k => {

                if (+d.groups[k]) results[k] = +d.groups[k];
                else results[k] = d.groups[k];

            });

        });

    } else {

        results = [];

        fragments.forEach(f => {

            const d = string.match(f);

            if (d) d.forEach(f => results.push(f));

        });

    };

    return results;

};

/**
 * Функция для поиска всех соответствий.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string
 * @param {...string|RegExp} fragments
 * @return {[]}
*/
export function stringFind(string, ...fragments) {

    return findDeceit({ string, fragments });

};
/**
 * Функция для поиска фрагментов в исходной строке.
 * Данная функция поиска возвращает все совпадения объектом.
 * Свойства данного объекта - это указанные в регулярных выражениях поиска имена скобочных групп.
 * 
 * Функция также может вернуть экземпляр класса. Для этого укажите необходимый класс вторым параметром.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string
 * @param {typeof Object} cls
 * @param {...string|RegExp} fragments
 * @return {{}}
*/
export function stringFindToJect(string, cls, ...fragments) {

    return findDeceit({ string, cls, fragments, jected: true });

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

/** @param {Tbring} t */
function bringDeceit(t) {

    try {

        return bringVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tbring} t */
function bringVerify(t) {

    const {



    } = t;

    return bringHandle(t);

};
/** @param {Tbring} t */
function bringHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return bringComply(t);

};
/** @param {Tbring} t */
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
 * @param {string} bring Дополнения.
 * @param {string} string Исходная строка.
 * @param {number} index Индекс дополнения.
 * @param {number} length Требуемая длина новой строки.
*/
export function stringBring(string, index, length, bring) {

    return bringDeceit({ string, index, length, bring });

};
/**
 * Функция дополнения строки с её начала до указанной длины указанными символами.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} bring Дополнения.
 * @param {string} string Исходная строка.
 * @param {number} length Требуемая длина новой строки.
*/
export function stringBringLeft(string, length, bring) {

    return bringDeceit({ string, length, index: 0, bring })

};
/**
 * Функция дополнения строки с её конца до указанной длины указанными символами.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} bring Дополнения.
 * @param {string} string Исходная строка.
 * @param {number} length Требуемая длина новой строки.
*/
export function stringBringRight(string, length, bring) {

    return bringDeceit({ string, length, index: string.length - 1, bring });

};

//#endregion
//#region paste 0.0.0

/**
 * @typedef TBpaste
 * @prop {number} size
 * @prop {number} index
 * @prop {string} paste
 * @prop {string} string
 * @typedef {TBpaste} Tpaste
*/

/** @param {Tpaste} t */
function pasteDeceit(t) {

    try {

        return pasteVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tpaste} t */
function pasteVerify(t) {

    const {



    } = t;

    return pasteHandle(t);

};
/** @param {Tpaste} t */
function pasteHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return pasteComply(t);

};
/** @param {Tpaste} t */
function pasteComply(t) {

    const {

        size,
        index,
        paste,
        string,

    } = t;

    return stringAppend(stringRemove(string, index, size), index, paste);

};

/**
 * Функция вставки с замещением указанной индексом и размером области в строку.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {number} size Размер вставки.
 * @param {number} index Индекс вставки.
 * @param {string} paste Строка вставки.
 * @param {string} string Исходная строка.
*/
export function stringPaste(string, paste, index, size) {

    return pasteDeceit({ string, paste, index, size, });

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
 * @param {number} index Индекс добавления текста.
 * @param {string} string исходная строка.
 * @param {...string|number} appends Строки добавления.
*/
export function stringAppend(string, index, ...appends) {

    return appendDeceit({ string, index, appends, });

};
/**
 * Функция для добавления текста к началу указанной строки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string исходная строка.
 * @param {...string|number} appends Строки добавления.
*/
export function stringAppendLeft(string, ...appends) {

    return appendDeceit({ string, index: 0, appends, });

};
/**
 * Функция для добавления текста к концу указанной строки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string исходная строка.
 * @param {...string|number} appends Строки добавления.
*/
export function stringAppendRight(string, ...appends) {

    return appendDeceit({ string, index: string.length, appends, });

};

//#endregion
//#region remove 0.0.0

/**
 * @typedef TBremove
 * @prop {number} index
 * @prop {number} length
 * @prop {string} string
 * @typedef {TBremove} Tremove
*/

/** @param {Tremove} t */
function removeDeceit(t) {

    try {

        return removeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tremove} t */
function removeVerify(t) {

    const {



    } = t;

    return removeHandle(t);

};
/** @param {Tremove} t */
function removeHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return removeComply(t);

};
/** @param {Tremove} t */
function removeComply(t) {

    const {

        index,
        length,
        string,

    } = t;

    return string.slice(0, index) + string.slice(index + length);

};

/**
 * Функция для удаления фрагмента строки начиная с указанного индекса.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {number} index Индекс.
 * @param {number} length Длина удаления.
 * @param {string} string Исходная строка.
 * @return {string}
*/
export function stringRemove(string, index, length) {

    return removeDeceit({ string, index, length });

};
/**
 * Функция для удаления фрагмента строки начиная с указанного индекса.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {number} length Длина удаления.
 * @param {string} string Исходная строка.
 * @return {string}
*/
export function stringRemoveLeft(string, length) {

    return removeDeceit({ string, index: 0, length });

};
/**
 * Функция для удаления фрагмента строки начиная с указанного индекса.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {number} length Длина удаления.
 * @param {string} string Исходная строка.
 * @return {string}
*/
export function stringRemoveRight(string, length) {

    return removeDeceit({ string, index: string.length - length, length });

};

//#endregion
//#region filter 0.0.0

/**
 * @typedef TBfilter
 * @prop {string} string
 * @prop {[string|RegExp]} filters
 * @typedef {TBfilter} Tfilter
*/

/** @param {Tfilter} t */
function filterDeceit(t) {

    try {

        return filterVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tfilter} t */
function filterVerify(t) {

    const {



    } = t;

    return filterHandle(t);

};
/** @param {Tfilter} t */
function filterHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return filterComply(t);

};
/** @param {Tfilter} t */
function filterComply(t) {

    const {

        string,
        filters,

    } = t;

    return stringReplace(string, ...filters.map(f => [f, '']));

};

/**
 * Функция для удаления из строки указанных фрагментов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string
 * @param {...string|RegExp} filters
*/
export function stringFilter(string, ...filters) {

    return filterDeceit({ string, filters });

};

//#endregion
//#region handle 0.0.1

/**
 * @typedef TBhandle
 * @prop {string} string
 * @prop {function} handle
 * @prop {[string|RegExp]} fragments
 * @typedef {TBhandle} Thandle
*/

/** @param {Thandle} t */
function handleDeceit(t) {

    try {

        return handleVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Thandle} t */
function handleVerify(t) {

    const {



    } = t;

    return handleHandle(t);

};
/** @param {Thandle} t */
function handleHandle(t) {

    let {



    } = t;

    t.fragments.forEach((f, i, a) => {

        if (f.source.match(/\d|\\d/)) a[i] = new RegExp(f.source.replace(/\\d/, '(?<!\\x1b\\[\\d*?)$&'), f.flags);

    });

    t = {

        ...t,

    };

    return handleComply(t);

};
/** @param {Thandle} t */
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

        fs.forEach(m => result = stringPaste(result, handle(m[0]), m.index, m[0].length));

    });

    return result;

};

/**
 * Функция для обработки совпадений.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string
 * @param {function} handle
 * @param {...string|RegExp} fragments
*/
export function stringHandle(string, handle, ...fragments) {

    return handleDeceit({ string, handle, fragments });

};

//#endregion
//#region replace 0.0.0

/**
 * @typedef TBreplace
 * @prop {string} string
 * @prop {boolean} pointed
 * @prop {[[string|RegExp,string]]} replaces
 * @typedef {TBreplace} Treplace
*/

/** @param {Treplace} t */
function replaceDeceit(t) {

    try {

        return replaceVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Treplace} t */
function replaceVerify(t) {

    const {



    } = t;

    return replaceHandle(t);

};
/** @param {Treplace} t */
function replaceHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return replaceComply(t);

};
/** @param {Treplace} t */
function replaceComply(t) {

    const {

        string,
        pointed,
        replaces,

    } = t;

    let result = string;

    if (pointed) {

        replaces.forEach(p => {

            if (p[0] instanceof String) p[0] = new RegExp(`(?<r>${p[0]})`);
            else if (!p[0].source.includes('?<r>') && !p[0].source.includes('?<ra>')) p[0] = new RegExp(`(?<r>${p[0].source})`);

            const d = result.match(p[0]);

            if (d) {

                if (d.groups.r) result = result.replace(d[0], d[0].replace(d.groups.r, p[1]));
                else if (d.groups.ra) result = result.replace(new RegExp(d.groups.ra, 'g'), p[1]);

            };

        });

    } else {

        replaces.forEach(p => {

            if (p[0] instanceof String) p[0] = new RegExp(p[0]);

            result = result.replace(p[0], p[1]);

        });

    };

    return result;

};

/**
 * Функция для замены фрагментов исходной строки указанными подстроками.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string Исходная строка.
 * @param {...[string|RegExp, string]} replaces Массив пар фрагментов и их заместителей.
*/
export function stringReplace(string, ...replaces) {

    return replaceDeceit({ string, replaces, });

};
/**
 * Функция для точечных изменений в найденных совпадениях.
 * Используя скобочные группы, можно точечно изменять часть совпадения без необходимости переписывать его.
 * Также точечные изменения позволяют менять фрагмент совпадения во всей строке, а не в едином фрагменте.
 * 
 * В данных фрагментах используются строго регулярные выражения. Все строки будут замещены на регулярные выражения
 * и целиком попадут под скобочную группу `r`. Таким образом данный фрагмент будет заменен целиком.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string Исходная строка.
 * @param {...[RegExp, string]} replaces Пары фрагментов и их заместителей.
 * - Скобочная группа `r` используется для точечной замены в фрагменте строки.
 * - Скобочная группа `ra` используется для точечной замены всех совпадений в строке с указанным совпадением во фрагменте.
*/
export function stringReplacePoint(string, ...replaces) {

    return replaceDeceit({ string, replaces, pointed: true });

};

//#endregion
//#region repaint 0.0.0

/**
 * @typedef TBrepaint
 * @prop {string} color
 * @prop {string} string
 * @typedef {TBrepaint} Trepaint
*/

/** @param {Trepaint} t */
function repaintDeceit(t) {

    try {

        return repaintVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Trepaint} t */
function repaintVerify(t) {

    const {



    } = t;

    return repaintHandle(t);

};
/** @param {Trepaint} t */
function repaintHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return repaintComply(t);

};
/** @param {Trepaint} t */
function repaintComply(t) {

    const {

        color,
        string,
        bright,
        background,

    } = t;

    for (const c of Object.entries({

        red: 31,
        cyan: 36,
        blue: 34,
        black: 30,
        green: 32,
        white: 37,
        yellow: 33,
        magenta: 35,

    })) {

        if (c[0].includes(color)) {

            if (background) c[1] += 10;
            if (color.includes('bright') || bright) c[1] += 60;

            return `\x1b[${c[1]}m${string}\x1b[${(background) ? 49 : 39}m`;

        };

    };

};

/**
 * Функция для перекрашивания строки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} color
 * @param {string} string
 * @param {boolean} bright
 * @param {boolean} background
 * @return {string}
*/
export function stringRepaint(string, color, bright, background) {

    return repaintDeceit({ string, color, bright, background });

};

//#endregion
//#region reverse 0.0.0

/**
 * @typedef TBreverse
 * @prop {string} string
 * @typedef {TBreverse} Treverse
*/

/** @param {Treverse} t */
function reverseDeceit(t) {

    try {

        return reverseVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Treverse} t */
function reverseVerify(t) {

    const {



    } = t;

    return reverseHandle(t);

};
/** @param {Treverse} t */
function reverseHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return reverseComply(t);

};
/** @param {Treverse} t */
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
 * @param {string} string
*/
export function stringReverse(string) {

    return reverseDeceit({ string });

};

//#endregion
//#region extract 0.0.0

/**
 * @typedef TBextract
 * @prop {string} string
 * @prop {string|RegExp} fragment
 * @typedef {TBextract} Textract
*/

/** @param {Textract} t */
function extractDeceit(t) {

    try {

        return extractVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Textract} t */
function extractVerify(t) {

    const {



    } = t;

    return extractHandle(t);

};
/** @param {Textract} t */
function extractHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return extractComply(t);

};
/** @param {Textract} t */
function extractComply(t) {

    const {

        string,
        fragment,

    } = t;

    if (fragment instanceof String) return string.match(new RegExp(fragment))[0];
    else if (fragment.source.includes('?<e>')) return string.match(fragment).groups.e;
    else return string.match(fragment)[0];

};

/**
 * Функция для извлечения из строки единственного совпадения.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string Исходная строка.
 * @param {string|RegExp} fragment Фрагмент совпадения.
 * - Скобочная группа `e` позволяет извлечь подсвовпадение из совпадения.
*/
export function stringExtract(string, fragment) {

    return extractDeceit({ string, fragment });

};

//#endregion
//#region generateWord 0.0.0

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

/** @param {TgenerateWord} t */
function generateWordDeceit(t) {

    try {

        return generateWordVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TgenerateWord} t */
function generateWordVerify(t) {

    const {



    } = t;

    return generateWordHandle(t);

};
/** @param {TgenerateWord} t */
function generateWordHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return generateWordComply(t);

};
/** @param {TgenerateWord} t */
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

    if (begin) result.push(begin);

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

                arrayGetRandomElement(s2),
                arrayGetRandomElement(s2),
                arrayGetRandomElement(s1)

            ));

        };

    };

    if (camelCase) {

        result.forEach((e, i, a) => a[i] = e[0].toUpperCase() + e.slice(1));

    } else result[0] = result[0][0].toUpperCase() + result[0].slice(1);

    if (end) result.push(end);

    if (cutLast) result[result.length - 1] = result.at(-1).slice(0, -1);

    return result.join(delimetr);

};

/**
 * Функция для генерации произвольного слова.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} end Окончание слова. Данная часть будет вставлена в конец слова.
 * @param {string} begin Начало слова. Данная часть будет вставлена в начало слова.
 * @param {number} syllable Кол-во слогов.
 * @param {string} delimetr Разделители. Разделяют слоги.
 * @param {boolean} cutLast Обрезка последнего символа.
 * @param {boolean} camelCase Каждый слог с большой буквы.
 * @returns {string}
*/
export function stringGenerateWord(syllable = numberGetRandomReal(1, 3), begin = '', end = '', delimetr = '', camelCase = false, cutLast = true) {

    return generateWordDeceit({ syllable, begin, end, delimetr, camelCase, cutLast });

};

//#endregion

//#region castToDate 0.0.0

/**
 * @typedef TBcastToDate
 * @prop {Date} date
 * @prop {string} local
 * @typedef {TBcastToDate} TcastToDate
*/

/** @param {TcastToDate} t */
function castToDateDeceit(t) {

    try {

        return castToDateVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TcastToDate} t */
function castToDateVerify(t) {

    const {



    } = t;

    return castToDateHandle(t);

};
/** @param {TcastToDate} t */
function castToDateHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return castToDateComply(t);

};
/** @param {TcastToDate} t */
function castToDateComply(t) {

    const {

        date,
        local,

    } = t;

    switch (local) {

        case 'ru': {

            return new YString(configString.castToDate.ru).replace(

                [/<d>/, date.getDay().toString().padStart(2, 0)],
                [/<m>/, date.getMonth().toString().padStart(2, 0)],
                [/<y>/, date.getFullYear()],
                [/<hh>/, date.getHours().toString().padStart(2, 0)],
                [/<mm>/, date.getMinutes().toString().padStart(2, 0)],
                [/<ss>/, date.getSeconds().toString().padStart(2, 0)],

            ).get();

        };

    };

};

/**
 * Функция для преобразования даты в строку текущей локали.
 * @param {Date} date
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function stringCastToDate(date) {

    return castToDateDeceit({ date, local: config.local });

};
/**
 * Функция для преобразования даты в строку формата даты локального времени.
 * @param {Date} date
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function stringCastToDateRu(date) {

    return castToDateDeceit({ date, local: 'ru' });

};

//#endregion
//#region castToNumber 0.0.0

/**
 * @typedef TBcastToNumber
 * @prop {number} number
 * @prop {boolean} part
 * @typedef {TBcastToNumber} TcastToNumber
*/

/** @param {TcastToNumber} t */
function castToNumberDeceit(t) {

    try {

        return castToNumberVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TcastToNumber} t */
function castToNumberVerify(t) {

    const {



    } = t;

    return castToNumberHandle(t);

};
/** @param {TcastToNumber} t */
function castToNumberHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return castToNumberComply(t);

};
/** @param {TcastToNumber} t */
function castToNumberComply(t) {

    const {

        part,
        number,

    } = t;

    let nr = numberGetReal(number) + '', nf = numberGetFrac(number, 4) + '', result = '';

    if (part) {

        if (nr.length >= 4) {

            const i = nr.length % 3;
            result += nr.slice(0, i) + configString.castToNumber.spliter + nr.slice(i).match(/\d{3}/g).join(configString.castToNumber.spliter);

        } else result += nr;
        if (nf !== '0') {

            result += configString.castToNumber.spliterRF;

            if (nf.length >= 4) {

                const i = nf.length % 3;
                result += nf.match(/\d{1,3}/g).map(s => s.padEnd(3, 0)).join(configString.castToNumber.spliter);

            } else result += nf.padEnd(3, 0);

        };

    } else result = nr + configString.castToNumber.spliter + nf;

    return result || number.toString();

};

/**
 * Функция для преобразования числа к заданному виду.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {number} number Число, которое необходимо привести к определенной форме.
*/
export function stringCastToNumber(number, part = true) {

    return castToNumberDeceit({ number, part });

};

//#endregion
//#region castToNumberPhone 0.0.0

/**
 * @typedef TBcastToNumberPhone
 * @prop {string} local
 * @prop {string} number
 * @typedef {TBcastToNumberPhone} TcastToNumberPhone
*/

/** @param {TcastToNumberPhone} t */
function castToNumberPhoneDeceit(t) {

    try {

        return castToNumberPhoneVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TcastToNumberPhone} t */
function castToNumberPhoneVerify(t) {

    const {



    } = t;

    return castToNumberPhoneHandle(t);

};
/** @param {TcastToNumberPhone} t */
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
/** @param {TcastToNumberPhone} t */
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

    if (i) result = result.slice(0, i);

    return result;

};

/**
 * Функция для приведения строки к телефонному номеру России.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} number
*/
export function stringCastToPhoneNumberRu(number) {

    return castToNumberPhoneDeceit({ number, local: 'ru' });

};
/**
 * Функция для приведения строки к телефонному номеру Украины.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} number
*/
export function stringCastToPhoneNumberUa(number) {

    return castToNumberPhoneDeceit({ number, local: 'ua' });

};
/**
 * Функция для приведения строки к телефонному номеру Казахстана.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} number
*/
export function stringCastToPhoneNumberKz(number) {

    return castToNumberPhoneDeceit({ number, local: 'kz' });

};
/**
 * Функция для приведения строки к телефонному номеру Беларуссии.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} number
*/
export function stringCastToPhoneNumberBlr(number) {

    return castToNumberPhoneDeceit({ number, local: 'blr' });

};

//#endregion