import { jectAdopt } from "../../../../../ject/ject.mjs";
import { YBasic } from "../../../../../ject/YBasic/YBasic.mjs";

//#region YT

/** ### YStylistPointT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YStylistPoint`
 *
 * Основной параметр модуля `YStylistPoint`.
 *
 * @typedef {YStylistPointTE&YStylistPointTU} YStylistPointT
 *
*/
/** ### YStylistPointTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YStylistPoint`
 *
 * Параметр наследования `YStylistPoint`.
 *
 * @typedef {{[p in Exclude<keyof DStylistPoint,keyof SStylistPoint>|Exclude<keyof SStylistPoint,keyof DStylistPoint>]:(DStylistPoint[p]&SStylistPoint[p])}} YStylistPointTE
 *
*/
/** ### YStylistPointTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YStylistPoint`
 *
 * Уникальные параметры `YStylistPoint`.
 *
 * @typedef YStylistPointTU
 * @prop {any} _
 *
*/

//#endregion

class SStylistPoint extends YBasic {



};
class DStylistPoint extends SStylistPoint {

    /**
     * ### insert
     *
     * Вставка точки.
     *
     * Определяет значение, которое будет вставлено на позицию данной точки.
     *
     * ***
     * @type {string}
     * @public
    */
    insert;
    /**
     * ### position
     *
     * Позиция точки в линии на карте.
     *
     * ***
     * - по умолчанию `0`
     * ***
     * @type {number}
     * @public
    */
    position = 0;

};
class IStylistPoint extends DStylistPoint {



};
class MStylistPoint extends IStylistPoint {



};
class FStylistPoint extends MStylistPoint {

    /**
     * ### YStylistPoint.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YStylistPointT} t
    */
    constructor(t = {}) {

        t = FStylistPoint.#before(Object.values(arguments));

        FStylistPoint.#deceit(t);

        super(t);

        FStylistPoint.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YStylistPoint].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YStylistPointT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2: r.position = t[1];
                case 1: r.insert = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YStylistPointT} t @this {YStylistPoint} */
    static #deceit(t) {

        try {

            FStylistPoint.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YStylistPointT} t @this {YStylistPoint} */
    static #verify(t) {

        const {



        } = t;

        FStylistPoint.#handle(t);

    };
    /** @arg {YStylistPointT} t @this {YStylistPoint} */
    static #handle(t) {



    };
    /** @arg {YStylistPointT} t @this {YStylistPoint} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);



    };

};

/**
 * ### YStylistPoint
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YStylistPoint`
 * - Цепочка `BDVHC`
 * ***
 * Класс стилистической точки.
 *
 * Предназначается для указания связки `позиция-вставка`.
 * Содердит позицию в строке, где должна размещаться вставка и саму данную вставку.
*/
export class YStylistPoint extends FStylistPoint {



};