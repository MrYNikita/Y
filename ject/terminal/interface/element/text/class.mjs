//#region YI

import { YString } from '../../../../../string/YString/YString.mjs';
import { YElement } from '../class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YTextT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\text`
 *
 * Основной параметр модуля `YText`.
 *
 * @typedef {YTextTE&YTextTU&import('../class.mjs').YElementT} YTextT
 *
*/
/** ### YTextTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\text`
 *
 * Параметр наследования `YText`.
 *
 * @typedef {{[p in Exclude<keyof DText,keyof SText>|Exclude<keyof SText,keyof DText>]:(DText[p]&SText[p])}} YTextTE
 *
*/
/** ### YTextTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\text`
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
     * @type {string?}
     * @public
    */
    text = null;

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
     *  @arg {...YTextT} t
    */
    constructor(...t) {

        t = FText.#before(t);

        super(Object.assign(t, {}));

        FText.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YText].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YTextT} */
            const r = {};

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YTextT} t @this {YText} */
    static #deceit(t) {

        try {

            FText.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YTextT} t @this {YText} */
    static #verify(t) {

        const {



        } = t;

        FText.#handle.apply(this, [t]);

    };
    /** @arg {YTextT} t @this {YText} */
    static #handle(t) {



        FText.#create.apply(this, [t]);

    };
    /** @arg {YTextT} t @this {YText} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptByDefault(config);

        };

    };

};

/**
 * ### YText
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\text`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YText extends FText {

    getLayout() {

        return new YString()

            .paste(this.text)
            .get(true);

    };

};