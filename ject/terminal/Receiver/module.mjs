//#region YI

import { YBind } from './bind/class.mjs';
import { YComb } from './bind/comb/class.mjs';
import { YReceiver } from './class.mjs';
import { YResponse } from './response/class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### receiverT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 *
 * Основной параметр модуля `receiver`.
 *
 * @typedef receiverT
 * @prop {receiverTTReceiver} receiver
 *
*/
/** ### receiverTComb
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 *
 *
 *
 * @typedef receiverTComb
 * @prop {receiverTTComb} comb
 *
*/

/** ### receiverTTComb
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 *
 *
 *
 * @typedef {YComb} receiverTTComb
 *
*/
/** ### receiverTTReceiver
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 *
 *
 *
 * @typedef {YReceiver} receiverTTReceiver
 *
*/

//#endregion
//#region YV



//#endregion

//#region findBind 0.0.0

/** ### receiverTFFindBind
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 * ***
 *
 * Результирующие параметры функции `findBind`.
 *
 * @typedef {receiverTFUFindBind&receiverT&receiverTComb} receiverTFFindBind
 *
*/
/** ### receiverTFUFindBind
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 *
 * Уникальные параметры функции `findBind`.
 *
 * @typedef receiverTFUFindBind
 * @prop {any} _
*/

/** @arg {receiverTFFindBind} t */
function findBindDeceit(t) {

    try {

        return findBindVerify(t);

    } catch (e) {

        if (config?.strict) throw e;

        return undefined;

    };

};
/** @arg {receiverTFFindBind} t */
function findBindVerify(t) {

    const {



    } = t;

    return findBindHandle(t);

};
/** @arg {receiverTFFindBind} t */
function findBindHandle(t) {

    const {



    } = t;

    return findBindComply(t);

};
/** @arg {receiverTFFindBind} t */
function findBindComply(t) {

    const {

        comb,
        receiver,

    } = t;

    /** @type {YBind[]} */
    const a = [...receiver.binds, ...receiver.constructor.binds].map(b => {

        switch (b.constructor) {

            case YBind: return b;
            case Array: return new YBind(...b);
            case Object: return new YBind(b);

        };

    });

    let f = a.find(b => b.comb.equal(comb));

    if (f) {

        return f;

    } else {

        f = a.find(b => b.comb.code === 'text');

        if (f && !comb.code.match(/\x1b|\n|\r|\t/)) {

            return f;

        };

        return null;

    };

};

/**
 * ### receiverFindBind
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject\terminal\receiver`
 * ***
 *
 * Функция поиска привязки в указанном приёмнике по указанной комбинации.
 *
 * ***
 * @arg {receiverTTComb} comb `Комбинация`
 * @arg {receiverTTReceiver} receiver `Приёмник`
*/
export function receiverFindBind(receiver, comb) {

    return findBindDeceit({ receiver, comb });

};

//#endregion
//#region execBind 0.0.0

/** ### receiverTFExecBind
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 * ***
 *
 * Результирующие параметры функции `execBind`.
 *
 * @typedef {receiverTFUExecBind&receiverT&receiverTComb} receiverTFExecBind
 *
*/
/** ### receiverTFUExecBind
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 *
 * Уникальные параметры функции `execBind`.
 *
 * @typedef receiverTFUExecBind
 * @prop {any} _
*/

/** @arg {receiverTFExecBind} t */
function execBindDeceit(t) {

    try {

        return execBindVerify(t);

    } catch (e) {

        if (config?.strict) throw e;

        return undefined;

    };

};
/** @arg {receiverTFExecBind} t */
function execBindVerify(t) {

    const {



    } = t;

    return execBindHandle(t);

};
/** @arg {receiverTFExecBind} t */
function execBindHandle(t) {

    const {



    } = t;

    return execBindComply(t);

};
/** @arg {receiverTFExecBind} t */
function execBindComply(t) {

    const {

        comb,
        receiver,

    } = t;

    const bind = receiverFindBind(receiver, comb);

    if (bind) {

        bind.exec(receiver);

        const response = new YResponse({ ...bind });

        return response;

    };

    return null;

};

/**
 * ### receiverExecBind
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `ject\terminal\receiver`
 * ***
 *
 * Функция выполнения привязки в указанном приёмнике по её комбинации.
 *
 * ***
 * @arg {receiverTTComb} comb `Комбинация`
 * @arg {receiverTTReceiver} receiver `Приёмник`
*/
export function receiverExecBind(receiver, comb) {

    return execBindDeceit({ comb, receiver, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/