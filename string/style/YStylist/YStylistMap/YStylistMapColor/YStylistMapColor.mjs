import { jectAdopt } from "../../../../../ject/ject.mjs";
import { colorClear, colorGetMap, colorGetMapWrap, colorVEREReset } from "../../../../ansi/color/color.mjs";
import { YStylistMap } from "../YStylistMap.mjs";
import { YStylistPoint } from "../YStylistPoint/YStylistPoint.mjs";

//#region YT

/** ### YStylistMapColorT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapColor`
 *
 * Основной параметр модуля `YStylistMapColor`.
 *
 * @typedef {YStylistMapColorTE&YStylistMapColorTU} YStylistMapColorT
 *
*/
/** ### YStylistMapColorTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapColor`
 *
 * Параметр наследования `YStylistMapColor`.
 *
 * @typedef {{[p in Exclude<keyof DStylistMapColor,keyof SStylistMapColor>|Exclude<keyof SStylistMapColor,keyof DStylistMapColor>]:(DStylistMapColor[p]&SStylistMapColor[p])}} YStylistMapColorTE
 *
*/
/** ### YStylistMapColorTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapColor`
 *
 * Уникальные параметры `YStylistMapColor`.
 *
 * @typedef YStylistMapColorTU
 * @prop {any} _
 *
*/

//#endregion

class SStylistMapColor extends YStylistMap {

    static ends = [colorVEREReset];

};
class DStylistMapColor extends SStylistMapColor {



};
class IStylistMapColor extends DStylistMapColor {



};
class MStylistMapColor extends IStylistMapColor {



};
class FStylistMapColor extends MStylistMapColor {

    /**
     * ### YStylistMapColor.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YStylistMapColorT} t
    */
    constructor(t = {}) {

        t = FStylistMapColor.#before(Object.values(arguments));

        FStylistMapColor.#deceit(t);

        super(t);

        FStylistMapColor.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YStylistMapColor].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YStylistMapColorT} */
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
    /** @arg {YStylistMapColorT} t @this {YStylistMapColor} */
    static #deceit(t) {

        try {

            FStylistMapColor.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YStylistMapColorT} t @this {YStylistMapColor} */
    static #verify(t) {

        const {



        } = t;

        FStylistMapColor.#handle(t);

    };
    /** @arg {YStylistMapColorT} t @this {YStylistMapColor} */
    static #handle(t) {



    };
    /** @arg {YStylistMapColorT} t @this {YStylistMapColor} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);



    };

};

/**
 * ### YStylistMapColor
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YStylistMapColor`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YStylistMapColor extends FStylistMapColor {

    /**
     * ### pasteByString
     * - Версия `0.0.0`
     * - Модуль `YStylistMapColor`
     * ***
     *
     * Метод {@link YStylistMap.paste|вставки} по строке.
     *
     * Для каждой линии в указанной строке вычисляет её значение смещения и применяет их к каждой линии карты
     * начиная с указанной линии с указанной позиции.
     *
     * После осуществялется {@link YStylistMap.append|дополнение}.
     *
     * ***
     * @arg {number} x `Индекс позиции`
     *
     * - По умолчанию `0`
     * @arg {number} y `Индекс линии`
     *
     * - По умолчанию `0`
     * @arg {string} string `Строка`
     * @public
    */
    pasteByString(string, y, x) {

        if (string) {

            const m = colorGetMap(string, y, x);

            if (m.length) {

                colorClear(string).split('\n').forEach(s => this.move(s.length, y, x));
                m.forEach(l => l[1].forEach(p => this.append(p[1], l[0], p[0])));

            };

        };

        return this;

    };
    /**
     * ### pasteByStringWrap
     * - Версия `0.0.1`
     * - Модуль `YStylistMapColor`
     * ***
     *
     * Метод {@link YStylistMap.paste|вставки} {@link YStylistMapColor.pasteByString|по строке} с переносом.
     *
     * Благодаря правилам переноса стилистическая структура исходной втсавки не будет нарушена.
     *
     * ***
     * @arg {number} x `Индекс позиции`
     *
     * - По умолчанию `0`
     * @arg {number} y `Индекс линии`
     *
     * - По умолчанию `0`
     * @arg {string} string `Строка`
     * @public
    */
    pasteByStringWrap(string, y = 0, x = 0) {

        if (string) {

            const m = colorGetMapWrap(string, y, x);
            const r = m.map(l => this.getPointLastByPosition(l[0], x, true)?.insert);

            if (m.length) {

                colorClear(string).split('\n').forEach(s => this.move(s.length, y, x + 1));
                m.forEach((l, li) => {

                    l[1].forEach((p, pi) => {

                        if (l[1].length - 1 === pi) {

                            p = new YStylistPoint(r[li], p.position)
                            l[1][pi] = p;

                        };

                        this.append(p.insert, l[0], p.position);

                    });

                });

            };

        };

        return this;

    };

};

/**
 * @file YStylistMapColor.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/