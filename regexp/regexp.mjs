import { config } from "../config.mjs";
import { arrayAppend } from "../array/array.mjs";
import { stringInsert, stringReplaceAll, stringShield } from "../string/string.mjs";

//#region split 0.0.0

/**
 * @typedef TBsplit
 * @prop {RegExp} regexp
 * @typedef {TBsplit} Tsplit
*/

/** @arg {Tsplit} t */
function splitDeceit(t) {

    try {

        return splitVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {Tsplit} t */
function splitVerify(t) {

    const {



    } = t;

    return splitHandle(t);

};
/** @arg {Tsplit} t */
function splitHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return splitComply(t);

};
/** @arg {Tsplit} t */
function splitComply(t) {

    const {

        regexp,

    } = t;

    const results = [regexp]

    Array.from(regexp.source.matchAll(/[^\\]\|/g)).forEach(e => {

        const rs = results.pop().source.split(e[0]);

        rs[0] += e[0][0];

        arrayAppend(results, ...rs.map(e => new RegExp(e, regexp.flags)));

    });

    return results;

};

/**
 * Функция для разделения регулярного выражения.
 * Данная функция извлекает вариации регулярного выражения через `|`.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {RegExp} regexp
*/
export function regexpSplit(regexp) {

    return splitDeceit({ regexp });

};

//#endregion

//#region insert 0.0.0

/**
 * @typedef TBinsert
 * @prop {RegExp} regexp
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

        regexp,
        inserts,

    } = t;

    return new RegExp(stringInsert(regexp.source, ...inserts), regexp.flags);

};

/**
 * Функция для вставки значений в регулярное выражение.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {RegExp} regexp Исходное регулярное выражение.
 * @arg {...string} inserts Вставки.
*/
export function regexpInsert(regexp, ...inserts) {

    return insertDeceit({ regexp, inserts, });

};

//#endregion
//#region castFromString 0.0.0

/**
 * @typedef TBcastFromString
 * @prop {string} string
 * @typedef {TBcastFromString} TcastFromString
*/

/** @arg {TcastFromString} t */
function castFromStringDeceit(t) {

    try {

        return castFromStringVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TcastFromString} t */
function castFromStringVerify(t) {



    return castFromStringHandle(t);

};
/** @arg {TcastFromString} t */
function castFromStringHandle(t) {



    return castFromStringComply(t);

};
/** @arg {TcastFromString} t */
function castFromStringComply(t) {

    const {

        string,

    } = t;

    return new RegExp(stringReplaceAll(stringShield(string), '', '\\\\\\'));

};

/**
 * Функция превращения строки в регулярное выражение.
 *
 * Символы исходной строки будут присвоенны данному регулярному выражению:
 * все неэкранированные символы будут экранированны, таким образом будут являться частью регулярного выражения -
 * прочие символы (не экранированные) будут вставлены, как есть. Если такие символы были квантификаторами и не являлись
 * экранированными, то в регулярном выражении они также будут квантификаторами.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} string Исходная строка.
*/
export function regexpCastFromString(string) {

    return castFromStringDeceit({ string, });

};

//#endregion