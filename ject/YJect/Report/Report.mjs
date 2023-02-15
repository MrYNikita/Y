//#region YI

import { YBasic } from "../../YBasic/YBasic.mjs";

//#endregion
//#region YT

/** ### YReportT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YReport`
 *
 * Основной параметр модуля `YReport`.
 *
 * @typedef {YReportTE&YReportTU} YReportT
 *
*/
/** ### YReportTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YReport`
 *
 * Параметр наследования `YReport`.
 *
 * @typedef {{[p in Exclude<keyof DReport,keyof SReport>|Exclude<keyof SReport,keyof DReport>]:(DReport[p]&SReport[p])}} YReportTE
 *
*/
/** ### YReportTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YReport`
 *
 * Уникальные параметры `YReport`.
 *
 * @typedef YReportTU
 * @prop {any} _
 *
*/

//#endregion

class SReport extends YBasic {



};
class DReport extends SReport {



};
class IReport extends DReport {



};
class MReport extends IReport {



};
class FReport extends MReport {

    /**
     * ### YReport.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YReportT} t
    */
    constructor(t = {}) {

        t = FReport.#before(Object.values(arguments));

        FReport.#deceit(t);

        super(t);

        FReport.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YReport].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YReportT} */
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
    /** @arg {YReportT} t @this {YReport} */
    static #deceit(t) {

        try {

            FReport.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YReportT} t @this {YReport} */
    static #verify(t) {

        const {



        } = t;

        FReport.#handle(t);

    };
    /** @arg {YReportT} t @this {YReport} */
    static #handle(t) {



    };
    /** @arg {YReportT} t @this {YReport} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YReport
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YReport`
 * - Цепочка `BDVHC`
 * ***
 * Класс отчетов.
 *
 * Данный класс используется для формирования отчетов по связанным объектам.
*/
export class YReport extends FReport {

    

};