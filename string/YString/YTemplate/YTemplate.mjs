import { configString } from "../../../config.mjs";
import { jectFill } from "../../../ject/ject.mjs";
import { stringReplace } from "../../string.mjs";
import { YString } from "../YString.mjs";
import { YInsert } from "./YInsert/YInsert.mjs";

/**
 * @typedef TBTemplate
 * @prop {any} _
 * @typedef {DTemplate&TBTemplate} TTemplate
*/

class STemplate {



};
class DTemplate extends STemplate {

    /**
     * Метка.
     * @type {string}
    */
    label = '';
    /**
     * Шаблон.
     * @type {string|YString}
    */
    value = '';
    /**
     * Вставки.
     *
     * Используются шаблонами для замещения совпадений по ключу на парные им значения.
     *
     * - По умолчанию `[]`
     *
     * @type {Array<YInsert>}
    */
    inserts = [];

};
class ITemplate extends DTemplate {



};
class FTemplate extends ITemplate {

    /**
     * Контсруктор класса `YTemplate`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TTemplate} t
    */
    constructor(t = {}) {

        t = FTemplate.#before(Object.values(arguments));

        FTemplate.#deceit(t);

        super(t);

        FTemplate.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TTemplate} */
            const r = {};

            switch (t.length) {

                default: r.inserts = t.splice(2).map(i => i instanceof YInsert ? i : new YInsert(...i));
                case 2: r.value = t[1];
                case 1: r.label = t[0];

            };

            return r;

        } else return {};

    };
    /** @param {TTemplate} t @this {YTemplate} */
    static #deceit(t) {

        try {

            FTemplate.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TTemplate} t @this {YTemplate} */
    static #verify(t) {

        const {



        } = t;

        FTemplate.#handle(t);

    };
    /** @param {TTemplate} t @this {YTemplate} */
    static #handle(t) {



    };
    /** @param {TTemplate} t @this {YTemplate} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};
class MTemplate extends FTemplate {



};

/**
 * Класс `YTemplate`.
 *
 * Шаблоны используются для размещения в `YString` заготовленных строк без применения правил добавления.
 * Также они позволяют формировать строку, заполняя поля шаблона пользовательскими данными.
 * В качестве шаблона может выступать как готовая строка, так и `YString` строка.
 * - Тип `SDIFMY-1.0`
 * - Версия `0.1.0`
 * - Цепочка `BDVHC`
 * - Пространство `YString`
*/
export class YTemplate extends MTemplate {

    /**
     * Метод получения шаблона.
     * - Версия `0.0.0`
     * @param {...[string, string|number|function():number|string]} inserts
    */
    get(...inserts) {

        const is = inserts.length ? [...inserts.map(i => new YInsert(...i))] : this.inserts;

        return stringReplace(this.value, ...is.map(i => [new RegExp(`${configString.insert.borderL}${i.key}${configString.insert.borderR}`, 'g'), i.value instanceof Function ? i.value() : i.value]));

    };

};