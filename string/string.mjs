import { arrayGetRandomElement, arrayGetRandomElementMany, arrayReplace, } from "../array/array.mjs";
import { config, configString, configYInsert } from "../config.mjs";
import { numberGetFrac, numberGetRandomReal, numberGetReal, numberGetSequence } from "../number/number.mjs";
import { YRegExp } from "../regexp/YRegExp/YRegExp.mjs";
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

/** @arg {Tpad} t */
function padDeceit(t) {

    try {

        return padVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tpad} t */
function padVerify(t) {

    const {



    } = t;

    return padHandle(t);

};
/** @arg {Tpad} t */
function padHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return padComply(t);

};
/** @arg {Tpad} t */
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
 * @arg {string} pad Строка дополнения.
 * @arg {string} string Исходная строка.
 * @arg {number} count Кол-во повторений строки дополнения.
 * @arg {boolean} left Место стыка.
*/
export function stringPad(string, pad, count, index = string.length) {

    return padDeceit({ string, pad, index, count });

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
//#region paste 0.0.0

/**
 * @typedef TBpaste
 * @prop {number} size
 * @prop {number} index
 * @prop {string} paste
 * @prop {string} string
 * @typedef {TBpaste} Tpaste
*/

/** @arg {Tpaste} t */
function pasteDeceit(t) {

    try {

        return pasteVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tpaste} t */
function pasteVerify(t) {

    const {



    } = t;

    return pasteHandle(t);

};
/** @arg {Tpaste} t */
function pasteHandle(t) {

    return pasteComply(t);

};
/** @arg {Tpaste} t */
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
 * @arg {number} size Размер вставки.
 * @arg {number} index Индекс вставки.
 * @arg {string} paste Строка вставки.
 * @arg {string} string Исходная строка.
*/
export function stringPaste(string, paste, index, size = 0) {

    return pasteDeceit({ string, paste, index, size, });

};

//#endregion
//#region insert 0.0.0

/**
 * @typedef TBinsert
 * @prop {string} string
 * @prop {string[]} inserts
 * @typedef {TBinsert} Tinsert
*/

/** @arg {Tinsert} t */
function insertDeceit(t) {

    try {

        return insertVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tinsert} t */
function insertVerify(t) {



    return insertHandle(t);

};
/** @arg {Tinsert} t */
function insertHandle(t) {



    return insertComply(t);

};
/** @arg {Tinsert} t */
function insertComply(t) {

    const {

        string,
        inserts,

    } = t;

    const {

        delimiter,
        defaultValue,

    } = configString.insert;

    let result = string;

    inserts.forEach(i => {

        const index = i.indexOf(delimiter);
        result = stringReplaceAll(result, i.slice(index + 1) ?? defaultValue, configYInsert.borderL + i.slice(0, index) + configYInsert.borderR);

    });

    return result;

};

/**
 * Функция вставки в поля указанных значений значений.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
 * @arg {...string} inserts Вставки.
*/
export function stringInsert(string, ...inserts) {

    return insertDeceit({ string, inserts, });

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
//#region remove 0.0.1

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
    if (t.start >= t.string.length) t.start = t.string.length - 1;

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
//#region repaint 0.0.0

/**
 * @typedef TBrepaint
 * @prop {string} color
 * @prop {string} string
 * @typedef {TBrepaint} Trepaint
*/

/** @arg {Trepaint} t */
function repaintDeceit(t) {

    try {

        return repaintVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Trepaint} t */
function repaintVerify(t) {

    const {



    } = t;

    return repaintHandle(t);

};
/** @arg {Trepaint} t */
function repaintHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return repaintComply(t);

};
/** @arg {Trepaint} t */
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
 * @arg {string} color
 * @arg {string} string
 * @arg {boolean} bright
 * @arg {boolean} background
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
 * - По умоланию `false`
 * @arg {...[string,string]} mirrors Зеркальные символы. Представлен парой ключ-значение.
 * По ключу осуществляется поиск символа исходной строки.
 * Найденное совпадение в отражении заменяется значением, если соответсвующий ключ существует.
 * - По умолчанию `[]`
*/
export function stringReflect(string, every = false, ...mirrors) {

    return reflectDeceit({ string, every, mirrors });

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

//#region getColor 0.0.0

/**
 * @typedef TBgetColor
 * @prop {string} color
 * @prop {boolean} bright
 * @prop {boolean} background
 * @typedef {TBgetColor} TgetColor
*/

/** @arg {TgetColor} t */
function getColorDeceit(t) {

    try {

        return getColorVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetColor} t */
function getColorVerify(t) {

    const {



    } = t;

    return getColorHandle(t);

};
/** @arg {TgetColor} t */
function getColorHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return getColorComply(t);

};
/** @arg {TgetColor} t */
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
 * @arg {string} color
 * @arg {boolean} bright
 * @arg {boolean} background
*/
export function stringGetColor(color, bright, background) {

    return getColorDeceit({ color, bright, background });

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

//#region replace 0.1.0

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

        if (m.groups?.r) return string.replace(m[0], m[0].replace(m.groups.r, replace));
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
//#region replaceAll 0.0.0

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

        if (m.groups?.r) result = stringPaste(stringRemove(result, m.index, m[0].length), m[0].replace(m.groups.r, replace), m.index);
        else result = stringPaste(stringRemove(result, m.index, m[0].length), replace, m.index);

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
//#region castToSample 0.0.1

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

    let {



    } = t;



    t = {

        ...t,

    };

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
//#region castToNumber 0.0.0

/**
 * @typedef TBcastToNumber
 * @prop {number} number
 * @prop {boolean} part
 * @typedef {TBcastToNumber} TcastToNumber
*/

/** @arg {TcastToNumber} t */
function castToNumberDeceit(t) {

    try {

        return castToNumberVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcastToNumber} t */
function castToNumberVerify(t) {

    const {



    } = t;

    return castToNumberHandle(t);

};
/** @arg {TcastToNumber} t */
function castToNumberHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return castToNumberComply(t);

};
/** @arg {TcastToNumber} t */
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
 * @arg {number} number Число, которое необходимо привести к определенной форме.
*/
export function stringCastToNumber(number, part = true) {

    return castToNumberDeceit({ number, part });

};

//#endregion
//#region castToYReport 0.0.1

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

        .handle(s => stringRepaint(s, 'c'), /[.,:;~\-\[\]\/#]/g)
        .replaceAll(

            ['+', /true/],
            ['_', /null/],
            ['-', /false/],
            ['?', /undefinded/],
            ['\n' ,/.(?<r>\n\n)/],

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