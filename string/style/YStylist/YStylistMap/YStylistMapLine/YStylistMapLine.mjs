import { jectAdopt } from "../../../../../ject/ject.mjs";
import { YBasic } from "../../../../../ject/YBasic/YBasic.mjs";
import { YStylistPoint } from "../YStylistPoint/YStylistPoint.mjs";

//#region YT

/** ### YStylistMapLineT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapLine`
 *
 * Основной параметр модуля `YStylistMapLine`.
 *
 * @typedef {YStylistMapLineTE&YStylistMapLineTU} YStylistMapLineT
 *
*/
/** ### YStylistMapLineTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapLine`
 *
 * Параметр наследования `YStylistMapLine`.
 *
 * @typedef {{[p in Exclude<keyof DStylistMapLine,keyof SStylistMapLine>|Exclude<keyof SStylistMapLine,keyof DStylistMapLine>]:(DStylistMapLine[p]&SStylistMapLine[p])}} YStylistMapLineTE
 *
*/
/** ### YStylistMapLineTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapLine`
 *
 * Уникальные параметры `YStylistMapLine`.
 *
 * @typedef YStylistMapLineTU
 * @prop {any} _
 *
*/

//#endregion

class SStylistMapLine extends YBasic {



};
class DStylistMapLine extends SStylistMapLine {

    /**
     * ### index
     *
     * Индекс.
     *
     * Обозначает строчку, к которой привязана данная линия.
     *
     * ***
     * @type {number}
     * @public
    */
    index = 0;

};
class IStylistMapLine extends DStylistMapLine {

    /**
     * ### points
     *
     * Массив стилистических точек.
     *
     * ***
     * @type {YStylistPoint[]}
     * @public
    */
    points = [];

};
class MStylistMapLine extends IStylistMapLine {



};
class FStylistMapLine extends MStylistMapLine {

    /**
     * ### YStylistMapLine.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YStylistMapLineT} t
    */
    constructor(t = {}) {

        t = FStylistMapLine.#before(Object.values(arguments));

        FStylistMapLine.#deceit(t);

        super(t);

        FStylistMapLine.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YStylistMapLine].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YStylistMapLineT} */
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
    /** @arg {YStylistMapLineT} t @this {YStylistMapLine} */
    static #deceit(t) {

        try {

            FStylistMapLine.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YStylistMapLineT} t @this {YStylistMapLine} */
    static #verify(t) {

        const {



        } = t;

        FStylistMapLine.#handle(t);

    };
    /** @arg {YStylistMapLineT} t @this {YStylistMapLine} */
    static #handle(t) {



    };
    /** @arg {YStylistMapLineT} t @this {YStylistMapLine} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YStylistMapLine
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapLine`
 * - Цепочка `BDVHC`
 * ***
 * Класс стилистических линий.
 *
 * Экземпляры данного класса хранят в себе линии карт стилей.
 * Данные линии в свою очередь содержат стилистические точки.
*/
export class YStylistMapLine extends FStylistMapLine {



};