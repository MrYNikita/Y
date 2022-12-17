import { config } from "../../../config.mjs";
import { stringReplace, stringReplaceAll, stringShield } from "../../../string/string.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { YElementStyle } from "../element/YElement/YElementStyle/YElementStyle.mjs";

export const styleREProperty = / ?(.*?;|{.*?})/;

//#region create 0.0.0

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

//#region change 0.0.0

/**
 * @typedef TBchange
 * @prop {string} label
 * @prop {string} property
 * @prop {string|{}} value
 * @prop {HTMLElement} element
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



    return changeHandle(t);

};
/** @param {Tchange} t */
function changeHandle(t) {

    t.label = stringShield(t.label);

    return changeComply(t);

};
/** @param {Tchange} t */
function changeComply(t) {

    const {

        value,
        label,
        element,
        property,

    } = t;

    let s = element.innerHTML;

    const ystr = new YString(element.innerHTML).find();

    return '';

};

/**
 * Функция для изменения строки стиля.
 * Позволяет удалять, добавлять или изменять свойства.
 * Допускает вложенность - это позволяет создавать размещения внутри стилей вложенных стилей, например для анимаций.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {HTMLStyleElement} element Элемент стиля, для которого осуществялется изменение.
 * @param {string} label Метка с селектором, для которой будут внесены изменения.
 * Указывает на искомый стиль.
 * Для упрощения указания используются `y-селекторы`:
 * - `~` - для анимаций.
 * Перым параметром указывается селектор.
 * @param {string} property Свойство, которое нужно изменить в стиле.
 * @param {string|{}} value Значение, которое необходимо определить для свойства.
 * Если является `числом` или `строкой`, то будет размещено как строка.
 * Если является `объектом`, то будет создано, как вложение.
*/
export function styleChange(element, label, property, value) {

    return changeDeceit({ element, label, property, value, });

};

//#endregion

//#region formatLine 0.0.0

/**
 * @typedef TBformatLine
 * @prop {any} _
 * @typedef {TBformatLine} TformatLine
*/

/** @param {TformatLine} t */
function formatLineDeceit(t) {

    try {

        return formatLineVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TformatLine} t */
function formatLineVerify(t) {



    return formatLineHandle(t);

};
/** @param {TformatLine} t */
function formatLineHandle(t) {



    return formatLineComply(t);

};
/** @param {TformatLine} t */
function formatLineComply(t) {

    const {



    } = t;



};

/**
 * Функция формотирования строки стиля.
 * Форматирует стиль в линию.
 * Минимализирует строку, убирая избыточные переносы строк и прочие символы.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function styleFormatLine() {



};

//#endregion
//#region formatLines 0.0.0

/**
 * @typedef TBformatLines
 * @prop {any} _
 * @typedef {TBformatLines} TformatLines
*/

/** @param {TformatLines} t */
function formatLinesDeceit(t) {

    try {

        return formatLinesVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TformatLines} t */
function formatLinesVerify(t) {



    return formatLinesHandle(t);

};
/** @param {TformatLines} t */
function formatLinesHandle(t) {



    return formatLinesComply(t);

};
/** @param {TformatLines} t */
function formatLinesComply(t) {

    const {



    } = t;



};

/**
 * Функция форматирования строки стиля в многострочную строку.
 * Добавляет переносы строки, делая стили более читаемыми.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function styleFormatLines() {



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