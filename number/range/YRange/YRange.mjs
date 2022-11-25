import { YBasic } from "../../../ject/YBasic/YBasic.mjs";
import { jectFill } from "../../../ject/ject.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { arrayRearrangeByIndex, arrayUnique } from "../../../array/array.mjs";
import { rangeCast } from "../range.mjs";

/**
 * @typedef TBRange
 * @prop {any} _
 * @typedef {DRange&TBRange} TRange
*/

class SRange extends YBasic {



};
class DRange extends SRange {

    /**
     * Щаг диапазона.
     * @type {number?}
    */
    step = 1;
    /**
     * Диапазон значений.
     * @type {Array<number>}
    */
    numbers = [];

};
class IRange extends DRange {



};
class FRange extends IRange {

    /**
     * Контсруктор класса `YRange`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TRange} t
    */
    constructor(t = {}) {

        t = FRange.#before(Object.values(arguments));

        FRange.#deceit(t);

        super(t);

        FRange.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            const r = {};

            switch (t.length) {

                default: {

                    r.numbers = t;

                };

            };

            return r;

        } else return {};

    };
    /** @param {TRange} t @this {YRange} */
    static #deceit(t) {

        try {

            FRange.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TRange} t @this {YRange} */
    static #verify(t) {

        const {



        } = t;

        FRange.#handle(t);

    };
    /** @param {TRange} t @this {YRange} */
    static #handle(t) {

        let {



        } = t;

        if (!t.step) t.step = 1;
        else if (t.step < 0) t.step *= -1;

        if (t.numbers) t.numbers = rangeCast(t.step, ...t.numbers);

        t = {

            ...t,

        };

    };
    /** @param {TRange} t @this {YRange} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс числовых диапазонов.
 * 
 * Данный класс предназначен для работы с линейными диапазонами.
 * Диапазоны хранят исключительно уникальные значения.
 * - Тип `SDIFY-1.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YRange extends FRange {



    getReport() {

        return new YString()

            .changePostfix(';\n')
            .paste(

                `Шаг: ${this.step}`,
                `Конец: ${this?.numbers?.at?.(-1)?.at?.(-1) ?? this?.numbers?.at?.(-1)}`,
                `Начало: ${this?.numbers[0]?.[0] ?? this?.numbers?.[0]}`,

            )
            .pasteTemplate('l')
            .paste(this.numbers.join(', '))
            .get()

    };

};