import { arrayRemoveByElement } from "../../array/array.mjs";
import { jectFill } from "../ject.mjs";
import { YList } from "../YBasic/YList/YList.mjs";
import { YBasic } from "../YBasic/YBasic.mjs";

/**
 * @typedef TBCursor
 * @prop {any} _
 * @typedef {DCursor&TBCursor} TCursor
*/

class SCursor extends YBasic {



};
class DCursor extends SCursor {

    /**
     * Область курсора.
     * @type {number}
    */
    size = 0;
    /**
     * Массив.
     * @type {YList}
    */
    list = null;
    /**
     * Индекс размещения.
     * @type {number}
    */
    index;

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

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TCursor&DCursor} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return r;

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

        if ((!t.index && t.index !== 0) && t.list) t.index = t.list.values.length;

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
 * Курсоры выступают динамичными индексаторами в массивах.
 * Они позволяют размещать новые значения по правилам вставки.
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
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

        bias = this.index + bias;

        if (bias < 0) this.index = 0;
        else if (bias >= this.list.values.length) this.index = this.list.values.length;
        else this.index = bias;

        return this;

    };
    /**
     * Метод для увеличения размера курсора.
     * - Версия `0.0.0`
     * @arg {number} bias Значение изменения размера курсора.
     * - По умолчанию `1`
    */
    resize(bias = 1) {

        this.size += bias;

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
        this.index = undefined;

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
    /**
     * Метод утсановки позиции курсора.
     * - Версия `0.0.0`
     * @arg {number} index Индекс.
    */
    changeIndex(index) {

        if (index < 0) this.index = 0;
        else if (index > this.list.values.length) this.index = this.list.values.length;

        this.index = index;

        return this;

    };
    /**
     * Метод вычисления конечного индекса.
     *
     * Данный метод учитывает тот факт, что значение размера курсора касается и его первоначального индекса.
     * Это означает, что если размер курсора равен `1` или `-1`, то область влияния курсора будет ограничиваться его индексом.
     * Отличие от `0` заключается в том, что для такого курсора область влияния отсутсвует.
     * Таким образом конечный индекс не изменился.
     *
     * Учитывая данный факт, метод возвращает значение, которое будет являться индексом завершения области влияния курсора.
     * Метод используется в вычислениях.
     * - Версия `0.0.0`
    */
    calculateIndexEnd() {

        const {

            size,
            index,

        } = this;

        if (size) return index + ((size < 0) ? size + 1 : size - 1);
        else return index;

    };

};