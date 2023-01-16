import { YBasic } from '../../../ject/YBasic/YBasic.mjs';
import { jectFill } from '../../../ject/ject.mjs';
import { stringFindAll, stringGetTranducer, stringPaste, stringPasteWrap } from '../../string.mjs';
import { arrayAppend, arrayPaste } from '../../../array/array.mjs';
import { colorClear, colorGet, colorGetMap, colorReset, colorVEREReset } from '../color/color.mjs';

//#region YT

/** ### YStylistT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YStylist`
 *
 * Основной параметр модуля `YStylist`.
 *
 * @typedef {YStylistTE&YStylistTU&import('../../string.mjs').stringTString} YStylistT
 *
*/
/** ### YStylistTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YStylist`
 *
 * Параметр наследования `YStylist`.
 *
 * @typedef {{[p in Exclude<keyof DStylist,keyof SStylist>|Exclude<keyof SStylist,keyof DStylist>]:(DStylist[p]&SStylist[p])}} YStylistTE
 *
*/
/** ### YStylistTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YStylist`
 *
 * Уникальные параметры `YStylist`.
 *
 * @typedef YStylistTU
 * @prop {any} _
 *
*/

//#endregion

class SStylist extends YBasic {



};
class DStylist extends SStylist {



};
class IStylist extends DStylist {

    /**
     * Цветовая карта.
     *
     * Представлена наборами вида `y:x:color`, где `color` (цвет) является `escape` кодовой вставкой, а `y` и `x` - позиции для размещения данной вставки.
     * @protected
     * @type {[number,number,string][]}
    */
    mapColor = [];

};
class MStylist extends IStylist {

    /**
     * ### regulate
     * - Версия `0.0.0`
     * - Модуль `YStylist`
     * - Цепочка `BDVHC`
     *
     * Метод регулирования карт стилей.
     *
     * ***
     *
    */
    regulate() {

        this.mapColor.forEach(l => l = l.sort((p, c) => p[0] - c[0]));

        return this;

    };

};
class FStylist extends MStylist {

    /**
     * ### `YStylist.constructor`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YStylistT} t
    */
    constructor(t = {}) {

        t = FStylist.#before(Object.values(arguments));

        FStylist.#deceit(t);

        super(t);

        FStylist.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YStylist].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YStylistT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.string = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YStylistT} t @this {YStylist} */
    static #deceit(t) {

        try {

            FStylist.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YStylistT} t @this {YStylist} */
    static #verify(t) {

        const {



        } = t;

        FStylist.#handle(t);

    };
    /** @arg {YStylistT} t @this {YStylist} */
    static #handle(t) {



    };
    /** @arg {YStylistT} t @this {YStylist} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        if (t.string) this.mapColor = colorGetMap(t.string);

    };

};

/**
 * ### YStylist
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Модуль `string.style.YStylist`
 * - Цепочка `BDVHC`
 * ***
 * Класс стилизаторов для декорирования строк.
 *
 * Экземпляры данного класса хранят карты стилей.
 * Каждая карта представлена массивами вида `y:x:style`, где `style` (стилем) является строковой вставкой,
 * а `y` и `x` - позициями для их размещения. Вставки отвечают за стилизацию строки. Данные вставки не замещают символов исходной строки. При указании
 * нескольких стилей одной категории для одинаковой позиции в карте будет использован последний указанный стиль.
 * Таким образом, `y` и `x` являются парными ключами для каждой карты.
 *
 * Под категориями стилей понимается их предназначение. Так стили отвечающие за цвета будут выступать стилями категории цветов,
 * в то время как стили отвечающие за тип подчеркивания, будут выступать стилями категории подчеркивания. Для каждой категории существует своя карта.
 *
 * После завершения стилизации строки, карта применяет свои стили на итоговой строке, стилизуя её.
 *
 * Рекомендуется никогда не использовать стилизованные строки в алгоритмах, так как в них внедрены стилизованные вставки.
 * Предварительно стоит убедиться, что строка не стилизована и если окажется, что она является таковой, то перед её использованием
 * в алгоритмах следует убрать все встроенные в неё стили или сделать резервную копию исходной строки и после провести удаление стилей для копии.
*/
export class YStylist extends FStylist {

    /**
     * ### handle
     * - Версия `0.1.0`
     * - Модуль `YStylist`
     * - Цепочка `BDVHC`
     *
     * Метод обработки указанной строки с данным стилем.
     *
     * ***
     * @arg {string} string `Строка`
    */
    handle(string) {

        if (string) {

            string = colorClear(string);

            const c = stringFindAll(string, /\n/).length;

            this.mapColor.slice(0, c ? c + 1 : 1).forEach((l, li) => l.slice().reverse().forEach(c => string = stringPasteWrap(string, c[1], c[0], li, 0)));

            return string + colorReset();

        } else return '';

    };

    /**
     * Метод добавления нового значения.
     * - Версия `0.1.0`
     * @arg {number} y Индекс линии.
     * @arg {number} x Индекс позиции.
     * @arg {string} string Строка вствки.
    */
    pasteColorByString(string, x = 0, y = 0) {

        const ls = colorClear(string).split('\n').map(s => s.length);

        colorGetMap(string).forEach((l, ci) => {

            if (!this.mapColor[ci + y]) this.mapColor[ci + y] = [];

            const la = this.mapColor[ci + y].slice().reverse().find(c => !c[1].match(colorVEREReset));
            const ml = this.mapColor[ci + y];

            if (ml) {

                ml.forEach(c => c[0] >= x ? c[0] += ls[ci + y] : 0);

                if (la && l.length && l.at(-1)[1].match(colorVEREReset)) l.at(-1)[1] = la[1];

                l.forEach(l => l[0] += x);

                ml.push(...l);

            };

        });

        this.regulate();

        return this;

    };
    /**
     * ### append
     * - Версия `0.0.0`
     * - Модуль `YStylist`
     * - Цепочка `BDVHC`
     *
     * Метод добавления новых цветов в цветовую карту.
     *
     * ***
     * @arg {...([number,string][][]|YStylist)} map
    */
    append(...map) {

        for (let i = 0; i < map.length; i++) {

            const m = map[i];

            if (m instanceof YStylist) map.push(m.mapColor);
            else m.forEach((l, li) => {

                if (!this.mapColor[li]) this.mapColor[li] = [];

                this.mapColor[li].push(...l)

            });

        };

        this.regulate();

        return this;

    };

};

/**
 * @file YStylist.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/