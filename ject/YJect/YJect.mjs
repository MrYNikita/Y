//#region YI

import { configYJect } from "../../config.mjs";
import { YDate } from "../../date/YDate/YDate.mjs";
import { YLog } from "../../log/YLog/YLog.mjs";
import { stringCastToDate } from "../../string/string.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { YBasic } from "../YBasic/YBasic.mjs";
import { YRept } from "../YBasic/YRept/YRept.mjs";
import { YReptBlock } from "../YBasic/YRept/YReptBlock/YReptBlock.mjs";

//#endregion
//#region YT

/** ### YJectT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YJect`
 *
 * Основной параметр модуля `YJect`.
 *
 * @typedef {YJectTE&YJectTU} YJectT
 *
*/
/** ### YJectTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YJect`
 *
 * Параметр наследования `YJect`.
 *
 * @typedef {{[p in Exclude<keyof DJect,keyof SJect>|Exclude<keyof SJect,keyof DJect>]:(DJect[p]&SJect[p])}} YJectTE
 *
*/
/** ### YJectTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YJect`
 *
 * Уникальные параметры `YJect`.
 *
 * @typedef YJectTU
 * @prop {any} _
 *
*/

//#endregion

class SJect extends YBasic {

    /**
     * Общедоступные блоки отчета.
     * @type {[string|function():string,number|"f"|"l",string,string[]][]}
     * @static
    */
    static reportBlocks = [

        ['Метаданные', 'f', '', [

            /** @arg {YJect} y */
            y => new YString()

                .changePostfix(';\n')
                .paste(

                    `Класс: ${y.constructor.name}`,
                    `Дата: ${y.date.getString()}`,
                    `Дата отчета: ${stringCastToDate(new Date())}`

                )
                .get(),

        ]],
        ['Журнал', 'f', '', [

            /** @arg {YJect} y */
            y => new YString()

                .changePostfix(';\n')
                .paste(

                    `Видимость: ${y.log.vis}`,
                    `Секций: ${y.log.list.length}`,
                    `Записей: ${y.log.list.reduce((p, c) => p + c.list.length, 0)}`,

                )
                .changePostfix()
                .pasteTemplate('lh', ['h', ''])
                .changePostfix('\n')
                .exec(ys => {

                    const l = y.log.getVisiable();

                    ys.paste(...new Array(y.log.vis).fill('-').map((_, i) => `${(i + 1).toString().padStart(2, 0)}. ` + (l[i] ?? '-')));

                })
                .get(),

        ]],

    ];

};
class DJect extends SJect {



};
class IJect extends DJect {

    /**
     * Журнал.
     * @protected
     * @type {YLog?}
    */
    log = configYJect.log ? new YLog() : null;
    /**
     * Дата.
     * @protected
     * @type {YDate?}
    */
    date = configYJect.date ? new YDate() : null;
    /**
     * Отчет.
     * @protected
     * @type {YRept?}
    */
    rept = configYJect.report ? new YRept(this) : null;

};
class MJect extends IJect {



};
class FJect extends MJect {

    /**
     * ### YJect.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YJectT} t
    */
    constructor(t = {}) {

        t = FJect.#before(Object.values(arguments));

        FJect.#deceit(t);

        super(t);

        FJect.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YJect].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YJectT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YJectT} t @this {YJect} */
    static #deceit(t) {

        try {

            FJect.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YJectT} t @this {YJect} */
    static #verify(t) {

        const {



        } = t;

        FJect.#handle(t);

    };
    /** @arg {YJectT} t @this {YJect} */
    static #handle(t) {



    };
    /** @arg {YJectT} t @this {YJect} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YJect
 * - Тип `SDIMFY`
 * - Версия `0.2.0`
 * - Модуль `YJect`
 * - Цепочка `BDVHC`
 * ***
 * Класс объектов.
 *
 * В своей работе использует классы построенные на `YBasic`.
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

        const yrept = new YRept(this);

        jectGetInheritance(this).filter(c => c ? Object.getOwnPropertyDescriptor(c, 'reportBlocks') : false).reverse().map(c => c.reportBlocks).filter(b => b.length).flat().forEach(b => yrept.append(...b.flat()));

        yrept.chain(this.rept).display();

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
     * @param {string} tags Теги.
    */
    appendReport(label, priority, tags, ...text) {

        this.rept.append(label, priority, tags, ...text);

        return this;

    };
    /**
     *
     * - Версия `0.0.0`
     *
    */
    changeReport() {



    };
    /**
     * Метод добавления новых данных в строки существующего блока отчета.
     * Добавление не произойдет, если указанный блок не будет найден.
     * - Версия `0.0.0`
     *
    */
    appendReportBlock(text, label) {

        // this.rept.blocks.find(b => b.label === label).

        return this;

    };
    /**
     *
     * - Версия `0.0.0`
     *
    */
    changeReportBlock() {



    };

};