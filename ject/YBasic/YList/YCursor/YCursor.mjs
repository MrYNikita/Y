import { YBasic } from "../../YBasic.mjs";
import { YList } from "../YList.mjs";
import { jectAdopt } from "../../../ject.mjs";
import { arrayRemoveByElement } from "../../../../array/array.mjs";

//#region YT

/** ### YCursorT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YCursor`
 *
 * Основной параметр модуля `YCursor`.
 *
 * @typedef {YCursorTE&YCursorTU} YCursorT
 *
*/
/** ### YCursorTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YCursor`
 *
 * Параметр наследования `YCursor`.
 *
 * @typedef {{[p in Exclude<keyof DCursor,keyof SCursor>|Exclude<keyof SCursor,keyof DCursor>]:(DCursor[p]&SCursor[p])}} YCursorTE
 *
*/
/** ### YCursorTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YCursor`
 *
 * Уникальные параметры `YCursor`.
 *
 * @typedef YCursorTU
 * @prop {any} _
 *
*/

//#endregion

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
     * ### YCursor.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YCursorT} t
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

            /** @type {YCursorT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.list = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #deceit(t) {

        try {

            FCursor.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #verify(t) {

        const {



        } = t;

        FCursor.#handle(t);

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #handle(t) {

        if ((!t.indexs || !t.indexs.length) && t.list) t.indexs = new Array(t.list.dimension ?? t.list.constructor.dimension ?? 1).fill(0);

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YCursor
 * - Тип `SDIMFY`
 * - Версия `0.4.0`
 * - Модуль `YCursor`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YCursor extends FCursor {

    /**
     * ### move
     * - Версия `0.1.0`
     * - Модуль `YCursor`
     * ***
     *
     * Метод смещения курсора.
     *
     * Сдвигает курсор по его измерениям.
     *
     * ***
     * @arg {...number} bias `Смещения`
     * @public
    */
    move(...bias) {

        if (bias.length) {

            bias.filter(b => b.constructor === Number).forEach((b, bi) => {

                b = this.indexs[bi] + b;

                if (b < 0 || b === NaN) {

                    this.indexs[bi] = 0;

                } else {

                    this.indexs[bi] = b;

                };

            });

        };

        return this;

    };

    /**
     * ### setSize
     * - Версия `0.1.0`
     * - Модуль `YCursor`
     * ***
     *
     * Метод установки размера курсора.
     *
     * ***
     * @arg {number} size Размер
     * @public
    */
    setSize(size) {

        if (size.constructor === Number && this.size >= 0) {

            this.size = size;

        };

        return this;

    };

    /**
     * ### changeSize
     * - Версия `0.1.0`
     * - Модуль `YCursor`
     * ***
     *
     * Метод изменения размера курсора на указанное значение.
     *
     * ***
     * @arg {number} size `Размер`
     *
     * - Дефолт: `1`
     * @public
    */
    changeSize(size = 1) {

        if (size.constructor === Number) {

            this.size += size;

        };

        return this;

    };

};