//#region YI

import { YText } from '../class.mjs';
import { YString } from '../../../../../../string/YString/YString.mjs';
import configTerminal from '../../../../config.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YHeaderT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\text\header`
 *
 * Основной параметр модуля `YHeader`.
 *
 * @typedef {YHeaderTE&YHeaderTU&import('../class.mjs').YTextT} YHeaderT
 *
*/
/** ### YHeaderTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\text\header`
 *
 * Параметр наследования `YHeader`.
 *
 * @typedef {{[p in Exclude<keyof DHeader,keyof SHeader>|Exclude<keyof SHeader,keyof DHeader>]:(DHeader[p]&SHeader[p])}} YHeaderTE
 *
*/
/** ### YHeaderTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\text\header`
 *
 * Уникальные параметры `YHeader`.
 *
 * @typedef YHeaderTU
 * @prop {any} _
 *
*/

//#endregion

class SHeader extends YText {



};
class DHeader extends SHeader {



};
class IHeader extends DHeader {



};
class MHeader extends IHeader {



};
class FHeader extends MHeader {

    /**
     * ### YHeader.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YHeaderT} t
    */
    constructor(...t) {

        t = FHeader.#before(t);

        super(Object.assign(t, {}));

        FHeader.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YHeader].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YHeaderT} */
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
    /** @arg {YHeaderT} t @this {YHeader} */
    static #deceit(t) {

        try {

            FHeader.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YHeaderT} t @this {YHeader} */
    static #verify(t) {

        const {



        } = t;

        FHeader.#handle.apply(this, [t]);

    };
    /** @arg {YHeaderT} t @this {YHeader} */
    static #handle(t) {



        FHeader.#create.apply(this, [t]);

    };
    /** @arg {YHeaderT} t @this {YHeader} */
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
 * ### YHeader
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\text\header`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YHeader extends FHeader {

    getLayout() {

        const text = ` ${this.text} `;
        const border = configTerminal.borders[1];

        return new YString()

            .paste(

                border[2] + border[1].repeat(this.text.length + 2) + border[3] + '\n',
                border[0] + text + border[0] + '\n',
                border[4] + border[1].repeat(this.text.length + 2) + border[5]

            )
            .get(true);

    };

};