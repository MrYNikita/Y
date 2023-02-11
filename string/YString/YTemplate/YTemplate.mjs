import { configString } from "../../../config.mjs";
import { jectAdopt } from "../../../ject/ject.mjs";
import { YBasic } from "../../../ject/YBasic/YBasic.mjs";
import { stringReplace, stringReplaceAllMore } from "../../string.mjs";
import { YString } from "../YString.mjs";
import { YInsert } from "./YInsert/YInsert.mjs";

/**
 * @typedef TBTemplate
 * @prop {any} _
 * @typedef {DTemplate&TBTemplate} TTemplate
*/

class STemplate extends YBasic {



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
     *  @arg {TTemplate} t
    */
    constructor(t = {}) {

        t = FTemplate.#before(Object.values(arguments));

        FTemplate.#deceit(t);

        super(t);

        FTemplate.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
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
    /** @arg {TTemplate} t @this {YTemplate} */
    static #deceit(t) {

        try {

            FTemplate.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TTemplate} t @this {YTemplate} */
    static #verify(t) {

        const {



        } = t;

        FTemplate.#handle(t);

    };
    /** @arg {TTemplate} t @this {YTemplate} */
    static #handle(t) {



    };
    /** @arg {TTemplate} t @this {YTemplate} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};
class MTemplate extends FTemplate {



};

/**
 * Класс `YTemplate`
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
     * - Версия `0.1.0`
     * @arg {...[string, string|number|function():number|string]} inserts
    */
    get(...inserts) {

        const is = inserts.length ? [...inserts.filter(i => i).map(i => new YInsert(...i))] : this.inserts;

        return stringReplaceAllMore(this.value, ...is.map(i => [i.getValue(), i.getKey()]));

    };

};