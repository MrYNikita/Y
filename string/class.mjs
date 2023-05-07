//#region YI

import { arrayUnite } from '../array/module.mjs';
import { condIsNumberLimit, condIsString, condIsStringValid } from '../bool/cond/module.mjs';
import { YMany } from '../ject/many/class.mjs';
import { positionCorrect } from '../ject/many/position/module.mjs';
import { YLayout } from './layout/class.mjs';
import { stringFilter, stringFormatReport, stringGetMatrix, stringGetRow, stringGetRows, stringPad, stringPadColumn, stringPadRow, stringPadToPosition, stringPaste, stringPasteWrap, stringRemove, stringRemoveEnd, stringRemoveStart, stringSetRow, stringSubstringByPosition, stringTrim } from './module.mjs';
import { YTemplate } from './template/class.mjs';

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

    static {

        config.templates = config.templates.map(template => new YTemplate(...template));

    };

    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * *** 
     * @public
    */
    static config = config;

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
     * @type {(function():string)?}
     * @protected
    */
    prefix;
    /**
     * ### postfix
     *
     * Постфикс.
     *
     * ***
     * @type {(function():string)?}
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
    /**
     * ### rowIndexLast
     *
     * Последняя строка.
     *
     * ***
     * @type {number}
     * @public
    */
    rowIndexLast = 0;

};
class IString extends DString {

    /**
     * ### layout
     * 
     * Разметка.
     * 
     * *** 
     * @type {YLayout} 
     * @protected
    */
    layout = new YLayout();
    /**
     * ### templates
     * 
     * Шаблоны.
     * 
     * *** 
     * @type {YTemplate[]} 
     * @protected
    */
    templates = [];

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
                case 1: r.values = t[0] + '';

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

        this.appendCursors([0, this.values.length]);

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
     * ### setRow
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод установления линии.
     *
     * ***
     * @arg {string} row `Линия`
     * @arg {number} index `Индекс`
     * @public
    */
    setRow(row, index) {

        this.values = stringSetRow(this.values, row, index);

        return this;

    };
    /**
     * ### setPrefix
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод установки префикса.
     *
     * ***
     * @arg {string|function():string} prefix `Префикс`
     * @public
    */
    setPrefix(prefix = '') {

        if (condIsStringValid(prefix)) {

            this.prefix = () => prefix;

        } else if (prefix?.constructor === Function) {

            this.prefix = prefix;

        } else {

            this.prefix = () => '';

        };

        return this;

    };
    /**
     * ### setPostfix
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод установки постфикса.
     *
     * ***
     * @arg {(string|function():string)} postfix `Постфикс`
     * @public
    */
    setPostfix(postfix = '') {
        
        if (condIsStringValid(postfix)) {

            this.postfix = () => postfix;


        } else if (postfix?.constructor === Function) {

            this.postfix = postfix;

        } else {

            this.postfix = () => '';

        };

        return this;

    };
    /**
     * ### setPrePostfix
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод утсановки префикса и постфикса.
     * 
     * ***
     * @arg {(string|function():string)} prefix `Префикс`
     * @arg {(string|function():string)} postfix `Постфикс`
     * @public
    */
    setPrePostfix(prefix, postfix) {
        
        this.setPrefix(prefix);
        this.setPostfix(postfix);

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

        let result = this.values;

        if (style) {

            result = this.layout.apply(result);

        };

        return result;

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
     * ### getRow
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод получения указанной линии.
     *
     * ***
     * @arg {number} index `Индекс`
     * @public
    */
    getRow(index) {

        return this.getRows()[index];

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

            if (limit > this.rowIndexLast) {

                this.rowIndexLast = limit - 1;

            };

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
     * ### exec
     * - Версия `0.1.0`
     * - Модуль `string`
     * ***
     * 
     * Метод выполнения кода, переданного стрелочной функцией с первым аргументом, выступающим исходным объектом.
     * 
     * Позволяет выполнять какую-то логику связанную с экземпляром в его методе.
     * 
     * В случае ошибок, метод откатит изменения, вернув в качестве результата копию экземпляра.
     * 
     * ***
     * @arg {(arg0:this)=>void} func
     * @public
    */
    exec(func) {
        
        if (func instanceof Function) {

            const clone = this.clone();

            try {

                func(this);

            } catch (e) {

                return clone;

            };

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
     * ### paste
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод вставки значения.
     *
     * ***
     * @arg {...string} strings `Вставки`
     * @public
    */
    paste(...strings) {

        strings.map(string => string.toString()).forEach(string => {

            let row = this.getRow(this.cursor.indexs[0]);

            if (this.prefix) {

                string = this.prefix() + string;

            };
            if (this.postfix) {
                
                string += this.postfix();

            };
            
            row = stringPaste(row, string, this.cursor.indexs[1] + string.length);

            this.setRow(row, this.cursor.indexs[0]);

            this.moveCursors(string.match(/\n/g)?.length, string.length);

            this.cursor.indexs[1]++;

        });

        return this;

    };
    /**
     * ### pasteWrap
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод вставки значения с переносом в указанную позицию.
     *
     * ***
     * @arg {number} y `Линия`
     * @arg {number} x `Столбец`
     * @arg {string} wrap `Вставка`
     * @arg {boolean} modeSkip `Режим пропуска`
     * @public
    */
    pasteWrap(wrap, modeSkip) {

        this.values = stringPasteWrap(this.values, wrap, ...this.cursor.indexs, modeSkip);

        return this;

    };
    /**
     * ### pasteTemplate
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод применения шаблонов.
     * 
     * ***
     * @arg {string} label `Метка`
     * @arg {...[...string]} inserts `Вставки` 
     * @public
    */
    pasteTemplate(label, ...inserts) {

        const template = arrayUnite(this.templates, config.templates).find(template => template.label === label);

        if (template) {

            this.paste(template.apply(...inserts));

        };

        return this;
        
    };

    /**
     * ### remove
     * - Версия `0.2.0`
     * ***
     * 
     * Метод обрезания строки.
     * 
     * ***
     * @arg {number} length `Длина`
     * @arg {boolean} left `Сторона`
     * @public
    */
    remove(length = -1, left) {

        if (left) {

            this.values = stringRemoveStart(this.values, this.cursors[0].indexs[1], length);

        } else {

            this.values = stringRemove(this.values, this.values.length - 1, length);

        };

        return this;
        
    };

    /**
     * ### filter
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод фильтрации.
     * 
     * ***
     * @arg {...(string|RegExp)} filters `Фильтры`
     * @public
    */
    filter(...filters) {
        
        this.values = stringFilter(this.values, ...filters);

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
     * ### formatReport
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод форматирования строки в строку отчета.
     * 
     * ***
     * @public
    */
    formatReport() {

        this.values = stringFormatReport(this.values);

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

            cursor.indexs = positionCorrect(this.getMatrix(), ...cursor.indexs);

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

        this.values = stringPadToPosition(this.values, ...indexs)

        return this;

    };
    /**
     * ### setCursorToEnd
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод установки курсора в последнюю позицию текста.
     * 
     * ***
     * @public
    */
    setCursorToEnd() {
        
        const rows = this.getRows();

        this.setCursorTo(rows.length - 1, rows.at(-1).length - 1);

        return this;
        
    };

    /**
     * ### clearColors
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод очистки цветов.
     * 
     * ***
     * @public
    */
    clearColors() {

        this.layout.clearColors();

        return this;
        
    };
    /**
     * ### clearTemplates
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод очистки шаблонов.
     * 
     * ***
     * @public
    */
    clearTemplates() {
        
        this.templates = [];

        return this;
        
    };

    /**
     * ### appendColors
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод добавления цветов.
     * 
     * ***
     * @arg {[import('./ansi/module.mjs').ansiColorTMColors, import('./ansi/module.mjs').ansiColorTMColors, number, number][]} colors `Цвета`
     * @public
    */
    appendColors(...colors) {

        colors = colors.map(color => {

            if (!color[2]) {

                color[2] = this.cursor.indexs[0];

            };
            if (!color[3]) {
                
                color[3] = this.cursor.indexs[1];

            };

            return color;

        });

        this.layout.appendColors(...colors);

        return this;
        
    };
    /**
     * ### appendTemplates
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод добавления шаблонов.
     * 
     * ***
     * @arg {...[string, string]} templates `Шаблоны`
     * @public
    */
    appendTemplates(...templates) {
        
        templates.forEach(template => {

            if (template.constructor === Array) {

                template = new YTemplate(...template);

            };  

            this.templates.push(template);

        });

        return this;
        
    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/