import { arrayRemove } from "../../array/array.mjs";
import { configLog, configYString } from "../../config.mjs";
import { jectFill } from "../../ject/ject.mjs";
import { YLog } from "../../log/YLog/YLog.mjs";
import { YSection } from "../../log/YNotice/YSection/YSection.mjs";
import { stringAppend, stringBring, stringFilter, stringFind, stringFindToJect, stringHandle, stringPad, stringPaste, stringRemove, stringRepaint, stringReplace, stringReverse } from "../string.mjs";
import { YCursor } from "./YCursor/YCursor.mjs";
import { YTemplate } from "./YTemplate/YTemplate.mjs";

/**
 * @typedef TBString
 * @prop {boolean} loged
 * @typedef {DString&TBString} TString
*/

class SString {



};
class DString extends SString {

    /**
     * Журнал.
     * @type {YLog}
    */
    log = new YLog({ loged: configYString.loged ?? false }).appendSection(

        { label: 'info', symbol: '*' },

    );
    /**
     * Текущее состояние строки.
     * @type {string}
    */
    value = '';
    /**
     * Цвет шрифта.
     * @type {string}
    */
    colorF = '';
    /**
     * Цвет фона.
     * @type {string}
    */
    colorB = '';
    /**
     * Курсоры.
     * @type {[YCursor]}
    */
    cusrors;
    /**
     * Значение повторения для курсоров.
     * @type {boolean}
    */
    cursorRepeated = configYString.cursorRepeated ?? true;
    /**
     * шаблоны.
     * @type {[YTemplate]}
    */
    templates;
    /**
     * Конечная строка добавления.
     * Данная подстрока будет добавляться в конец к каждому вызову `paste` метода.
     * @type {string}
    */
    pasteEnd = '';
    /**
     * Начальная строка добавления.
     * Данная подстрока будет добавляться в начало к каждому вызову `paste` метода.
     * @type {string}
    */
    pasteStart = '';

};
class FString extends DString {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TString} t
    */
    constructor(t = {}) {

        t = FString.#before(...arguments);

        FString.#deceit(t);

        super(t);

        FString.#create.apply(this, [t]);

    };

    /** @param {TString} t @this {[]} */
    static #before(t) {

        if (t?.constructor === String || t?.constructor === Number) return { value: t, };

        if (!t) t = {};

        return t;

    };
    /** @param {TString} t @this {YString} */
    static #deceit(t) {

        try {

            FString.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TString} t @this {YString} */
    static #verify(t) {

        const {



        } = t;

        FString.#handle(t);

    };
    /** @param {TString} t @this {YString} */
    static #handle(t) {

        let {



        } = t;

        t = {

            ...t,

        };

    };
    /** @param {TString} t @this {YString} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.cusrors = [new YCursor({ string: this })];
        this.templates = [];
        this.log.loged = (t.loged) ? t.loged : configYString.loged;

    };

};

/**
 *
 * - Тип `SDFY-2.0`
 * - Версия `0.1.0`
 * - Цепочка `BDVHC`
*/
export class YString extends FString {

    /**
     * Метод для получения текущей строки.
     * @param {boolean} style
     * @return {string}
    */
    get(style) {

        let r = this.value;

        if (style) {

            if (this.colorF) {

                r = stringReplace(r, [/\x1b\[39m/g, this.colorF]);
                r = `${this.colorF}${r}` + '\x1b[39m';

            };
            if (this.colorB) {

                r = stringReplace(r, [/\x1b\[49m/g, this.colorB]);
                r = `${this.colorB}${r}` + '\x1b[49m'

            };

        };

        return r;

    };
    /**
     * Метод для дополнения строки.
     * @param {string} string Строка дополнения.
     * @param {number} count Кол-во дополнений.
     * @param {boolean} left Сторона дополнения. 
    */
    pad(string, count, index = this.value.length) {

        this.value = stringPad(this.value, string, count, index);

        return this;

    };
    /**
     * Метод для поиска вложенных подстрок в строке.
     * @param {...string|RegExp} fragments
     * @return {[string]}
    */
    find(...fragments) {

        return stringFind(this.value, ...fragments);

    };
    /**
     * Метод копирования строки.
     * @return {YString}
    */
    copy() {

        return new YString(this);

    };
    /**
     * Метод для вставки значения.
     * - Версия `0.1.0`
     * @param {...string|Function} strings Строка вставки.
    */
    paste(...strings) {

        if (this.cursorRepeated) this.cusrors.forEach(c => {

            strings.forEach(s => {

                if (s instanceof Function) s = s() + '';

                this.value = this.pasteStart + stringPaste(this.value, s, c.index, c.size) + this.pasteEnd;

                c.move(this.pasteStart.length + s.length + this.pasteEnd.length);

                this.log.appendNotice(['*', `добавлено значение: ${s}`]);

            });

        }); else while (strings.length) {

            strings = strings.reverse();

            for (const c of this.cusrors) {

                if (strings.length) {

                    const s = strings.pop();

                    if (s instanceof Function) s = s() + '';

                    this.value = this.pasteStart + stringPaste(this.value, s, c.index, c.size) + this.pasteEnd;

                    c.move(this.pasteStart.length + s.length + this.pasteEnd.length);

                    this.log.appendNotice(['*', `добавлено значение: ${s}`]);

                } else break;

            };

        };

        return this;

    };
    /**
     * Метод дополнения строки до указанной длины указанными символами.
     * @param {string} string
     * @param {number} length
     * @param {boolean} left
    */
    bring(string, length, index = this.value.length) {

        this.value = stringBring(this.value, index, length, string);

        return this;

    };
    /**
     * Метод для добавления к текущей строке указанной строки.
     * @param {number} index Индекс дополнения.
     * @param {string} append Значения дополнения.
    */
    append(append, index = this.value.length) {

        this.value = this.stringAppendStart + stringAppend(this.value, index, (append instanceof YString) ? append.get(true) : append) + this.stringAppendEnd;

        return this;

    };
    /**
     * Метод для обрезания строки.
     * @param {number} length Длина обрезки.
     * @param {boolean} left Сторона обрезки.
    */
    remove(length, index = this.value.length - length) {

        this.value = stringRemove(this.value, index, length);

        return this;

    };
    /**
     * Метод для фильтрации строки.
     * @param {...string|RegExp} fragments Строки и шаблоны фильтрации.
    */
    filter(...fragments) {

        this.value = stringFilter(this.value, ...fragments);

        return this;

    };
    /**
     * Метод для повторения указанного фрагмента строки.
     * @param {number} count
    */
    repeat(count) {

        this.value = this.value.repeat(count);

        return this;

    };
    /**
     * Функция для использования match нативных строк.
     * @param {string|RegExp} fragment Строка или регулярное выражение для поиска соотвествий с помощью match.
    */
    match(fragment) {

        return this.value.match(fragment);

    };
    /**
     * Метод обработки совпадений в строке.
     * @param {function} handle
     * @param {...string|RegExp} fragments
    */
    handle(handle, ...fragments) {

        this.value = stringHandle(this.value, handle, ...fragments);

        return this;

    };
    /**
     * Метод для отображения текущего состояния строки.
     * - Версия `0.1.0`
    */
    display() {

        let r = this.value;

        if (this.colorF) {

            r = stringReplace(r, [/\x1b\[39m/g, this.colorF]);
            r = `${this.colorF}${r}` + '\x1b[39m';

        };
        if (this.colorB) {

            r = stringReplace(r, [/\x1b\[49m/g, this.colorB]);
            r = `${this.colorB}${r}` + '\x1b[49m'

        };

        console.log(r);

        return this;

    };
    /**
     * Метод для замены совпадения значения строки.
     * @param {...[string|RegExp, string]} replaces
    */
    replace(...replaces) {

        if (this.value) this.value = stringReplace(this.value, ...replaces);

        return this;

    };
    /**
     * Метод для перекраски текущей строки.
     * @param {string} color Цвет.
     * @param {boolean} bright Яркость.
     * @param {boolean} background Фон.
    */
    repaint(color, bright, background) {

        const c = stringRepaint(this.value, color, bright, background).match(/\x1b\[.*?m/)[0];

        if (background) this.colorB = c;
        else this.colorF = c;

        return this;

    };
    /**
     * Метод реверса строки.
    */
    reverse() {

        this.value = stringReverse(this.value);

        return this;

    };
    /**
     * Метод извлечения соответствия.
     * - Версия `0.1.1`
     * @param {...string|RegExp} fragments Фрагмент соотвествия.
    */
    extract(...fragments) {

        const results = fragments.map(f => {

            const result = stringFind(this.value, f);

            this.value = stringFilter(this.value, f);

            return result;

        });

        if (results.length === 1) return results[0];
        else return results;

    };
    /**
     * Метод для добавления курсора.
     * - Версия `0.0.0`
     * @param {number} size
     * @param {number} index
    */
    addCursor(index, size) {

        this.cusrors.push(new YCursor({ size, index, string: this, }));

        return this;

    };
    /**
     * Метод для поиска совпадений по фрагментам с преобразованием в объект указанного типа.
     * Свойства данного объекта - это указанные в регулярных выражениях поиска имена скобочных групп.
     * - Версия `0.0.0` 
     * @param {typeof Object} cls Конструктор объекта.
     * @param {...string|RegExp} fragments Фрагменты.
     * @return {[]}
    */
    findToJect(cls = Object, ...fragments) {

        return stringFindToJect(this.value, cls, ...fragments);

    };
    /**
     * Метод для добавления нового шаблона в перечень всех шаблонов.
     * - Версия `0.0.0`
     * @param {string} label Метка.
     * @param {string|YString|YTemplate} value Шаблон. 
    */
    addTemplate(label, value) {

        this.templates.add(new YTemplate(label, value));

        return this;

    };
    /**
     * Метод для удаления курсоров.
     * - Версия `0.0.0`
     * @param {...YCursor} cursors Курсоры, которые необходимо удалить.
    */
    removeCursor(...cursors) {

        if (!cursors.length) {

            this.cusrors.splice(1).forEach(c => c.delete());

        } else {

            cursors.forEach(c => c.delete());

            if (!this.length) this.cusrors.push(new YCursor({ string: this }));

        };

        return this;

    };
    /**
     * Метод для добавления шаблона в строку.
     * - Версия `0.0.0`
     * @param {number} index Индекс добавления.
     * @param {...string|YString} Вставки.
     * @param {string|YString|YTemplate} template Строка, выступающая шаблоном, метка существубщего шаблона или новый экземпляр шаблона.
    */
    pasteTemplate(template, index = this.value.length, ...inserts) {

        let v;

        if (template.constructor === String) {

            v = Array.from(this.templates).find(t => t.label === template)?.value ?? '';

        } else if (template instanceof YString) {

            v = template.get(true);

        } else if (template instanceof YTemplate) {

            v = template.value;

            this.templates.add(template);

        };

        this.value = stringAppend(this.value, index, v);

        return this;

    };
    /**
     * Метод для изменения строки конечного добавления.
     * - Версия `0.0.0`
     * @param {string} string
    */
    changePasteEnd(string = '') {

        this.pasteEnd = string;

        if (string) this.log.appendNotice(['*', `Изменено значение конечной вставки: ${string}`]);
        else this.log.appendNotice(['*', `Сброшено значение конечной вставки.`]);

        return this;

    };
    /**
     * Метод для изменения строки начального добавления.
     * - Версия `0.0.0`
     * @param {string}
    */
    changePasteStart(string = '') {

        this.pasteStart = string;

        if (string) this.log.appendNotice(['*', `Изменено значение начальной вставки: ${string}`]);
        else this.log.appendNotice(['*', `Сброшено значение начальной вставки.`]);

        return this;

    };

};

// /**
//  * @typedef TBString
//  * @prop {any} _
//  * @typedef {DString&TBString} TString
// */

// class SString {



// };
// class DString extends SString {

//     /**
//      * Текущее состояние строки.
//      * @type {string}
//     */
//     value = '';
//     /**
//      * Цвет шрифта.
//      * @type {string}
//     */
//     colorF = '';
//     /**
//      * Цвет фона.
//      * @type {string}
//     */
//     colorB = '';
//     /**
//      * Курсоры.
//      * @type {[YCursor]}
//     */
//     cusrors;
//     /**
//      * шаблоны.
//      * @type {Set<YTemplate>}
//     */
//     templates = new Set();
//     /**
//      * Конечная строка добавления.
//      * Данная подстрока будет добавляться в конец к каждому вызову `append` метода.
//      * @type {string}
//     */
//     stringAppendEnd = '';
//     /**
//      * Начальная строка добавления.
//      * Данная подстрока будет добавляться в начало к каждому вызову `append` метода.
//      * @type {string}
//     */
//     stringAppendStart = '';

// };
// class FString extends DString {

//     /**
//      *
//      * - Версия `0.0.0`
//      * - Цепочка `BDVHC`
//      *  @param {TString} t
//     */
//     constructor(t = {}) {

//         t = FString.#before(...arguments);

//         FString.#deceit(t);

//         super(t);

//         FString.#create.apply(this, [t]);

//     };

//     /** @param {TString} t @this {[]} */
//     static #before(t) {

//         if (t?.constructor === String || t?.constructor === Number) return { value: t, };

//         if (!t) t = {};

//         return t;

//     };
//     /** @param {TString} t @this {YString} */
//     static #deceit(t) {

//         try {

//             FString.#verify(t);

//         } catch (e) {

//             throw e;

//         };

//     };
//     /** @param {TString} t @this {YString} */
//     static #verify(t) {

//         const {



//         } = t;

//         FString.#handle(t);

//     };
//     /** @param {TString} t @this {YString} */
//     static #handle(t) {

//         let {



//         } = t;



//         t = {

//             ...t,

//         };

//     };
//     /** @param {TString} t @this {YString} */
//     static #create(t) {

//         const {



//         } = t;

//         jectFill(this, t);

//         this.cusrors = [new YCursor({ string: this })];

//     };

// };

// /**
//  *
//  * - Тип `SDFY-2.0`
//  * - Версия `0.1.0`
//  * - Цепочка `BDVHC`
// */
// export class YString extends FString {

//     /**
//      *
//     */
//     log() {

//         let r = this.value;

//         if (this.colorF) {

//             r = stringReplace(r, [/\x1b\[39m/g, this.colorF]);
//             r = `${this.colorF}${r}` + '\x1b[39m';

//         };
//         if (this.colorB) {

//             r = stringReplace(r, [/\x1b\[49m/g, this.colorB]);
//             r = `${this.colorB}${r}` + '\x1b[49m'

//         };

//         console.log(r);

//         return this;

//     };
//     /**
//      * Метод для получения текущей строки.
//      * @param {boolean} style
//      * @return {string}
//     */
//     get(style) {

//         let r = this.value;

//         if (style) {

//             if (this.colorF) {

//                 r = stringReplace(r, [/\x1b\[39m/g, this.colorF]);
//                 r = `${this.colorF}${r}` + '\x1b[39m';

//             };
//             if (this.colorB) {

//                 r = stringReplace(r, [/\x1b\[49m/g, this.colorB]);
//                 r = `${this.colorB}${r}` + '\x1b[49m'

//             };

//         };

//         return r;

//     };
//     /**
//      * Метод для дополнения строки.
//      * @param {string} string Строка дополнения.
//      * @param {number} count Кол-во дополнений.
//      * @param {boolean} left Сторона дополнения.
//     */
//     pad(string, count, index = this.value.length) {

//         this.value = stringPad(this.value, string, count, index);

//         return this;

//     };
//     /**
//      * Метод для поиска вложенных подстрок в строке.
//      * @param {...string|RegExp} fragments
//      * @return {[string]}
//     */
//     find(...fragments) {

//         return stringFind(this.value, ...fragments);

//     };
//     /**
//      * Метод копирования строки.
//      * @return {YString}
//     */
//     copy() {

//         return new YString(this);

//     };
//     /**
//      * Метод для вставки значения.
//      * @param {number} index Позиция вставки.
//      * @param {string} string Строка вставки.
//     */
//     paste(string, index = this.value.length, size = 1) {

//         this.value = stringPaste(this.value, string, index, size);

//         return this;

//     };
//     /**
//      * Метод дополнения строки до указанной длины указанными символами.
//      * @param {string} string
//      * @param {number} length
//      * @param {boolean} left
//     */
//     bring(string, length, index = this.value.length) {

//         this.value = stringBring(this.value, index, length, string);

//         return this;

//     };
//     /**
//      * Метод для добавления к текущей строке указанной строки.
//      * @param {number} index Индекс дополнения.
//      * @param {string} append Значения дополнения.
//     */
//     append(append, index = this.value.length) {

//         this.value = this.stringAppendStart + stringAppend(this.value, index, (append instanceof YString) ? append.get(true) : append) + this.stringAppendEnd;

//         return this;

//     };
//     /**
//      * Метод для обрезания строки.
//      * @param {number} length Длина обрезки.
//      * @param {boolean} left Сторона обрезки.
//     */
//     remove(length, index = this.value.length - length) {

//         this.value = stringRemove(this.value, index, length);

//         return this;

//     };
//     /**
//      * Метод для фильтрации строки.
//      * @param {...string|RegExp} fragments Строки и шаблоны фильтрации.
//     */
//     filter(...fragments) {

//         this.value = stringFilter(this.value, ...fragments);

//         return this;

//     };
//     /**
//      * Метод для повторения указанного фрагмента строки.
//      * @param {number} count
//     */
//     repeat(count) {

//         this.value = this.value.repeat(count);

//         return this;

//     };
//     /**
//      * Функция для использования match нативных строк.
//      * @param {string|RegExp} fragment Строка или регулярное выражение для поиска соотвествий с помощью match.
//     */
//     match(fragment) {

//         return this.value.match(fragment);

//     };
//     /**
//      * Метод обработки совпадений в строке.
//      * @param {function} handle
//      * @param {...string|RegExp} fragments
//     */
//     handle(handle, ...fragments) {

//         this.value = stringHandle(this.value, handle, ...fragments);

//         return this;

//     };
//     /**
//      * Метод для замены совпадения значения строки.
//      * @param {...[string|RegExp, string]} replaces
//     */
//     replace(...replaces) {

//         if (this.value) this.value = stringReplace(this.value, ...replaces);

//         return this;

//     };
//     /**
//      * Метод для перекраски текущей строки.
//      * @param {string} color Цвет.
//      * @param {boolean} bright Яркость.
//      * @param {boolean} background Фон.
//     */
//     repaint(color, bright, background) {

//         const c = stringRepaint(this.value, color, bright, background).match(/\x1b\[.*?m/)[0];

//         if (background) this.colorB = c;
//         else this.colorF = c;

//         return this;

//     };
//     /**
//      * Метод реверса строки.
//     */
//     reverse() {

//         this.value = stringReverse(this.value);

//         return this;

//     };
//     /**
//      * Метод извлечения соответствия.
//      * - Версия `0.1.1`
//      * @param {...string|RegExp} fragments Фрагмент соотвествия.
//     */
//     extract(...fragments) {

//         const results = fragments.map(f => {

//             const result = stringFind(this.value, f);

//             this.value = stringFilter(this.value, f);

//             return result;

//         });

//         if (results.length === 1) return results[0];
//         else return results;

//     };
//     /**
//      * Метод для поиска совпадений по фрагментам с преобразованием в объект указанного типа.
//      * Свойства данного объекта - это указанные в регулярных выражениях поиска имена скобочных групп.
//      * - Версия `0.0.0`
//      * @param {typeof Object} cls Конструктор объекта.
//      * @param {...string|RegExp} fragments Фрагменты.
//      * @return {[]}
//     */
//     findToJect(cls = Object, ...fragments) {

//         return stringFindToJect(this.value, cls, ...fragments);

//     };
//     /**
//      * Метод для добавления нового шаблона в перечень всех шаблонов.
//      * - Версия `0.0.0`
//      * @param {string} label Метка.
//      * @param {string|YString|YTemplate} value Шаблон.
//     */
//     createTemplate(label, value) {

//         this.templates.add(new YTemplate(label, value));

//         return this;

//     };
//     /**
//      * Метод для добавления шаблона в строку.
//      * - Версия `0.0.0`
//      * @param {number} index Индекс добавления.
//      * @param {...string|YString} Вставки.
//      * @param {string|YString|YTemplate} template Строка, выступающая шаблоном, метка существубщего шаблона или новый экземпляр шаблона.
//     */
//     appendTemplate(template, index = this.value.length, ...inserts) {

//         let v;

//         if (template.constructor === String) {

//             v = Array.from(this.templates).find(t => t.label === template)?.value ?? '';

//         } else if (template instanceof YString) {

//             v = template.get(true);

//         } else if (template instanceof YTemplate) {

//             v = template.value;

//             this.templates.add(template);

//         };

//         this.value = stringAppend(this.value, index, v);

//         return this;

//     };
//     /**
//      * Метод для изменения строки конечного добавления.
//      * - Версия `0.0.0`
//      * @param {string} string
//     */
//     changeStringAppendEnd(string = '') {

//         this.stringAppendEnd = string;

//         return this;

//     };
//     /**
//      * Метод для изменения строки начального добавления.
//      * - Версия `0.0.0`
//      * @param {string}
//     */
//     changeStringAppendStart(string = '') {

//         this.stringAppendStart = string;

//         return this;

//     };

// };

/**
 * @file YString.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/