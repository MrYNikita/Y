import { configJect, configYJect, configYLog, configYRept } from "../../config.mjs";
import { YDate } from "../../date/YDate/YDate.mjs";
import { YLog } from "../../log/YLog/YLog.mjs";
import { jectFill } from "../ject.mjs";
import { YBasic } from "../YBasic/YBasic.mjs";
import { YRept } from "../YBasic/YRept/YRept.mjs";

/**
 * @typedef TBJect
 * @prop {any} _
 * @typedef {DJect&TBJect} TJect
*/

class SJect extends YBasic {

    /**
     * Общедоступный отчет.
     * @type {YRept}
    */
    static rept = new YRept()

        .append(`Класс: <cl>`, 'f', 'Метаданные');

};
class DJect extends SJect {



};
class IJect extends DJect {

    /**
     * Журнал.
     * @protected
     * @type {YLog?}
    */
    log = (configYJect.log) ? new YLog() : null;
    /**
     * Дата.
     * @protected
     * @type {YDate?}
    */
    date = (configYJect.date) ? new YDate() : null;
    /**
     * Отчет.
     * @protected
     * @type {YRept?}
    */
    rept = (configYJect.report) ? new YRept(this) : null;

};
class MJect extends IJect {



};
class FJect extends MJect {

    /**
     * Контсруктор класса `YJect`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TJect} t
    */
    constructor(t = {}) {

        t = FJect.#before(Object.values(arguments));

        FJect.#deceit(t);

        super(t);

        FJect.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YJect].includes(t[0]?.constructor)) {

            return t[0];

        } else if (t?.length) {

            /** @type {TJect&DJect} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return r;

        } else return {};

    };
    /** @arg {TJect} t @this {YJect} */
    static #deceit(t) {

        try {

            FJect.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TJect} t @this {YJect} */
    static #verify(t) {

        const {



        } = t;

        FJect.#handle(t);

    };
    /** @arg {TJect} t @this {YJect} */
    static #handle(t) {



    };
    /** @arg {TJect} t @this {YJect} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YJect`
 *
 * Базовый класс `YModules`, наследуемый прочими классами модулей.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YJect extends FJect {

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