import { arrayDevideByLimit } from "../../array/array.mjs";
import { configString, configYString } from "../../config.mjs";
import { jectFill } from "../../ject/ject.mjs";
import { YList } from "../../ject/YBasic/YList/YList.mjs";
import { stringBring, stringCastToJect, stringCastToSample, stringCastToYReport, stringFilter, stringFind, stringFindAll, stringFindToJect, stringGetColor, stringHandle, stringPad, stringPaste, stringReflect, stringRemove, stringRepaint, stringReplace, stringReplaceAllMore, stringReplaceMore, stringReverse } from "../string.mjs";
import { YTemplate } from "./YTemplate/YTemplate.mjs";

/**
 * @typedef TBString
 * @prop {any} _
 * @typedef {DString&TBString} TString
*/

class SString extends YList {

    /**
     * Общедоступные шаблоны.
     *
     * Данные шаблоны могут быть получены любыми строками.
     * @type {YTemplate[]}
    */
    static templates = configYString.templates.map(t => new YTemplate(...t));

};
class DString extends SString {

    /**
     * Текущее состояние строки.
     * @type {string}
    */
    values = '';

};
class IString extends DString {

    /**
     * Над-строка.
     * @type {YString?}
    */
    over = null;
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
     * Шаблоны.
     *
     * Индивидуальный массив шаблонов данной строки.
     * @type {YTemplate[]}
    */
    templates = configString?.templates?.map(t => new YTemplate(...t)) ?? [];

    /**
     * Конец строки.
     *
     * При превышении строки указывается данное значение.
     *
     * - По умолчанию `\n`
     * @type {string}
    */
    rowEnd = '\n';
    /**
     * Длина строки.
     *
     * Если указана, то для каждой строки будет осуществляться замер.
     * При превышении указанного значения длины, в строку автоматически будет вставлено значение `endRow` (конца строки).
     * @type {number?}
    */
    rowLength = null;

};
class MString extends IString {



};
class FString extends MString {

    /**
     * Контсруктор класса `YString`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TString} t
    */
    constructor(t = {}) {

        t = FString.#before(Object.values(arguments));

        FString.#deceit(t);

        super(t);

        FString.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YString].includes(t[0].constructor)) {

            return t[0];

        } else if (t?.length) {

            /** @type {TString} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.values = t[0];

            };

            return r;

        } else return {};

    };
    /** @arg {TString} t @this {YString} */
    static #deceit(t) {

        try {

            FString.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TString} t @this {YString} */
    static #verify(t) {

        const {



        } = t;

        FString.#handle(t);

    };
    /** @arg {TString} t @this {YString} */
    static #handle(t) {



    };
    /** @arg {TString} t @this {YString} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

    };

};

/**
 * Класс `YString`.
 *
 * Класс для конструирования строк.
 * - Тип `SDIMFY-1.1`
 * - Версия `0.3.0`
 * - Цепочка `BDVHC`
*/
export class YString extends FString {

    /**
     * Метод для получения текущей строки.
     * @arg {boolean} style
     * @return {string}
    */
    get(style) {

        let r = this.values;

        if (style) {


            if (this.colorF) r = `${this.colorF}${r}` + '\x1b[39m';
            if (this.colorB) r = `${this.colorB}${r}` + '\x1b[49m';

        };

        return r;

    };

    /**
     * Метод указания текущего значения строки.
     * - Версия `0.0.0`
     * @arg {string} string
    */
    set(string = '') {

        this.values = string;
        this.setCursorTo(this.values.length);

        return this;

    };

    /**
     * Метод для дополнения строки.
     * - Версия `0.0.0`
     * @arg {string} string Строка дополнения.
     * @arg {number} count Кол-во дополнений.
     * @arg {boolean} left Сторона дополнения.
    */
    pad(string, count, index = this.values.length) {

        this.values = stringPad(this.values, string, count, index);

        return this;

    };

    /**
     * Метод для поиска вложенных подстрок в строке.
     * - Версия `0.2.1`
     * @arg {...string|RegExp} fragments
    */
    find(...fragments) {

        if (fragments.length) {

            this.values = stringFind(this.values, ...fragments) ?? '';

            this.setCursorTo(this.values.length);

        };

        return this;

    };

    /**
     * Метод для выполнения функции в контексте указанной строки.
     * В качестве значения необходимо передать функцию с указанным первым аргументом.
     * Данный аргумент предоставит доступ к строке.
     * - Версия `0.0.0`
     * @arg {function(YString):void} func Функция.
    */
    exec(func) {

        if (func instanceof Function) func(this);

        return this;

    };

    /**
     * Метод для повторения указанного фрагмента строки.
     * @arg {number} count
    */
    repeat(count) {

        this.values = this.values.repeat(count);

        return this;

    };

    /**
     * Метод для замены первых совпадений с глубоким поиском.
     * - Версия `0.1.0`
     * @arg {...[string,string|RegExp]} replaces Замены.
    */
    replace(...replaces) {

        if (this.values) this.values = stringReplaceMore(this.values, ...replaces);

        return this;

    };
    /**
     * Метод для замены всех совпадений.
     * - Версия `0.0.0`
     * @arg {...[string, string|RegExp]} replaces Замены.
    */
    replaceAll(...replaces) {

        if (this.values) this.values = stringReplaceAllMore(this.values, ...replaces);

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
     * @arg {...string|Function} strings Строка вставки.
    */
    paste(...strings) {

        strings = strings.reverse();

        while (strings.length) {

            let sp = strings.pop();

            if (!sp) continue;

            if (sp instanceof Function) {

                sp = sp() + '';

            } else if (sp instanceof YString) {

                sp.over = this;
                sp = sp.get();

            };

            if (this.prefix instanceof YTemplate) sp = this.prefix.get() + sp;
            else sp = this.prefix + sp;

            if (this.postfix instanceof YTemplate) sp += this.postfix.get();
            else sp += this.postfix;

            sp = sp.replace(/^.+/mg, (this.tabValue ?? this?.over?.tabValue)?.repeat(this.tabIndex ?? this?.over?.tabIndex ?? 0) + '$&');

            if (this.rowLength) sp = sp.split('\n').map(r => arrayDevideByLimit(r, this.rowLength).map(r => r.join(''))).flat().join(this.rowEnd);

            this.cursors.forEach(c => {

                this.values = stringPaste(this.values, sp, c.index, c.size);

                c.move(sp.length);

            });

        };

        return this;

    };
    /**
     * Метод дополнения строки до указанной длины указанными символами.
     * @arg {string} string
     * @arg {number} length
     * @arg {boolean} left
    */
    bring(string, length, index = this.values.length) {

        this.values = stringBring(this.values, index, length, string);

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
     * @arg {number} length Длина обрезки.
     * @arg {boolean} left Сторона обрезки.
    */
    remove(length) {

        this.values = stringRemove(this.values, this.cursors[0].index, length);

        this.cursors.forEach(c => c.move(length));

        return this;

    };
    /**
     * Метод для фильтрации строки.
     * @arg {...string|RegExp} fragments Строки и шаблоны фильтрации.
    */
    filter(...fragments) {

        this.values = stringFilter(this.values, ...fragments);

        return this;

    };
    /**
     * Функция для использования match нативных строк.
     * @arg {string|RegExp} fragment Строка или регулярное выражение для поиска соотвествий с помощью match.
    */
    match(fragment) {

        return this.values.match(fragment);

    };
    /**
     * Метод обработки совпадений в строке.
     * @arg {function} handle
     * @arg {...string|RegExp} fragments
    */
    handle(handle, ...fragments) {

        this.values = stringHandle(this.values, handle, ...fragments);

        return this;

    };
    /**
     * Метод отзеркаливания строки.
     * - Версия `0.0.0`
     * @arg {boolean} every Логическое значение, которое определяет, как следует проводить отражение.
     * Значение true означает, что необходимо зеркально отразить каждую строку с переносом по отдельности.
     * Значение false же прибавит инвертированную копию текущей строки на конец исходной.
     * @arg {...Array<string,string>} mirrors
    */
    reflect(every = false, ...mirrors) {

        this.values = stringReflect(this.values, every, ...mirrors);

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
     * @arg {string} color Цвет.
     * @arg {boolean} bright Яркость.
     * @arg {boolean} background Фон.
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

        this.values = stringReverse(this.values);

        return this;

    };
    /**
     * Метод извлечения единственного соответствия глубоким поиском.
     * - Версия `0.2.0`
     * @arg {...string|RegExp} fragments Фрагменты соотвествия.
    */
    extract(...fragments) {

        if (fragments.length) {

            const r = stringFind(this.values, ...fragments);

            if (r) {

                this.filter(...fragments);
                return r;

            }

            return r;

        } else return null;

    };
    /**
     * Метод извлечения всех совпадений.
     * - Версия `0.0.1`
     * @arg {...string|RegExp} fragments Фрагменты соотвествия.
    */
    extractAll(...fragments) {

        const r = stringFindAll(this.values, ...fragments);

        if (r.length) this.filter(...fragments);

        return r;

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
                `Кол-во символов: ${this.values.length}`,
                `Кол-во курсоров: ${this.cursors.length}`,
                `Кол-во шаблонов: ${this.templates.length}`,
                `Позиции курсоров: [${this.cursors.map(c => c.index)}]`,

            )
            .get();

    };
    /**
     * Метод для поиска совпадений по фрагментам с преобразованием в объект указанного типа.
     * Свойства данного объекта - это указанные в регулярных выражениях поиска имена скобочных групп.
     * - Версия `0.0.0`
     * @arg {typeof Object} cls Конструктор объекта.
     * @arg {...string|RegExp} fragments Фрагменты.
     * @return {[]}
    */
    findToJect(cls = Object, ...fragments) {

        return stringFindToJect(this.values, cls, ...fragments);

    };
    /**
     * Метод для добавления нового шаблона в перечень всех шаблонов.
     * - Версия `0.1.0`
     * @arg {string} label Метка.
     * @arg {string|YString|YTemplate} value Шаблон.
     * @arg {...[string, string|number|function():string|number]} inserts Вставки.
    */
    appendTemplate(label, value, ...inserts) {

        if (label && value) this.templates.push(new YTemplate(label, value, ...inserts));

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
     * @arg {string} label Метка.
     * @arg {...[string, string|number|function():string|number]} inserts Вставки.
    */
    pasteTemplate(label, ...inserts) {

        let yt = [...this.templates, ...YString.templates].find(t => t.label === label);

        if (yt) this.paste(yt.get(yt.value, ...inserts));

        return this;

    };
    /**
     * Метод преобразования строки в объект.
     * - Версия `0.0.0`
    */
    castToJect() {

        return stringCastToJect(this.values);

    };
    /**
     * Метод форматирования строки в формат отчетных строк Y элементов.
     * - Версия `0.0.0`
    */
    castToYReport() {

        this.values = stringCastToYReport(this.values);

        return this;

    };
    /**
     * Метод для изменения строки табуляции.
     * - Версия `0.0.0`
     * @arg {string} string Новая строка табуляции.
     * - По умолчанию `''`
    */
    changeTab(string = '') {

        this.tabValue = string;

        return this;

    };
    /**
     * Метод для изменения строки начального добавления.
     * - Версия `0.0.0`
     * @arg {string} string
    */
    changePrefix(string = '') {

        this.prefix = string;

        return this;

    };
    /**
     * Метод для изменения строки конечного добавления.
     * - Версия `0.0.0`
     * @arg {string} string
    */
    changePostfix(string = '') {

        this.postfix = string;

        return this;

    };
    /**
     * Метод изменения строки начального добавления на строку шаблона.
     * - Версия `0.0.0`
     * @arg {string} label Метка.
     * @arg {string} value Значение.
     * @arg {...[string, string|number|function():string|number]} inserts Вставки.
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
     * @arg {string} label Метка.
     * @arg {string} value Значение.
     * @arg {...[string, string|number|function():string|number]} inserts Вставки.
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
     * @arg {string} prefix Префикс.
     * @arg {string} postfix Постфикс.
    */
    changePrePostfix(prefix, postfix) {

        this.changePrefix(prefix).changePostfix(postfix);

        return this;

    };
    /**
     * Метод для увелечения индекса табуляции.
     * - Версия `0.0.0`
     * @arg {number} increase Сдвиг индекса табуляции.
     * - По умолчанию `1`
    */
    increaseTab(increase = 1) {

        this.tabIndex += increase;

        return this;

    };
    /**
     * Метод для уменьшения индекса табуляции.
     * - Версия `0.0.0`
     * @arg {number} decrease Сдвиг индекса табуляции.
     * - По умолчанию `1`
    */
    decreaseTab(decrease = 1) {

        if (this.tabIndex) {

            this.tabIndex -= decrease;

            if (this.tabIndex < 0) this.tabIndex = 0;

        };

        return this;

    };
    /**
     * Метод указания длины строки.
     * - Версия `0.0.0`
     * @arg {number?} length
    */
    changeRowLength(length) {

        this.rowLength = length;

        return this;

    };
    /**
     * Метод указания завершения строк.
     * - Версия `0.0.0`
     * @arg {string} string
    */
    changeRowEnd(string) {

        this.rowEnd = string + '\n';

        return this;

    };
    /**
     * Метод сброса стилей.
     * - Версия `0.0.0`
    */
    resetStyle() {

        this.replaceAll(['', /\x1b\[\d+m/]);

        return this;

    };

};

/**
 * @file YString.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2022
*/