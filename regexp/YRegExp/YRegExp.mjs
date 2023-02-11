import { YBasic } from "../../ject/YBasic/YBasic.mjs";
import { jectAdopt } from "../../ject/ject.mjs";
import { arrayRemoveByElement, arrayUnique } from "../../array/array.mjs";
import { regexpInsert } from "../regexp.mjs";

/**
 * @typedef TBRegExp
 * @prop {string} flags
 * @prop {string[]} inserts
 * @typedef {DRegExp&TBRegExp} TRegExp
*/

class SRegExp extends YBasic {

    static flags = 'gimsuy';

    /**
     * Статический метод для фильтрации и приведения флагов к нормальной форме.
     * Убирает дубликаты, упорядочивает.
     * - Версия `0.0.0`
     * @arg {string} flags
    */
    static correctFlags(flags) {

        return (flags) ? arrayUnique(flags.split('')).sort().filter(f => YRegExp.flags.includes(f)).join('') : '';

    };

};
class DRegExp extends SRegExp {

    /**
     * Значение.
     * @type {RegExp}
    */
    value = '';
    /**
     * Позиция поиска.
     * @type {number?}
    */
    position = null;
    /**
     * Вариации.
     * @type {Array<string>}
    */
    variation = [];

};
class IRegExp extends DRegExp {



};
class MRegExp extends IRegExp {



};
class FRegExp extends MRegExp {

    /**
     * Контсруктор класса `YRegExp`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TRegExp} t
    */
    constructor(t = {}) {

        t = FRegExp.#before(Object.values(arguments));

        FRegExp.#deceit(t);

        super(t);

        FRegExp.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YRegExp].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {TRegExp&DRegExp} */
            const r = {};

            if (t[0]._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                default: r.inserts = t.slice(2);
                case 2: r.flags = t[1];
                case 1: r.value = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {TRegExp} t @this {YRegExp} */
    static #deceit(t) {

        try {

            FRegExp.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TRegExp} t @this {YRegExp} */
    static #verify(t) {

        const {



        } = t;

        FRegExp.#handle(t);

    };
    /** @arg {TRegExp} t @this {YRegExp} */
    static #handle(t) {

        if (!t.flags) t.flags = '';
        if (!t.value) t.value = '';

        if (t.value instanceof YRegExp) t.value = t.value.get();
        if (t.value instanceof RegExp) t.flags += t.value.flags ?? '';
        if (t.value.constructor === String) t.value = new RegExp(t.value);

        if (t.flags) t.flags = YRegExp.correctFlags(t.flags);
        if (t.inserts) t.value = regexpInsert(t.value, ...t.inserts);

    };
    /** @arg {TRegExp} t @this {YRegExp} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        this.value = new RegExp(this.value, t.flags);

        if (t.position) this.value.lastIndex = t.position;

    };

};

/**
 * Класс `YRegExp`
 *
 * Класс для работы с регулярными выражениями.
 * - Тип `SDIMFY`
 * - Версия `0.0.1`
 * - Модуль `regexp`
 * - Цепочка `BDVHC`
*/
export class YRegExp extends FRegExp {

    /**
     * Метод получения текущего состояния регулярного выражения.
     * - Версия `0.0.1`
    */
    get() {

        const result = new RegExp([this.value.source === '(?:)' ? '' : this.value.source, ...this.variation].filter(v => v).join('|'), this.value.flags);

        result.lastIndex = this.position;

        return result;

    };
    /**
     * Метод изменения регулярного выражения.
     * Убирает все вариации.
     * - Версия `0.0.0`
     * @arg {string|RegExp} value
    */
    change(value) {

        this.value = new RegExp(value, this.value.flags);
        this.variation = [];

        return this;

    };
    /**
     * Метод отображения состояния значения.
     * - Версия `0.0.0`
    */
    display() {

        console.log(this.get());

        return this;

    };
    /**
     * Метод получения флагов.
     * - Версия `0.0.0`
    */
    getFlags() {

        return this.value.flags;

    };
    /**
     * Метод изменения флагов регулярного выражения.
     * Все предыдущие флаги будут заменены указанными.
     * - Версия `0.0.0`
     * @arg {string} flags Флаги.
    */
    changeFlags(flags) {

        this.value = new RegExp(this.value, YRegExp.correctFlags(flags ?? ''));

        return this;

    };
    /**
     * Метод добавления флагов.
     * Добавление не удаляет существующие флаги.
     * Добавленные флаги не дублируются.
     * - Версия `0.0.0`
     * @arg {string} flags Флаги.
    */
    appendFlags(flags) {

        if (flags) this.value = new RegExp(this.value, YRegExp.correctFlags(this.value.flags + flags));

        return this;

    };
    /**
     * Метод удаления указанных флагов.
     * - Версия `0.0.0`
     * @arg {string} flags Флаги.
    */
    removeFlags(flags) {

        if (flags) this.value = new RegExp(this.value, arrayRemoveByElement(this.value.flags.split(''), ...YRegExp.correctFlags(flags).split('')).join(''));

        return this;

    };
    /**
     * Метод добавления вариацией к существующему регулярному выражению.
     * Вариация добавляется к исходному выражению через `|` и её флаги не влияют на исходное выражение.
     * - Версия `0.0.0`
     * @arg {...string|RegExp|YRegExp} regexps Вариации.
     * Добавляются к результату через `|`.
    */
    appendVariate(...regexps) {

        if (regexps.length) this.variation.push(...regexps.map(r => new YRegExp(r).changeFlags().get().source).filter(r => !this.variation.includes(r)));

        return this;

    };
    /**
     * Метод изменения позиции поиска>
     * - Версия `0.0.0`
     * @arg {number} position Позиция поиска.
    */
    changePosition(position) {

        if (position.constructor === Number && position >= 0) this.position = position;

        return this;

    };

};