//#region YI

import { condIsStringValid } from '../../bool/cond/module.mjs';
import { YError } from '../../error/class.mjs';
import configConsole from '../../ject/entity/console/config.mjs';
import configString from '../config.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### ansiT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 *
 * Основной параметр модуля `ansi`.
 *
 * @typedef ansiT
 * @prop {any} _
 *
*/
/** ### ansiColorTForeBackGround
 *
 * Параметр представлен объектом-носителем аргументов с указанием цвета символов и цвета фона.
 *
 * - Тип `T`
 * - Версия `0.0.0`
 * - Пространство `string.ansi`
 *
 * @typedef ansiColorTForeBackGround
 * @prop {ansiTVColor} foreground
 * @prop {ansiTVColor} background
 *
*/

/** ### ansiColorTVColor
 *
 * Обозначение цвета кодом или его зарезервированным строковым названием.
 *
 * - Тип `TV`
 * - Версия `0.0.0`
 * - Пространство `string.ansi`
 *
 * @typedef {ansiColorTMColors|number} ansiTVColor
 *
*/

/** ### ansiColorTMColors
 *
 * Параметр, представлен набором названий зарезервированных в конфигураторе цветов и их кодов.
 * Позволяет выбрать существующий цвет или указать возможный код от 0 до 255.
 *
 * - Тип `TM`
 * - Версия `0.0.0`
 * - Пространство `string.ansi`
 *
 * @typedef {keyof config['colors']} ansiColorTMColors
 *
*/

//#endregion
//#region YV



//#endregion

//#region getColor 0.0.0

/** ### ansiTFGetColor
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * ***
 * 
 * Результирующие параметры функции `getColor`.
 * 
 * @typedef {ansiTFUGetColor&ansiT&ansiColorTForeBackGround} ansiTFGetColor
 * 
*/
/** ### ansiTFUGetColor
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * 
 * Уникальные параметры функции `getColor`.
 * 
 * @typedef ansiTFUGetColor
 * @prop {any} _
*/

/** @arg {ansiTFGetColor} t */
function getColorDeceit(t) {
    
    try {
        
        return getColorVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {ansiTFGetColor} t */
function getColorVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return getColorHandle(t);
   
};
/** @arg {ansiTFGetColor} t */
function getColorHandle(t) {
   
    const {
    
        
    
    } = t;

    switch (t.foreground) {

        case -3: {

            return ansiGetColorReset(1, 1);

        };

    };

    if (!t.foreground && t.foreground !== 0) {

        t.foreground = configConsole.foreground;

    };
    if (!t.background && t.background !== 0) {

        t.background = configConsole.background;

    };
    
    
    if (condIsStringValid(t.background)) {
        
        t.background = ansiGetColorCode(t.background);

    };
    if (condIsStringValid(t.foreground)) {

        t.foreground = ansiGetColorCode(t.foreground);

    };
   
    return getColorComply(t);
   
};
/** @arg {ansiTFGetColor} t */
function getColorComply(t) {
   
    let {
    
        foreground,
        background,
    
    } = t;

    if (foreground || foreground === 0) {

        foreground = [config.codeColorForeground + config.codeColor, foreground].join(config.delimiter);

    };
    if (background || background === 0) {

        background = [config.codeColorBackground + config.codeColor, background].join(config.delimiter);

    };

    return config.code + [foreground, background].filter(e => e).join(config.delimiter) + config.codeEnd;
    
};

/**
 * ### ansiGetColor
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string\ansi`
 * ***
 * 
 * Функция получения `ansi` вставки для смены цвета в виде строки.
 * 
 * ***
 * @arg {ansiTVColor} background `Фон`
 * @arg {ansiTVColor} foreground `Символы`
*/
export function ansiGetColor(foreground, background) {

    return getColorDeceit({ foreground, background, });

};

//#endregion
//#region getColorCode 0.0.0

/** ### ansiTFGetColorCode
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * ***
 * 
 * Результирующие параметры функции `getColorCode`.
 * 
 * @typedef {ansiTFUGetColorCode&ansiT} ansiTFGetColorCode
 * 
*/
/** ### ansiTFUGetColorCode
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * 
 * Уникальные параметры функции `getColorCode`.
 * 
 * @typedef ansiTFUGetColorCode
 * @prop {ansiTVColor} color
*/

/** @arg {ansiTFGetColorCode} t */
function getColorCodeDeceit(t) {
    
    try {
        
        return getColorCodeVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {ansiTFGetColorCode} t */
function getColorCodeVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return getColorCodeHandle(t);
   
};
/** @arg {ansiTFGetColorCode} t */
function getColorCodeHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return getColorCodeComply(t);
   
};
/** @arg {ansiTFGetColorCode} t */
function getColorCodeComply(t) {
   
    const {
    
        color,
    
    } = t;
    
    return Object.entries(config.colors).find(c => c[0].match(new RegExp(color) || c[1] === color))[1];
    
};

/**
 * ### ansiGetColorCode
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string\ansi`
 * ***
 * 
 * Функция получения кода по его цвету.
 * 
 * Корректирует его, если оно является числом или присваивает ему код, если представлен названием.
 * 
 * ***
 * @arg {ansiTVColor} color `Цвет`
*/
export function ansiGetColorCode(color) {

    return getColorCodeDeceit({ color });

};

//#endregion
//#region getColorReset 0.0.0

/** ### ansiTFGetColorReset
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * ***
 * 
 * Результирующие параметры функции `getColorReset`.
 * 
 * @typedef {ansiTFUGetColorReset&ansiT&ansiColorTForeBackGround} ansiTFGetColorReset
 * 
*/
/** ### ansiTFUGetColorReset
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * 
 * Уникальные параметры функции `getColorReset`.
 * 
 * @typedef ansiTFUGetColorReset
 * @prop {any} _
*/

/** @arg {ansiTFGetColorReset} t */
function getColorResetDeceit(t) {
    
    try {
        
        return getColorResetVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {ansiTFGetColorReset} t */
function getColorResetVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return getColorResetHandle(t);
   
};
/** @arg {ansiTFGetColorReset} t */
function getColorResetHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return getColorResetComply(t);
   
};
/** @arg {ansiTFGetColorReset} t */
function getColorResetComply(t) {
   
    let {
    
        foreground,
        background,
    
    } = t;
    
    if (foreground) {

        foreground = `${config.codeColorForeground}${config.codeColorReset}`;

    };
    if (background) {

        background = `${config.codeColorBackground}${config.codeColorReset}`;

    };
    
    return config.code + [foreground, background].filter(e => e).join(config.delimiter) + config.codeEnd;
    
};

/**
 * ### ansiGetColorReset
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string\ansi`
 * ***
 * 
 * Функция получения ansi команды для сброса цвета фона и/или символов.
 * 
 * ***
 * @arg {boolean} background `Фон`
 * @arg {boolean} foreground `Символы`
*/
export function ansiGetColorReset(foreground, background) {

    return getColorResetDeceit({ foreground, background, });

};

//#endregion

//#region clear 0.0.0

/** ### ansiTFClear
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * ***
 * 
 * Результирующие параметры функции `clear`.
 * 
 * @typedef {ansiTFUClear&ansiT} ansiTFClear
 * 
*/
/** ### ansiTFUClear
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * 
 * Уникальные параметры функции `clear`.
 * 
 * @typedef ansiTFUClear
 * @prop {any} _
*/

/** @arg {ansiTFClear} t */
function clearDeceit(t) {
    
    try {
        
        return clearVerify(t);
        
    } catch (e) {
        
        console.log(e);

        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {ansiTFClear} t */
function clearVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return clearHandle(t);
   
};
/** @arg {ansiTFClear} t */
function clearHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return clearComply(t);
   
};
/** @arg {ansiTFClear} t */
function clearComply(t) {
   
    const {
    
    
    
    } = t;
    
    process.stdout.write('\x1bс');
    
    return false;
    
};

/**
 * ### ansiClear
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string\ansi`
 * ***
 * 
 * Функция очистки экрана.
 * 
 * ***
*/
export function ansiClear() {

    return clearDeceit({});

};

//#endregion
//#region setColor 0.0.0

/** ### ansiTFSetColor
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * ***
 * 
 * Результирующие параметры функции `setColor`.
 * 
 * @typedef {ansiTFUSetColor&ansiT&ansiColorTForeBackGround} ansiTFSetColor
 * 
*/
/** ### ansiTFUSetColor
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * 
 * Уникальные параметры функции `setColor`.
 * 
 * @typedef ansiTFUSetColor
 * @prop {any} _
*/

/** @arg {ansiTFSetColor} t */
function setColorDeceit(t) {
    
    try {
        
        return setColorVerify(t);
        
    } catch (e) {
        
        console.log(e);

        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {ansiTFSetColor} t */
function setColorVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return setColorHandle(t);
   
};
/** @arg {ansiTFSetColor} t */
function setColorHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return setColorComply(t);
   
};
/** @arg {ansiTFSetColor} t */
function setColorComply(t) {
   
    const {

        foreground,
        background,

    } = t;

    const result = ansiGetColor(foreground, background);

    if (result) {

        process.stdout.write(result);

        return true;

    } else {

        return false;

    };
    
};

/**
 * ### ansiSetColor
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string\ansi`
 * ***
 * 
 * Функция смены цветов символов и фона.
 * 
 * ***
 * @arg {ansiTVColor} foreground
 * @arg {ansiTVColor} background
*/
export function ansiSetColor(foreground, background) {

    return setColorDeceit({ foreground, background, });

};

//#endregion
//#region backspace 0.0.0

/** ### ansiTFBackspace
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * ***
 * 
 * Результирующие параметры функции `backspace`.
 * 
 * @typedef {ansiTFUBackspace&ansiT} ansiTFBackspace
 * 
*/
/** ### ansiTFUBackspace
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * 
 * Уникальные параметры функции `backspace`.
 * 
 * @typedef ansiTFUBackspace
 * @prop {number} count
*/

/** @arg {ansiTFBackspace} t */
function backspaceDeceit(t) {
    
    try {
        
        return backspaceVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {ansiTFBackspace} t */
function backspaceVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return backspaceHandle(t);
   
};
/** @arg {ansiTFBackspace} t */
function backspaceHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return backspaceComply(t);
   
};
/** @arg {ansiTFBackspace} t */
function backspaceComply(t) {
   
    const {
    
        count,
    
    } = t;

    process.stdout.write(config.codeBackspace.repeat(count));

    return true;
    
};

/**
 * ### ansiBackspace
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string\ansi`
 * ***
 * 
 * Функция удаления символа в текущей позиции со сдвигом влево.
 * 
 * ***
 * @arg {number} count `Счетчик`
*/
export function ansiBackspace(count = 1) {

    return backspaceDeceit({ count, });

};

//#endregion
//#region resetColor 0.0.0

/** ### ansiTFResetColor
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * ***
 * 
 * Результирующие параметры функции `resetColor`.
 * 
 * @typedef {ansiTFUResetColor&ansiT} ansiTFResetColor
 * 
*/
/** ### ansiTFUResetColor
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * 
 * Уникальные параметры функции `resetColor`.
 * 
 * @typedef ansiTFUResetColor
 * @prop {boolean} foreground
 * @prop {boolean} background
*/

/** @arg {ansiTFResetColor} t */
function resetColorDeceit(t) {
    
    try {
        
        return resetColorVerify(t);
        
    } catch (e) {
        
        if (config?.strict) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {ansiTFResetColor} t */
function resetColorVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return resetColorHandle(t);
   
};
/** @arg {ansiTFResetColor} t */
function resetColorHandle(t) {
   
    const {
    
    
    
    } = t;
   
    return resetColorComply(t);
   
};
/** @arg {ansiTFResetColor} t */
function resetColorComply(t) {
   
    const {

        foreground,
        background,

    } = t;

    if (foreground || background) {

        process.stdout.write(ansiGetColorReset(foreground, background));

        return true;

    } else {

        return false;

    };
    
};

/**
 * ### ansiResetColor
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string\ansi`
 * ***
 * 
 * Функция получения вставки для очистки цвета.
 * 
 * ***
 * @arg {boolean} foreground `Символы`
 * @arg {boolean} background `Фон`
*/
export function ansiResetColor(foreground = true, background = true) {

    return resetColorDeceit({ foreground, background, });

};

//#endregion
//#region setCursorTo 0.0.0

/** ### ansiTFSetCursorTo
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 * ***
 *
 * Результирующие параметры функции `setCursorTo`.
 *
 * @typedef {ansiTFUSetCursorTo&ansiT} ansiTFSetCursorTo
 *
*/
/** ### ansiTFUSetCursorTo
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string\ansi`
 *
 * Уникальные параметры функции `setCursorTo`.
 *
 * @typedef ansiTFUSetCursorTo
 * @prop {number} y
 * @prop {number} x
*/

/** @arg {ansiTFSetCursorTo} t */
function setCursorToDeceit(t) {

    try {

        return setCursorToVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {ansiTFSetCursorTo} t */
function setCursorToVerify(t) {

    const {



    } = t;

    return setCursorToHandle(t);

};
/** @arg {ansiTFSetCursorTo} t */
function setCursorToHandle(t) {

    const {



    } = t;

    t.y++;
    t.x++;

    return setCursorToComply(t);

};
/** @arg {ansiTFSetCursorTo} t */
function setCursorToComply(t) {

    const {

        y,
        x,

    } = t;

    const result = `${config.code}${y};${x}${config.codePosition}`;

    if (result) {

        process.stdout.write(result);

        return true;

    } else {

        return false;

    };

};

/**
 * ### ansiSetCursorTo
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string\ansi`
 * ***
 *
 * Функция с добавлением вставки для установки положения курсора в указанную позицию.
 *
 * ***
 * @arg {number} y `Линия`
 * @arg {number} x `Столбец`
*/
export function ansiSetCursorTo(y, x) {

    return setCursorToDeceit({ y, x });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/