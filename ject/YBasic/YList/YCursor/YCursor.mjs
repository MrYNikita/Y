import { YBasic } from "../../YBasic.mjs";
import { YList } from "../YList.mjs";
import { jectFill } from "../../../ject.mjs";
import { arrayRemoveByElement } from "../../../../array/array.mjs";

/**
 * @typedef TBCursor
 * @prop {number} dimension
 * @typedef {{[p in Exclude<keyof DCursor,keyof SCursor>|Exclude<keyof SCursor,keyof DCursor>]:(DCursor[p]&SCursor[p])}} TDCursor
 * @typedef {TDCursor&TBCursor} TCursor
*/

class SCursor extends YBasic {



};
class DCursor extends SCursor {

    /**
     * Область курсора.
     *
     * В режиме `'auto'` Размер определяется ситуативно:
     * - `paste` - размер вставки
     * - `remove` - размер до пустого значения
     *
     * @type {number|'auto'}
    */
    size = 0;
    /**
     * Массив.
     * @type {YList}
    */
    list = null;
    /**
     * Индексы курсора в списке.
     * @type {number[]}
    */
    indexs = [];

};
class ICursor extends DCursor {



};
class MCursor extends ICursor {



};
class FCursor extends MCursor {

    /**
     * Контсруктор класса `YCursor`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TCursor} t
    */
    constructor(t = {}) {

        t = FCursor.#before(Object.values(arguments));

        FCursor.#deceit(t);

        super(t);

        FCursor.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YCursor].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {TCursor&DCursor} */
            const r = {};

            if (t[0]._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.list = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {TCursor} t @this {YCursor} */
    static #deceit(t) {

        try {

            FCursor.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TCursor} t @this {YCursor} */
    static #verify(t) {

        const {



        } = t;

        FCursor.#handle(t);

    };
    /** @arg {TCursor} t @this {YCursor} */
    static #handle(t) {

        if (!t.indexs || !t.indexs.length) t.indexs = new Array(t.list.dimension ?? t.list.constructor.dimension).fill(0);

    };
    /** @arg {TCursor} t @this {YCursor} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

    };

};

/**
 * Класс `YCursor`
 *
 * Курсоры - индексаторы для `YList`.
 * - Тип `SDIMFY`
 * - Версия `0.3.0`
 * - Модуль `ject.list`
 * - Цепочка `BDVHC`
*/
export class YCursor extends FCursor {

    /**
     * Метод смещения курсора.
     * Работает только при истином значении сдвига.
     * - Версия `0.0.0`
     * @arg {number} bias Значение смещения курсора.
    */
    move(bias) {

        const li = this.indexs.length - 1;

        bias = this.indexs[li] + bias;

        if (bias < 0) this.indexs[li] = 0;
        else if (bias >= this.list.values.length) this.indexs[li] = this.list.values.length;
        else this.indexs[li] = bias;

        return this;

    };
    /**
     * Метод для увеличения размера курсора.
     * - Версия `0.0.0`
     * @arg {number} bias Значение изменения размера курсора.
     * - По умолчанию `1`
    */
    resize(bias = 1) {

        if (this.size !== 'auto') this.size += bias;

        return this;

    };
    /**
     * Метод для удаления курсора.
     * - Версия `0.0.0`
    */
    delete() {

        arrayRemoveByElement(this.list.cursors, this);

        this.size = undefined;
        this.list = undefined;
        this.indexs = [];

    };
    /**
     * Метод для установки значения размера курсора.
     * - Версия `0.0.0`
     * @arg {number} size Значение размера курсора.
    */
    changeSize(size) {

        this.size = size;

        return this;

    };

};