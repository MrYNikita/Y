import { YBasic } from '../../../ject/YBasic/YBasic.mjs';
import { jectFill } from '../../../ject/ject.mjs';

/**
 * @typedef TBStylist
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DStylist,keyof SStylist>|Exclude<keyof SStylist,keyof DStylist>]:(DStylist[p]&SStylist[p])}} TDStylist
 * @typedef {TDStylist&TBStylist} TStylist
*/

class SStylist extends YBasic {



};
class DStylist extends SStylist {

    /**
     * Значение.
     * @type {string|import('../YString.mjs').YString}
    */
    value = '';

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



};