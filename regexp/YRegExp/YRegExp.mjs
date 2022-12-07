import { arrayRemoveByElement, arrayUnique } from "../../array/array.mjs";
import { jectFill } from "../../ject/ject.mjs";

/**
 * @typedef TBRegExp
 * @prop {string} flags
 * @typedef {DRegExp&TBRegExp} TRegExp
*/

class SRegExp {

    static flags = 'gimsuy';

    /**
     * Статический метод для фильтрации и приведения флагов к нормальной форме.
     * Убирает дубликаты, упорядочивает.
     * - Версия `0.0.0`
     * @param {string} flags
    */
    static correctFlags(flags) {

        return (flags) ? arrayUnique(flags.split('')).sort().filter(f => YRegExp.flags.includes(f)).join('') : '';

    };

};
class DRegExp extends SRegExp {

    /**
     * Значение.
     * @protected
     * @type {RegExp}
    */
    value;
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
     *  @param {TRegExp} t
    */
    constructor(t = {}) {

        t = FRegExp.#before(Object.values(arguments));

        FRegExp.#deceit(t);

        super(t);

        FRegExp.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TRegExp&DRegExp} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2: r.flags = t[1];
                case 1: r.value = t[0];

            };

            return r;

        } else return {};

    };
    /** @param {TRegExp} t @this {YRegExp} */
    static #deceit(t) {

        try {

            FRegExp.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TRegExp} t @this {YRegExp} */
    static #verify(t) {

        const {



        } = t;

        FRegExp.#handle(t);

    };
    /** @param {TRegExp} t @this {YRegExp} */
    static #handle(t) {

        if (!t.flags) t.flags = '';

        if (t.value instanceof YRegExp) t.value = t.value.get();
        if (t.value instanceof RegExp) t.flags += t.value.flags ?? '';

        if (t.flags) t.flags = YRegExp.correctFlags(t.flags);

    };
    /** @param {TRegExp} t @this {YRegExp} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.value = new RegExp(this.value, t.flags);

    };

};

/**
 * Класс `YRegExp`
 *
 * Класс для работы с регулярными выражениями.
 * - Тип `SDIMFY-1.1`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YRegExp extends FRegExp {

    /**
     * Метод получения текущего состояния регулярного выражения.
     * - Версия `0.0.0`
    */
    get() {

        return new RegExp([this.value.source, ...this.variation].join('|'), this.value.flags);

    };
    /**
     * Метод изменения регулярного выражения.
     * Убирает все вариации.
     * - Версия `0.0.0`
     * @param {string|RegExp} value
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
     * @param {string} flags Флаги.
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
     * @param {string} flags Флаги.
    */
    appendFlags(flags) {

        if (flags) this.value = new RegExp(this.value, YRegExp.correctFlags(this.value.flags + flags));

        return this;

    };
    /**
     * Метод удаления указанных флагов.
     * - Версия `0.0.0`
     * @param {string} flags Флаги.
    */
    removeFlags(flags) {

        if (flags) this.value = new RegExp(this.value, arrayRemoveByElement(this.value.flags.split(''), ...YRegExp.correctFlags(flags).split('')).join(''));

        return this;

    };
    /**
     * Метод добавления вариацией к существующему регулярному выражению.
     * Вариация добавляется к исходному выражению через `|` и её флаги не влияют на исходное выражение.
     * - Версия `0.0.0`
     * @param {...string|RegExp|YRegExp} regexps Вариации.
     * Добавляются к результату через `|`.
    */
    appendVariate(...regexps) {

        if (regexps.length) this.variation.push(...regexps.map(r => new YRegExp(r).changeFlags().get().source).filter(r => !this.variation.includes(r)));

        return this;

    };

};