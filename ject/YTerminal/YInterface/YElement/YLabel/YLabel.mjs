import { jectFill } from "../../../../ject.mjs";
import { YElement } from "../YElement.mjs";

/**
 * @typedef TBLabel
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DLabel,keyof SLabel>|Exclude<keyof SLabel,keyof DLabel>]:(DLabel[p]&SLabel[p])}} TDLabel
 * @typedef {TDLabel&TBLabel&import("../YElement.mjs").TElement} TLabel
*/

class SLabel extends YElement {



};
class DLabel extends SLabel {

    /**
     * Текст.
     * @type {string}
    */
    text = '';

};
class ILabel extends DLabel {



};
class MLabel extends ILabel {



};
class FLabel extends MLabel {

    /**
     * Контсруктор класса `YLabel`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TLabel} t
    */
    constructor(t = {}) {

        t = FLabel.#before(Object.values(arguments));

        FLabel.#deceit(t);

        super(t);

        FLabel.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YLabel].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {TLabel&DLabel} */
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
    /** @arg {TLabel} t @this {YLabel} */
    static #deceit(t) {

        try {

            FLabel.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TLabel} t @this {YLabel} */
    static #verify(t) {

        const {



        } = t;

        FLabel.#handle(t);

    };
    /** @arg {TLabel} t @this {YLabel} */
    static #handle(t) {



    };
    /** @arg {TLabel} t @this {YLabel} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YLabel`
 *
 *
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YLabel extends FLabel {

    getLayout() {

        return this.text;

    };

};