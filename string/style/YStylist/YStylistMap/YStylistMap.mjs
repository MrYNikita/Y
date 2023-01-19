import { jectFill } from "../../../../ject/ject.mjs";
import { YBasic } from "../../../../ject/YBasic/YBasic.mjs";
import { YRegExp } from "../../../../regexp/YRegExp/YRegExp.mjs";
import { YStylistPoint } from "./YStylistPoint/YStylistPoint.mjs";

//#region YT

/** ### YStylistMapT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YStylistMap`
 *
 * Основной параметр модуля `YStylistMap`.
 *
 * @typedef {YStylistMapTE&YStylistMapTU} YStylistMapT
 *
*/
/** ### YStylistMapTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YStylistMap`
 *
 * Параметр наследования `YStylistMap`.
 *
 * @typedef {{[p in Exclude<keyof DStylistMap,keyof SStylistMap>|Exclude<keyof SStylistMap,keyof DStylistMap>]:(DStylistMap[p]&SStylistMap[p])}} YStylistMapTE
 *
*/
/** ### YStylistMapTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YStylistMap`
 *
 * Уникальные параметры `YStylistMap`.
 *
 * @typedef YStylistMapTU
 * @prop {any} _
 *
*/

//#endregion

class SStylistMap extends YBasic {

    /**
     * ### ends
     *
     * Эндинги.
     *
     * Определяют набор завершающих точек.
     *
     * Чаще всего используются в `ascii кодах` для сброса значений.
     *
     * ***
     * @type {(string|RegExp)[]}
     * @protected
    */
    static ends = ['1'];

};
class DStylistMap extends SStylistMap {

    /**
     * ### lines
     *
     * Линии.
     *
     * ***
     * @type {[number, YStylistPoint[]][]}
     * @public
    */
    lines = [];

};
class IStylistMap extends DStylistMap {



};
class MStylistMap extends IStylistMap {

    /**
     * ### getPointLast
     * - Версия `0.0.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод получения последней вставки в линии по её индексу не распознаной как {@link SStylistMap.ends|эндинг}.
     *
     * Начнет поиск в указанной линии с указанной позиции.
     *
     * Реализация учитывает только эндинги текущего класса или унаследованные от родительского в том случае, если для данного класса таковые не были указаны.
     *
     * ***
     * @arg {number} y `Индекс линии`
     *
     * - По умолчанию `0`
     * @arg {number} x `Индекс позиции`
     *
     * - По умолчанию `0`
     * @protected
    */
    getPointLast(y = 0, x = 0) {

        return this.lines.find(l => l[0] === y)[1].find(p => p.position < x && p.insert.match(new YRegExp('').appendVariate(...this.constructor.ends).get())) ?? null;

    };

    /**
     * ### getLineByIndex
     * - Версия `0.0.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод получения линии по индексу.
     *
     * ***
     * @arg {number} y `Индекс линии`
     * @protected
    */
    getLineByIndex(y) {

        return y >= 0 ? this.lines.find(l => l[0] === y) ?? null : null;

    };

};
class FStylistMap extends MStylistMap {

    /**
     * ### YStylistMap.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YStylistMapT} t
    */
    constructor(t = {}) {

        t = FStylistMap.#before(Object.values(arguments));

        FStylistMap.#deceit(t);

        super(t);

        FStylistMap.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YStylistMap].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YStylistMapT} */
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
    /** @arg {YStylistMapT} t @this {YStylistMap} */
    static #deceit(t) {

        try {

            FStylistMap.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YStylistMapT} t @this {YStylistMap} */
    static #verify(t) {

        const {



        } = t;

        FStylistMap.#handle(t);

    };
    /** @arg {YStylistMapT} t @this {YStylistMap} */
    static #handle(t) {



    };
    /** @arg {YStylistMapT} t @this {YStylistMap} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * ### YStylistMap
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YStylistMap`
 * - Цепочка `BDVHC`
 * ***
 * Класс стилистических карт.
 *
 * Каждая стилистическая карта хранит в себе массивы стилистических точек.
*/
export class YStylistMap extends FStylistMap {

    /**
     * ### clear
     * - Версия `0.0.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод удлаения всех линий.
     *
     * ***
     *
     * @public
    */
    clear() {

        this.lines = [];

        return this;

    };
    /**
     * ### clearLineByIndex
     * - Версия `0.0.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод удлаения линии.
     *
     * ***
     * @arg {number} index `Индекс`
     *
     * - По умолччанию `0`
     * @public
    */
    clearLineByIndex(index = 0) {

        this.lines = this.lines.filter(l => l[0] !== index);

        return this;

    };

    /**
     * ### append
     * - Версия `0.0.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод добавления стилистической точки в указанную позицию указанной линии.
     *
     * ***
     * @arg {number} x `Индекс позиции`
     *
     * - По умолчанию `0`
     * @arg {number} y `Индекс линии`
     *
     * - По умолчанию `0`
     * @arg {string} insert `Стилистическая вставка`
     * @public
    */
    append(y = 0, x = 0, insert) {

        if (insert) this.appendByPoint(y, new YStylistPoint(insert, x));

        return this;

    };
    /**
     * ### appendByPoint
     * - Версия `0.0.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод {@link YStylistMap.append|дополнения} через стилистическую точку.
     *
     * ***
     * @arg {number} y `Индекс линии`
     *
     * - По умолчанию `0`
     * @arg {YStylistPoint} point `Стилистическая точка`
     * @public
    */
    appendByPoint(y = 0, point) {

        if (point) {

            let m = this.getLineByIndex(y);

            if (!m) this.lines.push(m = [y, []]);

            m[1].push(point);

            this.regulate();

        };

        return this;

    };

    /**
     * ### regulate
     * - Версия `0.0.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод регулирования карты.
     *
     * ***
     *
    */
    regulate() {

        this.lines = this.lines.filter(c => c[1].length).sort((p, c) => p[0] - c[0]).map(l => {

            l[1] = l[1].sort((p, c) => p.position - c.position);
            l[1].forEach((c, ci, ca) => ca[ci + 1]?.position === c.position || ca[ci + 1]?.position === c.position ? ca[ci] = null : null);
            l[1] = l[1].filter(c => c && c.insert);

            return l;

        });

        return this;

    };

};