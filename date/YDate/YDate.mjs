import { jectFill } from "../../ject/ject.mjs";
import { YBasic } from "../../ject/YBasic/YBasic.mjs";

/**
 * @typedef TBDate
 * @prop {any} _
 * @typedef {DDate&TBDate} TDate
*/

class SDate extends YBasic {



};
class DDate extends SDate {

    /**
     * Дата.
     * @protected
     * @type {Date}
    */
    value = new Date();

};
class IDate extends DDate {



};
class MDate extends IDate {



};
class FDate extends MDate {

    /**
     * Контсруктор класса `YDate`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TDate} t
    */
    constructor(t = {}) {

        t = FDate.#before(Object.values(arguments));

        FDate.#deceit(t);

        super(t);

        FDate.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TDate&DDate} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.value = t[0];

            };

            return r;

        } else return {};

    };
    /** @arg {TDate} t @this {YDate} */
    static #deceit(t) {

        try {

            FDate.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TDate} t @this {YDate} */
    static #verify(t) {

        const {



        } = t;

        FDate.#handle(t);

    };
    /** @arg {TDate} t @this {YDate} */
    static #handle(t) {



    };
    /** @arg {TDate} t @this {YDate} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YDate`
 *
 * Данный класс предназначен для работы с датами.
 * - Тип `SDIMFY-1`
 * - Версия `0.0.1`
 * - Цепочка `BDVHC`
*/
export class YDate extends FDate {

    /**
     * Метод получения всех единиц измерения времени от меньшей к большей.
     * - Версия `0.0.0`
    */
    get() {

        return [

            this.getMilesecond(),
            this.getSecond(),
            this.getMinute(),
            this.getHour(),
            this.getDay(),
            this.getMonth(),
            this.getYear(),

        ];

    };
    /**
     * Метод получения дня.
     * - Версия `0.0.0`
    */
    getDay() {

        return this.value.getDate();

    };
    /**
     * Метод получения года.
     * - Версия `0.0.0`
    */
    getYear() {

        return this.value.getFullYear();

    };
    /**
     * Метод получения часа.
     * - Версия `0.0.0`
    */
    getHour() {

        return this.value.getHours();

    };
    /**
     * Метод получения месяца.
     * - Версия `0.0.0`
    */
    getMonth() {

        return this.value.getMonth() + 1;

    };
    /**
     * Метод получения секунды.
     * - Версия `0.0.0`
    */
    getSecond() {

        return this.value.getSeconds();

    };
    /**
     * Метод получения минуты.
     * - Версия `0.0.0`
    */
    getMinute() {

        return this.value.getMinutes();

    };
    /**
     * Метод получения милесекунд.
     * - Версия `0.0.0`
    */
    getMilesecond() {

        return this.getMilesecond();

    };

};