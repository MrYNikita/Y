import { YString } from "../../string/YString/YString.mjs";
import { arrayRemoveByElement } from "../../array/array.mjs";
import { configJect, configYString } from "../../config1.mjs";
import { jectFill } from "../ject.mjs";
import { numberGetNearstIndex } from "../../number/number.mjs";
import { YList } from "../YList/YList.mjs";
import { YBasic } from "../YBasic/YBasic.mjs";

/**
 * @typedef TBCursor
 * @prop {any} _
 * @typedef {DCursor&TBCursor} TCursor
*/

class SCursor extends YBasic {



};
class DCursor extends SCursor {



};
class ICursor extends DCursor {

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
    index = 0;
    /**
     * Смещение.
     * Если `true`, то индекс будет смещаться на кол-во добавленных символов.
     * @type {boolean}
    */
    fixed = configJect?.fixed ?? true;

};
class MCursor extends ICursor {



};
class FCursor extends MCursor {

    /**
     * Контсруктор класса `YCursor`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TCursor} t
    */
    constructor(t = {}) {

        t = FCursor.#before(Object.values(arguments));

        FCursor.#deceit(t);

        super(t);

        FCursor.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
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
    /** @param {TCursor} t @this {YCursor} */
    static #deceit(t) {

        try {

            FCursor.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TCursor} t @this {YCursor} */
    static #verify(t) {

        const {



        } = t;

        FCursor.#handle(t);

    };
    /** @param {TCursor} t @this {YCursor} */
    static #handle(t) {

        if ((!t.index && t.index !== 0) && t.list) t.index = t.list.value.length;

    };
    /** @param {TCursor} t @this {YCursor} */
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
     * @param {number} number Значение смещения курсора.
    */
    move(number) {

        const bias = this.index + number;

        if (bias < 0) this.index = 0;
        else if (bias >= this.list.value.length) this.index = this.list.value.length;
        else this.index = bias;

        return this;

    };
    /**
     * Метод для отображения информации.
     * - Версия `0.1.0`
    */
    report() {

        new YString()

            .changePostfix(';\n')
            .paste(

                `index: ${this.index}`,
                `size: ${this.size}`,
                `shift: ${this.fixed}`,

            )
            .display()

        return this;

    };
    /**
     * Метод для увеличения размера курсора.
     * - Версия `0.0.0`
     * @param {number} number Значение изменения курсора.
     * - По умолчанию `1`
    */
    resize(number = 1) {

        this.size += number;

        return this;

    };
    /**
     * Метод для удаления курсора.
     * - Версия `0.0.0`
    */
    delete() {

        arrayRemoveByElement(this.list.cursors, this);

        this.size = undefined;
        this.index = undefined;
        this.list = undefined;

    };
    /**
     * Метод поглощения курсорами других курсоров.
     * - Версия `0.0.0`
    */
    absorb() {



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