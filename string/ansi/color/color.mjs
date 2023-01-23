import { config, configStringANSI, configStringANSIColor } from "../../../config.mjs";
import { stringFilter, stringPaste } from "../../string.mjs";
import { YRegExp } from "../../../regexp/YRegExp/YRegExp.mjs";
import { YStylistMap } from "../../style/YStylist/YStylistMap/YStylistMap.mjs";

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
 * @typedef {keyof configStringANSIColor['colors']} colorTMColors
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
//#region YV

/**
 * ### colorVEREColor
 * - Тип `VE`
 * - Версия `0.0.0`
 * - Модуль `color`
 *
 * Значение для поиска цветовых вставок.
 *
 * ***
 *
*/
export const colorVEREColor = /\x1b\[.*?(?<r>([34]8;5;\d+|[34]([0-7]|9));?).*?m/;
/**
 * ### colorVEREReset
 * - Тип `VE`
 * - Версия `0.0.0`
 * - Модуль `color`
 *
 * Значение для поиска сброса цветовых вставок.
 *
 * ***
 *
*/
export const colorVEREReset = /\x1b\[([34]9|39;49|49;39)m/;

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

    if (t.foreground || t.foreground === 0) t.foreground = [configStringANSIColor.valueForeground + configStringANSIColor.valueOption, t.foreground].join(configStringANSI.delimetr);
    if (t.background || t.background === 0) t.background = [configStringANSIColor.valueBackground + configStringANSIColor.valueOption, t.background].join(configStringANSI.delimetr);

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

//#region getMap 0.1.0

/** ### colorTFgetMap
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `color`
 *
 * Результирующие параметры функции `getMap`.
 *
 * @typedef {colorTFUgetMap&colorTString} colorTFgetMap
 *
*/
/** ### colorTFUgetMap
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `color`
 *
 * Уникальные параметры функции `getMap`.
 *
 * @typedef colorTFUgetMap
 * @prop {number} biasY
 * @prop {number} biasX
*/

/** @arg {colorTFgetMap} t */
function getMapDeceit(t) {

    try {

        return getMapVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {colorTFgetMap} t */
function getMapVerify(t) {



    return getMapHandle(t);

};
/** @arg {colorTFgetMap} t */
function getMapHandle(t) {



    return getMapComply(t);

};
/** @arg {colorTFgetMap} t */
function getMapComply(t) {

    const {

        biasY,
        biasX,

    } = t;

    /** @type {[number,[number,string]][]} */
    const rs = [];

    t.string.split('\n').forEach((s, si) => {

        si += biasY;

        Array.from(s.matchAll(new YRegExp(colorVEREColor, 'g').get())).map(f => [f.index, f[0]]).reduce((p, c) => {

            c[0] -= p - biasX;
            p += c[1].length;

            const f = rs.find(l => l[0] === si);

            if (f) f[1].push(c);
            else rs.push([si, [c]]);

            return p;

        }, 0);

    });

    return rs;

};

/**
 * ### colorGetMap
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `string.color`
 * ***
 *
 * Функция получения цветовой карты для указанной строки.
 * Все полученные точки указаны в позициях `y:x`, где `y` - индекс линии, а `x` - позиция в линии.
 *
 * Для имзенения индексов вставок можно использовать смещения.
 * Каждое смещение изменит соответсвующий смещению  индекс на указанное значение.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {number?} biasY `Смещение по линии`
 * @arg {number?} biasX `Смещение по позиции`
*/
export function colorGetMap(string, biasY = 0, biasX = 0) {

    return getMapDeceit({ string, biasY, biasX });

};

//#endregion
//#region getMapWrap 0.0.0

/** ### colorTFgetMapWrap
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `color`
 * ***
 *
 * Результирующие параметры функции `getMapWrap`.
 *
 * @typedef {colorTFUgetMapWrap&colorTString&colorTFgetMap} colorTFgetMapWrap
 *
*/
/** ### colorTFUgetMapWrap
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `color`
 *
 * Уникальные параметры функции `getMapWrap`.
 *
 * @typedef colorTFUgetMapWrap
 * @prop {any} _
*/

/** @arg {colorTFgetMapWrap} t */
function getMapWrapDeceit(t) {

    try {

        return getMapWrapVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {colorTFgetMapWrap} t */
function getMapWrapVerify(t) {

    const {



    } = t;

    return getMapWrapHandle(t);

};
/** @arg {colorTFgetMapWrap} t */
function getMapWrapHandle(t) {

    const {



    } = t;

    return getMapWrapComply(t);

};
/** @arg {colorTFgetMapWrap} t */
function getMapWrapComply(t) {

    const {

        biasY,
        biasX,
        string,

    } = t;

    const result = new YStylistMap().appendByMap(colorGetMap(string, biasY, biasX)).appendEnds(colorVEREReset);

    let last = null;

    colorClear(string).split('\n').forEach((s, si) => {

        si += biasY;

        if (last) {

            result.paste(last.insert, 1, si, biasX);

        };

        result.append(colorGetReset(1, 1), si, biasX + s.length);

        last = result.getPointLastByLine(si) ?? last;

    });

    return result.lines;

};

/**
 * ### colorGetMapWrap
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `color`
 * ***
 *
 * Функция {@link colorGetMap|получения цветовой карты} с переносом.
 *
 * Отличие от исходной функции заключается в переносе цветов на следующие индексы и добавлением эндингов для каждой строчки строки.
 *
 * ***
 * @arg {number} biasY `Смещение по линии`
 *
 * - По умолчанию `0`
 * @arg {number} biasX `Смещение по позиции`
 *
 * - По умолчанию `0`
 * @arg {string} string `Строка`
*/
export function colorGetMapWrap(string, biasY = 0, biasX = 0) {

    return getMapWrapDeceit({ string, biasY, biasX, });

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

    return Object.entries(configStringANSIColor.colors).find(c => c[0].match(new RegExp(t.color) || c[1] === t.color))[1];

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
//#region getReset 0.0.0

/** ### colorTFgetReset
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `color`
 * ***
 *
 * Результирующие параметры функции `getReset`.
 *
 * @typedef {colorTFUgetReset} colorTFgetReset
 *
*/
/** ### colorTFUgetReset
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `color`
 *
 * Уникальные параметры функции `getReset`.
 *
 * @typedef colorTFUgetReset
 * @prop {boolean} background
 * @prop {boolean} foreground
*/

/** @arg {colorTFgetReset} t */
function getResetDeceit(t) {

    try {

        return getResetVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {colorTFgetReset} t */
function getResetVerify(t) {



    return getResetHandle(t);

};
/** @arg {colorTFgetReset} t */
function getResetHandle(t) {



    return getResetComply(t);

};
/** @arg {colorTFgetReset} t */
function getResetComply(t) {

    const {



    } = t;

    if (t.foreground) t.foreground = `${configStringANSIColor.valueForeground}${configStringANSIColor.valueReset}`;
    if (t.background) t.background = `${configStringANSIColor.valueBackground}${configStringANSIColor.valueReset}`;

    if (t.foreground || t.background) return configStringANSI.start + [t.foreground, t.background].filter(e => e).join(configStringANSI.delimetr) + configStringANSI.end;
    else return '';

};

/**
 * ### colorGetReset
 * - Версия `0.1.0`
 * - Цепочка `DVHCa`
 * - Модуль `color`
 * ***
 *
 * Функция получения значения сброса цвета.
 *
 * ***
 * @arg {boolean} background `Цвет фона`
 * @arg {boolean} foreground `Цвет символов`
*/
export function colorGetReset(foreground = true, background) {

    return getResetDeceit({ foreground, background });

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
function setHandle(t) {

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

//#region reset 0.1.0

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

    return stringPaste(t.string, colorGetReset(t.foreground, t.background), t.index);

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
export function colorReset(string = '', index = 0, foreground = true, background = true) {

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

    return colorSet(colorClear(string), 0, foreground, background) + colorReset('');

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

/**
 * @file color.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/