import { configString, configYInsert } from "../../../../config.mjs";
import { jectAdopt } from "../../../../ject/ject.mjs";
import { YRegExp } from "../../../../regexp/YRegExp/YRegExp.mjs";

/**
 * @typedef TBInsert
 * @prop {any} _
 * @typedef {DInsert&TBInsert} TInsert
*/

class SInsert {



};
class DInsert extends SInsert {

    /**
     * Ключ.
     *
     * @type {string}
    */
    key;
    /**
     * Значение.
     * @type {string|number|function():string|number}
    */
    value;
    /**
     * Значение по умолчанию.
     * Будет вставлено в тех случаях, если не было указано значение.
     * - По умолчанию `''`
     * @type {string|number|function():string|number}
    */
    default = '';

};
class IInsert extends DInsert {



};
class MInsert extends IInsert {



};
class FInsert extends MInsert {

    /**
     * Контсруктор класса `YInsert`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TInsert} t
    */
    constructor(t = {}) {

        t = FInsert.#before(Object.values(arguments));

        FInsert.#deceit(t);

        super(t);

        FInsert.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TInsert} */
            const r = {};

            switch (t.length) {

                case 3: r.default = t[2];
                case 2: r.value = t[1];
                case 1: r.key = t[0];

            };

            return r;

        } else return {};

    };
    /** @arg {TInsert} t @this {YInsert} */
    static #deceit(t) {

        try {

            FInsert.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TInsert} t @this {YInsert} */
    static #verify(t) {

        const {



        } = t;

        FInsert.#handle(t);

    };
    /** @arg {TInsert} t @this {YInsert} */
    static #handle(t) {



    };
    /** @arg {TInsert} t @this {YInsert} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);



    };

};

/**
 * Класс `YInsert`
 *
 * Класс предназначенный для создания вставок в шаблонах.
 * Вставка замещает собой соответствия в строке шаблона, позволяя ему размещать внутри себя динамичные значения.
 * - Тип `SDIFMY`
 * - Версия `0.1.0`
 * - Цепочка `BDVHC`
 * - Пространство `YString`
*/
export class YInsert extends FInsert {

    /**
     * Метод получения регулярного выражения для поиска ключа.
     * Данное регулярное выражение будет включать в себя скобки поиска.
     * К нему также будут указаны флаги `gms`.
     * - Версия `0.0.0`
    */
    getKey() {

        return new YRegExp(`${configYInsert.borderL}${this.key}${configYInsert.borderR}`, 'gms');

    };
    /**
     * Метод получения значения.
     * Данный метод позволяет получить значение с учетом его типа.
     * Так, если значение окажется функцией, то в качестве возврата будет выдан результат функции.
     * В противном случае будет выдано само значение.
     *
     * Если значение для замены не было указано, то будет вставлено значение по умолчанию.
     * - Версия `0.0.0`
    */
    getValue() {

        return this.value ? this.value instanceof Function ? this.value() : this.value : this.default;

    };

};