//#region YI

import { YString } from '../../../../../../string/YString/YString.mjs';
import { configTerminal } from '../../../../config.mjs';
import { YBind } from '../../../../receiver/bind/class.mjs';
import { YInteractor } from '../class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YInputT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor\input`
 *
 * Основной параметр модуля `YInput`.
 *
 * @typedef {YInputTE&YInputTU&import('../../../../../YTerminal/YInterface/YElement/YInteract/YInteract.mjs').YInteractT} YInputT
 *
*/
/** ### YInputTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor\input`
 *
 * Параметр наследования `YInput`.
 *
 * @typedef {{[p in Exclude<keyof DInput,keyof SInput>|Exclude<keyof SInput,keyof DInput>]:(DInput[p]&SInput[p])}} YInputTE
 *
*/
/** ### YInputTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor\input`
 *
 * Уникальные параметры `YInput`.
 *
 * @typedef YInputTU
 * @prop {any} _
 *
*/

//#endregion

class SInput extends YInteractor {

    /** @type {YBind<YInput>[]} */
    static binds = [

        {
            comb: ['\b'],
            funcs: [y => y.value.remove()],
        },
        {
            comb: ['\x7F'],
            funcs: [y => y.value.set('')]
        },
        {
            comb: ['text'],
            funcs: [y => y.value.paste(y.interface.terminal.listener.code)]
        }

    ];

};
class DInput extends SInput {

    /**
     * ### size
     *
     * Размер.
     *
     * ***
     * @type {number?}
     * @public
    */
    size = null;
    /**
     * ### limit
     *
     * Лимит.
     *
     * ***
     * @type {number?}
     * @public
    */
    limit = null;
    /**
     * ### header
     *
     * Заголовок.
     *
     * ***
     * @type {string?}
     * @public
    */
    header = '';
    /**
     * ### placeholder
     *
     * Заместитель.
     *
     * ***
     * @type {string?}
     * @public
    */
    placeholder = '';

};
class IInput extends DInput {

    /**
     * ### value
     *
     * Значение.
     *
     * ***
     * @type {YString?}
     * @protected
    */
    value = new YString();

};
class MInput extends IInput {



};
class FInput extends MInput {

    /**
     * ### YInput.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YInputT} t
    */
    constructor(...t) {

        t = FInput.#before(t);

        super(Object.assign(t, {}));

        FInput.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YInput].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YInputT} */
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
    /** @arg {YInputT} t @this {YInput} */
    static #deceit(t) {

        try {

            FInput.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YInputT} t @this {YInput} */
    static #verify(t) {

        const {



        } = t;

        FInput.#handle.apply(this, [t]);

    };
    /** @arg {YInputT} t @this {YInput} */
    static #handle(t) {



        FInput.#create.apply(this, [t]);

    };
    /** @arg {YInputT} t @this {YInput} */
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
 * ### YInput
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor\input`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YInput extends FInput {

    getLayout() {

        const {

            size,
            value,
            header,
            placeholder,

        } = this;

        const border = configTerminal.borders[0];

        return new YString()

            .paste(

                border[2] + border[1] + (header ? ' ' + header + ' ' + border[1].repeat(size - header.length) : border[1].repeat(size)) + border[3] + '\n',
                border[0] + ' ' + value.get() + ' '.repeat(size - value.get().length + (header ? 2 : 0)) + border[0] + '\n',
                border[4] + border[1].repeat(size + 1 + (header ? 2 : 0)) + border[5]

            )
            .get(true);

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/