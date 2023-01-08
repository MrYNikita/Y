import { config, configStringANSI, configStringColor } from "../../../config.mjs";
import { stringFilter, stringPaste, stringReplaceAll } from "../../string.mjs";
import { YStylist } from "../YStylist/YStylist.mjs";

//#region YT

/** ### colorT
 *
 * Основной параметр модуля `color`.
 *
 * - Тип `T`
 * - Версия `0.0.0`
 * - Пространство `string.color`
 *
 * @typedef {import('../../string.mjs').stringT} colorT
 *
*/
/** ### colorTVColor
 *
 * Обозначение цвета кодом или его зарезервированным строковым названием.
 *
 * - Тип `TV`
 * - Версия `0.0.0`
 * - Пространство `string.color`
 *
 * @typedef {colorTMColors|number} colorTVColor
 *
*/
/** ### colorTMColors
 *
 * Параметр, представлен набором названий зарезервированных в конфигураторе цветов и их кодов.
 * Позволяет выбрать существующий цвет или указать возможный код от 0 до 255.
 *
 * - Тип `TM`
 * - Версия `0.0.0`
 * - Пространство `string.color`
 *
 * @typedef {keyof configStringColor['colors']} colorTMColors
 *
*/
/** ### colorTForeBackGround
 *
 * Параметр представлен объектом-носителем аргументов с указанием цвета символов и цвета фона.
 *
 * - Тип `T`
 * - Версия `0.0.0`
 * - Пространство `string.color`
 *
 * @typedef colorTForeBackGround
 * @prop {colorTVColor} foreground
 * @prop {colorTVColor} background
 *
*/
/** ### colorTString
 *
 *
 *
 * - Тип `T`
 * - Версия `0.0.0`
 * - Пространство `color`
 *
 * @typedef colorTString
 * @prop {colorT} string
 *
*/
/** ### colorTSPosition
 *
 *
 *
 * - Тип `T`
 * - Версия `0.0.0`
 * - Пространство `string.color`
 *
 * @typedef colorTPosition
 * @prop {number} index
 *
*/

//#endregion

//#region get 0.0.0

/** **colorTFget**
 *
 * Результирующие параметры функции `get`.
 *
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Пространство `color`
 *
 * @typedef {colorTFUget&colorTForeBackGround} colorTFget
 *
*/
/** **colorTFUget**
 *
 * Уникальные параметры функции `get`.
 *
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Пространство `color`
 *
 * @typedef colorTFUget
 * @prop {any} _
*/

/** @arg {colorTFget} t */
function getDeceit(t) {

    try {

        return getVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {colorTFget} t */
function getVerify(t) {



    return getHandle(t);

};
/** @arg {colorTFget} t */
function getHandle(t) {

    if (t.foreground && t.foreground.constructor === String) t.foreground = colorGetCode(t.foreground);
    if (t.background && t.background.constructor === String) t.background = colorGetCode(t.background);

    return getComply(t);

};
/** @arg {colorTFget} t */
function getComply(t) {

    const {

    } = t;

    if (t.foreground || t.foreground === 0) t.foreground = [configStringColor.valueForeground + configStringColor.valueOption, t.foreground].join(configStringANSI.delimetr);
    if (t.background || t.background === 0) t.background = [configStringColor.valueBackground + configStringColor.valueOption, t.background].join(configStringANSI.delimetr);

    return configStringANSI.start + [t.foreground, t.background].filter(e => e).join(configStringANSI.delimetr) + configStringANSI.end;

};

/**
 * Функция для получения итоговой цветовой вставки по указанному коду или названию цвета.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Пространство `string.color`
 * @arg {colorTVColor} background `Фоновый цвет`
 * @arg {colorTVColor} foreground `Символьный цвет`
*/
export function colorGet(foreground, background) {

    return getDeceit({ foreground, background, });

};

//#endregion
//#region getCode 0.0.0

/** **colorTFgetCode**
 *
 * Результирующие параметры функции `getCode`.
 *
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Пространство `color`
 *
 * @typedef {colorTFUgetCode&colorTMColors} colorTFgetCode
 *
*/
/** **colorTFUgetCode**
 *
 * Уникальные параметры функции `getCode`.
 *
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Пространство `color`
 *
 * @typedef colorTFUgetCode
 * @prop {any} _
*/

/** @arg {colorTFgetCode} t */
function getCodeDeceit(t) {

    try {

        return getCodeVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {colorTFgetCode} t */
function getCodeVerify(t) {



    return getCodeHandle(t);

};
/** @arg {colorTFgetCode} t */
function getCodeHandle(t) {



    return getCodeComply(t);

};
/** @arg {colorTFgetCode} t */
function getCodeComply(t) {

    const {



    } = t;

    return Object.entries(configStringColor.colors).find(c => c[0].match(new RegExp(t.color) || c[1] === t.color))[1];

};

/**
 * Функция получения кода указанного цвета по его зарезервированному названию.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Пространство `color`
 * @arg {colorTMColors} color `Название цвета`
 *
 * Если указано в неполном (обрывистом) варианте, то вернет приблизительное совпадение.
*/
export function colorGetCode(color) {

    return getCodeDeceit({ color, });

};

//#endregion

//#region set 0.0.0

/** **colorTFset**
 *
 * Результирующие параметры функции `set`.
 *
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Пространство `color`
 *
 * @typedef {colorTFUset&colorTString&colorTPosition&colorTForeBackGround} colorTFset
 *
*/
/** **colorTFUset**
 *
 * Уникальные параметры функции `set`.
 *
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Пространство `color`
 *
 * @typedef colorTFUset
 * @prop {any} _
*/

/** @arg {colorTFset} t */
function setDeceit(t) {

    try {

        return setVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {colorTFset} t */
function setVerify(t) {



    return setHandle(t);

};
/** @arg {colorTFset} t */
function setHandle(t) {4



    return setComply(t);

};
/** @arg {colorTFset} t */
function setComply(t) {

    const {

        index,
        string,
        foreground,
        background,

    } = t;

    return stringPaste(string, colorGet(foreground, background), index);

};

/**
 * Функция установки позиции перекраски.
 *
 * После вызова возвращает строку, в которую на указанную позицию вставляется вставка цветового перекраса.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Пространство `string.color`
 * @arg {number} index Позиция.
 * @arg {string} string Исходная строка.
 * @arg {colorTVColor} background Цвет фона.
 * @arg {colorTVColor} foreground Цвет символов.
*/
export function colorSet(string, index = 0, foreground, background) {

    return setDeceit({ string, foreground, background, index, });

};

//#endregion

//#region reset 0.0.0

/** ### colorTFreset
 *
 * Результирующие параметры функции `reset`.
 *
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Пространство `color`
 *
 * @typedef {colorTFUreset&colorTString&colorTPosition} colorTFreset
 *
*/
/** ### colorTFUreset
 *
 * Уникальные параметры функции `reset`.
 *
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Пространство `color`
 *
 * @typedef colorTFUreset
 * @prop {boolean} foreground
 * @prop {boolean} background
*/

/** @arg {colorTFreset} t */
function resetDeceit(t) {

    try {

        return resetVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {colorTFreset} t */
function resetVerify(t) {



    return resetHandle(t);

};
/** @arg {colorTFreset} t */
function resetHandle(t) {



    return resetComply(t);

};
/** @arg {colorTFreset} t */
function resetComply(t) {

    const {



    } = t;

    const yst = new YStylist(t.string);

    if (t.foreground) t.foreground = `${configStringColor.valueForeground}${configStringColor.valueReset}`;
    if (t.background) t.background = `${configStringColor.valueBackground}${configStringColor.valueReset}`;

    yst.paste(t.index, configStringANSI.start + [t.foreground, t.background].filter(e => e).join(configStringANSI.delimetr) + configStringANSI.end);

    return yst.get(t.string);

};

/**
 * Функция вставки значения сброса цвета.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Пространство `color`
 * @arg {number} index `Позиция`
 * @arg {string} string `Исходная строка`
 * @arg {boolean} background `Цвет фона`
 * @arg {boolean} foreground `Цвет символов`
*/
export function colorReset(string, index = 0, foreground = true, background = true) {

    return resetDeceit({ string, index, foreground, background });

};

//#endregion

//#region clear 0.0.0

/** ### colorTFclear
 *
 * Результирующие параметры функции `clear`.
 *
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Пространство `string.color`
 *
 * @typedef {colorTFUclear&colorTString} colorTFclear
 *
*/
/** ### colorTFUclear
 *
 * Уникальные параметры функции `clear`.
 *
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Пространство `string.color`
 *
 * @typedef colorTFUclear
 * @prop {any} _
*/

/** @arg {colorTFclear} t */
function clearDeceit(t) {

    try {

        return clearVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {colorTFclear} t */
function clearVerify(t) {



    return clearHandle(t);

};
/** @arg {colorTFclear} t */
function clearHandle(t) {



    return clearComply(t);

};
/** @arg {colorTFclear} t */
function clearComply(t) {

    const {



    } = t;

    return stringFilter(t.string, /\x1b\[([34](8;5;\d+?;?|9;?))+m/);

};

/**
 * ### colorClear
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Пространство `string.color`
 *
 * Функция удаления цветового оформления строки.
 * ***
 * @arg {string} string `Исходная строка`
*/
export function colorClear(string) {

    return clearDeceit({ string });

};

//#endregion

//#region repaint 0.0.0

/** ### colorTFrepaint
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Пространство `color`
 *
 * Результирующие параметры функции `repaint`.
 *
 * @typedef {colorTFUrepaint&colorTString&colorTForeBackGround} colorTFrepaint
 *
*/
/** ### colorTFUrepaint
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Пространство `color`
 *
 * Уникальные параметры функции `repaint`.
 *
 * @typedef colorTFUrepaint
 * @prop {any} _
*/

/** @arg {colorTFrepaint} t */
function repaintDeceit(t) {

    try {

        return repaintVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {colorTFrepaint} t */
function repaintVerify(t) {



    return repaintHandle(t);

};
/** @arg {colorTFrepaint} t */
function repaintHandle(t) {



    return repaintComply(t);

};
/** @arg {colorTFrepaint} t */
function repaintComply(t) {

    const {

        string,
        foreground,
        background,

    } = t;

    return colorSet(colorClear(string), 0, foreground, background);

};

/**
 * ### colorRepaint
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Пространство `string.color`
 *
 * Функция перекраски фрагмента строки.
 * Удаляет все цвета в строке и заменяет её на указанный.
 * ***
 *
 * @arg {string} string `Исходная строка`
 * @arg {colorTVColor} background `Цвет фона`
 * @arg {colorTVColor} foreground `Цвет символов`
*/
export function colorRepaint(string, foreground, background) {

    return repaintDeceit({ string, foreground, background, });

};

//#endregion