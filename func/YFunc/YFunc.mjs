import { YLog } from "../../log/YLog/YLog.mjs";
import { jectFill, jectReplaceDeep, jectSetDeep } from "../../ject/ject.mjs";
import { YProc } from "./YProc/YProc.mjs";
import { arrayUnique } from "../../array/array.mjs";
import { YString } from "../../string/YString/YString.mjs";

/**
 * @typedef TBFunc
 * @prop {any} _
 * @typedef {DFunc&TBFunc} TFunc
*/

class SFunc {



};
class DFunc extends SFunc {

    /**
     * Журнал.
     * @type {YLog}
    */
    log = new YLog();
    /**
     * Индекс.
     * @type {number}
    */
    index = 0;
    /**
     * Метка. Определяет текущую исполняемую функцией процедуру.
     * - По умолчанию `null`
     * @type {string?}
    */
    label = null;
    /**
     * Карта.
     *
     * Это представление последовательности в объектном варианте.
     * Каждое свойство данного объекта - `логическая часть функции`.
     * Значениями таких свойств выступают строки, которые ссылаются на метки нужных процедур.
     * @type {{}}
    */
    card = {};
    /**
     * Последовательность.
     * @type {Array<[string,YProc]>}
    */
    sequence = [];
    /**
     * Объект-носитель аргментов.
     * @type {{}}
    */
    transmit = {};
    /**
     * Функции.
     * @type {Array<YProc>}
    */
    procedures = [];
    /**
     * Фильтр категорий.
     * @type {Array<string>}
    */
    filterCategory = [];

};
class FFunc extends DFunc {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TFunc} t
    */
    constructor(t = {}) {

        t = FFunc.#before(...arguments);

        FFunc.#deceit(t);

        super(t);

        FFunc.#create.apply(this, [t]);

    };

    /** @arg {TFunc} t @this {[]} */
    static #before(t) {

        if (t?.constructor instanceof Array) {

            return {



            };

        } else if (t?.constructor instanceof Object) {

            return t;

        } else return {};

    };
    /** @arg {TFunc} t @this {YFunc} */
    static #deceit(t) {

        try {

            FFunc.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TFunc} t @this {YFunc} */
    static #verify(t) {

        const {



        } = t;

        FFunc.#handle(t);

    };
    /** @arg {TFunc} t @this {YFunc} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @arg {TFunc} t @this {YFunc} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `функций`.
 *
 * Данный класс позволяет определять экземпляры класса `YFunc`.
 * Любой такой экземпляр представлен совокупностью процедур (`YProcedure`).
 *
 * Любая `YFunc` выполняется от функции входа (`input`) - первая функция в последовательности.
 * После указывается последовательность (`sequence`) процедур.
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YFunc extends FFunc {

    /**
     * Метод для выполнения последовательности.
     * - Версия `0.0.0`
    */
    exec() {

        const yfc = this.copy();

        yfc.sequence = Object.entries(yfc.card);

        while (yfc.index !== -1 && yfc.sequence[yfc.index]) {

            yfc.sequence[yfc.index][1].instruction.apply(yfc, [yfc.transmit, {}]);

            if (!yfc.index && yfc.index !== 0) break;
            else yfc.index++;

        };

        return this;

    };
    /**
     * Метод копирования функции.
     * - Версия `0.0.0`
    */
    copy() {

        return new YFunc({

            ...this,
            log: null,
            sequence: this.sequence.slice(),
            procedures: this.procedures.slice(),
            filterCategory: this.filterCategory.slice(),

        });

    };
    /**
     * Метод для отображения состояния.
     * - Версия `0.0.0`
    */
    report() {

        new YString(this.getReport())

            .castToYReport()
            .display();

        return this;

    };
    /**
     * Метод для заверешения функции.
     * - Версия `0.0.0`
    */
    finish() {

        this.index = -2;

        return this;

    };
    /**
     * Метод для исключения процедур последовательности по указанным категориям.
     * - Версия `0.0.0`
     * @arg {...string} categories Категории исключения.
    */
    excludeByCategory(...categories) {

        this.procedures = this.procedures.filter(p => !categories.includes(p.category));
        this.sequence = this.sequence.filter(p => !categories.includes(p[1].category));

        return this;

    };
    /**
     *
     * - Версия `0.0.0`
     *
    */
    getReport() {

        return new YString()

            .changePostfix(';\n')
            .paste(

                `Индекс: ${this.index}`,
                `Процедур: ${this.procedures.length}`,
                `Фильтры категорий: [${this.filterCategory}]`,
                `Последовательность: [${this.sequence}]`,

            )
            .get();

    };
    /**
     * Метод изменения карты.
     * - Версия `0.0.0`
     * @arg {{}} card Новая карта.
     * - По умолчанию `{}`
    */
    changeCard(card = {}) {

        this.card = card;

        return this;

    };
    /**
     * Метод для указания объекта-носителя аргументов.
     * - Версия `0.0.0`
     * @arg {{}} transmit
    */
    setTransmit(transmit) {

        this.log.appendNotice(['!', `Указан объект-носитель аргументов;`]);

        this.transmit = transmit;

        return this;

    };
    /**
     * Метод для очистки последовательности.
     * - Версия `0.0.0`
     *
    */
    clearSequence() {

        this.sequence = [];

        return this;

    };
    /**
     * Метод для отката процедуры из последовательности.
     * - Версия `0.0.0`
    */
    removeProcedure() {

        this.sequence.splice(this.index, 1);

        this.index--;

        return this;

    };
    /**
     * Метод добавления процедуры.
     * - Версия `0.0.0`
     * @arg {...YProc|[string,import("./YProc/YProc.mjs").TProcInstruction,string]} procs Метка процедуры или новая процедура.
    */
    appendProcedure(...procs) {

        for (let p of procs) {

            switch (p.constructor) {

                case Array: p = new YProc({ label: p[0], instruction: p[1], category: p[2], func: this, }); break;
                case Object: p = new YProc({ ...p, func: this, }); break;

            };

            if (!this.procedures.includes(p)) this.procedures.push(p);

        };

        return this;

    };
    /**
     * Метод для перемещения индекса с помощью псевдонима позиции.
     * - Версия `0.0.0`
     * @arg {string} alias
    */
    moveIndexByAlias(alias) {

        if (alias) {

            if (alias.constructor === String) {

                const index = this.sequence.findIndex(p => p[0] === alias);

                this.index = index >= 0 ? index - 1 : this.index;

            };

        };

        return this;

    };
    /**
     * Метод для установки значений фильтрации по категориям.
     * - Версия `0.0.0`
     * @arg {...string} categories Категории процедур, исключенные из последовательности исполнения.
    */
    setFilterCategory(...categories) {

        if (categories.length) this.filterCategory = arrayUnique(categories);
        else this.filterCategory = [];

        return this;

    };

};