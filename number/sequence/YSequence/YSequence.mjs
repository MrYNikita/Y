import { jectFill } from "../../../ject/ject.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { numberGetSequence } from "../../number.mjs";
import { sequenceCheckEntry, sequenceOrder } from "../sequence.mjs";

/**
 * @typedef TBSequence
 * @prop {any} _
 * @typedef {DSequence&TBSequence} TSequence
*/

class SSequence {



};
class DSequence extends SSequence {

    /**
     * Минимальное значение.
     * @type {number}
    */
    min = null;
    /**
     * Максимальное значение.
     * @type {number}
    */
    max = null;
    /**
     * Количество чисел в последовательности.
     * @type {number}
    */
    count = null;
    /**
     * Числа.
     * @type {Array<number>}
    */
    numbers = [];

};
class FSequence extends DSequence {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TSequence} t
    */
    constructor(t = {}) {

        t = FSequence.#before(arguments);

        FSequence.#deceit(t);

        super(t);

        FSequence.#create.apply(this, [t]);

    };

    /** @param {[]} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            const r = {};

            switch (t?.length) {

                case 2: return {

                    min: t[0],
                    max: t[1],

                };
                default: return {

                    numbers: Array.from(t),

                };


            };

            return r;

        } else return {};

    };
    /** @param {TSequence} t @this {YSequence} */
    static #deceit(t) {

        try {

            FSequence.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TSequence} t @this {YSequence} */
    static #verify(t) {

        const {



        } = t;

        FSequence.#handle(t);

    };
    /** @param {TSequence} t @this {YSequence} */
    static #handle(t) {

        let {



        } = t;

        if (!t.sequenceCorrect) t.sequenceCorrect = 0;
        if (t.min > t.max) [t.min, t.max] = [t.max, t.min];
        if (t.min && t.max) t.numbers = numberGetSequence(Math.abs(t.max - t.min + 1), t.min, 1);

        if (t.numbers) {

            const r = [];

            if (t.orderliness) {

                t.numbers = t.numbers.sort((p, c) => c - p);
                t.min = t.numbers.at(-1);
                t.max = t.numbers[0];

            } else {

                t.min = t.numbers[0];
                t.max = t.numbers[0];

                t.numbers.forEach(n => {

                    if (t.min > n) t.min = n;
                    if (t.max < n) t.max = n;

                });

            };

            t.numbers = sequenceOrder(t.numbers);

        };

        t = {

            ...t,

        };

    };
    /** @param {TSequence} t @this {YSequence} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.сount();

    };

};

/**
 * Класс числовых последовательностей.
 *
 * Данный класс используется для создания числовых последовательностей.
 * Экземпляры данного класа хранят набор своих чисел, максимальное и минимальное значение последовательности.
 *
 * Последовательности можно использовать для `сравнения` и `сопоставления` между собой.
 *
 * Последовательности оптимизируются за счет сжатия правильных диапазонов -
 * это означает, что при обнаружении последовательностью правильных диапазонов,
 * они будут сжаты. Пример: `[..., 7, 8, 9,...] будет сжато в [..., [7, 9], ...]`.
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YSequence extends FSequence {

    order() {



    };
    report() {

        new YString(this.getReport())

            .castToYReport()
            .display();

        return this;

    };
    /**
     * Метод добавления значений в последовательность.
     * - Версия `0.0.0`
     * @param {...number} numbers Числа.
    */
    append(...numbers) {

        numbers = numbers.reverse();

        if (!this.min) this.min = numbers[0];
        if (!this.max) this.max = numbers[0];

        this.count += numbers.length;

        while (numbers.length) {

            const n = numbers.pop();

            if (n < this.min) this.min = n;
            if (n > this.max) this.max = n;
<<<<<<< HEAD

            if (this.numbers.at(-1) instanceof Array && Math.abs(this.numbers.at(-1)[1] - n) === 1) {

                this.numbers.at(-1)[1] = n;

=======
            
            if (this.numbers.at(-1) instanceof Array && Math.abs(this.numbers.at(-1)[1] - n) === 1) {
                
                this.numbers.at(-1)[1] = n;
                
>>>>>>> main
            } else if (Math.abs(this.numbers.at(-1) - n) === 1) {

                this.numbers.push([this.numbers.pop(), n]);

            } else this.numbers.push(n);

        };


        return this;

    };
    /**
     * Метод подсчета чисел в последовательности.
     * - Версия `0.0.0`
    */
    сount() {

        return this.count = this.numbers.reduce((p, c) => {

            if (c instanceof Array) {

                let [min, max] = c;

                if (min > max) [min, max] = [max, min];

                return p + (max - min) + 1;

            } else return p++;

        }, 0);

    };
    /**
<<<<<<< HEAD
     *
     * - Версия `0.0.0`
     *
=======
     * 
     * - Версия `0.0.0`
     * 
>>>>>>> main
    */
    getReport() {

        return new YString()

            .changePostfix(';\n')
            .paste(

                `Минимум: ${this.min}`,
                `Максимум: ${this.max}`,
                `Количество: ${this.count}`,
                `Последовательность: [${this.numbers}]`

            )
            .get();

    };
    /**
     * Метод проверки указанного диапазона на принадлежнсоть данному.
     * - Версия `0.0.0`
<<<<<<< HEAD
     * @param {...YSequence|Array<number>|number} sequence Диапазон, который будет проверен на принадлежность вышестоящему диапазону.
=======
     * @param {...YSequence|Array<number>|number} sequence Диапазон, который будет проверен на принадлежность вышестоящему диапазону. 
>>>>>>> main
    */
    checkEntry(...sequence) {

        return sequenceCheckEntry(this.numbers, ...sequence.map(s => (s instanceof YSequence) ? s.numbers : s));

    };

};