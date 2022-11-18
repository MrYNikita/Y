import { arrayRemove } from "../../array/array.mjs";
import { YFunc } from "../../func/YFunc/YFunc.mjs";
import { numberGetNearstIndex, numberCheckEntryRange } from "../../number/number.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { YTemplate } from "../../string/YString/YTemplate/YTemplate.mjs";
import { jectFill } from "../ject.mjs";
import { YCursor } from "../YCursor/YCursor.mjs";

/**
 * @typedef TBList
 * @prop {any} _
 * @typedef {DList&TBList} TList
*/

class SList {

    

};
class DList extends SList {

    /**
     * Коллекция элементов. 
     * @type {Array<any>}
    */
    value = [];
    /**
     * Курсоры.
     * @type {Array<YCursor>}
    */
    cursors = [];

};
class FList extends DList {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TList} t
    */
    constructor(t = {}) {

        t = FList.#before(arguments);

        FList.#deceit(t);

        super(t);

        FList.#create.apply(this, [t]);

    };

    /** @param {TList} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            const r = {};



            return r;

        } else return {};

    };
    /** @param {TList} t @this {YList} */
    static #deceit(t) {

        try {

            FList.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TList} t @this {YList} */
    static #verify(t) {

        const {



        } = t;

        FList.#handle(t);

    };
    /** @param {TList} t @this {YList} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TList} t @this {YList} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.cursors = [new YCursor({ list: this })]

    };

};

/**
 * Класс листов.
 * 
 * Данный класс предназначен для описания базовых методов и свойств для работы с коллекциями.
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YList extends FList {

    /**
     * Метод для вставки значений по правилу курсоров.
     * @param {...any} values Значения.
    */
    paste(...values) {

        this.cursors.forEach(c => this.value.splice(c.index, 0, ...values));

        return this;

    };
    report() {

        new YString(this.getReport()).display();

        return this;

    };
    toCursor(indexCursor, indexTo) {



    };
    getReport() {

        return new YString()

            .changePostfix(';\n')
            .paste(

                `Значений: ${this.value.length}`,
                `Курсоров: ${this.cursors.length}`,
                `Значения: ${this.value}`,
                `Позиции курсоров: ${this.cursors.map(c => c.index)}`,

            )
            .castToYReport()
            .get()

    };
    /**
     * 
     * 
    */
    moveCursor(indexCursor, direction) {



    };
    moveCursors(direction, ...indexCursor) {



    };
    /**
     * Метод для добавления курсора.
     * - Версия `0.0.0`
     * @param {number} size Размер области влияния курсора.
     * @param {number} index Индекс курсора.
    */
    appendCursor(index, size) {

        const i = this.cursors.findIndex(c => c.index === index);
        const co = this.cursors[i];

        let cn;

        if (co) {

            if (co.size < size) {

                cn = this.cursors[i];
                cn.size = size;

            };

        } else {

            cn = new YCursor({ list: this, index, size });

            const [cl, cr] = numberGetNearstIndex(cn.index, this.cursors.map(c => c.index)).map(i => this.cursors[i]);

            if (cl && numberCheckEntryRange(cl?.index, cl?.calculateIndexEnd(), cn.index, cn.calculateIndexEnd())) return this;
            if (cr && numberCheckEntryRange(cr?.index, cr?.calculateIndexEnd(), cn.index, cn.calculateIndexEnd())) return this;

            this.cursors.push(cn);

            this.cursors = this.cursors.sort((p, c) => p.index - c.index);

            if (cl && numberCheckEntryRange(cn.index, cn.calculateIndexEnd(), cl.index, cl.calculateIndexEnd())) cl.delete();
            if (cr && numberCheckEntryRange(cn.index, cn.calculateIndexEnd(), cr.index, cr.calculateIndexEnd())) cr.delete();

        };

        return this;

    };
    removeCursor(index) {



    };
    /**
     * Метод для добавления курсоров.
     * - Версия `0.0.0`
     * @param {...[number, number]} transmit Остаточный аргумент массивов, представленных парой значений индекса и размера.
    */
    appendCursors(...transmit) {

        transmit.forEach(t => this.appendCursor(...t));

        return this;

    };
    removeCursors(...transmit) {



    };

};