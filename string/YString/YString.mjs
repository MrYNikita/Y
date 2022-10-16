/**
 * @typedef TBString
 * @prop {any} _
 * @typedef {DString&TBString} TString
*/

import { jectFill } from "../../ject/ject.mjs";
import { stringAppend, stringBring, stringFilter, stringFind, stringFindToJect, stringHandle, stringPad, stringPaste, stringRemove, stringRepaint, stringReplace, stringReverse } from "../string.mjs";

class SString {



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

        super(t);

        FString.#deceit.apply(this, [t]);

    };

    [Symbol.toPrimitive](hint) {

        if (hint === 'number') {

            return +this.value;

        } else if (hint === 'string') {

            return this.get();

        };

    };

    /** @param {TString} t @this {[]} */
    static #before(t) {

        if (t?.constructor === String || t?.constructor === Number) return { value: t, };

        if (!t) return {};
        else if (t) return t;

    };
    /** @param {TString} t @this {YString} */
    static #deceit(t) {

        try {

            FString.#verify.apply(this, arguments);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TString} t @this {YString} */
    static #verify(t) {

        const {



        } = t;

        FString.#handle.apply(this, arguments);

    };
    /** @param {TString} t @this {YString} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

        FString.#create.apply(this, [t]);

    };
    /** @param {TString} t @this {YString} */
    static #create(t) {

        const {



        } = t;

        jectFill.apply(this, [t]);


    };

};

/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YString extends FString {

    /**
     * 
    */
    log() {

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
     * @param {number} index Позиция вставки.
     * @param {string} string Строка вставки.
    */
    paste(string, index = this.value.length, size = 1) {

        this.value = stringPaste(this.value, string, index, size);

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

        this.value = stringAppend(this.value, index, (append instanceof YString) ? append.get(true) : append);

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
     * @param {...string|RegExp} fragments Фрагмент соотвествия.
    */
    extract(...fragments) {

        const results = fragments.map(f => {

            const result = stringFind(this.value, f);

            this.value = stringFilter(this.value, f);

            return result;

        }).flat();

        if (results.length === 1) return results[0];
        else return results;

    };
    /**
     * Метод для поиска совпадений по фрагментам с преобразованием в объект указанного типа.
     * Свойства данного объекта - это указанные в регулярных выражениях поиска имена скобочных групп.
     * @param {typeof Object} cls Конструктор объекта.
     * @param {...string|RegExp} fragments Фрагменты.
     * @return {[]}
    */
    findToJect(cls = Object, ...fragments) {

        return stringFindToJect(this.value, cls, ...fragments);

    };

};