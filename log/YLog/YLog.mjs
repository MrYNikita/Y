import { configYLog } from "../../config.mjs";
import { jectFill } from "../../ject/ject.mjs";
import { YBasic } from "../../ject/YBasic/YBasic.mjs";
import { YNotice } from "./YNotice/YNotice.mjs";
import { YSection } from "./YNotice/YSection/YSection.mjs";

/**
 * @typedef TBLog
 * @prop {any} _
 * @typedef {DLog&TBLog} TLog
*/

class SLog extends YBasic {



};
class DLog extends SLog {

    /**
     * Видимость.
     * @type {number}
    */
    vis = configYLog.vis;
    /**
     * Секции.
     * @type {[YSection]}
    */
    list = configYLog.section.map(s => new YSection(s));
    /**
     * Журналирование.
     *
     * При значении `true`, журнал будет включать в себя новые записи.
     * @type {boolean}
    */
    loged = true;

};
class ILog extends DLog {



};
class MLog extends ILog {



};
class FLog extends MLog {

    /**
     * Контсруктор класса `YLog`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TLog} t
    */
    constructor(t = {}) {

        t = FLog.#before(Object.values(arguments));

        FLog.#deceit(t);

        super(t);

        FLog.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YLog].includes(t[0]?.constructor)) {

            return t[0];

        } else if (t?.length) {

            /** @type {TLog&DLog} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return r;

        } else return {};

    };
    /** @arg {TLog} t @this {YLog} */
    static #deceit(t) {

        try {

            FLog.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TLog} t @this {YLog} */
    static #verify(t) {

        const {



        } = t;

        FLog.#handle(t);

    };
    /** @arg {TLog} t @this {YLog} */
    static #handle(t) {



    };
    /** @arg {TLog} t @this {YLog} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YLog`
 *
 * Класс журналов.
 * Журналы позволяют размещать внутри себя записи.
 * Записи размещаются в секциях при этом размещение записи в определенную секцию зависит от метки записи.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `log`
 * - Цепочка `BDVHC`
*/
export class YLog extends FLog {

    get() {

        return this.list.map(s => s.list).flat().sort((p, c) => p.index - c.index).map(n => n.get());

    };
    /**
     * Метод добавления запиcи в журнал.
     * - Версия `0.0.0`
     * @arg {string} label Метка, по которой определяется тип записи.
     * Вместо метки может быть указан символ.
     * - По умолчанию `this.list[0].label`
     * @arg {...string} records Записи для журнала.
    */
    write(label, ...records) {

        if (this.loged) this.list.find(s => s.label === label || s.symbol === label).append(...records);

        return this;

    };
    /**
     * Метод получения сообщений в области видимости.
     * - Версия `0.0.0`
     * @arg {number} vis Область видимости.
     * - По умолчанию `this.vis`
    */
    getVisiable(vis = this.vis) {

        return this.get().slice(-vis);

    };
    /**
     * Метод назначения секции по умолчанию.
     * - Версия `0.0.0`
     * @arg {number|string} determinant Определитель.
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
     * @arg {...[string]} notices Массив вида: `метка, ..уведомления`.
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
     * @arg {...YSection} j
    */
    appendSection(...j) {

        j.forEach(j => ((j.symbol || j.label) && !this.list.find(s => j.symbol === s.symbol || j.label === s.label)) ? this.list.push(new YSection(j)) : 0);

        return this;

    };
    /**
     * Метод очистки указанной секции.
     * - Версия `0.0.0`
     * @arg {string} label Метка или символ.
    */
    clearSection(label) {

        this.list.find(f => f.label === label || f.symbol === label).clear();

        return this;

    };

};