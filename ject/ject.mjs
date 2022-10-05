import { config } from "../config.mjs";
import { logChainError } from "../log/log.mjs";

//#region fill 0.0.0

/**
 * @typedef {{}} Tfill
*/

/** @param {Tfill} t */
function fillDeceit(t) {

    try {

        return fillVerify.apply(this, [t]);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tfill} t */
function fillVerify(t) {

    const {

        

    } = t;

    return fillHandle.apply(this, [t]);

};
/** @param {Tfill} t */
function fillHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return fillComply.apply(this, [t]);

};
/** @param {Tfill} t */
function fillComply(t) {

    const {



    } = t;

    Object.keys(this).forEach(e => {

        if (t[e] || t[e] === 0 || t[e] === '' || t[e] === false) this[e] = t[e];

    });

};

/**
 * Функция для заполнения `полей`, заданных в `конструкторе`, данными из `объекта передачи аргументов` с помощью приёма `универсального заполнения`.
 * - Версия: `1.0.0`
 * @param {object} t Объект передачи аргументов.
*/
export function jectFill(t) {

    fillDeceit.apply(this, [t]);

};

//#endregion

/**
 * @file ject.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/