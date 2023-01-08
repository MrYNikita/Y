import { YBasic } from '../../../ject/YBasic/YBasic.mjs';
import { jectFill } from '../../../ject/ject.mjs';
import { stringCastToSample, stringFindAll, stringGetTranducer, stringPaste, stringREANSIColor, stringRemove, stringResetColor } from '../../string.mjs';
import { YRegExp } from '../../../regexp/YRegExp/YRegExp.mjs';
import { arrayPaste } from '../../../array/array.mjs';

/**
 * @typedef TBStylist
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DStylist,keyof SStylist>|Exclude<keyof SStylist,keyof DStylist>]:(DStylist[p]&SStylist[p])}} TDStylist
 * @typedef {TDStylist&TBStylist} TStylist
*/

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



};
class FStylist extends MStylist {

    /**
     * Контсруктор класса `YStylist`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TStylist} t
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

            /** @type {TStylist&DStylist} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.value = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {TStylist} t @this {YStylist} */
    static #deceit(t) {

        try {

            FStylist.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TStylist} t @this {YStylist} */
    static #verify(t) {

        const {



        } = t;

        FStylist.#handle(t);

    };
    /** @arg {TStylist} t @this {YStylist} */
    static #handle(t) {



    };
    /** @arg {TStylist} t @this {YStylist} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        while (true) {

            const f = t.value.match(stringREANSIColor);

            if (!f) break;

            t.value = stringRemove(t.value, f.index, f[0].length);

            this.mapColor.push([f.index, f[0]]);

        };

    };

};

/**
 * Класс `YStylist`
 *
 * Класс стилистов для стилизации строк.
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
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `string.stylist`
 * - Цепочка `BDVHC`
*/
export class YStylist extends FStylist {

    /**
     * Метод получения итоговой строки.
     * - Версия `0.0.0`
    */
    get(string) {

        string = stringResetColor(string);

        this.mapColor.slice().reverse().forEach(c => string = stringPaste(string, c[1], c[0]));

        return string;

    };
    /**
     * Метод добавления нового значения.
     * - Версия `0.0.0`
     * @arg {number} index Индекс вставки.
     * @arg {string} string Строка вствки.
    */
    paste(index, string) {

        const r = stringGetTranducer(string);
        const re = /\x1b\[([34]9|39;49;|49;39;)m/;
        const la = this.mapColor.reverse().find(c => !c[1].match(re));

        r.forEach(c => {

            c[0] += index;

            if (c[1].match(re)) c[1] = la[1];

        });

        const l = string.length - r.reduce((p, c) => p + c[1].length, 0);

        this.mapColor.forEach(c => {

            if (c[0] >= index) c[0] += l;

        });

        this.mapColor = arrayPaste(this.mapColor, index, ...r).sort((p, c) => p[0] - c[0]);

        return this;

    };

};