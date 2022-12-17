import { jectFill } from "../../../ject/ject.mjs";
import { configYLog } from "../../../config.mjs";
import { stringCastToDate, stringCastToSample, stringReplace, stringReplaceAllMore, stringReplaceMore } from "../../../string/string.mjs";
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
     *  @arg {TNotice} t
    */
    constructor(t = {}) {

        t = FNotice.#before(...arguments);

        FNotice.#deceit(t);

        super(t);

        FNotice.#create.apply(this, [t]);

    };

    /** @arg {TNotice} t @this {[]} */
    static #before(t) {

        if (t.constructor === String) t = { data: t, };

        if (!t) t = {};

        return t;

    };
    /** @arg {TNotice} t @this {YNotice} */
    static #deceit(t) {

        try {

            FNotice.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TNotice} t @this {YNotice} */
    static #verify(t) {

        const {



        } = t;

        FNotice.#handle(t);

    };
    /** @arg {TNotice} t @this {YNotice} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @arg {TNotice} t @this {YNotice} */
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
        else return stringReplaceMore(

            configYLog.templates.notice,
            [stringCastToDate(this.date), 't'],
            [stringCastToSample(this.data), 'd']

        );

    };
    log() {

        console.log(this.get());

        return this;

    };

};