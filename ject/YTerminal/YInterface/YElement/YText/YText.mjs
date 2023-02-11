import { jectAdopt } from "../../../../ject.mjs";
import { YElement } from "../YElement.mjs";

//#region YT

/** ### YTextT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YText`
 *
 * Основной параметр модуля `YText`.
 *
 * @typedef {YTextTE&YTextTU&import("../YElement.mjs").YElementT} YTextT
 *
*/
/** ### YTextTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YText`
 *
 * Параметр наследования `YText`.
 *
 * @typedef {{[p in Exclude<keyof DText,keyof SText>|Exclude<keyof SText,keyof DText>]:(DText[p]&SText[p])}} YTextTE
 *
*/
/** ### YTextTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YText`
 *
 * Уникальные параметры `YText`.
 *
 * @typedef YTextTU
 * @prop {any} _
 *
*/

//#endregion

class SText extends YElement {



};
class DText extends SText {

    /**
     * ### text
     *
     * Текст.
     *
     * ***
     * @type {string|function():string}
     * @public
    */
    text = '';

};
class IText extends DText {



};
class MText extends IText {



};
class FText extends MText {

    /**
     * ### YText.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YTextT} t
    */
    constructor(t = {}) {

        t = FText.#before(Object.values(arguments));

        FText.#deceit(t);

        super(t);

        FText.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YText].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YTextT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2: r.coords = [t[1], t[2]];
                case 1: r.text = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YTextT} t @this {YText} */
    static #deceit(t) {

        try {

            FText.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YTextT} t @this {YText} */
    static #verify(t) {

        const {



        } = t;

        FText.#handle(t);

    };
    /** @arg {YTextT} t @this {YText} */
    static #handle(t) {



    };
    /** @arg {YTextT} t @this {YText} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YText
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Модуль `YText`
 * - Цепочка `BDVHC`
 * ***
 * Элемент терминала для отображения текста.
 *
 * Данный текст отображается в терминале по указанным координатам.
*/
export class YText extends FText {

    getLayout() {

        return this.text instanceof Function ? this.text() : this.text;

    };

};