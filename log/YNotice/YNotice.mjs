import { jectFill } from "../../ject/ject.mjs";
import { configLog } from "../../config.mjs";
import { stringCastToDate, stringCastToSample, stringReplace } from "../../string/string.mjs";
import { YSection } from "./YSection/YSection.mjs";

/**
 * @typedef TBNotice
 * @prop {any} _
 * @typedef {DNotice&TBNotice} TNotice
*/

class SNotice {



};
class DNotice extends SNotice {

    /**
     * Дата.
     * @type {Date}
    */
    date;
    /**
     * Данные.
     * @type {string}
    */
    data;
    /**
     * Индекс.
     * @type {number?}
    */
    index;
    /**
     * Секция.
     * @type {YSection}
    */
    section;

};
class FNotice extends DNotice {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TNotice} t
    */
    constructor(t = {}) {

        t = FNotice.#before(...arguments);

        FNotice.#deceit(t);

        super(t);

        FNotice.#create.apply(this, [t]);

    };

    /** @param {TNotice} t @this {[]} */
    static #before(t) {

        if (t.constructor === String) t = { data: t, };

        if (!t) t = {};

        return t;

    };
    /** @param {TNotice} t @this {YNotice} */
    static #deceit(t) {

        try {

            FNotice.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TNotice} t @this {YNotice} */
    static #verify(t) {

        const {



        } = t;

        FNotice.#handle(t);

    };
    /** @param {TNotice} t @this {YNotice} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TNotice} t @this {YNotice} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.date = new Date();

    };

};

/**
 * Класс `YNotice`.
 * 
 * Данный класс предназначен для создания уведомлений.
 * Уведомления могут содержать информацию формата: <t> - <d>, где
 * t - `Время` и d - `Данные`.
 * 
 * Указание `date` не требуется, так как дата будет выставлена на момент создания уведомления.
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YNotice extends FNotice {

    get() {

        if (this.section) return this.section.getNotice(this);
        else return stringReplace(

            configLog.templates.notice,
            ['t', stringCastToDate(this.date)],
            ['d', stringCastToSample(this.data)]

        );

    };
    log() {

        console.log(this.get());

        return this;

    };

};