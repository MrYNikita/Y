//#region YI

import { arrayCalculatePosition } from '../array/module.mjs';
import { condIsNumberLimit } from '../bool/cond/module.mjs';
import { YMany } from '../ject/many/class.mjs';
import { stringGetMatrix, stringGetRows, stringPad, stringPadColumn, stringPadRow, stringTrim } from './module.mjs';

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

/** ### YStringT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Основной параметр модуля `YString`.
 *
 * @typedef {YStringTE&YStringTU} YStringT
 *
*/
/** ### YStringTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Параметр наследования `YString`.
 *
 * @typedef {{[p in Exclude<keyof DString,keyof SString>|Exclude<keyof SString,keyof DString>]:(DString[p]&SString[p])}} YStringTE
 *
*/
/** ### YStringTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры `YString`.
 *
 * @typedef YStringTU
 * @prop {string} values
 *
*/

//#endregion

/** @extends {YMany<string>} */
class SString extends YMany {



};
class DString extends SString {

    /**
     * ### tab
     *
     * Таб.
     *
     * ***
     * @type {(string|function():string)?}
     * @protected
    */
    tab;
    /**
     * ### rowEnd
     *
     * Символ конца строки.
     *
     * ***
     * @type {string?}
     * @protected
    */
    rowEnd;
    /**
     * ### prefix
     *
     * Префикс.
     *
     * ***
     * @type {(string|function():string)?}
     * @protected
    */
    prefix;
    /**
     * ### postfix
     *
     * Постфикс.
     *
     * ***
     * @type {(string|function():string)?}
     * @protected
    */
    postfix;
    /**
     * ### rowLength
     *
     * Предельное количество символов в линии.
     *
     * ***
     * @type {number?}
     * @protected
    */
    rowLength;
    /**
     * ### rowVisIndex
     *
     * Индекс начальной видимой строки.
     *
     * ***
     * @type {number}
     * @public
    */
    rowVisIndex;
    /**
     * ### rowVisLimit
     *
     * Количество видимых строк.
     *
     * ***
     * @type {number}
     * @protected
    */
    rowVisLimit;

};
class IString extends DString {



};
class MString extends IString {



};
class FString extends MString {

    /**
     * ### YString.constructor
     *
     *
     *
     * ***
     * @arg {YStringT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FString.#before(t), {}));

        FString.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YStringT} */
        let r = {};

        if (t?.length === 1 && [Object, YString].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.values = t[0];

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YStringT} t @this {YString} */
    static #deceit(t) {

        try {

            FString.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YStringT} t @this {YString} */
    static #verify(t) {

        const {



        } = t;

        FString.#handle.apply(this, [t]);

    };
    /** @arg {YStringT} t @this {YString} */
    static #handle(t) {



        FString.#create.apply(this, [t]);

    };
    /** @arg {YStringT} t @this {YString} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

        this.appendCursors([0, 0]);

    };

    [Symbol.toPrimitive](hint) {

        switch (hint) {

            case 'number': return +this.get(false);
            case 'boolean': return !!this.get(false);
            default: case 'string': return this.get();

        };

    };

};

/**
 * ### YString
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `string`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YString extends FString {

    /**
     * ### set
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод установки нового значения.
     *
     * ***
     * @arg {string} string `Строка`
     * @public
    */
    set(string) {

        this.values = string;

        return this;

    };

    /**
     * ### get
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод получения строки.
     *
     * ***
     * @arg {boolean} style `Стиль`
     *
     * - Дефолт `true`
     * @public
    */
    get(style = true) {

        return this.values;

    };
    /**
     * ### getVis
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод получения видимой области.
     *
     * ***
     * @public
    */
    getVis() {

        const index = this.rowVisIndex ?? config.rowVisIndex;
        const limit = this.rowVisLimit ?? config.rowVisLimit;

        return this.getRows().slice(index, index + limit).join('\n');

    };
    /**
     * ### getRows
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод получения массива всех линий.
     *
     * ***
     * @public
    */
    getRows() {

        return stringGetRows(this.values);

    };
    /**
     * ### getMatrix
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод получения матрицы символов.
     *
     * ***
     * @public
    */
    getMatrix() {

        return stringGetMatrix(this.values);

    };

    /**
     * ### pad
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод приведения строки к указанному пределу указанным дополнитель.
     *
     * ***
     * @arg {string} pad `Дополнитель`
     * @arg {number} limit `Предел`
     * @arg {number} index `Индекс`
     * @arg {boolean} modeCut `Режим усечения`
     * @public
    */
    pad(pad, limit, index, modeCut) {

        this.values = stringPad(this.values, pad, limit, index, modeCut);

        return this;

    };
    /**
     * ### padRow
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод приведения строки к указанному количеству строк.
     *
     * ***
     * @arg {number} limit `Предел`
     * @arg {string?} pad `Дополнитель`
     * @public
    */
    padRow(limit, pad = this.rowEnd ?? config.rowEnd) {

        if (condIsNumberLimit(limit)) {

            this.values = stringPadRow(this.values, limit, pad);

        };

        return this;

    };
    /**
     * ### padColumn
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод приведения линий строки к указанному количеству символов.
     *
     * ***
     * @arg {number} limit `Предел`
     * @arg {string?} pad `Дополнитель`
     * @public
    */
    padColumn(limit = this.rowLength, pad = this.space ?? config.space) {

        if (condIsNumberLimit(limit)) {

            this.values = stringPadColumn(this.values, limit, pad);

        };

        return this;

    };

    /**
     * ### trim
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод отсечения избыточных частей строки.
     *
     * ***
     * @arg {boolean} end `Конец`
     * @arg {boolean} start `Начало`
     * @public
    */
    trim(end, start) {

        this.values = stringTrim(this.values, end, start);

        return this;

    };

    /**
     * ### display
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод отображения строки.
     *
     * ***
     * @arg {boolean} modeStyle `Режим стиля`
     * @arg {boolean?} modeShield `Режим экранирования`
     * @public
    */
    display(modeStyle = true, modeShield) {

        console.log(this.get(modeStyle, modeShield));

        return this;

    };

    /**
     * ### moveCursors
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод смещения курсоров.
     *
     * ***
     * @arg {...number} bias `Смещения`
     * @public
    */
    moveCursors(...bias) {

        this.cursors.forEach(cursor => {

            cursor.move(...bias);

            cursor.indexs = arrayCalculatePosition(this.getMatrix(), ...cursor.indexs);

        });

        return this;

    };
    /**
     * ### setCursorTo
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод установки курсора на заданную позицию.
     *
     * ***
     * @arg {...number} indexs `Индексы`
     * @public
    */
    setCursorTo(...indexs) {

        SString.prototype.setCursorTo.apply(this, indexs);

        this.padRow(this.cursor.indexs[0]).padColumn(this.cursor.indexs[1], this.space ?? config.space).trim();

        return this;

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/