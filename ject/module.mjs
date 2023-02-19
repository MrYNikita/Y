//#region YI

import { config } from "../config.mjs";

//#endregion
//#region YT

/** ### jectT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Основной параметр модуля `ject`.
 *
 * @typedef jectT
 * @prop {{}} ject
 *
*/

//#endregion
//#region YV

//#endregion

//#region fill 0.3.0

/** ### jectTFFill
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `fill`.
 *
 * @typedef {jectTFUFill&jectT} jectTFFill
 *
*/
/** ### jectTFUFill
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры функции `fill`.
 *
 * @typedef jectTFUFill
 * @prop {{}} filler
*/

/** @arg {jectTFFill} t */
function fillDeceit(t) {

    try {

        return fillVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {jectTFFill} t */
function fillVerify(t) {

    const {



    } = t;

    return fillHandle(t);

};
/** @arg {jectTFFill} t */
function fillHandle(t) {

    const {



    } = t;

    return fillComply(t);

};
/** @arg {jectTFFill} t */
function fillComply(t) {

    const {

        ject,
        filler,

    } = t;

    Object.keys(filler).forEach(p => filler[p] !== undefined && (ject[p] = filler[p]));

    return ject;

};

/**
 * ### jectFill
 * - Версия `0.3.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция заполнения объекта свойствами указанного заполнителя.
 *
 * ***
 * @arg {TJ1} ject
 * @arg {TJ2} filler
 * @returns {TJ1&TJ2}
 * @template TJ1
 * @template TJ2
*/
export function jectFill(ject, filler) {

    return fillDeceit({ ject, filler, });

};

//#endregion
//#region supplement 0.1.0

/** ### jectTFSupplement
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `supplement`.
 *
 * @typedef {jectTFUSupplement&jectT} jectTFSupplement
 *
*/
/** ### jectTFUSupplement
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры функции `supplement`.
 *
 * @typedef jectTFUSupplement
 * @prop {jectT} supplement
*/

/** @arg {jectTFSupplement} t */
function supplementDeceit(t) {

    try {

        return supplementVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {jectTFSupplement} t */
function supplementVerify(t) {

    const {



    } = t;

    return supplementHandle(t);

};
/** @arg {jectTFSupplement} t */
function supplementHandle(t) {

    const {



    } = t;

    return supplementComply(t);

};
/** @arg {jectTFSupplement} t */
function supplementComply(t) {

    const {

        ject,
        supplement,

    } = t;

    Object.keys(supplement).forEach(p => ject[p] === undefined ?? (ject[p] === supplement[p]));

    return ject;

};

/**
 * ### jectSupplement
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция дополнения указанного объекта свойствами дополнителя.
 *
 * ***
 * @arg {TJ} ject `Объект`
 * @arg {TS} supplement `Дополнитель`
 * @returns {TJ&TS}
 * @template TJ
 * @template TS
*/
export function jectSupplement(ject, supplement) {

    return supplementDeceit({ ject, supplement, });

};

//#endregion

//#region adoptDefault 0.0.0

/** ### jectTFAdoptDefault
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `adoptDefault`.
 *
 * @typedef {jectTFUAdoptDefault&jectT} jectTFAdoptDefault
 *
*/
/** ### jectTFUAdoptDefault
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры функции `adoptDefault`.
 *
 * @typedef jectTFUAdoptDefault
 * @prop {{}} owner
*/

/** @arg {jectTFAdoptDefault} t */
function adoptDefaultDeceit(t) {

    try {

        return adoptDefaultVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {jectTFAdoptDefault} t */
function adoptDefaultVerify(t) {

    const {



    } = t;

    return adoptDefaultHandle(t);

};
/** @arg {jectTFAdoptDefault} t */
function adoptDefaultHandle(t) {

    const {



    } = t;

    return adoptDefaultComply(t);

};
/** @arg {jectTFAdoptDefault} t */
function adoptDefaultComply(t) {

    const {

        ject,
        owner,

    } = t;

    Object.keys(owner).filter(p => p.startsWith('default')).forEach(p => ject[p] = owner[p]);

    return ject;

};

/**
 * ### jectAdoptDefault
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция перенятия свойств с префиксом `default` получаетлем от указанного обладателя.
 *
 * Данная функция используется классами, для определения статических дефолт свойств.
 *
 * ***
 * @arg {TJ} ject `Объект`
 * @arg {TJ} owner `Обладатель`
 * @returns {TJ}
 * @template {{}} TJ
*/
export function jectAdoptDefault(ject, owner) {

    return adoptDefaultDeceit({ ject, owner });

};

//#endregion
//#region adoptByDefault 0.0.1

/** ### jectTFAdoptByDefault
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject`
 * ***
 *
 * Результирующие параметры функции `adoptByDefault`.
 *
 * @typedef {jectTFUAdoptByDefault&jectT} jectTFAdoptByDefault
 *
*/
/** ### jectTFUAdoptByDefault
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject`
 *
 * Уникальные параметры функции `adoptByDefault`.
 *
 * @typedef jectTFUAdoptByDefault
 * @prop {{}} owner
*/

/** @arg {jectTFAdoptByDefault} t */
function adoptByDefaultDeceit(t) {

    try {

        return adoptByDefaultVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {jectTFAdoptByDefault} t */
function adoptByDefaultVerify(t) {

    const {



    } = t;

    return adoptByDefaultHandle(t);

};
/** @arg {jectTFAdoptByDefault} t */
function adoptByDefaultHandle(t) {

    const {



    } = t;

    return adoptByDefaultComply(t);

};
/** @arg {jectTFAdoptByDefault} t */
function adoptByDefaultComply(t) {

    const {

        ject,
        owner,

    } = t;


    Object.keys(ject).forEach(p => {

        const pd = 'default' + p[0].toUpperCase() + p.slice(1);

        if (!ject[p] && owner[pd] !== undefined) {

            ject[p] = owner[pd];

        };

    });

    return ject;

};

/**
 * ### jectAdoptByDefault
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * - Модуль `ject`
 * ***
 *
 * Функция заполнения свойств получателя дефолт свойствами обладателя.
 *
 * ***
 * @arg {TJ} ject `Получаетль`
 * @arg {TJ} owner `Обладатель`
 * @returns {TJ}
 * @template {{}} TJ
*/
export function jectAdoptByDefault(ject, owner) {

    return adoptByDefaultDeceit({ ject, owner });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/