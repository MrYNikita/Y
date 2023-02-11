import { YInteract } from "../YInteract.mjs";
import { YString } from "../../../../../../string/YString/YString.mjs";
import { jectAdopt } from "../../../../../ject.mjs";
import { YTerminal } from "../../../../YTerminal.mjs";

/**
 * @typedef TBInput
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DInput,keyof SInput>|Exclude<keyof SInput,keyof DInput>]:(DInput[p]&SInput[p])}} TDInput
 * @typedef {TDInput&TBInput&import("../YInteract.mjs").TInteract} TInput
*/

class SInput extends YInteract {

    static binds = [

        ['\r',
            /** @arg {YInput} y */
            y => {

                y?.func?.(y.value.get());
                y.bind('\x7F');

            },
            true,
        ],
        ['\x7F',
            /** @arg {YInput} y */
            y => y.value = y.value.set(''),
            true,
        ],
        ['\b',
            /** @arg {YInput} y */
            y => {

                if (y.value.get().length) {

                    console.log('WW');

                    y.value.remove();

                } else {

                    y.terminal.bind('\b');

                };

            },
            true,
        ],
        [['\t'],
            /** @arg {YInput} y */
            y => y,
        ],
        ['default',
            /** @arg {YInput} y */
            y => {

                const l = y.terminal.listener;
                const c = l.code;
                const n = l.name === 'space' ? ' ' : l.name;

                if (l.ctrl) {

                    switch (l.name) {

                        case 'r': {

                            y.value.set('');

                        }; break;
                        case 'z': {

                            y.value.remove();

                        }; break;

                    };

                } else {

                    if (y.value.get().length < y.sizes[0] * y.sizes[1] && c.length === 1) {

                        y.value.paste(l.shift ? c.toUpperCase() : c);

                    };

                };

            },
            true,
        ],

    ];

};
class DInput extends SInput {

    /**
     * Результирующая функция.
     *
     * Обязуется принимать на вход строковый аргумент, который будет содердать результирующую строку.
     * @type {function(string):void}
    */
    func;
    /**
     * Размеры.
     *
     * Представлены массивом двух значений, где первое определяет кол-во линий, а второе - символов.
     * @type {[number,number]}
    */
    sizes = [2, 8];
    /**
     * Значение.
     * @type {YString}
    */
    value = new YString();
    /**
     * Подсказка.
     * @type {string}
    */
    placehodler = '';

};
class IInput extends DInput {



};
class MInput extends IInput {



};
class FInput extends MInput {

    /**
     * Контсруктор класса `YInput`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TInput} t
    */
    constructor(t = {}) {

        t = FInput.#before(Object.values(arguments));

        FInput.#deceit(t);

        super(t);

        FInput.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YInput].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {TInput&DInput} */
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
    /** @arg {TInput} t @this {YInput} */
    static #deceit(t) {

        try {

            FInput.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TInput} t @this {YInput} */
    static #verify(t) {

        const {



        } = t;

        FInput.#handle(t);

    };
    /** @arg {TInput} t @this {YInput} */
    static #handle(t) {



    };
    /** @arg {TInput} t @this {YInput} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);

        this.value.rowLength = this.sizes[1];

    };

};

/**
 * Класс `YInput`
 *
 *
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YInput extends FInput {

    get() {

        return this.value.get();

    };
    getLayout() {

        const result = this.value.get();

        return result ? result : this.placehodler;

    };

};