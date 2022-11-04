import { arrayRemove } from "../../array/array.mjs";
import { configLog, configYString } from "../../config.mjs";
import { jectFill } from "../../ject/ject.mjs";
import { YLog } from "../../log/YLog/YLog.mjs";
import { YSection } from "../../log/YNotice/YSection/YSection.mjs";
import { stringAppend, stringBring, stringCastToSample, stringCastToYReport, stringFilter, stringFind, stringFindToJect, stringHandle, stringPad, stringPaste, stringRemove, stringRepaint, stringReplace, stringReverse } from "../string.mjs";
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
    postfix = '';
    /**
     * Начальная строка добавления.
     * Данная подстрока будет добавляться в начало к каждому вызову `paste` метода.
     * @type {string}
    */
    prefix = '';

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

                this.value = stringPaste(this.value, this.prefix + s + this.postfix, c.index, c.size);

                c.move(this.prefix.length + s.length + this.postfix.length);

                this.log.appendNotice(['*', `добавлено значение: ${stringCastToSample(s)}`]);

            });

        }); else while (strings.length) {

            strings = strings.reverse();

            for (const c of this.cusrors) {

                if (strings.length) {

                    const s = strings.pop();

                    if (s instanceof Function) s = s() + '';

                    this.value = this.prefix + stringPaste(this.prefix + this.value + this.postfix, s, c.index, c.size);

                    c.move(this.prefix.length + s.length + this.postfix.length);

                    this.log.appendNotice(['*', `добавлено значение: ${stringCastToSample(s)}`]);

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
     * Метод отображения состояния.
     * - Версия `0.0.0`
    */
    report() {

        new YString()
            .changePostfix(';\n')
            .paste(

                `Префикс: ${stringCastToSample(this.prefix)}`,
                `Постфикс: ${stringCastToSample(this.postfix)}`,
                `Цвет заднего плана: ${this.colorB}`,
                `Цвет переднего плана: ${this.colorF}`,
                `Кол-во символов: ${this.value.length}`,
                `Кол-во курсоров: ${this.cusrors.length}`,
                `Кол-во шаблонов: ${this.templates.length}`,
                `Позиции курсоров: ${this.cusrors.map(c => c.index)}`,

            )
            .castToYReport()
            .display();

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

            if (result) this.value = stringFilter(this.value, f);

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

        const c = new YCursor({ size, index, string: this, })

        this.cusrors.push(c);

        this.log.appendNotice(['*', `Добавлен кусор. Индекс: ${c.index}; Размер: ${c.size};`,])

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

        this.templates.push(new YTemplate(label, value));

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

            this.templates.push(template);

        };

        this.value += v;

        this.cusrors[0].move(v.length);

        return this;

    };
    /**
     * Метод форматирования строки в формат отчетных строк Y элементов.
     * - Версия `0.0.0`
    */
    castToYReport() {

        this.value = stringCastToYReport(this.value);

        return this;

    };
    /**
     * Метод для изменения строки начального добавления.
     * - Версия `0.0.0`
     * @param {string}
    */
    changePrefix(string = '') {

        this.prefix = string;

        if (string) this.log.appendNotice(['*', `Изменено значение начальной вставки: ${string}`]);
        else this.log.appendNotice(['*', `Сброшено значение начальной вставки.`]);

        return this;

    };
    /**
     * Метод для изменения строки конечного добавления.
     * - Версия `0.0.0`
     * @param {string} string
    */
    changePostfix(string = '') {

        this.postfix = string;

        if (string) this.log.appendNotice(['*', `Изменено значение конечной вставки: ${string}`]);
        else this.log.appendNotice(['*', `Сброшено значение конечной вставки.`]);

        return this;

    };

};

/**
 * @file YString.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/