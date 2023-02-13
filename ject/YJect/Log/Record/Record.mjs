//#region YI

import { YTag } from "../Tag/Tag.mjs";
import { YBasic } from "../../../YBasic/YBasic.mjs";
import { configYLogRecord } from "../../../../config.mjs";
import { stringCastToDateJp, stringInsert } from "../../../../string/string.mjs";

//#endregion
//#region YT

/** ### YRecordT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YRecord`
 *
 * Основной параметр модуля `YRecord`.
 *
 * @typedef {YRecordTE&YRecordTU} YRecordT
 *
*/
/** ### YRecordTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YRecord`
 *
 * Параметр наследования `YRecord`.
 *
 * @typedef {{[p in Exclude<keyof DRecord,keyof SRecord>|Exclude<keyof SRecord,keyof DRecord>]:(DRecord[p]&SRecord[p])}} YRecordTE
 *
*/
/** ### YRecordTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YRecord`
 *
 * Уникальные параметры `YRecord`.
 *
 * @typedef YRecordTU
 * @prop {any} _
 *
*/

//#endregion

class SRecord extends YBasic {



};
class DRecord extends SRecord {

    /**
     * ### text
     *
     * Текст записи.
     *
     * ***
     * @type {string}
     * @public
    */
    text = null;
    /**
     * ### tags
     *
     * Теги.
     *
     * ***
     * @type {YTag[]}
     * @public
    */
    tags = [];
    /**
     * ### date
     *
     * Дата.
     *
     * ***
     * @type {Date}
     * @public
    */
    date = new Date();
    /**
     * ### label
     *
     * Метка.
     *
     * ***
     * @type {string}
     * @public
    */
    label;
    /**
     * ### priority
     *
     * Приоритет.
     *
     * ***
     * @type {number}
     * @public
    */
    priority = 0;

};
class IRecord extends DRecord {



};
class MRecord extends IRecord {



};
class FRecord extends MRecord {

    /**
     * ### YRecord.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YRecordT} t
    */
    constructor(t = {}) {

        t = FRecord.#before(Object.values(arguments));

        FRecord.#deceit(t);

        super(t);

        FRecord.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YRecord].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YRecordT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 5: r.date = t[4];
                case 4: r.priority = t[3];
                case 3: r.tags = t[2];
                case 2: r.text = t[1];
                case 1: r.label = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YRecordT} t @this {YRecord} */
    static #deceit(t) {

        try {

            FRecord.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YRecordT} t @this {YRecord} */
    static #verify(t) {

        const {



        } = t;

        FRecord.#handle(t);

    };
    /** @arg {YRecordT} t @this {YRecord} */
    static #handle(t) {

        if (t.date?.constructor !== Date) {

            t.date = new Date();

        };

        if (t.tags) {

            if (t.tags.constructor === String) {

                t.tags = [t.tags];

            };

        };

    };
    /** @arg {YRecordT} t @this {YRecord} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YRecord
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YRecord`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YRecord extends FRecord {

    /**
     * ### castString
     * - Версия `0.1.0`
     * - Модуль `Record`
     * ***
     *
     * Метод получения строковой формы.
     *
     * ***
     *
     * @public
    */
    castString() {

        const f = this.tags.find(t => t.section)?.section;

        if (f) {

            return stringInsert(configYLogRecord.template, `d/${stringCastToDateJp(this.date)}`, `t/${this.text}`, `s/${f.symbol ?? f.label}`);

        } else {

            return stringInsert(configYLogRecord.template, `d/${stringCastToDateJp(this.date)}`, `t/${this.text}`).slice(3);

        };

    };

};