import { jectAdopt } from "../../../../ject.mjs";
import { YString } from "../../../../../string/YString/YString.mjs";
import { YElement } from "../YElement.mjs";

//#region YT

/** ### YPaintT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YPaint`
 *
 * Основной параметр модуля `YPaint`.
 *
 * @typedef {YPaintTE&YPaintTU&import("../YElement.mjs").YElementT} YPaintT
 *
*/
/** ### YPaintTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YPaint`
 *
 * Параметр наследования `YPaint`.
 *
 * @typedef {{[p in Exclude<keyof DPaint,keyof SPaint>|Exclude<keyof SPaint,keyof DPaint>]:(DPaint[p]&SPaint[p])}} YPaintTE
 *
*/
/** ### YPaintTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YPaint`
 *
 * Уникальные параметры `YPaint`.
 *
 * @typedef YPaintTU
 * @prop {any} _
 *
*/

//#endregion

class SPaint extends YElement {



};
class DPaint extends SPaint {

    /**
     * ### layout
     *
     * Разметка.
     *
     * ***
     * @type {(string|YString|function():string)}
     * @public
    */
    layout = '';

};
class IPaint extends DPaint {



};
class MPaint extends IPaint {



};
class FPaint extends MPaint {

    /**
     * ### YPaint.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YPaintT} t
    */
    constructor(t = {}) {

        t = FPaint.#before(Object.values(arguments));

        FPaint.#deceit(t);

        super(t);

        FPaint.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YPaint].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YPaintT} */
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
    /** @arg {YPaintT} t @this {YPaint} */
    static #deceit(t) {

        try {

            FPaint.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YPaintT} t @this {YPaint} */
    static #verify(t) {

        const {



        } = t;

        FPaint.#handle(t);

    };
    /** @arg {YPaintT} t @this {YPaint} */
    static #handle(t) {



    };
    /** @arg {YPaintT} t @this {YPaint} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YPaint
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YPaint`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YPaint extends FPaint {

    getLayout() {

        if (this.layout instanceof YString) return this.layout.get(true);
        else if (this.layout instanceof Function) return this.layout();
        else return this.layout;

    };

};

/**
 * @file YPaint.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/