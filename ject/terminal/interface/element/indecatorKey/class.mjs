//#region YI

import { YString } from '../../../../../string/YString/YString.mjs';
import { YElement } from '../class.mjs';
import { configTerminal } from '../../../config.mjs';
import { stringShield } from '../../../../../string/string.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YIndecatorKeyT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\indecatorKey`
 *
 * Основной параметр модуля `YIndecatorKey`.
 *
 * @typedef {YIndecatorKeyTE&YIndecatorKeyTU&import('../../../../YTerminal/YInterface/YElement/YElement.mjs').YElementT} YIndecatorKeyT
 *
*/
/** ### YIndecatorKeyTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\indecatorKey`
 *
 * Параметр наследования `YIndecatorKey`.
 *
 * @typedef {{[p in Exclude<keyof DIndecatorKey,keyof SIndecatorKey>|Exclude<keyof SIndecatorKey,keyof DIndecatorKey>]:(DIndecatorKey[p]&SIndecatorKey[p])}} YIndecatorKeyTE
 *
*/
/** ### YIndecatorKeyTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\indecatorKey`
 *
 * Уникальные параметры `YIndecatorKey`.
 *
 * @typedef YIndecatorKeyTU
 * @prop {any} _
 *
*/

//#endregion

class SIndecatorKey extends YElement {



};
class DIndecatorKey extends SIndecatorKey {



};
class IIndecatorKey extends DIndecatorKey {



};
class MIndecatorKey extends IIndecatorKey {



};
class FIndecatorKey extends MIndecatorKey {

    /**
     * ### YIndecatorKey.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YIndecatorKeyT} t
    */
    constructor(...t) {

        t = FIndecatorKey.#before(t);

        super(Object.assign(t, {}));

        FIndecatorKey.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YIndecatorKey].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YIndecatorKeyT} */
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
    /** @arg {YIndecatorKeyT} t @this {YIndecatorKey} */
    static #deceit(t) {

        try {

            FIndecatorKey.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YIndecatorKeyT} t @this {YIndecatorKey} */
    static #verify(t) {

        const {



        } = t;

        FIndecatorKey.#handle.apply(this, [t]);

    };
    /** @arg {YIndecatorKeyT} t @this {YIndecatorKey} */
    static #handle(t) {



        FIndecatorKey.#create.apply(this, [t]);

    };
    /** @arg {YIndecatorKeyT} t @this {YIndecatorKey} */
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
 * ### YIndecatorKey
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\indecatorKey`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YIndecatorKey extends FIndecatorKey {

    getLayout() {

        const border = configTerminal.borders[0];

        let {

            code,
            name,
            ctrl,
            shift,

        } = this.interface.terminal.listener;

        code = stringShield(code);

        if (!name) {

            name = code;

        };

        return new YString()

            .paste(

                border[2] + border[1] + ' Indicator Keyboard ' + border[1].repeat(9) + border[7] + border[1].repeat(6) + border[7] + border[1].repeat(6) + border[3] + '\n',
                border[0] + ' ' + name + ' '.repeat(10 - name.length) + border[0] + ' ' + code + ' '.repeat(16 - code.length) + ' ' + border[0] + ` S: ${shift ? '+' : '-'} ` + border[0] + ` C: ${ctrl ? '+' : '-'} ` + border[0] + '\n',
                border[4] + border[1].repeat(11) + border[8] + border[1].repeat(18) + border[8] + border[1].repeat(6) + border[8] + border[1].repeat(6) + border[5]

            )
            .get(true);

    };

};