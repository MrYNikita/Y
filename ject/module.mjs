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
//#region adoptByDefault 0.0.0

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

        if (!ject[p] && owner[pd]) {

            ject[p] = owner[pd];

        };

    });

    return ject;

};

/**
 * ### jectAdoptByDefault
 * - Версия `0.0.0`
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