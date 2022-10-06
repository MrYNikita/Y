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
//#region change 0.0.0

/**
 * @typedef TBchange
 * @prop {{}} ject
 * @prop {[{}]} changes
 * @typedef {TBchange} Tchange
*/

/** @param {Tchange} t */
function changeDeceit(t) {

    try {

        return changeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tchange} t */
function changeVerify(t) {

    const {



    } = t;

    return changeHandle(t);

};
/** @param {Tchange} t */
function changeHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return changeComply(t);

};
/** @param {Tchange} t */
function changeComply(t) {

    const {

        ject,
        changes,

    } = t;

    changes.forEach(c => Object.entries(c).forEach(p => ject[p[0]] = p[1]));

};

/**
 * Функция для изменения исходного объекта свойствами остаточных объектов.
 * 
 * Изменение происходит за счет свойств остаточных объектов.
 * Если свойство есть у остаточного объекта, то его значение будет перезаписано исходному.
 * @param {{}} ject Исходный объект.
 * @param {...{}} changes Остаточные объекты изменения.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function jectChange(ject, ...changes) {

    changeDeceit({ ject, changes, });

};

//#endregion
//#region getDeep 0.0.0

/**
 * @typedef TBgetDeep
 * @prop {{}} ject
 * @prop {string} property
 * @typedef {TBgetDeep} TgetDeep
*/

/** @param {TgetDeep} t */
function getDeepDeceit(t) {

    try {

        return getDeepVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TgetDeep} t */
function getDeepVerify(t) {

    const {



    } = t;

    return getDeepHandle(t);

};
/** @param {TgetDeep} t */
function getDeepHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return getDeepComply(t);

};
/** @param {TgetDeep} t */
function getDeepComply(t) {

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
export function jectGetDeep(ject, property) {

    return getDeepDeceit({ ject, property });

};

//#endregion
//#region setDeep 0.0.0

/**
 * @typedef TBsetDeep
 * @prop {any} value
 * @typedef {TBsetDeep&TgetDeep} TsetDeep
*/

/** @param {TsetDeep} t */
function setDeepDeceit(t) {

    try {

        return setDeepVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TsetDeep} t */
function setDeepVerify(t) {

    const {



    } = t;

    return setDeepHandle(t);

};
/** @param {TsetDeep} t */
function setDeepHandle(t) {

    let {



    } = t;

    t = {

        ...t,

    };

    return setDeepComply(t);

};
/** @param {TsetDeep} t */
function setDeepComply(t) {

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
export function jectSetDeep(ject, property, value) {

    setDeepDeceit({ ject, property, value });

};

//#endregion
//#region supplement 0.0.0

/**
 * @typedef TBsupplement
 * @prop {{}} ject
 * @prop {[{}]} supplements
 * @typedef {TBsupplement} Tsupplement
*/

/** @param {Tsupplement} t */
function supplementDeceit(t) {

    try {

        return supplementVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tsupplement} t */
function supplementVerify(t) {

    const {



    } = t;

    return supplementHandle(t);

};
/** @param {Tsupplement} t */
function supplementHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return supplementComply(t);

};
/** @param {Tsupplement} t */
function supplementComply(t) {

    const {

        ject,
        supplements,

    } = t;

    supplements.forEach(s => {

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
 * @param {...{}} supplements Объекты дополнения.
*/
export function jectSupplement(ject, ...supplements) {

    supplementDeceit({ ject, supplements });

};

//#endregion

/**
 * @file ject.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/