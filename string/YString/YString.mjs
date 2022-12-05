import { configString } from "../../config.mjs";
import { jectFill } from "../../ject/ject.mjs";
import { YBasic } from "../../ject/YBasic/YBasic.mjs";
import { YCursor } from "../../ject/YCursor/YCursor.mjs";
import { stringAppend, stringBring, stringCastToJect, stringCastToSample, stringCastToYReport, stringFilter, stringFind, stringFindAll, stringFindToJect, stringGetColor, stringHandle, stringPad, stringPaste, stringReflect, stringRemove, stringRepaint, stringReplace, stringReplaceAllMore, stringReplaceMore, stringReverse } from "../string.mjs";
import { YTemplate } from "./YTemplate/YTemplate.mjs";

/**
 * @typedef TBString
 * @prop {any} _
 * @typedef {DString&TBString} TString
*/

class SString {



};
class DString extends SString {

    /**
     * Текущее состояние строки.
     * @type {string}
    */
    value = '';

};
class IString extends DString {

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
     * @type {Array<YCursor>}
    */
    cursors;
    /**
     * Начальная строка добавления.
     * Данная подстрока будет добавляться в начало к каждому вызову `paste` метода.
     * @type {string}
    */
    prefix = '';
    /**
     * Конечная строка добавления.
     * Данная подстрока будет добавляться в конец к каждому вызову `paste` метода.
     * @type {string}
    */
    postfix = '';
    /**
     * Значение табуляции.
     * @type {string}
    */
    tabValue = configString?.tabValue ?? '';
    /**
     * Индекс табуляции.
     * @type {number}
    */
    tabIndex = 0;
    /**
     * шаблоны.
     * @type {Array<YTemplate>}
    */
    templates = configString?.templates?.map(t => new YTemplate(...t));
    /**
     * Над-строка.
     * @type {YString?}
    */
    stringOver = null;

};
class MString extends IString {



};
class FString extends MString {

    /**
     * Контсруктор класса `YString`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TString} t
    */
    constructor(t = {}) {

        t = FString.#before(Object.values(arguments));

        FString.#deceit(t);

        super(t);

        FString.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TString} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.value = t[0];

            };

            return r;

        } else return {};

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



    };
    /** @param {TString} t @this {YString} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.cursors = [new YCursor({ list: this })];

    };

};

/**
 * Класс `YString`.
 *
 * Класс для конструирования строк.
 * - Тип `SDIMFY-1.1`
 * - Версия `0.2.0`
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


            if (this.colorF) r = `${this.colorF}${r}` + '\x1b[39m';
            if (this.colorB) r = `${this.colorB}${r}` + '\x1b[49m';

        };

        return r;

    };

    /**
     * Метод для выполнения функции в контексте указанной строки.
     * В качестве значения необходимо передать функцию с указанным первым аргументом.
     * Данный аргумент предоставит доступ к строке.
     * - Версия `0.0.0`
     * @param {function(YString):void} func Функция.
    */
    exec(func) {

        if (func instanceof Function) func(this);

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
     * Метод для замены первых совпадений с глубоким поиском.
     * - Версия `0.1.0`
     * @param {...[string,string|RegExp]} replaces Замены.
    */
    replace(...replaces) {

        if (this.value) this.value = stringReplaceMore(this.value, ...replaces);

        return this;

    };
    /**
     * Метод для замены всех совпадений.
     * - Версия `0.0.0`
     * @param {...[string, string|RegExp]} replaces Замены.
    */
    replaceAll(...replaces) {

        if (this.value) this.value = stringReplaceAllMore(this.value, ...replaces);

        return this;

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
     * - Версия `0.2.1`
     * @param {...string|RegExp} fragments
    */
    find(...fragments) {

        if (fragments.length) {

            this.value = stringFind(this.value, ...fragments) ?? '';

            this.changeCursorPositionTo(this.value.length);

        };

        return this;

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
     * - Версия `0.2.0`
     * @param {...string|Function} strings Строка вставки.
    */
    paste(...strings) {

        strings = strings.reverse();

        while (strings.length) {

            let sp = strings.pop();

            if (!sp) continue;

            if (sp instanceof Function) {

                sp = sp() + '';

            } else if (sp instanceof YString) {

                sp.stringOver = this;
                sp = sp.get();

            };

            sp = ((this.prefix instanceof YTemplate ? this.prefix.get() : this.prefix) + sp + (this.postfix instanceof YTemplate ? this.postfix.get() : this.postfix)
            ).replace(/^.+/mg, (this.tabValue ?? this?.stringOver?.tabValue)?.repeat(this.tabIndex ?? this?.stringOver?.tabIndex ?? 0) + '$&');

            this.cursors.forEach(c => {

                this.value = stringPaste(this.value, sp, c.index, c.size);

                c.move(sp.length);

            });

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

        new YString(this.getReport())

            .castToYReport()
            .display()

        return this;

    };
    /**
     * Метод для обрезания строки.
     * @param {number} length Длина обрезки.
     * @param {boolean} left Сторона обрезки.
    */
    remove(length) {

        this.value = stringRemove(this.value, this.cursors[0].index, length);

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
     * Метод отзеркаливания строки.
     * - Версия `0.0.0`
     * @param {boolean} every Логическое значение, которое определяет, как следует проводить отражение.
     * Значение true означает, что необходимо зеркально отразить каждую строку с переносом по отдельности.
     * Значение false же прибавит инвертированную копию текущей строки на конец исходной.
     * @param {...Array<string,string>} mirrors
    */
    reflect(every = false, ...mirrors) {

        this.value = stringReflect(this.value, every, ...mirrors);

        return this;

    };
    /**
     * Метод для отображения текущего состояния строки.
     * - Версия `0.1.0`
    */
    display() {

        let r = this.get(true);

        console.log(r);

        return this;

    };
    /**
     * Метод для перекраски текущей строки.
     * @param {string} color Цвет.
     * @param {boolean} bright Яркость.
     * @param {boolean} background Фон.
    */
    repaint(color, bright, background) {

        const c = stringGetColor(color, bright, background);

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
     * Метод извлечения единственного соответствия глубоким поиском.
     * - Версия `0.2.0`
     * @param {...string|RegExp} fragments Фрагменты соотвествия.
    */
    extract(...fragments) {

        if (fragments.length) {

            const r = stringFind(this.value, ...fragments);

            if (r) {

                this.filter(...fragments);
                return r;

            }

            return r;

        } else return null;

    };
    /**
     * Метод извлечения всех совпадений.
     * - Версия `0.0.0`
     * @param {...string|RegExp} fragments Фрагменты соотвествия.
    */
    extractAll(...fragments) {

        const r = stringFindAll(this.value, ...fragments);

        if (r.length) this.filter(...fragments);

        return r;

    };
    /**
     * Метод установки размера области влияния курсоров.
     * - Версия `0.0.0`
     * @param {number} size Область влияния курсоров.
    */
    changeCursorSize(size = 0) {

        this.cursors.forEach(c => c.size = size);

        return this;

    };
    /**
     * Метод утсановки курсора на заданную позицию.
     * - Версия `0.0.0`
     * @param {number} position Место установки для курсора.
    */
    changeCursorPositionTo(position) {

        this.removeCursor().cursors[0].move(position - this.cursors[0].index);

        return this;

    };
    /**
     * Метод для получения информации.
     * - Версия `0.0.0`
    */
    getReport() {

        return new YString()

            .changePostfix(';\n')
            .paste(

                `Префикс: '${stringCastToSample(this.prefix)}'`,
                `Постфикс: '${stringCastToSample(this.postfix)}'`,
                `Цвет заднего плана: '${this.colorB}'`,
                `Цвет переднего плана: '${this.colorF}'`,
                `Кол-во символов: ${this.value.length}`,
                `Кол-во курсоров: ${this.cursors.length}`,
                `Кол-во шаблонов: ${this.templates.length}`,
                `Позиции курсоров: [${this.cursors.map(c => c.index)}]`,

            )
            .get();

    };
    /**
     * Метод для добавления курсора.
     * - Версия `0.0.0`
     * @param {number} size
     * @param {number} index
    */
    appendCursor(index, size) {

        const c = new YCursor({ size, index, list: this, })

        this.cursors.push(c);

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
     * - Версия `0.1.0`
     * @param {string} label Метка.
     * @param {string|YString|YTemplate} value Шаблон.
     * @param {...[string, string|number|function():string|number]} inserts Вставки.
    */
    appendTemplate(label, value, ...inserts) {

        if (label && value) this.templates.push(new YTemplate(label, value, ...inserts));

        return this;

    };
    /**
     * Метод для удаления курсоров.
     * - Версия `0.0.0`
     * @param {...YCursor} cursors Курсоры, которые необходимо удалить.
    */
    removeCursor(...cursors) {

        if (!cursors.length) {

            this.cursors.splice(1).forEach(c => c.delete());

        } else {

            cursors.forEach(c => c.delete());

            if (!this.length) this.cursors.push(new YCursor({ list: this }));

        };

        return this;

    };
    /**
     * Метод для добавления шаблона в строку.
     *
     * Шаблон вставляется в соответствии с правилом курсоров.
     * Это означает, что его размещение зависит от местоположения курсора.
     *
     * Шаблон может включать в себя вставки.
     * Подробнее о вставках можно прочитать в классе шаблонов.
     * - Версия `0.2.0`
     * @param {string} label Метка.
     * @param {...[string, string|number|function():string|number]} inserts Вставки.
    */
    pasteTemplate(label, ...inserts) {

        let yt = this.templates.find(t => t.label === label);

        if (yt) this.paste(yt.get(yt.value, ...inserts));

        return this;

    };
    /**
     * Метод преобразования строки в объект.
     * - Версия `0.0.0`
    */
    castToJect() {

        return stringCastToJect(this.value);

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
     * Метод для изменения строки табуляции.
     * - Версия `0.0.0`
     * @param {string} string Новая строка табуляции.
     * - По умолчанию `''`
    */
    changeTab(string = '') {

        this.tabValue = string;

        return this;

    };
    /**
     * Метод для изменения строки начального добавления.
     * - Версия `0.0.0`
     * @param {string} string
    */
    changePrefix(string = '') {

        this.prefix = string;

        return this;

    };
    /**
     * Метод для изменения строки конечного добавления.
     * - Версия `0.0.0`
     * @param {string} string
    */
    changePostfix(string = '') {

        this.postfix = string;

        return this;

    };
    /**
     * Метод изменения строки начального добавления на строку шаблона.
     * - Версия `0.0.0`
     * @param {string} label Метка.
     * @param {string} value Значение.
     * @param {...[string, string|number|function():string|number]} inserts Вставки.
    */
    changePrefixByTemplate(label, value, ...inserts) {

        let yt = this.templates.find(t => t.label === label);

        if (yt) {

            this.prefix = yt;

        } else {

            this.prefix = new YTemplate(label, value, ...inserts);
            this.templates.push(this.postfix);

        };

        return this;

    };
    /**
     * Метод изменения строки конечного добавления на шаблон.
     * - Версия `0.0.0`
     * @param {string} label Метка.
     * @param {string} value Значение.
     * @param {...[string, string|number|function():string|number]} inserts Вставки.
    */
    changePostfixByTemplate(label, value, ...inserts) {

        let yt = this.templates.find(t => t.label === label);

        if (yt) {

            this.postfix = yt;

        } else {

            this.postfix = new YTemplate(label, value, ...inserts);
            this.templates.push(this.postfix);

        };

        return this;

    };
    /**
     * Метод замены префикса и постфикса.
     * - Версия `0.1.0`
     * @param {string} prefix Префикс.
     * @param {string} postfix Постфикс.
    */
    changePrePostfix(prefix, postfix) {

        this.changePrefix(prefix).changePostfix(postfix);

        return this;

    };
    /**
     * Метод для увелечения индекса табуляции.
     * - Версия `0.0.0`
     * @param {number} increase Сдвиг индекса табуляции.
     * - По умолчанию `1`
    */
    increaseTab(increase = 1) {

        this.tabIndex += increase;

        return this;

    };
    /**
     * Метод для уменьшения индекса табуляции.
     * - Версия `0.0.0`
     * @param {number} decrease Сдвиг индекса табуляции.
     * - По умолчанию `1`
    */
    decreaseTab(decrease = 1) {

        if (this.tabIndex) {

            this.tabIndex -= decrease;

            if (this.tabIndex < 0) this.tabIndex = 0;

        };

        return this;

    };

};

/**
 * @file YString.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/