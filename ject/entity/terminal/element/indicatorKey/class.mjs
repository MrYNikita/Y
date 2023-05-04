//#region YI

import { YString } from '../../../../../string/class.mjs';
import configString from '../../../../../string/config.mjs';
import { stringShield } from '../../../../../string/module.mjs';
import { YConsole } from '../../../console/class.mjs';
import { YElement } from '../class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YIndicatorKeyT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\indicatorKey`
 * 
 * Основной параметр модуля `YIndicatorKey`.
 * 
 * @typedef {YIndicatorKeyTE&YIndicatorKeyTU} YIndicatorKeyT
 * 
*/
/** ### YIndicatorKeyTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\indicatorKey`
 * 
 * Параметр наследования `YIndicatorKey`.
 * 
 * @typedef {{[p in Exclude<keyof DIndicatorKey,keyof SIndicatorKey>|Exclude<keyof SIndicatorKey,keyof DIndicatorKey>]:(DIndicatorKey[p]&SIndicatorKey[p])}} YIndicatorKeyTE
 * 
*/
/** ### YIndicatorKeyTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\indicatorKey`
 * 
 * Уникальные параметры `YIndicatorKey`.
 * 
 * @typedef YIndicatorKeyTU
 * @prop {any} _
 * 
*/

//#endregion

class SIndicatorKey extends YElement {

    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;

};
class DIndicatorKey extends SIndicatorKey {

    

};
class IIndicatorKey extends DIndicatorKey {

    /**
     * @protected
    */
    redraw = true;

};
class MIndicatorKey extends IIndicatorKey {



};
class FIndicatorKey extends MIndicatorKey {

    /**
     * ### YIndicatorKey.constructor
     * 
     * 
     * 
     * ***
     * @arg {YIndicatorKeyT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FIndicatorKey.#before(t), {}));

        FIndicatorKey.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YIndicatorKeyT} */
        let r = {};

        if (t?.length === 1 && [Object, YIndicatorKey].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YIndicatorKeyT} t @this {YIndicatorKey} */
    static #deceit(t) {

        try {

            FIndicatorKey.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YIndicatorKeyT} t @this {YIndicatorKey} */
    static #verify(t) {

        const {



        } = t;

        FIndicatorKey.#handle.apply(this, [t]);

    };
    /** @arg {YIndicatorKeyT} t @this {YIndicatorKey} */
    static #handle(t) {



        FIndicatorKey.#create.apply(this, [t]);

    };
    /** @arg {YIndicatorKeyT} t @this {YIndicatorKey} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

    };

};

/**
 * ### YIndicatorKey
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\indicatorKey`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YIndicatorKey extends FIndicatorKey {

    display() {

        const border = configString.symbols.table.thin;

        let {

            code,
            name,
            ctrl,
            shift,

        } = this.interface.terminal.listener.keys.at(-1) ?? {};

        code = stringShield(code);

        if (!code) {

            code = '';

        };
        if (!name) {

            name = code;

        };

        YConsole

            .setCursorTo(...this.coords)
            .writeLine(new YString()

                .paste(

                    border[2] + border[1] + ' Indicator Keyboard ' + border[1].repeat(9) + border[7] + border[1].repeat(6) + border[7] + border[1].repeat(6) + border[3] + '\n',
                    border[0] + ' ' + name + ' '.repeat(10 - name?.length ?? 0) + border[0] + ' ' + code + ' '.repeat(16 - code?.length ?? 0) + ' ' + border[0] + ` S: ${shift ? '+' : '-'} ` + border[0] + ` C: ${ctrl ? '+' : '-'} ` + border[0] + '\n',
                    border[4] + border[1].repeat(11) + border[8] + border[1].repeat(18) + border[8] + border[1].repeat(6) + border[8] + border[1].repeat(6) + border[5]

                )
                .get(true)
            
            );

        return this;

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/