import { YString } from "../../string/YString/YString.mjs";
import { arrayRemoveByElement } from "../../array/array.mjs";
import { configJect, configYString } from "../../config.mjs";
import { jectFill } from "../ject.mjs";
import { numberGetNearstIndex } from "../../number/number.mjs";
import { YList } from "../YList/YList.mjs";

/**
 * @typedef TBCursor
 * @prop {any} _
 * @typedef {DCursor&TBCursor} TCursor
*/

class SCursor {



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
    index = 0;
    /**
     * Смещение.
     * Если `true`, то индекс будет смещаться на кол-во добавленных символов.
     * @type {boolean}
    */
    fixed = configJect?.fixed ?? true;

};
class FCursor extends DCursor {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TCursor} t
    */
    constructor(t = {}) {

        t = FCursor.#before(...arguments);

        FCursor.#deceit(t);

        super(t);

        FCursor.#create.apply(this, [t]);

    };

    /** @param {[TCursor]} */
    static #before(t) {



        if (!t) t = {};

        return t;

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

        let {



        } = t;

        if ((!t.index && t.index !== 0) && t.list) t.index = t.list.value.length;

        t = {

            ...t,

        };

    };
    /** @param {TCursor} t @this {YCursor} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

    };

};

/**
 * Класс курсоров.
 * 
 * Курсоры размещаются в строке YString в единственном и множественных кол-вах.
 * С их помощью осуществляется вставка, удаление, копирование и добавление фрагментов из/в исходную строку.
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
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

        if (this.fixed && number) this.index += number - this.size;
        if (this.index < 0) this.index = 0;
        if (this.index > this.list.value.length - 1) this.index = this.list.value.length;

        return this;

    };
    /**
     * Метод для отображения информации.
     * - Версия `0.0.0`
    */
    report() {

        new YString()

            .changeStringAppendEnd('\n')
            .append(`YCursor`)
            .append(`---`)
            .changeStringAppendEnd(';\n')
            .append(`index: ${this.index}`)
            .append(`size: ${this.size}`)
            .append(`shift: ${this.fixed}`)
            .log()

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