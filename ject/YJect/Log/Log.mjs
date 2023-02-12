//#region YI

import { YTag } from "./Tag/Tag.mjs";
import { YBasic } from "../../YBasic/YBasic.mjs";
import { YRecord } from "./Record/Record.mjs";
import { configYLog } from "../../../config.mjs";

//#endregion
//#region YT

/** ### YLogT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YLog`
 *
 * Основной параметр модуля `YLog`.
 *
 * @typedef {YLogTE&YLogTU} YLogT
 *
*/
/** ### YLogTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YLog`
 *
 * Параметр наследования `YLog`.
 *
 * @typedef {{[p in Exclude<keyof DLog,keyof SLog>|Exclude<keyof SLog,keyof DLog>]:(DLog[p]&SLog[p])}} YLogTE
 *
*/
/** ### YLogTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YLog`
 *
 * Уникальные параметры `YLog`.
 *
 * @typedef YLogTU
 * @prop {number?} limit
 * @prop {number?} sizePage
 * @prop {string[]} filtersByTag
 *
*/

//#endregion

class SLog extends YBasic {



};
class DLog extends SLog {



};
class ILog extends DLog {

    /**
     * ### tags
     *
     * Теги.
     *
     * ***
     * @type {YTag[]}
     * @protected
    */
    tags = [];
    /**
     * ### limit
     *
     * Предел записей.
     *
     * ***
     * @type {number?}
     * @protected
    */
    limit = configYLog.defaultLimit;
    /**
     * ### records
     *
     * Записи.
     *
     * ***
     * @type {YRecord[]}
     * @protected
    */
    records = [];
    /**
     * ### sizePage
     *
     * Размер страницы.
     *
     * ***
     * @type {number?}
     * @protected
    */
    sizePage = configYLog.defaultSizePage;
    /**
     * ### filtersByTag
     *
     * Фильтры по тегам.
     *
     * ***
     * @type {string[]}
     * @protected
    */
    filtersByTag = [];

};
class MLog extends ILog {



};
class FLog extends MLog {

    /**
     * ### YLog.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YLogT} t
    */
    constructor(t = {}) {

        t = FLog.#before(Object.values(arguments));

        FLog.#deceit(t);

        super(t);

        FLog.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YLog].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YLogT} */
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
    /** @arg {YLogT} t @this {YLog} */
    static #deceit(t) {

        try {

            FLog.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YLogT} t @this {YLog} */
    static #verify(t) {

        const {



        } = t;

        FLog.#handle(t);

    };
    /** @arg {YLogT} t @this {YLog} */
    static #handle(t) {



    };
    /** @arg {YLogT} t @this {YLog} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YLog
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YLog`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YLog extends FLog {

    /**
     * ### getPage
     * - Версия `0.0.0`
     * - Модуль `Log`
     * ***
     *
     * Метод получения страницы по её индексу.
     *
     * ***
     * @arg {number} index `Индекс`
     *
     * - Дефолт: `0`
     * @public
    */
    getPage(index = 0) {

        if (index.constructor === Number && index >= 0) {

            index = this.sizePage * index;

            return this.records.slice(index, index + this.sizePage);

        };

        return null;

    };

    /**
     * ### clear
     * - Версия `0.0.0`
     * - Модуль `Log`
     * ***
     *
     * Метод очистки записей из журнала.
     *
     * ***
     *
     * @public
    */
    clear() {

        this.tags = [];
        this.records = [];

        return this;

    };

    /**
     * ### write
     * - Версия `0.0.0`
     * - Модуль `Log`
     * ***
     *
     * Метод записи в журнал.
     *
     * ***
     * @arg {string} text `Содержимое`
     * @arg {string} label `Метка`
     * @arg {string[]} tags `Теги`
     * @public
    */
    write(label, text, tags, priority, date) {

        if (tags.constructor === String) {

            tags = [tags];

        };

        const record = new YRecord(label, text, tags, priority, date);

        if (record) {

            this.appendReport(record);

        };

        return this;

    };
    /**
     * ### writeMany
     * - Версия `0.0.0`
     * - Модуль `Log`
     * ***
     *
     * Метод множественной записи в журнал.
     *
     * ***
     * @arg {...[string, string, (string|string[]), number?, Date?]} records `Записи`
     * @public
    */
    writeMany(...records) {

        records.slice(0, this.limit - this.records.length).forEach(r => this.write(...r));

        return this;

    };

    /**
     * ### appendReport
     * - Версия `0.0.0`
     * - Модуль `Log`
     * ***
     *
     * Метод добавления записей в журнал.
     *
     * ***
     * @arg {...YRecord} records `Запись`
     * @public
    */
    appendReport(...records) {

        records.filter(r => r instanceof YRecord).slice(0, this.limit - this.records.length).forEach(r => {

            if (r.tags.every(t => !this.filtersByTag.includes(t))) {

                this.tags.push(...r.tags.filter(t => this.tags.every(tt => tt.label !== t)).map(t => new YTag(t)));

                this.tags.filter(t => r.tags.includes(t.label)).forEach(t => t.appendRecords(r));

                this.records.push(r);

            };

        });

        return this;

    };

};