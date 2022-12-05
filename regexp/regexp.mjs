import { config } from "../config.mjs";
import { arrayAppend } from "../array/array.mjs";

//#region split 0.0.0

/**
 * @typedef TBsplit
 * @prop {RegExp} regexp
 * @typedef {TBsplit} Tsplit
*/

/** @param {Tsplit} t */
function splitDeceit(t) {

    try {

        return splitVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tsplit} t */
function splitVerify(t) {

    const {



    } = t;

    return splitHandle(t);

};
/** @param {Tsplit} t */
function splitHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return splitComply(t);

};
/** @param {Tsplit} t */
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
 * @param {RegExp} regexp
*/
export function regexpSplit(regexp) {

    return splitDeceit({ regexp });

};

//#endregion