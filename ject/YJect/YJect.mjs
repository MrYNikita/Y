import { YBasic } from "../YBasic/YBasic.mjs";
import { jectFill } from "../ject.mjs";
import { YLog } from "../../log/YLog/YLog.mjs";
import { YRept } from "./YRept/YRept.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { stringCastToDate } from "../../string/string.mjs";

/**
 * @typedef TBJect
 * @prop {any} _
 * @typedef {DJect&TBJect} TJect
*/

class SJect extends YBasic {



};
class DJect extends SJect {



};
class IJect extends DJect {

    /**
     * Журнал.
     * @protected
     * @type {YLog}
    */
    log = new YLog();
    /**
     * Отчет.
     * @protected
     * @type {YRept}
    */
    rept = new YRept()

        .append(_ => {

            return new YString()

                .changePostfix(';\n')
                .paste(

                    `Класс: ${this.constructor.name}`,
                    `Дата: ${stringCastToDate(this.date)}`,

                )
                .get()

        }, 'l', 'Заголовок')
        .append(_ => {

            return new YString()

                .changePostfix(';\n')
                .paste(

                    `Размер: ${this.log.list.reduce((p, c) => p + c.size, 0)}`,
                    `Записей: ${this.log.list.reduce((p, c) => p + c.list.length, 0)}`,
                    `Видимость: ${this.log.vis}`,
                    ...this.log.getVisiable(),

                )
                .get()

        }, 'l', 'Журнал')

    /**
     * Дата.
     * @type {Date}
    */
    date = new Date();

};
class FJect extends IJect {

    /**
     * Контсруктор класса `YJect`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TJect} t
    */
    constructor(t = {}) {

        t = FJect.#before(Object.values(arguments));

        FJect.#deceit(t);

        super(t);

        FJect.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            const r = {};



            return r;

        } else return {};

    };
    /** @param {TJect} t @this {YJect} */
    static #deceit(t) {

        try {

            FJect.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TJect} t @this {YJect} */
    static #verify(t) {

        const {



        } = t;

        FJect.#handle(t);

    };
    /** @param {TJect} t @this {YJect} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TJect} t @this {YJect} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};
class MJect extends FJect {



};

/**
 *
 * - Тип `SDIFMY-1.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YJect extends MJect {

    /**
     * Метод для создания записи в журнал.
     * - Версия `0.0.0`
     * @param {string} label Метка, по которой определяется тип записи.
     * Вместо метки может быть указан символ.
     * - По умолчанию `this.log.list[0].label` то же самое, что и `первая запись журнала`
     * @param {...string} records Записи для журнала.
    */
    record(label, ...string) {

        this.log.write(label, ...string);

        return this;

    };

    /**
     * Метод для отображения отчета.
     * - Версия `0.0.0`
    */
    report() {

        this.rept.display();

        return this;

    };
    /**
     * Метод добавления блока в отчет.
     *
     * Для добавления блока достаточно указать только текст, который он будет содержать.
     * При необходимости можно указать и оставшиеся параметры.
     * - Версия `0.0.0`
     * @param {string|function():string} text Текст.
     * Может принимать в качестве значения строку или функцию, её возвращающую.
     * @param {string} label Метка.
     * Если будет указано уже существующая ранее метка, то блок добавлен не будет.
     * @param {number|'l'|'f'} priority Приоритет.
     * Может принимать в качестве аргумента числа или строки `l` или `f`.
     * `l` - в полной форме `last` сделает данный блок последним среди всех указанных, указав ему минимальный приоритет.
     * `f` - в полной форме `first` сделает данный блок первым среди всех указанных, указав ему максимальный приоритет.
     * - По умолчанию `0`
     * @param {...string} tags Теги.
    */
    appendReport(text, priority, label, ...tags) {

        this.rept.append(text, priority, label, ...tags);

        return this;

    };

};