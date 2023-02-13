//#region YI

import { YLog } from "../Log.mjs";
import { YTag } from "../Tag/Tag.mjs";
import { YBasic } from "../../../YBasic/YBasic.mjs";

//#endregion
//#region YT

/** ### YSectionT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YSection`
 *
 * Основной параметр модуля `YSection`.
 *
 * @typedef {YSectionTE&YSectionTU} YSectionT
 *
*/
/** ### YSectionTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YSection`
 *
 * Параметр наследования `YSection`.
 *
 * @typedef {{[p in Exclude<keyof DSection,keyof SSection>|Exclude<keyof SSection,keyof DSection>]:(DSection[p]&SSection[p])}} YSectionTE
 *
*/
/** ### YSectionTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YSection`
 *
 * Уникальные параметры `YSection`.
 *
 * @typedef YSectionTU
 * @prop {any} _
 *
*/

//#endregion

class SSection extends YBasic {



};
class DSection extends SSection {

    /**
     * ### log
     *
     * Журнал.
     *
     * ***
     * @type {YLog?}
     * @public
    */
    log = null;
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
     * ### limit
     *
     * Лимит записей.
     *
     * ***
     * @type {number}
     * @public
    */
    limit;
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
     * ### symbol
     *
     * Символ.
     *
     * ***
     * @type {string}
     * @public
    */
    symbol;

};
class ISection extends DSection {



};
class MSection extends ISection {



};
class FSection extends MSection {

    /**
     * ### YSection.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YSectionT} t
    */
    constructor(t = {}) {

        t = FSection.#before(Object.values(arguments));

        FSection.#deceit(t);

        super(t);

        FSection.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YSection].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YSectionT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 5: r.limit = t[4];
                case 4: r.tags = t[3];
                case 3: r.symbol = t[2];
                case 2: r.label = t[1];
                case 1: r.log = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YSectionT} t @this {YSection} */
    static #deceit(t) {

        try {

            FSection.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YSectionT} t @this {YSection} */
    static #verify(t) {

        const {



        } = t;

        FSection.#handle(t);

    };
    /** @arg {YSectionT} t @this {YSection} */
    static #handle(t) {

        if (t.tags) {

            if (t.tags.constructor === String) {

                t.tags = [t.tags];

            };

            if (t.log) {

                t.tags = t.tags.map(tag => t.log.tags.find(tagLog => tagLog.label === tag) ?? new YTag(tag));

            };

        };

    };
    /** @arg {YSectionT} t @this {YSection} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (this.log) {

            this.log.appendTags(...this.tags);

        };

        this.tags.forEach(t => {

            t.section = this;

        });

    };

};

/**
 * ### YSection
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YSection`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YSection extends FSection {



};