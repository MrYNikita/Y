import { arrayAppend, arrayRemoveByElement } from "../../../../array/array.mjs";
import { configYLog } from "../../../../config.mjs";
import { jectAdopt } from "../../../../ject/ject.mjs";
import { stringCastToDate, stringCastToSample, stringReplace, stringReplaceAllMore, stringReplaceMore } from "../../../../string/string.mjs";
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
    vis = configYLog.visiable;
    /**
     * Лимит уведомлений.
     * @type {number}
    */
    size = configYLog.size;
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
     *  @arg {TSection} t
    */
    constructor(t = {}) {

        t = FSection.#before(...arguments);

        FSection.#deceit(t);

        super(t);

        FSection.#create.apply(this, [t]);

    };

    /** @arg {TSection} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @arg {TSection} t @this {YSection} */
    static #deceit(t) {

        try {

            FSection.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TSection} t @this {YSection} */
    static #verify(t) {

        const {



        } = t;

        FSection.#handle(t);

    };
    /** @arg {TSection} t @this {YSection} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @arg {TSection} t @this {YSection} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);

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

            configYLog.templates.section,
            [stringCastToDate(n.date), 't'],
            [stringCastToSample(n.data), 'd'],
            [this.symbol ?? this.label, 's']

        ));

    };
    /**
     * Метод для добавления новых уведомлений в секцию.
     * Версия `0.0.0`
     * @arg {...string|YNotice} notices - Остаточный набор строк или уведомлений, предназначенных для размещения в секцию.
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
     * @arg {number|YNotice} notice Индекс уведомления в списке или само уведомление.
    */
    getNotice(notice) {

        if (notice) {

            if (notice.constructor === Number) notice = this.list?.[notice];

            return stringReplaceMore(

                configYLog.templates.section,
                [stringCastToDate(notice.date), 't'],
                [stringCastToSample(notice.data), 'd'],
                [this.symbol ?? this.label, 's']

            );

        };

    };
    /**
     * Метод очистки секций.
     * - Версия `0.0.0`
    */
    clear() {

        this.list = [];

        return this;

    };

};