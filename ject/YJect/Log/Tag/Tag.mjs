//#region YI

import { YBasic } from "../../../YBasic/YBasic.mjs";
import { YRecord } from "../Record/Record.mjs";
import { YSection } from "../Section/Section.mjs";

//#endregion
//#region YT

/** ### YTagT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YTag`
 *
 * Основной параметр модуля `YTag`.
 *
 * @typedef {YTagTE&YTagTU} YTagT
 *
*/
/** ### YTagTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YTag`
 *
 * Параметр наследования `YTag`.
 *
 * @typedef {{[p in Exclude<keyof DTag,keyof STag>|Exclude<keyof STag,keyof DTag>]:(DTag[p]&STag[p])}} YTagTE
 *
*/
/** ### YTagTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YTag`
 *
 * Уникальные параметры `YTag`.
 *
 * @typedef YTagTU
 * @prop {any} _
 *
*/

//#endregion

class STag extends YBasic {



};
class DTag extends STag {

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
     * ### section
     *
     * Секция.
     *
     * ***
     * @type {YSection?}
     * @public
    */
    section = null;

};
class ITag extends DTag {

    /**
     * ### records
     *
     * Записи тега.
     *
     * ***
     * @type {YRecord[]}
     * @protected
    */
    records = [];

};
class MTag extends ITag {



};
class FTag extends MTag {

    /**
     * ### YTag.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YTagT} t
    */
    constructor(t = {}) {

        t = FTag.#before(Object.values(arguments));

        FTag.#deceit(t);

        super(t);

        FTag.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YTag].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YTagT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2: r.section = t[1];
                case 1: r.label = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YTagT} t @this {YTag} */
    static #deceit(t) {

        try {

            FTag.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YTagT} t @this {YTag} */
    static #verify(t) {

        const {



        } = t;

        FTag.#handle(t);

    };
    /** @arg {YTagT} t @this {YTag} */
    static #handle(t) {



    };
    /** @arg {YTagT} t @this {YTag} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

    };

};

/**
 * ### YTag
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YTag`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YTag extends FTag {

    /**
     * ### appendRecords
     * - Версия `0.0.0`
     * - Модуль `Tag`
     * ***
     *
     * Метод добавления записей к тегу.
     *
     * ***
     * @arg {...YRecord} records `Записи`
     * @public
    */
    appendRecords(...records) {

        this.records.push(...records);

        return this;

    };

};