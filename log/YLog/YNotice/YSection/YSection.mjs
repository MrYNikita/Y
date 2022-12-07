import { arrayAppend, arrayRemoveByElement } from "../../../../array/array.mjs";
import { configLog } from "../../../../config.mjs";
import { jectFill } from "../../../../ject/ject.mjs";
import { stringCastToDate, stringCastToSample, stringReplace, stringReplaceAllMore } from "../../../../string/string.mjs";
import { YNotice } from "../YNotice.mjs";

/**
 * @typedef TBSection
 * @prop {any} _
 * @typedef {DSection&TBSection} TSection
*/
class SSection {



};
class DSection extends SSection {

    /**
     * Область видимости логов.
     * @type {number}
    */
    vis = configLog.visiable;
    /**
     * Лимит уведомлений.
     * @type {number}
    */
    size = configLog.size;
    /**
     * Список уведомлений.
     * @type {[YNotice]}
    */
    list = [];
    /**
     * Метка.
     * @type {string}
    */
    label;
    /**
     * Символьная метка.
     * @type {string}
    */
    symbol;
    /**
     * Цвет переднего фона.
     * @type {string}
    */
    colorF;
    /**
     * Цвет заднего плана.
     * @type {string}
    */
    colorB;

};
class FSection extends DSection {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TSection} t
    */
    constructor(t = {}) {

        t = FSection.#before(...arguments);

        FSection.#deceit(t);

        super(t);

        FSection.#create.apply(this, [t]);

    };

    /** @param {TSection} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @param {TSection} t @this {YSection} */
    static #deceit(t) {

        try {

            FSection.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TSection} t @this {YSection} */
    static #verify(t) {

        const {



        } = t;

        FSection.#handle(t);

    };
    /** @param {TSection} t @this {YSection} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TSection} t @this {YSection} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.list.forEach(n => n.section = this);

    };

};

/**
 *
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YSection extends FSection {

    /**
     * Метод для получения массива уведомлений, преобразованных в строки.
     * - Версия `0.0.0`
    */
    get() {

        return this.list.map(n => stringReplaceAllMore(

            configLog.templates.section,
            [stringCastToDate(n.date), 't'],
            [stringCastToSample(n.data), 'd'],
            [this.symbol ?? this.label, 's']

        ));

    };
    /**
     * Метод для добавления новых уведомлений в секцию.
     * Версия `0.0.0`
     * @param {...string|YNotice} notices - Остаточный набор строк или уведомлений, предназначенных для размещения в секцию.
    */
    append(...notices) {

        const {

            list,
            size,

        } = this;

        notices.forEach((n, i, a) => a[i] = (n.constructor === String) ? new YNotice({ data: n, section: this }) : new YNotice({ ...n, section: this }));

        if (notices.length === size) this.list = notices;
        else if (notices.length > size) arrayAppend(arrayRemoveByElement(list), ...notices.splice(notices.length - size));
        else if (notices.length + list.length > size) arrayAppend(list, ...notices).splice(0, list.length - size);
        else arrayAppend(list, ...notices);

        return this;

    };
    /**
     * Метод для отображения уведомлений.
     * - Версия `0.0.0`
    */
    display() {

        const {

            colorF,
            colorB,

        } = this;

        return this;

    };
    /**
     * Метод для преобразования указанного уведомления из списка в заданный формат.
     * - Версия `0.0.0`
     * @param {number|YNotice} notice Индекс уведомления в списке или само уведомление.
    */
    getNotice(notice) {

        if (notice) {

            if (notice.constructor === Number) notice = this.list?.[notice];

            return stringReplaceAllMore(

                configLog.templates.section,
                [stringCastToDate(notice.date), 't'],
                [stringCastToSample(notice.data), 'd'],
                [this.symbol ?? this.label, 's']

            );

        };

    };

};