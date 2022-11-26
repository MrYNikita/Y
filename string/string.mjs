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
//#region find 0.0.1

/**
 * @typedef TBfind
 * @prop {string} string
 * @prop {boolean} variated
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

        variated,

    } = t;

    if (variated) t.fragments.forEach((e, i, a) => {

        if (e.constructor === String) a[i] = new RegExp(e, 'y');
        else if (!e.flags.includes('y')) a[i] = new RegExp(e, e.flags + 'y');

    }); else t.fragments = t.fragments.map(e => {

        if (e.constructor === String) return new RegExp(e);
        else return e;

    });

    t = {

        ...t,

    };

    return findComply(t);

};
/** @param {Tfind} t */
function findComply(t) {

    const {

        cls,
        string,
        variated,
        fragments,

    } = t;

    /** @type {[]|{}} */
    let results;

    if (variated) {

        results = [];

        fragments.forEach(f => {

            for (let i = 0; i < string.length; i++) {

                f.lastIndex = i;
                const m = string.match(f)?.[0];

                if (m) results.push(m);

            };

        });

    } else if (cls) {

        results = new cls();

        fragments.forEach(f => {

            const d = string.match(f);

            if (d) Object.keys(d.groups).forEach(k => (+d.groups[k]) ? results[k] = +d.groups[k] : results[k] = d.groups[k]);

        });

    } else {

        results = [];

        fragments.forEach(f => {

            const m = (f.flags.includes('g')) ? Array.from(string.matchAll(f)) : [string.match(f)];

            m.forEach(m => {

                if (m?.groups?.f) results.push(m?.groups?.f);
                else if (m) results.push(m[0]);

            });

        });

    };

    if (fragments.length === 1 && !fragments[0].flags.includes('g')) {

        if (results.length === 1) return results[0];
        else return null;

    } else return results;

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

    return findDeceit({ string, fragments, });

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
export function stringFindToJect(string, cls = Object, ...fragments) {

    return findDeceit({ string, cls, fragments, });

};
/**
 * Функция для поиска всех возможных совпадений в строке.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string
 * @param {...string|RegExp} fragments
*/
export function stringFindVariation(string, ...fragments) {

    return findDeceit({ string, fragments, variated: true, });

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
//#region handle 0.0.3

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

        if (f.constructor === String) a[i] = f = new RegExp(t.fragments);
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

        fs.forEach(m => (m) ? result = stringPaste(result, handle(m[0]), m.index, m[0].length) : 0);

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
//#region replace 0.0.1

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

    t.replaces = t.replaces.map(p => (p[0].constructor === RegExp) ? p : [new RegExp(p[0]), p[1]]);

    t = {

        ...t,

    };

    return replaceComply(t);

};
/** @param {Treplace} t */
function replaceComply(t) {

    const {

        string,
        replaces,

    } = t;

    let result = string;

    replaces.forEach(p => {

        if (p[0].flags.includes('g')) {

            const m = Array.from(result.matchAll(p[0]));

            if (m.length) {

                result = result.split(p[0]);

                if (m[0].groups?.r) {

                    for (let i = 1, c = 0; i < result.length; i += 2, c++) result[i] = m[c][0].replace(m[c].groups.r, p[1]);

                    result = result.join('');

                } else result = result.join(p[1]);

            };

        } else {

            const m = result.match(p[0]);

            if (m) {

                if (!m?.groups?.r) m.groups = { r: m[0] };

                result = result.replace(m[0], m[0].replace(m.groups.r, p[1]));
            };

        };

        result.replace('\x1b[39m\x1b[39m', '\x1b[39m');

    });

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

    return `${stringGetColor(color, bright, background)}${string}${stringGetColor('reset', 0, background)}`;

};

/**
 * Функция для перекрашивания строки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} color
 * @param {string} string
 * @param {boolean} bright
 * @param {boolean} background
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
//#region reflect 0.0.0

/**
 * @typedef TBreflect
 * @prop {string} string
 * @prop {boolean} every
 * @prop {Array<[string,string]>} mirrors
 * @typedef {TBreflect} Treflect
*/

/** @param {Treflect} t */
function reflectDeceit(t) {

    try {

        return reflectVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Treflect} t */
function reflectVerify(t) {

    const {



    } = t;

    return reflectHandle(t);

};
/** @param {Treflect} t */
function reflectHandle(t) {

    let {



    } = t;

    if (t.mirrors.length) t.mirrors.forEach(m => m[0] = new RegExp(m[0], 'g'));

    t = {

        ...t,

    };

    return reflectComply(t);

};
/** @param {Treflect} t */
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
 * @param {string} string Исходная строка.
 * @param {boolean} every Логическое значение, которое определяет, как следует проводить отражение.
 * Значение `true` означает, что необходимо зеркально отразить каждую строку с переносом по отдельности.
 * Значение `false` же прибавит инвертированную копию текущей строки на конец исходной.
 * - По умоланию `false`
 * @param {...[string,string]} mirrors Зеркальные символы. Представлен парой ключ-значение.
 * По ключу осуществляется поиск символа исходной строки.
 * Найденное совпадение в отражении заменяется значением, если соответсвующий ключ существует.
 * - По умолчанию `[]`
*/
export function stringReflect(string, every = false, ...mirrors) {

    return reflectDeceit({ string, every, mirrors });

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

//#region getColor 0.0.0

/**
 * @typedef TBgetColor
 * @prop {string} color
 * @prop {boolean} bright
 * @prop {boolean} background
 * @typedef {TBgetColor} TgetColor
*/

/** @param {TgetColor} t */
function getColorDeceit(t) {

    try {

        return getColorVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TgetColor} t */
function getColorVerify(t) {

    const {



    } = t;

    return getColorHandle(t);

};
/** @param {TgetColor} t */
function getColorHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return getColorComply(t);

};
/** @param {TgetColor} t */
function getColorComply(t) {

    const {

        color,
        bright,
        background,

    } = t;

    let result = Object.entries({

        red: 31,
        cyan: 36,
        blue: 34,
        reset: 39,
        black: 30,
        green: 32,
        white: 37,
        yellow: 33,
        magenta: 35,

    }).find(c => c[0].match(new RegExp(color)));

    if (background) result[1] += 10;
    if (bright && result[0] !== 'reset') result[1] += 60;

    return `\x1b[${result[1]}m`;

};

/**
 * Функция для определения цвета.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} color
 * @param {boolean} bright
 * @param {boolean} background
*/
export function stringGetColor(color, bright, background) {

    return getColorDeceit({ color, bright, background });

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
//#region castToSample 0.0.0

/**
 * @typedef TBcastToSample
 * @prop {string} string
 * @typedef {TBcastToSample} TcastToSample
*/

/** @param {TcastToSample} t */
function castToSampleDeceit(t) {

    try {

        return castToSampleVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TcastToSample} t */
function castToSampleVerify(t) {

    const {



    } = t;

    return castToSampleHandle(t);

};
/** @param {TcastToSample} t */
function castToSampleHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return castToSampleComply(t);

};
/** @param {TcastToSample} t */
function castToSampleComply(t) {

    const {

        string,

    } = t;

    return new YString(string).replace(

        [/\n/g, '\\n'],
        [/\r/g, '\\r'],
        [/\x1b/, '\\x1b'],

    ).get();

};

/**
 * Функция для преобразования строки в строку с отображением всех спициальных символов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string Исходная строка.
*/
export function stringCastToSample(string) {

    return castToSampleDeceit({ string });

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
//#region castToYReport 0.0.0

/**
 * @typedef TBcastToYReport
 * @prop {string} string
 * @typedef {TBcastToYReport} TcastToYReport
*/

/** @param {TcastToYReport} t */
function castToYReportDeceit(t) {

    try {

        return castToYReportVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TcastToYReport} t */
function castToYReportVerify(t) {

    const {



    } = t;

    return castToYReportHandle(t);

};
/** @param {TcastToYReport} t */
function castToYReportHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return castToYReportComply(t);

};
/** @param {TcastToYReport} t */
function castToYReportComply(t) {

    const {

        string,

    } = t;

    return new YString(string)

        .handle(s => stringRepaint(s, 'c'), /[.,:;~\-\[\]]/g)
        .handle(s => stringRepaint)
        .replace([/true/g, '+'])
        .replace([/false/g, '-'])
        // .handle(s => stringReplace(s, [/:(\x1b\[\d+m)?(?<r>.*?)(\x1b\[\d+m)?;/, stringRepaint(stringFind(s, /:(\x1b\[\d+m)?(?<f>.*?)(\x1b\[\d+m)?;/), 'ye', 1)]), /:.*?;/g)
        .get()

};

/**
 * Преобразование строки в оформленную строку отчета для Y элементов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string Исходная строка.
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

    if (i !== -1) result = result.slice(0, i);

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

//#region convertCamelCaseToDelimetr 0.0.0

/**
 * @typedef TBconvertCamelCaseToDelimetr
 * @prop {string} string
 * @prop {string} delimetr
 * @prop {boolean} lower
 * @typedef {TBconvertCamelCaseToDelimetr} TconvertCamelCaseToDelimetr
*/

/** @param {TconvertCamelCaseToDelimetr} t */
function convertCamelCaseToDelimetrDeceit(t) {

    try {

        return convertCamelCaseToDelimetrVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TconvertCamelCaseToDelimetr} t */
function convertCamelCaseToDelimetrVerify(t) {

    const {



    } = t;

    return convertCamelCaseToDelimetrHandle(t);

};
/** @param {TconvertCamelCaseToDelimetr} t */
function convertCamelCaseToDelimetrHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return convertCamelCaseToDelimetrComply(t);

};
/** @param {TconvertCamelCaseToDelimetr} t */
function convertCamelCaseToDelimetrComply(t) {

    const {

        lower,
        string,
        delimetr,

    } = t;

    return lower ? string[0].toLowerCase() + stringHandle(string.slice(1), s => delimetr + s.toLowerCase(), /[A-Z]/) : stringHandle(string, s => delimetr + s.toLowerCase(), /[A-Z]/);;

};

/**
 * Функция для трансофрмации строки `CamelCase` в строку с разделителем.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {string} string Исходная строка.
 * @param {string} delimetr Разделитель.
 * - По умолчанию `-`
 * @param {boolean} lower Логическое значение, определяющее стиль `CamelCase` строки, как `lower`.
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

/** @param {TconvertDelimetrToCamelCase} t */
function convertDelimetrToCamelCaseDeceit(t) {

    try {

        return convertDelimetrToCamelCaseVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TconvertDelimetrToCamelCase} t */
function convertDelimetrToCamelCaseVerify(t) {

    const {



    } = t;

    return convertDelimetrToCamelCaseHandle(t);

};
/** @param {TconvertDelimetrToCamelCase} t */
function convertDelimetrToCamelCaseHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return convertDelimetrToCamelCaseComply(t);

};
/** @param {TconvertDelimetrToCamelCase} t */
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
 * @param {string} string Исходная строка.
 * @param {string} delimetr Разделитель строки.
 * - По умолчанию `false`
 * @param {boolean} lower Логическо значение определяющее стиль `CamelCase` как `lower`.
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