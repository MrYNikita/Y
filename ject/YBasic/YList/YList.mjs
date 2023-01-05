import { YBasic } from "../YBasic.mjs";
import { YCursor } from "./YCursor/YCursor.mjs";
import { jectFill } from "../../ject.mjs";
import { configYList } from "../../../config.mjs";
import { arraySupplement, arraySupplementFill } from "../../../array/array.mjs";

/**
 * @typedef TBList
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DList,keyof SList>|Exclude<keyof SList,keyof DList>]:(DList[p]&SList[p])}} TDList
 * @typedef {TDList&TBList} TList
*/

class SList extends YBasic {

    /**
     * Общая размерность.
     *
     * Определяет размер для курсоров класса по умолчанию.
     * @type {number?}
    */
    static dimension = configYList.dimension;
    /**
     * Общее значение смещения курсора.
     * @type {boolean}
    */
    static cursorsFixed = configYList.cursorsFixed;

};
class DList extends SList {

    /**
     * Значения списка.
     * @type {any[]}
    */
    values = [];
    /**
     * Размерность.
     * @type {number?}
    */
    dimension = null;
    /**
     * Фиксированность курсоров.
     * @protected
     * @type {boolean?}
    */
    cursorsFixed = null;

};
class IList extends DList {

    /**
     * Курсоры.
     * @type {YCursor[]}
    */
    cursors = [];

};
class MList extends IList {



};
class FList extends MList {

    /**
     * Контсруктор класса `YList`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TList} t
    */
    constructor(t = {}) {

        t = FList.#before(Object.values(arguments));

        FList.#deceit(t);

        super(t);

        FList.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YList].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {TList&DList} */
            const r = {};

            if (t[0]._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {TList} t @this {YList} */
    static #deceit(t) {

        try {

            FList.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TList} t @this {YList} */
    static #verify(t) {

        const {



        } = t;

        FList.#handle(t);

    };
    /** @arg {TList} t @this {YList} */
    static #handle(t) {



    };
    /** @arg {TList} t @this {YList} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.cursors = [new YCursor({ list: this, })];

    };

};

/**
 * Класс `YList`
 *
 * Класс, для оборачивания наборов значений, таких как `String`, `Array`, `Buffer`.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YList extends FList {

    /**
     * Метод сброса курсоров.
     * Удаляет все курсоры, кроме основного.
     * Для основного курсора изменяет индекс, присваивая `выходную правую позицию` и устанавилвает размер на `1`.
     * - Версия `0.0.0`
    */
    dropCursors() {

        this.cursors.splice(1).forEach(c => c.delete());

        this.cursors[0].changeSize(0).changeIndex(this.values.length);

        return this;

    };
    /**
     * Метод смещения курсоров.
     * - Версия `0.1.0`
     * @arg {number} number
    */
    moveCursors(number) {

        if (number && !(this.cursorsFixed ?? this.constructor.cursorsFixed)) this.cursors.forEach(c => c.move(number));

        return this;

    };
    /**
     * Метод установки курсора в указанную позицию по заданным координатам.
     * - Версия `0.1.0`
     * @arg {...number} indexs - Позиция размещения курсора.
     *
     * Количесвто координат передаваемых для размещения определяется размерность заданного экземпляра.
     * Для случаев, если размерность не была указана для конкретного экземпляра используется общее значение.
     *
     * Все избыточные координаты не берутся в расчет.
     * Отрицтальные координаты замещаются на `0`.
    */
    setCursorTo(...indexs) {

        this.cursors.splice(1).forEach(c => c.delete());

        this.cursors[0].indexs = arraySupplementFill(arraySupplement(new Array(this.dimension ?? this.constructor.dimension).fill(undefined), ...indexs.map(i => i < 0 ? 0 : i)), 0);

        return this;

    };
    /**
     * Метод добавления курсоров.
     * - Версия `0.0.0`
     * @arg {...YCursor} cursors Курсоры для добавления.
    */
    appendCursors(...cursors) {

        this.cursors.push(...cursors.map(c => new YCursor(c)));

        this.appendCursors({})

        return this;

    };
    /**
     * Метод изменения размеров курсоров.
     * Изменяет исходный размер прибавлением указанного значения изменения размера.
     * - Версия `0.0.0`
     * @arg {number} change Изменение размера.
    */
    resizeCursors(change) {

        this.cursors.forEach(c => c.resize(change));

        return this;

    };
    /**
     * Метод изменения размеров курсоров.
     * Изменяет исходный размер, устанавливая указанное значение размера.
     * - Версия `0.0.0`
     * @arg {number} size Размер курсоров.
    */
    changeCursorsSize(size) {

        this.cursors.forEach(c => c.changeSize(size));

        return this;

    };
    /**
     * Метод изменения фиксированности курсоров.
     * - Версия `0.0.0`
     * @arg {boolean} fixable
    */
    changeCursorFixed(fixable) {

        if ([undefined, null].includes(fixable)) this.cursorsFixed = !this.cursorsFixed;
        else if (fixable.constructor === Boolean || [0, 1].includes(fixable)) this.cursorsFixed = fixable ? true : false;

        return this;

    };

};