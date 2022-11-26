import { jectFill } from "../../ject/ject.mjs";
import { YCursor } from "../../ject/YCursor/YCursor.mjs";
import { YList } from "../../ject/YList/YList.mjs";
import { YLog } from "../../log/YLog/YLog.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { YTemplate } from "../../string/YString/YTemplate/YTemplate.mjs";
import { arrayAppend } from "../array.mjs";

/**
 * @typedef TBArray
 * @prop {[]} array
 * @prop {number} size
 * @typedef {DArray&TBArray} TArray
*/

class SArray extends YList {



};
class DArray extends SArray {

    /**
     * Журнал.
     * @type {YLog}
    */
    log = new YLog();
    /**
     * Состояние.
     * Данное свойство хранит состояние текущего массива.
     * @type {[]}
    */
    value = [];
    /**
     * Индексы пустых значений.
     * @type {[number]}
    */
    empthy = [];
    /**
     * Ограниченность.
     * Ограниченный массив не может превышать указанного размера.
     * - По умолчанию `false`.
     * @type {boolean}
    */
    limited = false;
    /**
     * Курсоры.
     * @type {[YCursor]}
    */
    cursors;
    /**
     * Фиксированность элементов при смещении влево.
     * * Определяет, должны ли элементы сдвигаться влево, если при удалении есть пустое пространство.
     * - По умолчанию `true`.
     * @type {boolean}
    */
    fixedLeft = true;
    /**
     * Фиксированность элементов при смещении вправо.
     * Определяет, должны ли элементы сдвигаться вправо, если при вставке есть пустое пространство.
     * - По умолчанию `true`.
     * @type {boolean}
    */
    fixedRight = true;
    /**
     * Вытесняемость.
     * Если значение истино и массив фиксирован, то элементы, выходящие за рамки лимита будут удалены.
     * В противном случае, если значение ложно, то вставленные элементы могут быть размещены только в свободные ячейки.
     * @type {boolean}
    */
    displacement = true;

};
class FArray extends DArray {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TArray} t
    */
    constructor(t = {}) {

        t = FArray.#before(arguments);

        FArray.#deceit(t);

        super(t);

        FArray.#create.apply(this, [t]);

    };

    /** @param {[]} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];


        } else if (t?.length) {

            const r = { array: [], };

            t = Array.from(t);

            switch (t.length) {

                default: arrayAppend(r.array, ...t.slice(3));
                case 2: {


                    if (t[1]?.constructor === Boolean) r.limited = t[1];
                    else r.array.push(t[1]);

                };
                case 1: {

                    if (t[0]?.constructor === Number) r.size = t[0];
                    else if (t[0]?.constructor === Array) r.value = t[0];
                    else r.array.push(t[0]);

                };

            };

            return r;

        } else return {};

    };
    /** @param {TArray} t @this {YArray} */
    static #deceit(t) {

        try {

            FArray.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TArray} t @this {YArray} */
    static #verify(t) {

        const {



        } = t;

        FArray.#handle(t);

    };
    /** @param {TArray} t @this {YArray} */
    static #handle(t) {

        let {



        } = t;

        if (t.size) {

            if (t?.array?.length) t.value = t.array.slice(0, t.size);
            else t.value = new Array(t.size).fill(undefined);

        } else if (t?.array?.length) t.value = t.array;

        t = {

            ...t,

        };

    };
    /** @param {TArray} t @this {YArray} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.cursors = [new YCursor()];

    };

};

/**
 * Класс `массивов`.
 *
 * Данный класс дополняет обычные массивы новым функционалом и улучшает, переопределяя старый.
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YArray extends FArray {

    /**
     * Метод добавления элементов в конец массива.
     * - Версия `0.0.0`
     * @param {...any} elements
    */
    push(...elements) {

        if (!this.limited) this.value.push(...elements);

        return this;

    };
    /**
     * Функция отображения информации.
     * - Версия `0.0.0`
     *
    */
    report() {

        new YString(this.getReport()).display();

        return this;

    };
    /**
     *
     * - Версия `0.0.0`
     *
    */
    getReport() {

        return new YString()

            .changePostfix(';\n')
            .paste(

                `Вытесняемость: ${this.displacement}`,
                `Ограниченность: ${this.limited}`,
                `Фиксированность слева: ${this.fixedLeft}`,
                `Фиксированность справа: ${this.fixedRight}`,

            )
            .pasteTemplate(new YTemplate('l', '---\n'))
            .paste(

                `Курсоров: ${this.cursors.length}`,
                `Индексы курсоров: [${this.cursors.map(c => c.index)}]`,

            )
            .pasteTemplate('l')
            .paste(

                `Размер: ${this.value.length}`,
                `Элементов: ${this.value.filter(e => e).length}`,
                `Свободные индексы: [${this.empthy}]`,

            )
            .pasteTemplate('l')
            .paste(`[${this.value}]`)
            .castToYReport()
            .get()

    };
    /**
     * Метод заполнения пустых элементов массива указанными значениями.
     * - Версия `0.0.0`
     *
    */
    supplement() {



    };
    /**
     *
     * - Версия `0.0.0`
     * @param {number} index Индекс вставки.
     * @param {...any} elements Элементы вставки.
    */
    pasteByIndex() {



    };

};