import { YString } from "../string/YString/YString.mjs";

//#region getScripts 0.0.0

/**
 * @typedef TBgetScripts
 * @prop {any} _
 * @typedef {TBgetScripts} TgetScripts
*/

/** @arg {TgetScripts} t */
function getScriptsDeceit(t) {

    try {

        return getScriptsVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetScripts} t */
function getScriptsVerify(t) {



    return getScriptsHandle(t);

};
/** @arg {TgetScripts} t */
function getScriptsHandle(t) {



    return getScriptsComply(t);

};
/** @arg {TgetScripts} t */
function getScriptsComply(t) {

    const {



    } = t;

    new YString()

        .changePrefix('<script src="./')
        .changePostfix('"></script>\n')
        .paste(...pathGetAll(/(string|number|date|ject|error|log|regexp|web\/client|web\/html).*.mjs/g).reverse())
        .get();

};

/**
 * Вспомогательная функция для получения скриптов, обязательных для загрузки.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function webGetScripts() {

    return getScriptsDeceit({  });

};

//#endregion