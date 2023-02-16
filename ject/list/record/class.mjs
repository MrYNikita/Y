//#region YI

import { YBasic } from "../../YBasic/YBasic.mjs";

//#endregion
//#region YT

/** ### YRecordT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\list\record`
 *
 * Основной параметр модуля `YRecord`.
 *
 * @typedef {YRecordTE&YRecordTU} YRecordT
 *
*/
/** ### YRecordTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\list\record`
 *
 * Параметр наследования `YRecord`.
 *
 * @typedef {{[p in Exclude<keyof DRecord,keyof SRecord>|Exclude<keyof SRecord,keyof DRecord>]:(DRecord[p]&SRecord[p])}} YRecordTE
 *
*/
/** ### YRecordTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\list\record`
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

                case 3:
                case 2:
                case 1:

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
 * - Модуль `ject\list\record`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YRecord extends FRecord {



};