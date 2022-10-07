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
//#region deepGet 0.0.0

/**
 * @typedef TBdeepGet
 * @prop {{}} ject
 * @prop {string} property
 * @typedef {TBdeepGet} TdeepGet
*/

/** @param {TdeepGet} t */
function deepGetDeceit(t) {

    try {

        return deepGetVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TdeepGet} t */
function deepGetVerify(t) {

    const {



    } = t;

    return deepGetHandle(t);

};
/** @param {TdeepGet} t */
function deepGetHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return deepGetComply(t);

};
/** @param {TdeepGet} t */
function deepGetComply(t) {

    const {

        ject,
        property,

    } = t;

    const structures = [ject];

    for (; structures.length;) {

        const s = structures.pop();

        if (s.hasOwnProperty(property)) return s[property];
        else for (const v of Object.values(s)) if (typeof v === 'object') structures.push(v);

    };

};

/**
 * Функция для извлечения вложенного свойства из объекта.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function jectDeepGet(ject, property) {

    return deepGetDeceit({ ject, property });

};

//#endregion
//#region deepSet 0.0.0

/**
 * @typedef TBdeepSet
 * @prop {any} value
 * @typedef {TBdeepSet&TdeepGet} TdeepSet
*/

/** @param {TdeepSet} t */
function deepSetDeceit(t) {

    try {

        return deepSetVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TdeepSet} t */
function deepSetVerify(t) {

    const {



    } = t;

    return deepSetHandle(t);

};
/** @param {TdeepSet} t */
function deepSetHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return deepSetComply(t);

};
/** @param {TdeepSet} t */
function deepSetComply(t) {

    const {

        ject,
        value,
        property,

    } = t;

    const structures = [ject];

    for (; structures.length;) {

        const s = structures.pop();

        if (s.hasOwnProperty(property)) s[property] = value;
        else for (const v of Object.values(s)) if (typeof v === 'object') structures.push(v);

    };

};

/**
 * Функция для глубокой установки вложенного свойства.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {{}} ject Объект глубокой установки.
 * @param {any} value Значение для свойства глубокой установки.
 * @param {string} property Свойство глубокой установки.
 * @return {void}
*/
export function jectDeepSet(ject, property, value) {

    deepSetDeceit({ ject, property, value });

};

//#endregion
//#region deepChange 0.0.0

/**
 * @typedef TBdeepChange
 * @prop {{}} ject
 * @prop {[{}]} deepChanges
 * @typedef {TBdeepChange} TdeepChange
*/

/** @param {TdeepChange} t */
function deepChangeDeceit(t) {

    try {

        return deepChangeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TdeepChange} t */
function deepChangeVerify(t) {

    const {



    } = t;

    return deepChangeHandle(t);

};
/** @param {TdeepChange} t */
function deepChangeHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return deepChangeComply(t);

};
/** @param {TdeepChange} t */
function deepChangeComply(t) {

    const {

        ject,
        deepChanges,

    } = t;

    deepChanges.forEach(c => Object.entries(c).forEach(p => ject[p[0]] = p[1]));

};

/**
 * Функция для изменения исходного объекта свойствами остаточных объектов.
 * 
 * Изменение происходит за счет свойств остаточных объектов.
 * Если свойство есть у остаточного объекта, то его значение будет перезаписано исходному.
 * @param {{}} ject Исходный объект.
 * @param {...{}} deepChanges Остаточные объекты изменения.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function jectDeepChange(ject, ...deepChanges) {

    deepChangeDeceit({ ject, deepChanges, });

};

//#endregion
//#region deepSupplement 0.0.0

/**
 * @typedef TBdeepSupplement
 * @prop {{}} ject
 * @prop {[{}]} deepSupplements
 * @typedef {TBdeepSupplement} TdeepSupplement
*/

/** @param {TdeepSupplement} t */
function deepSupplementDeceit(t) {

    try {

        return deepSupplementVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TdeepSupplement} t */
function deepSupplementVerify(t) {

    const {



    } = t;

    return deepSupplementHandle(t);

};
/** @param {TdeepSupplement} t */
function deepSupplementHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return deepSupplementComply(t);

};
/** @param {TdeepSupplement} t */
function deepSupplementComply(t) {

    const {

        ject,
        deepSupplements,

    } = t;

    deepSupplements.forEach(s => {

        Object.entries(s).forEach(p => {

            if (!ject.hasOwnProperty(p[0])) ject[p[0]] = p[1];

        });

    });

};

/**
 * Функция дополнения объекта недостоющими свойствами указанных объектов.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {{}} ject Исходный объект.
 * @param {...{}} deepSupplements Объекты дополнения.
*/
export function jectChangeSupplement(ject, ...deepSupplements) {

    deepSupplementDeceit({ ject, deepSupplements });

};

//#endregion

/**
 * @file ject.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/