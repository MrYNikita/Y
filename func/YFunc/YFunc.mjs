import { YLog } from "../../log/YLog/YLog.mjs";
import { jectFill } from "../../ject/ject.mjs";
import { YProc } from "./YProc/YProc.mjs";
import { YSection } from "../../log/YNotice/YSection/YSection.mjs";
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
     *  @param {TFunc} t
    */
    constructor(t = {}) {

        t = FFunc.#before(...arguments);

        FFunc.#deceit(t);

        super(t);

        FFunc.#create.apply(this, [t]);

    };

    /** @param {TFunc} t @this {[]} */
    static #before(t) {

        if (t?.constructor instanceof Array) {

            return {



            };

        } else if (t?.constructor instanceof Object) {

            return t;

        } else return {};

    };
    /** @param {TFunc} t @this {YFunc} */
    static #deceit(t) {

        try {

            FFunc.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TFunc} t @this {YFunc} */
    static #verify(t) {

        const {



        } = t;

        FFunc.#handle(t);

    };
    /** @param {TFunc} t @this {YFunc} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TFunc} t @this {YFunc} */
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

        yfc.sequence = yfc.sequence.slice().filter(p => !yfc.filterCategory.includes(p[1].category));

        for (; yfc.sequence[yfc.index]; yfc.index++) yfc.sequence[yfc.index][1].instruction.apply(yfc, [yfc.transmit, {  }]);

        yfc.index = 0;

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

        this.index = -1;

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
     * Метод для указания объекта-носителя аргументов.
     * - Версия `0.0.0`
     * @param {{}} transmit
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
     * @param {...string|YProc|[string, string|YProc]} procs Метка процедуры или новая процедура.
    */
    appendProcedure(...procs) {

        for (let pair of procs) {

            let proc = pair;

            if (proc) {

                switch (proc.constructor) {

                    case YProc: {

                        this.appendProcedure(proc);

                    }; break;
                    case String: {

                        this.log.appendNotice(['*', `Осуществялется поиск процедуры ${proc};`]);

                        proc = this.procedures.find(p => p.label === proc);

                        if (proc) {

                            this.log.appendNotice(['*', `Процедура ${proc.label} найдена;`]);

                        } else {

                            this.log.appendNotice(['!', `Процедура ${proc} не существует;`]);

                            return this;

                        };

                    }; break;

                };

                if (pair.length === 1) this.sequence.push(['', proc]);
                else this.sequence.push([pair[0], proc]);

                this.log.appendNotice(['*', `В последовательность добавлена новая процедура ${proc.label};`]);

            };

        };

        return this;

    };
    /**
     * Метод для создания процедуры.
     * - Версия `0.0.0`
     * @param {string} label Метка.
     * @param {string} category Категория.
     * @param {function} func Функция.
    */
    createProcedure(label, func, category) {

        this.log.appendNotice(['*', `Создание процедуры ${label};`])

        if (this.procedures.every(p => p.label !== label)) {

            this.procedures.push(new YProc({ label, category, instruction: func, func: this }));

            this.log.appendNotice(['*', `Создана процедура ${label};`]);

        } else {

            this.log.appendNotice(['!', `Процедура с меткой ${label} уже существует;`]);

        };

        return this;

    };
    /**
     * Метод для перемещения индекса с помощью псевдонима позиции.
     * - Версия `0.0.0`
     * @param {string} alias
    */
    moveIndexByAlias(alias) {

        if (alias) {

            if (alias.constructor === String) {


                const index = this.sequence.findIndex(p => p[0] === alias);

                if ((index || index === 0) && index !== -1) this.index = index - 1;

            };

        };

        return this;

    };
    /**
     * Метод для установки значений фильтрации по категориям.
     * - Версия `0.0.0`
     * @param {...string} categories Категории процедур, исключенные из последовательности исполнения.
    */
    setFilterCategory(...categories) {

        if (categories.length) this.filterCategory = arrayUnique(categories);
        else this.filterCategory = [];

        return this;

    };

};