import { arrayUnique } from "../../../../array/array.mjs";
import { funcBypass } from "../../../../func/func.mjs";
import { jectAdopt } from "../../../../ject/ject.mjs";
import { YBasic } from "../../../../ject/YBasic/YBasic.mjs";
import { YRegExp } from "../../../../regexp/YRegExp/YRegExp.mjs";
import { stringCastToSample, stringShield } from "../../../string.mjs";
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
     * Общие {@link YStylistMap.prototype.ends|эндинги}.
     *
     * ***
     * @type {(string|RegExp)[]}
     * @protected
    */
    static ends = [];

};
class DStylistMap extends SStylistMap {

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
     * @public
    */
    ends = [];
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

        jectAdopt(this, t);



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
     * ### move
     * - Версия `0.0.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод сдвига точек с указанной позиции в указанной линии.
     *
     * ***
     * @arg {number} y `Индекс линии`
     *
     * - По умолчанию `0`
     * @arg {number} x `Индекс позиции`
     *
     * - По умолчанию `0`
     * @arg {number} bias `Смещение`
     *
     * Определяет значение смещения всех точек.
     * При указании недействительного значения метод завершится.
     * @public
    */
    move(bias, y = 0, x = 0) {

        if (bias) this.lines.find(l => l[0] === y)?.[1]?.forEach(p => p.position >= x ? p.position += bias : 0);

        return this;

    };

    /**
     * ### checkEnd
     * - Версия `0.0.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод проверки значения на эндинг.
     *
     * ***
     * @arg {string} point
     * @public
    */
    checkEnd(point) {

        return !!point.match(new YRegExp('').appendVariate(...[...this.constructor.ends, ...this.ends].map(e => {

            if (e instanceof String) {

                return funcBypass(e,

                    [stringShield],
                    [stringCastToSample],

                );

            } else {

                return e;

            };

        })).get());

    };

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
     * - Версия `0.1.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод удаления линий.
     *
     * ***
     * @arg {...number} indexs `Индексы`
     *
     * - По умолччанию `0`
     * @public
    */
    clearLinesByIndex(...indexs) {

        indexs = arrayUnique(indexs).filter(f => f);

        this.lines = this.lines.filter(l => !indexs.includes(l[0]));

        return this;

    };

    /**
     * ### paste
     * - Версия `0.0.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод вставки.
     *
     * Смещает точки на указанное значение смещения, после чего размещает новую точку.
     *
     * ***
     * @arg {number} x `Индекс позиции`
     *
     * - По умолчанию `0`
     * @arg {number} y `Индекс линии`
     *
     * - По умолчанию `0`
     * @arg {number} bias `Смещение`
     *
     * - По умолчанию `0`
     * @arg {string} paste `Стилистическая вставка`
     * @public
    */
    paste(paste, bias = 0, y = 0, x = 0) {

        this.move(bias, y, x).append(paste, y, x);

        return this;

    };

    /**
     * ### append
     * - Версия `0.1.1`
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
    append(insert, y, x) {

        if (!y && y !== 0) {

            y = this.lines.at(-1)[0] ?? 0;

        };
        if (!x && x !== 0) {

            const line = this.lines.find(l => l[0] === y);

            if (line) {

                x = line[1].at(-1).position ?? 0;

            } else {

                x = 0;

            };

        };

        if (insert) {

            this.appendByPoint(new YStylistPoint(insert, x), y);

        };

        return this;

    };
    /**
     * ### appendByMap
     * - Версия `0.0.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод добавления цветовых точек указанной карты.
     *
     * ***
     * @arg {YStylistMap|[number,[number, string][]][]} map `карта`
     *
     * Может быть как экземпляром класса `YStylistMap` или иметь аналогичную структуру.
     *
     * @public
    */
    appendByMap(map) {

        if (map instanceof YStylistMap) {

            map.lines.forEach(l => {

                l[1].forEach(p => {

                    this.appendByPoint(l[0], p);

                });

            });

        } else if (map instanceof Array) {

            map.forEach(l => {

                l[1].forEach(p => {

                    this.append(p[1], l[0], p[0]);

                });

            });

        };

        return this;

    };
    /**
     * ### appendByPoint
     * - Версия `0.1.0`
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
    appendByPoint(point, y = 0) {

        if (point) {

            let m = this.getLineByIndex(y);

            if (!m) {

                this.lines.push(m = [y, []]);

            };

            m[1].push(point);

            this.regulate();

        };

        return this;

    };

    /**
     * ### appendEnds
     * - Версия `0.0.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод добавления эндингов.
     *
     * ***
     * @arg {...(string|RegExp)} ends `Эндинги`
     * @public
    */
    appendEnds(...ends) {

        ends.forEach(e => {

            if ([String, RegExp].includes(e.constructor)) {

                if (e instanceof String) {

                    e = new RegExp(e);

                };

                this.ends.push(e);

            };

        });

        return this;

    };

    /**
     * ### regulate
     * - Версия `0.1.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод регулирования карты.
     *
     * ***
     * @public
    */
    regulate() {

        this.lines = this.lines.filter(c => c[1].length).sort((p, c) => p[0] - c[0]).map((l, li, la) => {

            l[1] = l[1].sort((p, c) => p.position - c.position);
            l[1].forEach((c, ci, ca) => ca[ci + 1]?.position === c.position || ca[ci + 1]?.position === c.position ? ca[ci] = null : null);
            l[1] = l[1].filter(c => c && c.insert);
            l[1] = l[1].reverse().filter((p, pi, pa) => (pa[pi + 1] && pa[pi + 1].insert !== p.insert) || !pa[pi + 1]).reverse();

            // if (la[li - 1]) {

            //     const last = this.getPointLastByLine(la[li - 1][0]);

            //     if (last) {

            //         for (let i = 0; i < l[1].length; i++) {

            //             if (l[1][i].insert === last.insert) l[1].splice(i, 1);
            //             else break;

            //         };

            //     };

            // };

            return l;

        }).filter(l => l[1].length);

        return this;

    };

    /**
     * ### getPointLast
     * - Версия `0.1.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод получения последней вставки в линии по её индексу не распознаной как {@link SStylistMap.ends|`эндинг`}.
     *
     * Начнет поиск в указанной линии с указанной позиции.
     *
     * Реализация учитывает только `эндинги` текущего класса или унаследованные от родительского в том случае, если для данного класса таковые не были указаны.
     *
     * ***
     * @arg {number?} y `Индекс линии`
     *
     * - По умолчанию `0`
     * @arg {number?} x `Индекс позиции`
     * @arg {boolean} end `Режим включения эндингов`
     *
     * Активированным включает в возможный результат поиска `эндинги`.
     * @public
    */
    getPointLastByLine(y = 0, x, end = false) {

        const l = this.lines.find(l => l[0] === y)?.[1];

        if (l) {

            if (!x && x !== 0) {

                x = l.at(-1).position;

            };

            return l.slice().reverse().find(p => {

                if (p.position <= x && (end || (!end && !this.checkEnd(p.insert)))) {

                    return p;

                };

            }) ?? null;

        } else {

            return null;

        };

    };
    /**
     * ### getPointLastByPosition
     * - Версия `0.1.0`
     * - Модуль `YStylistMap`
     * ***
     *
     * Метод {@link YStylistMap.getPointLastByLine|получения последней точки} начиная с указанной `линии` и с указнной `позиции`.
     *
     * Поиск осуществляется по всем линиям стилизатора от указанной `линии`до тех пор, пока не будет найдена последняя точка,
     * не являющаяся {@link SStylistMap.ends|эндингом}.
     *
     * ***
     * @arg {number} y `Индекс линии`
     *
     * Если не определена, то будет взят индекс последней линии.
     * @arg {number} x `Индекс позиции`
     *
     * Если не поределена, то будет взят последний индекс указанной линии.
     * @arg {boolean} end `Режим включения эндингов`
     *
     * Активированным включает в возможный результат поиска `эндинги`.
     * @public
    */
    getPointLastByPosition(y, x, end = false) {

        let size = NaN;
        let result = null;

        if (x instanceof Array) {

            [size, x] = x.reverse();

        };

        if (y || y === 0) {

            const line = this.lines.find(l => l[0] === y);

            if (line) {

                for (const point of line[1].slice().reverse()) {

                    if (point.position < x && (end || (!end && !this.checkEnd(point.insert)))) return point;

                };

            };

            const lines = this.lines.filter(l => l[0] < y);

            for (const line of lines.slice().reverse()) {

                for (const point of line[1].slice().reverse()) {

                    if ((point.position < x && (!size || (size && point.position > size))) && (end || (!end && !this.checkEnd(point.insert)))) return point;

                };

            };


        };

        return result;

    };

};