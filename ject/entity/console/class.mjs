//#region YI

import { YEntity } from '../class.mjs';
import { ansiBackspace, ansiClear, ansiResetColor, ansiSetColor, ansiSetCursorTo } from '../../../string/ansi/module.mjs';
import { condIsNumber, condIsString } from '../../../bool/cond/module.mjs';
import { stringGetRow, stringGetRows } from '../../../string/module.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YConsoleT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\console`
 *
 * Основной параметр модуля `YConsole`.
 *
 * @typedef {YConsoleTE&YConsoleTU} YConsoleT
 *
*/
/** ### YConsoleTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\console`
 *
 * Параметр наследования `YConsole`.
 *
 * @typedef {{[p in Exclude<keyof DConsole,keyof SConsole>|Exclude<keyof SConsole,keyof DConsole>]:(DConsole[p]&SConsole[p])}} YConsoleTE
 *
*/
/** ### YConsoleTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\console`
 *
 * Уникальные параметры `YConsole`.
 *
 * @typedef YConsoleTU
 * @prop {any} _
 *
*/

/** ### consoleTTColor
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\console`
 * 
 * 
 * 
 * @typedef {import('../../../string/ansi/module.mjs').ansiColorTMColors} consoleTTColor
 * 
*/

//#endregion

class SConsole extends YEntity {

    static {

        process.on('exit', () => {
        
            YConsole

                .setCursorTo(process.stdout.rows - 3, 0)
                .resetColor(-3);
        
        });

    };

    /**
     * ### y
     * 
     * Координата по y.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    static y = 0;
    /**
     * ### x
     * 
     * Координата по x.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    static x = 0;
    /**
     * ### width
     * 
     * Ширина консоли.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    static width = process.stdout.columns;
    /**
     * ### height
     * 
     * Длина текущей консоли.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    static height = process.stdout.rows;
    /**
     * ### duration
     * 
     * Задержка.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    static duration = 0;

    /**
     * ### write
     * - Версия `0.0.0`
     * - Модуль `ject\entity\console`
     * ***
     * 
     * Метод записи в консоль.
     * 
     * ***
     * @arg {...string} strings `Строки`
     * @public
    */
    static write(...strings) {

        for (const string of strings) {

            process.stdout.write(string.toString());

            this.x += (string?.toString?.())?.length;

        };

        return this;
        
    };
    /**
     * ### writeDuration
     * - Версия `0.0.0`
     * ***
     * 
     * Метод отрисовки строк с задержкой.
     * 
     * ***
     * @arg {string} string `Строка` 
     * @arg {number} duration `Задержка`
     * @public
    */
    static async writeDuration(duration = 0, string) {
        
        if (duration) {

            this.duration = duration;

        };

        for (const char of string) {

            await new Promise((resolve) => {

                if (this.duration) {
    
                    this.write(char);

                    setTimeout(resolve, this.duration);
    
                } else {
    
                    resolve();
    
                };
    
            });

        };

        return this;
        
    };

    /**
     * ### clear
     * - Версия `0.0.0`
     * - Модуль `ject\entity\console`
     * ***
     * 
     * Метод очистки экрана.
     * 
     * ***
     * @public
    */
    static clear() {

        this
            .setCursorTo(0, 0)
            .write(' '.repeat(this.width * this.height))

        return this;
        
    };
    /**
     * ### setColor
     * - Версия `0.0.0`
     * - Модуль `ject\entity\console`
     * ***
     * 
     * Метод назначения цветов символов и фона.
     * 
     * ***
     * @arg {import('../../../string/ansi/module.mjs').ansiTVColor} foreground
     * @arg {import('../../../string/ansi/module.mjs').ansiTVColor} background
     * @public
    */
    static setColor(foreground, background) {
        
        ansiSetColor(foreground, background);

        return this; 
        
    };
    /**
     * ### writeLine
     * - Версия `0.0.0`
     * - Модуль `ject\entity\console`
     * ***
     * 
     * Метод записи в консоль с переносом на следующую строку.
     * 
     * ***
     * @arg {...string} strings `Строка`
     * @public
    */
    static writeLine(...strings) {

        const x = this.x;

        if (!strings.length) {

            strings[0] = '';

        };

        strings = strings.map(string => stringGetRows(string)).flat();

        strings.forEach(string => {

            this.setCursorTo().write(string);

            this.y++;
            this.x = x;

        });

        this.setCursorTo();

        return this;  
        
    };
    /**
     * ### resetColor
     * - Версия `0.0.0`
     * - Модуль `ject\entity\console`
     * ***
     * 
     * Метод сброса цвета.
     * 
     * ***
     * @arg {boolean} foreground `Символы`
     * @arg {boolean} background `Фон`
     * @public
    */
    static resetColor(foreground = config.foreground, background = config.background) {

        ansiSetColor(foreground, background);

        return this;
        
    };
    /**
     * ### setCursorTo
     * - Версия `0.0.0`
     * - Модуль `ject\entity\console`
     * ***
     * 
     * Метод установки позиции курсора в консоли.
     * 
     * ***
     * @arg {number} x `Линия`
     * @arg {number} y `Колонна`
     * @public
    */
    static setCursorTo(y, x) {

        if (x > -1 && y > -1) {

            [this.y, this.x] = [y, x];

        };

        ansiSetCursorTo(this.y, this.x);

        return this;
        
    };
    /**
     * ### setDuration
     * - Версия `0.0.0`
     * ***
     * 
     * Метод установки задержки.
     * 
     * ***
     * @arg {number} duration `Задержка`
     * @public
    */
    static setDuration(duration = 0) {
        
        this.duration = duration;

        return this;
        
    };
    
};
class DConsole extends SConsole {

    /**
     * ### y
     * 
     * Координата по Y.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    y = 0;
    /**
     * ### x
     * 
     * Координата по X.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    x = 0;
    /**
     * ### delay
     * 
     * Задержка.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    delay = 0;

};
class IConsole extends DConsole {



};
class MConsole extends IConsole {



};
class FConsole extends MConsole {

    /**
     * ### YConsole.constructor
     *
     *
     *
     * ***
     * @arg {YConsoleT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FConsole.#before(t), {}));

        FConsole.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YConsoleT} */
        let r = {};

        if (t?.length === 1 && [Object, YConsole].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YConsoleT} t @this {YConsole} */
    static #deceit(t) {

        try {

            FConsole.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YConsoleT} t @this {YConsole} */
    static #verify(t) {

        const {



        } = t;

        FConsole.#handle.apply(this, [t]);

    };
    /** @arg {YConsoleT} t @this {YConsole} */
    static #handle(t) {



        FConsole.#create.apply(this, [t]);

    };
    /** @arg {YConsoleT} t @this {YConsole} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

    };

};

/**
 * ### YConsole
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\console`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YConsole extends FConsole {

    /**
     * ### clear
     * - Версия `0.0.0`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    clear() {
        
        return this;
        
    };

    /**
     * ### write
     * - Версия `0.0.0`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    write() {
        
        return this;
        
    };
    /**
     * ### writeLine
     * - Версия `0.0.0`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    writeLine() {
        
        return this;
        
    };
    /**
     * ### writeDelay
     * - Версия `0.0.0`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    async writeDelay() {
        
        return this;
        
    };
    /**
     * ### writeLineDelay
     * - Версия `0.0.0`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    async writeLineDelay() {
        
        return this;
        
    };

    /**
     * ### setColor
     * - Версия `0.0.0`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    setColor() {
        
        
        
    };
    /**
     * ### setDelay
     * - Версия `0.0.0`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    setDelay() {
        
        return this;
        
    };
    /**
     * ### setCursorTo
     * - Версия `0.0.0`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    setCursorTo() {
        
        
        
    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/