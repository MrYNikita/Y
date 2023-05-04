//#region YI

import { YString } from '../../../../../../string/class.mjs';
import { structureFrame } from '../../../../../../string/structure/module.mjs';
import { YConsole } from '../../../../console/class.mjs';
import { YComb } from '../../../listener/comb/class.mjs';
import { YCombDigit } from '../../../listener/comb/digit/class.mjs';
import { YCombLetter } from '../../../listener/comb/letter/class.mjs';
import { YCombText } from '../../../listener/comb/text/class.mjs';
import { YKey } from '../../../listener/key/class.mjs';
import { YInteract } from '../class.mjs';

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

/** ### YInputT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\interact\input`
 * 
 * Основной параметр модуля `YInput`.
 * 
 * @typedef {YInputTE&YInputTU} YInputT
 * 
*/
/** ### YInputTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\interact\input`
 * 
 * Параметр наследования `YInput`.
 * 
 * @typedef {{[p in Exclude<keyof DInput,keyof SInput>|Exclude<keyof SInput,keyof DInput>]:(DInput[p]&SInput[p])}} YInputTE
 * 
*/
/** ### YInputTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\interact\input`
 * 
 * Уникальные параметры `YInput`.
 * 
 * @typedef YInputTU
 * @prop {any} _
 * 
*/

//#endregion

class SInput extends YInteract {

    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    /**
     * ### combs
     * @public
    */
    static combs = [

        new YComb({

            keys: [

                new YKey('backspace'),

            ],
            funcs: [

                y => y.value.remove(),

            ],
            response: {

                redraw: true,

            },

        }),
        new YComb({

            keys: [

                new YKey('delete')

            ],
            funcs: [

                y => y.value.set(''),

            ],

        }),
        new YCombText({ redraw: true, }, y => {

            y.value.paste(y.terminal.getKey().code);

        }),

    ];

};
class DInput extends SInput {

    /**
     * ### func
     *
     * Функция.
     *
     * ***
     * @type {function(string):void}
     * @public
    */
    func;
    /**
     * ### sizes
     *
     * Размеры.
     *
     * ***
     * @type {[number?, number?]}
     * @public
    */
    sizes = null;
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
    /** @protected */
    redraw = true;

};
class MInput extends IInput {



};
class FInput extends MInput {

    /**
     * ### YInput.constructor
     * 
     * 
     * 
     * ***
     * @arg {YInputT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FInput.#before(t), {}));

        FInput.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YInputT} */
        let r = {};

        if (t?.length === 1 && [Object, YInput].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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

        switch (t.value?.constructor) {

            case String: t.value = new YString(t.value); break;

        };

        FInput.#create.apply(this, [t]);

    };
    /** @arg {YInputT} t @this {YInput} */
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
 * ### YInput
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\interact\input`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YInput extends FInput {

    display() {

        const {

            sizes,
            value,
            title,
            placeholder,

        } = this;

        YConsole

            .setCursorTo(...this.coords)
            .writeLine(new YString()

                .paste(structureFrame(1, 30, title ?? 'YInput', 'thin', value.get()))
                .get(true)

            )

        return this;

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/