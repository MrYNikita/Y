import { YBasic } from "../../YBasic/YBasic.mjs";
import { YCursor } from "../Cursor/Cursor.mjs";
import { configYMany } from "../../../config.mjs";
import { arraySupplement, arraySupplementFill } from "../../../array/array.mjs";

//#region YT

/** ### YManyT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YMany`
 *
 * Основной параметр модуля `YMany`.
 *
 * @typedef {YManyTE&YManyTU} YManyT
 *
*/
/** ### YManyTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YMany`
 *
 * Параметр наследования `YMany`.
 *
 * @typedef {{[p in Exclude<keyof DMany,keyof SMany>|Exclude<keyof SMany,keyof DMany>]:(DMany[p]&SMany[p])}} YManyTE
 *
*/
/** ### YManyTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YMany`
 *
 * Уникальные параметры `YMany`.
 *
 * @typedef YManyTU
 * @prop {any} _
 *
*/

//#endregion

class SMany extends YBasic {

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
    static dimension = configYMany.dimension;
    /**
     * ### cursorsFixed
     *
     * Общее значение смещения курсоров.
     *
     * ***
     * @type {boolean}
     * @public
    */
    static cursorsFixed = configYMany.cursorsFixed;

};
class DMany extends SMany {

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
class IMany extends DMany {

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
class MMany extends IMany {



};
class FMany extends MMany {

    /**
     * ### YMany.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YManyT} t
    */
    constructor(t = {}) {

        t = FMany.#before(Object.values(arguments));

        FMany.#deceit(t);

        super(t);

        FMany.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YMany].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YManyT} */
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
    /** @arg {YManyT} t @this {YMany} */
    static #deceit(t) {

        try {

            FMany.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YManyT} t @this {YMany} */
    static #verify(t) {

        const {



        } = t;

        FMany.#handle(t);

    };
    /** @arg {YManyT} t @this {YMany} */
    static #handle(t) {



    };
    /** @arg {YManyT} t @this {YMany} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        this.cursors = [new YCursor({ Many: this, })];

    };

};

/**
 * ### YMany
 * - Тип `SDIMFY`
 * - Версия `0.3.0`
 * - Модуль `ject.YMany`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YMany extends FMany {

    /**
     * ### moveCursors
     * - Версия `0.1.0`
     * - Модуль `YMany`
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
     * - Модуль `YMany`
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
     * - Модуль `YMany`
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
     * - Модуль `YMany`
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
     * - Модуль `YMany`
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
     * - Модуль `YMany`
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
     * - Модуль `YMany`
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
     * - Модуль `YMany`
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

/**
 * @file Many.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/