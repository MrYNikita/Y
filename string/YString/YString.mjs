import { arrayRemoveByElement } from "../../array/array.mjs";
import { configLog, configString } from "../../config.mjs";
import { YFunc } from "../../func/YFunc/YFunc.mjs";
import { YProc } from "../../func/YFunc/YProc/YProc.mjs";
import { jectFill } from "../../ject/ject.mjs";
import { YBasic } from "../../ject/YBasic/YBasic.mjs";
import { YCursor } from "../../ject/YCursor/YCursor.mjs";
import { YLog } from "../../log/YLog/YLog.mjs";
import { YSection } from "../../log/YNotice/YSection/YSection.mjs";
import { stringAppend, stringBring, stringCastToSample, stringCastToYReport, stringFilter, stringFind, stringFindToJect, stringHandle, stringPad, stringPaste, stringReflect, stringRemove, stringRepaint, stringReplace, stringReverse } from "../string.mjs";
import { YTemplate } from "./YTemplate/YTemplate.mjs";

/**
 * @typedef TBString
 * @prop {boolean} loged
 * @typedef {DString&TBString} TString
*/

class SString extends YBasic {



};
class DString extends SString {

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

        this.cursors = [new YCursor({ list: this })];
        this.log.loged = (t.loged) ? t.loged : configString?.loged ?? false;

    };

};

/**
 * Класс строк.
 * 
 * Данный класс позволяет работать со строками.
 * Экземпляры класса позволяют производить манипуляции над добавленными в неё значениями.
 * - Тип `SDFY-2.0`
 * - Версия `0.1.2`
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

        strings = strings.reverse();

        while (strings.length) {

            for (const c of this.cursors) {

                if (strings.length) {

                    let sp = strings.pop(), so;

                    if (sp instanceof Function) sp = sp() + '';
                    else if (sp instanceof YString) {

                        sp.stringOver = this;
                        sp = sp.get();

                    };

                    so = sp;
                    sp = (this.prefix + sp + this.postfix).replace(/^.+/mg, (this.tabValue ?? this?.stringOver?.tabValue)?.repeat(this.tabIndex ?? this?.stringOver?.tabIndex ?? 0) + '$&');

                    this.value = stringPaste(this.value, sp, c.index, c.size);

                    c.move(sp.length);

                    this.log.appendNotice(['*', `добавлено значение: ${stringCastToSample(so)}`]);

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

        let r = this.get();

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
     * Метод установки размера области влияния курсоров.
     * - Версия `0.0.0`
     * @param {number} size Область влияния курсоров.
    */
    setCursorSize(size = 0) {

        this.cursors.forEach(c => c.size = size);
        
        return this;

    };
    /**
     * Метод утсановки курсора на заданную позицию.
     * - Версия `0.0.0`
     * @param {number} position Место установки для курсора.
    */
    setCursorPositionTo(position) {

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
    addCursor(index, size) {

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
     * - Версия `0.1.0`
     * @param {...string|YTemplate|[string, string, Array<string|number>]|[YTemplate, Array<string|number>]} templates Шаблоны.
     * Передаются в качестве остаточного параметра двумя вариантами: экземпляром шаблона или массивом строк.
     * 
     * Первый вариант предполагает, что нужный шаблон уже существует и воспринимает аргумент как его метку.
     * В данном случае для вставки достаточно лишь указать метку в виде строки.
     * 
     * Второй вариант предполагает явное указание экземпляра шаблона или объекта с аналогичными свойствами.
     * Указание объекта желательно избегать в пользу третьего варианта.
     * 
     * Третий вариант предполагает указание в качестве шаблона массива значений.
     * Первые два значения являются строками, а последнее - массивом с набором вставок, если они требуются.
     * 
     * Четвертый вариант аналогичен первому и третьему, так как указывается массивом и в качестве первого аргумента приводится экземпляр шаблона.
     * Вторым аргументом указывается массив вставок, если он требуется. 
    */
    pasteTemplate(...templates) {

        templates.forEach(tn => {

            let v = '';
            
            switch (tn.constructor) {

                case Array: {

                    if (tn.length >= 2 && tn[0].constructor === String) {

                        tn = new YTemplate(...tn);
                        
                        v = tn.value;
                        
                        this.templates.push(tn);

                        if (tn[2]);

                    } else {

                        v = tn[0].value;

                        this.templates.push(tn[0]);

                        if (tn[1]);

                    };

                }; break;
                case String: {

                    v = this.templates.find(t => t.label === tn)?.value ?? '';

                }; break;
                case YString: {

                    v = tn.get(true);

                }; break;
                case Object: {

                    tn = new YTemplate(tn);

                };
                case YTemplate: {

                    v = tn.value;

                    this.templates.push(tn);

                }; break;

            };

            this.value += v;

            this.cursors[0].move(v.length);

        });

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
    /**
     * Метод очистки префикса и постфикса.
     * - Версия `0.0.0`
    */
    clearPrePostfix() {

        this.changePrefix().changePostfix();

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