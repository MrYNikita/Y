import { YList } from "../../ject/YBasic/YList/YList.mjs";
import { jectFill } from "../../ject/ject.mjs";
import { YTemplate } from "./YTemplate/YTemplate.mjs";
import { configString, configYString } from "../../config.mjs";
import { stringBring, stringBringColumn, stringCastToJect, stringCastToSample, stringCastToYReport, stringFilter, stringFind, stringFindAll, stringFindToJect, stringGetPositionEndPasteWrap, stringGetPositionRowStartByIndex, stringGetRowByIndex, stringHandle, stringMesuare, stringPad, stringPaste, stringPasteWrap, stringPasteWrapByPosition, stringReflect, stringRemove, stringReplace, stringReplaceAllMore, stringReplaceMore, stringReverse, stringTrim } from "../string.mjs";
import { YStylist } from "./YStylist/YStylist.mjs";

//#region YT

/** ### YStringT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YString`
 *
 * Основной параметр модуля `YString`.
 *
 * @typedef {YStringTE&YStringTU} YStringT
 *
*/
/** ### YStringTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YString`
 *
 * Параметр наследования `YString`.
 *
 * @typedef {{[p in Exclude<keyof DString,keyof SString>|Exclude<keyof SString,keyof DString>]:(DString[p]&SString[p])}} YStringTE
 *
*/
/** ### YStringTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YString`
 *
 * Уникальные параметры `YString`.
 *
 * @typedef YStringTU
 * @prop {any} _
 *
*/

//#endregion

class SString extends YList {

    static dimension = 2;

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
     * Значение.
     * @type {string}
    */
    values = '';
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
     * Количество строк.
     * @type {number?}
    */
    rowLimit = null;
    /**
     * Длина строк.
     * @type {number?}
    */
    rowLength = null;
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

};
class IString extends DString {

    stylist = new YStylist(this);

};
class MString extends IString {

    /**
     * Метод вычисления позиции по координатам вставки.
     * - Версия `0.0.0`
     * @protected
    */
    calculateIndex() {

        return stringGetPositionRowStartByIndex(this.values, this.cursors[0].indexs[0], false) + this.cursors[0].indexs[1];

    };

};
class FString extends MString {

    /**
     * ### `YString.constructor`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YStringT} t
    */
    constructor(t = {}) {

        t = FString.#before(Object.values(arguments));

        FString.#deceit(t);

        super(t);

        FString.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YString].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {TString&DString} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YStringT} t @this {YString} */
    static #deceit(t) {

        try {

            FString.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YStringT} t @this {YString} */
    static #verify(t) {

        const {



        } = t;

        FString.#handle(t);

    };
    /** @arg {YStringT} t @this {YString} */
    static #handle(t) {



    };
    /** @arg {YStringT} t @this {YString} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * ### YString
 * - Тип `SDIMFY`
 * - Версия `0.6.0`
 * - Модуль `string.YString`
 * - Цепочка `BDVHC`
 * ***
 * Класс-обертка над строками.
 * Оборачивает строчное значение, позволяя манипулировать над ним с помощью методов класса.
*/
export class YString extends FString {

    /**
     * Метод для получения текущей строки.
     * - Версия `0.1.0`
     * @arg {boolean} style Режим стилизации.
     *
     * Активация данного режима позволяет получить итоговую строку с сохранением цветов и декораторов текста.
     * @return {string}
    */
    get(style) {

        let r = stringMesuare(this.values, this.rowLength, this.rowEnd);

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
     * Метод обрезки обернутой строки.
     * - Версия `0.0.0`
    */
    trim() {

        this.values = stringTrim(this.values);

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
     * Метод для вставки значения.
     * - Версия `0.2.0`
     * @arg {...string|Function} strings Строка вставки.
    */
    paste(...strings) {

        strings = strings.reverse().filter(f => f);

        while (strings.length) {

            let sp = strings.pop();

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

            this.cursors.forEach(c => this.values = stringPaste(this.values, sp, this.calculateIndex(), c.size));
            this.moveCursors(sp.length);

        };

        return this;

    };
    /**
     * Метод вставки с переносом.
     *
     * Данный метод построен на основе `paste` метода.
     * При указании значения вставки метод разбивает его на фрагменты по символу переноса строки.
     * Каждый такой фрагмент будет вставлен по всем правилам, однако после произойдет окозание влияния на курсоры:
     * все они будут смещены по y на 1, таким образом создавая эффект переноса.
     *
     * Данная особенность работает только с символами  переноса строки `\n`.
     * - Версия `0.0.0`
     * @arg {...string|function():string} pastes Значения вставки.
    */
    pasteWrap(...pastes) {

        pastes.filter(s => s).forEach(s => {

            this.cursors.forEach(c => {

                this.values = stringPasteWrap(this.values, s, c.indexs[1], c.indexs[0]);

            });

        });

        return this;

    };

    /**
     * Метод для повторения указанного фрагмента строки.
     * - Версия `0.0.2`
     * @arg {number} count
    */
    repeat(count) {

        const s = this.values;

        this.paste(s.repeat(count));

        return this;

    };

    /**
     * Метод перекраски позиций строки, попадающих в области курсоров.
     * - Версия `0.1.0`
     * @arg {boolean} ending Окончание.
     * @arg {import("../string.mjs").MrepaintColor|number} background Цвет фона.
     * @arg {import("../string.mjs").MrepaintColor|number} foreground Цвет символов.
    */
    repaint(foreground, background, ending) {

        return this;
        // const c = stringGetColor(color, bright, background);

        // if (background) this.colorB = c;
        // else this.colorF = c;

        // return this;

    };
    /**
     * Метод перекраски строки.
     * - Версия `0.0.0`
     * @arg {import("../string.mjs").MrepaintColor|number} background Цвет фона.
     * @arg {import("../string.mjs").MrepaintColor|number} foreground Цвет символа.
    */
    repaintAll(foreground, background) {

        if (foreground) this.colorF = stringGetColor(foreground);
        if (background) this.colorB = stringGetColor(background);

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
     * Метод для обрезания строки.
     * @arg {number} length Длина обрезки.
     * @arg {boolean} left Сторона обрезки.
    */
    remove(length = -1) {

        this.values = stringRemove(this.values, this.cursors[0].indexs[1] - 1, length);

        this.moveCursors(length);

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

        if (length.constructor === Number && length > 0) {

            this.rowLength = length;

        };

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

    setCursorTo(...indexs) {

        SString.prototype.setCursorTo.apply(this, [...indexs]);

        this.values = stringBringColumn(this.values, ...indexs);

        return this;

    };

};

/**
 * @file YString.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/
