import { configLog } from "../../config.mjs";
import { jectFill } from "../../ject/ject.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { YTemplate } from "../../string/YString/YTemplate/YTemplate.mjs";
import { YNotice } from "../YNotice/YNotice.mjs";
import { YSection } from "../YNotice/YSection/YSection.mjs";

/**
 * @typedef TBLog
 * @prop {any} _
 * @typedef {DLog&TBLog} TLog
*/

class SLog {



};
class DLog extends SLog {

    /**
     * Видимость.
     * @type {number}
    */
    vis = configLog.visiable;
    /**
     * Секции.
     * @type {[YSection]}
    */
    list = configLog.section.map(s => new YSection(s));
    /**
     * Активация логирования.
     * @type {boolean}
    */
    loged = true;
    /**
     * Секция по умолчанию.
     * Данная секция используется всеми методами для взаимодействия с секциями журнала.
     * Если такие методы нуждаются в указании, то данная секция будет указана для взаимодействия по умолчанию, если та была не указана.
     * В противном случае, если методы работают только с секцией по умолчанию, то они найдут её здесь.
     * @type {YSection}
    */
    sectionDefault = this.list[0];

};
class FLog extends DLog {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TLog} t
    */
    constructor(t = {}) {

        t = FLog.#before(...arguments);

        FLog.#deceit(t);

        super(t);

        FLog.#create.apply(this, [t]);

    };

    /** @param {TLog} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @param {TLog} t @this {YLog} */
    static #deceit(t) {

        try {

            FLog.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TLog} t @this {YLog} */
    static #verify(t) {

        const {



        } = t;

        FLog.#handle(t);

    };
    /** @param {TLog} t @this {YLog} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TLog} t @this {YLog} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 *
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YLog extends FLog {

    get() {

        return this.list.map(s => s.list).flat().sort((p, c) => p.index - c.index).map(n => n.get());

    };
    /**
     * Метод отображения информации.
     * - Версия `0.0.0`
    */
    report() {

        new YString(this.getReport()).castToYReport().display();

        return this;

    };
    /**
     * Метод получения информации.
     * - Версия `0.0.0`
    */
    getReport() {

        return new YString()

            .changePostfix(';\n')
            .paste(

                `Секций: ${this.list.length}`,
                `Записей: ${this.list.reduce((p, c) => p + c.list.length, 0)}`,
                `Видимость: ${this.vis}`,

            )
            .pasteTemplate(new YTemplate('l', '---\n'))
            .changePostfix('\n')
            .paste(

                ...this.list.map(s => new YString().changePostfix('; ').paste(
                    
                    `Метка: ${s.label}`,
                    `Символ: ${s.symbol}`,
                    `Размер: ${s.size}`,
                    `Записей: ${s.list.length}`,
                    
                ))

            )
            .get();

    };
    /**
     * Метод добавления запичи в журнал.
     * - Версия `0.0.0`
     * @param {string} label Метка, по которой определяется тип записи.
     * Вместо метки может быть указан символ.
     * - По умолчанию `this.list[0].label`
     * @param {...string} records Записи для журнала.
    */
    write(label, ...records) {

        if (this.loged) this.list.find(s => s.label === label || s.symbol === label).append(...records);

        return this;

    };
    /**
     * Метод получения сообщений в области видимости.
     * - Версия `0.0.0`
     * @param {number} vis Область видимости.
     * - По умолчанию `this.vis`
    */
    getVisiable(vis = this.vis) {

        return this.get().slice(-vis);

    };
    /**
     * Метод назначения секции по умолчанию.
     * - Версия `0.0.0`
     * @param {number|string} determinant Определитель.
     * По данному параметру осуществляется выбор секции по умолчанию.
     * Если указана `строка`, то определителем выступает метка или символ секции.
     * 
     * Если же указано `число`, то определителем выступает индекс секции в списке - данный вариант является `предпочтительным`.
     * В случае указания некоректного значения, будет выбрана первая секция в списке журнала.
    */
    setSectionDefault(determinant) {

        if (determinant.constructor === Number) this.sectionDefault = this.list[determinant] ?? this.list[0];
        else if (determinant.constructor === String) this.sectionDefault = this.list.find(s => s.label === determinant || s.symbol === determinant);

        return this;

    };
    /**
     * Метод для копирования журнала.
     * - Версия `0.0.0`
    */
    copy() {

        return new YLog(this);

    };
    /**
     * Метод для отображения записей журнала.
    */
    display() {

        this.get().forEach(n => console.log(n));

        return this;

    };
    /**
     * Метод для добавления новых уведомлений.
     * - Версия `0.0.0`
     * @param {...[string]} notices Массив вида: `метка, ..уведомления`.
    */
    appendNotice(...notices) {

        if (this.loged) {

            const list = this.list.map(s => s.list).flat();

            notices.forEach(n => {

                const section = this.list.find(s => s.label === n[0] || s.symbol === n[0]);

                n.splice(1).forEach(n => {

                    if (section.list.length === section.size) {

                        const i = list.indexOf(section.list[0]);

                        list.slice(i + 1).forEach(n => n.index -= 1);
                        list.splice(i, 1);

                    };

                    n = new YNotice({ data: n, index: (list.length) ? list.length : 0 });

                    section.append(n);
                    list.push(n)

                });

            });

        };

        return this;

    };
    /**
     * Метод для добавления новых секций.
     * - Версия `0.0.0`
     * @param {...YSection} j
    */
    appendSection(...j) {

        j.forEach(j => ((j.symbol || j.label) && !this.list.find(s => j.symbol === s.symbol || j.label === s.label)) ? this.list.push(new YSection(j)) : 0);

        return this;

    };

};