import { YBasic } from "../YBasic.mjs";
import { YCursor } from "./YCursor/YCursor.mjs";
import { jectAdopt } from "../../ject.mjs";
import { configYList } from "../../../config.mjs";
import { arraySupplement, arraySupplementFill } from "../../../array/array.mjs";

//#region YT

/** ### YListT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YList`
 *
 * Основной параметр модуля `YList`.
 *
 * @typedef {YListTE&YListTU} YListT
 *
*/
/** ### YListTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YList`
 *
 * Параметр наследования `YList`.
 *
 * @typedef {{[p in Exclude<keyof DList,keyof SList>|Exclude<keyof SList,keyof DList>]:(DList[p]&SList[p])}} YListTE
 *
*/
/** ### YListTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YList`
 *
 * Уникальные параметры `YList`.
 *
 * @typedef YListTU
 * @prop {any} _
 *
*/

//#endregion

class SList extends YBasic {

    /**
     * ### dimension
     *
     * Общая размерность.
     *
     * Определяет размер для курсоров по умолчанию.
     *
     * ***
     * @type {number?}
     * @public
    */
    static dimension = configYList.dimension;
    /**
     * ### cursorsFixed
     *
     * Общее значение смещения курсоров.
     *
     * ***
     * @type {boolean}
     * @public
    */
    static cursorsFixed = configYList.cursorsFixed;

};
class DList extends SList {

    /**
     * ### values
     *
     * Значения списка.
     *
     * ***
     * @type {any[]}
     * @public
    */
    values = [];
    /**
     * ### dimension
     *
     * Размерность.
     *
     * Определяет количество координат для курсоров данного списка.
     * ***
     * @type {number}
     * @public
    */
    dimension = this.constructor.dimension;
    /**
     * ### cursorsFixed
     *
     * Режим фиксированности курсоров.
     *
     * ***
     * @type {boolean}
     * @public
    */
    cursorsFixed = false;

};
class IList extends DList {

    /**
     * ### cursors
     *
     * Курсоры.
     *
     * ***
     * @type {YCursor[]}
     * @public
    */
    cursors = [];

};
class MList extends IList {



};
class FList extends MList {

    /**
     * ### YList.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YListT} t
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

            /** @type {YListT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YListT} t @this {YList} */
    static #deceit(t) {

        try {

            FList.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YListT} t @this {YList} */
    static #verify(t) {

        const {



        } = t;

        FList.#handle(t);

    };
    /** @arg {YListT} t @this {YList} */
    static #handle(t) {



    };
    /** @arg {YListT} t @this {YList} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        this.cursors = [new YCursor({ list: this, })];

    };

};

/**
 * ### YList
 * - Тип `SDIMFY`
 * - Версия `0.3.0`
 * - Модуль `ject.YList`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YList extends FList {

    /**
     * ### moveCursors
     * - Версия `0.1.0`
     * - Модуль `YList`
     * ***
     *
     * Метод смещения курсоров.
     *
     * ***
     * @arg {...number} bias `Смещения`
     * @public
    */
    moveCursors(...bias) {

        this.cursors.forEach(c => c.move(...bias));

        return this;

    };

    /**
     * ### appendCursors
     * - Версия `0.0.1`
     * - Модуль `YList`
     * ***
     *
     * Метод добавления курсоров.
     *
     * ***
     * @arg {...YCursor} cursors `Курсоры для добавления`
     * @public
    */
    appendCursors(...cursors) {

        this.cursors.push(...cursors.map(c => new YCursor(c)));

        this.appendCursors({});

        return this;

    };

    /**
     * ### resizeCursors
     * - Версия `0.0.1`
     * - Модуль `YList`
     * ***
     *
     * Метод изменения размеров курсоров.
     *
     * Изменяет исходный размер прибавлением указанного значения изменения размера.
     *
     * ***
     * @arg {number} change `Изменение`
     * @public
    */
    resizeCursors(change) {

        this.cursors.forEach(c => c.changeSize(change));

        return this;

    };

    /**
     * ### setSizeCursors
     * - Версия `0.1.0`
     * - Модуль `YList`
     * ***
     *
     * Метод установки размера для курсоров.
     *
     * Изменяет исходный размер, устанавливая указанное значение размера.
     *
     * ***
     * @arg {number} size `Размер`
     * @public
    */
    setCursorsSize(size) {

        this.cursors.forEach(c => c.setSize(size));

        return this;

    };

    /**
     * ### setCursorTo
     * - Версия `0.1.1`
     * - Модуль `YList`
     * ***
     *
     * Метод установки курсора в указанную позицию по заданным координатам.
     *
     * ***
     * @arg {...number} indexs `Позиция размещения курсора`
     *
     * Количесвто координат передаваемых для размещения определяется размерность заданного экземпляра.
     * Для случаев, если размерность не была указана для конкретного экземпляра используется общее значение.
     *
     * Все избыточные координаты не берутся в расчет.
     * Отрицтальные координаты замещаются на `0`.
     * @public
    */
    setCursorTo(...indexs) {

        this.cursors[0].indexs = arraySupplementFill(arraySupplement(new Array(this.dimension ?? this.constructor.dimension).fill(undefined), ...indexs.map(i => i < 0 ? 0 : i)), 0);

        return this;

    };
    /**
     * ### setCursorToEnd
     * - Версия `0.0.0`
     * - Модуль `YList`
     * ***
     *
     * Метод установки курсора на конечную позицию пространства значений.
     *
     * ***
     *
     * @public
    */
    setCursorToEnd() {

        this.dropCursors();

        const indexs = [];

        let dimension = this.values;

        while (indexs.length !== this.dimension) {

            indexs.push(dimension.length - 1);

            dimension = dimension.at(-1);

        };

        this.cursors[0].indexs = indexs;

        return this;

    };
    /**
     * ### setCursorToStart
     * - Версия `0.0.0`
     * - Модуль `YList`
     * ***
     *
     * Метод установки курсора на начальную позицию пространства значений.
     *
     * ***
     *
     * @public
    */
    setCursorToStart() {

        this.dropCursors().cursors[0].indexs = new Array(this.dimension).fill(0);

        return this;

    };

    /**
     * ### setFixedCursors
     * - Версия `0.1.0`
     * - Модуль `YList`
     * ***
     *
     * Метод изменения фиксированности курсоров.
     *
     * ***
     * @arg {boolean} fixable `Фиксированность`
     * @public
    */
    setFixedCursors(fixable) {

        if (fixable) {

            this.cursorsFixed = true;

        } else {

            this.cursorsFixed = false;

        };

        return this;

    };

};