//#region create 0.0.0

import { elementCreateByString } from "../element/element.mjs";
import { YElementStyle } from "../element/YElement/YElementStyle/YElementStyle.mjs";

/**
 * @typedef TBcreate
 *
 * @typedef {TBcreate} Tcreate
*/

/** @param {Tcreate} t */
function createDeceit(t) {

    try {

        return createVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {Tcreate} t */
function createVerify(t) {

    const {



    } = t;

    return createHandle(t);

};
/** @param {Tcreate} t */
function createHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return createComply(t);

};
/** @param {Tcreate} t */
function createComply(t) {

    const {



    } = t;



};

/**
 * Функция для создания стиля.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function styleCreate() {



};

//#endregion

//#region applyY 0.0.0

/**
 * @typedef TBapplyY
 * @prop {any} _
 * @typedef {TBapplyY} TapplyY
*/

/** @param {TapplyY} t */
function applyYDeceit(t) {

    try {

        return applyYVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TapplyY} t */
function applyYVerify(t) {



    return applyYHandle(t);

};
/** @param {TapplyY} t */
function applyYHandle(t) {



    return applyYComply(t);

};
/** @param {TapplyY} t */
function applyYComply(t) {

    const {



    } = t;

    new YElementStyle({ id: 'global', });
    new YElementStyle({ id: 'local', });
    new YElementStyle({ id: 'private', });

};

/**
 * Функция для принятия системы стилей `Y`.
 *
 * Принятие стилей создает систему стилей `Y`.
 * Данные стили подразумевают создание таблиц `global`, `local` и `private`.
 *
 * `Global` (глобальная) таблица описывает общие для всех страниц стили.
 * Данная таблица одинаковая для всех страниц.
 *
 * `Local` (локальная) таблица описывает особенности раздела сайта.
 * Применяется только для данной конкретной страницы.
 *
 * `Private` (пользовательская) таблица стилей.
 * Настраивается пользователем и применяется на всех страницах с максимальным приоритетом.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function styleApplyY() {

    return applyYDeceit({  });

};

//#endregion