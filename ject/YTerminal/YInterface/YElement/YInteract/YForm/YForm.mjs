import { YString } from "../../../../../../string/YString/YString.mjs";
import { jectFill } from "../../../../../ject.mjs";
import { YInteract } from "../YInteract.mjs";
import { YInterface } from "../../../YInterface.mjs";
import { colorGet } from "../../../../../../string/ansi/color/color.mjs";

//#region YT

/** ### YFormT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YForm`
 *
 * Основной параметр модуля `YForm`.
 *
 * @typedef {YFormTE&YFormTU} YFormT
 *
*/
/** ### YFormTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YForm`
 *
 * Параметр наследования `YForm`.
 *
 * @typedef {{[p in Exclude<keyof DForm,keyof SForm>|Exclude<keyof SForm,keyof DForm>]:(DForm[p]&SForm[p])}} YFormTE
 *
*/
/** ### YFormTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YForm`
 *
 * Уникальные параметры `YForm`.
 *
 * @typedef YFormTU
 * @prop {any} _
 *
*/

//#endregion

class SForm extends YInteract {

    static binds = [

        ['\r',
            /** @arg {YForm} y */
            y => {

                const t = {};

                y.interactors.forEach(i => {

                    if (i[1].get()) {

                        t[i[0]] = i[1].get();

                    };

                });

                y.func?.(y, t);

            },
        ],
        ['\x1B[1;5A',
            /** @arg {YForm} y */
            y => y.terminal.listener.ctrl && --y.index < 0 ? y.index = 0 : 0,
        ],
        ['\x1B[1;5B',
            /** @arg {YForm} y */
            y => y.terminal.listener.ctrl && ++y.index >= y.interactors.length ? y.index = y.interactors.length - 1 : 0,
        ],
        ['default',
            /** @arg {YForm} y */
            y => y.interactors[y.index][1].bind(y.terminal.listener.code),
        ],

    ];

};
class DForm extends SForm {

    /**
     * ### func
     *
     * Результирующая функция формы.
     *
     * Принимает на вход два аргумента:
     * - Первый - для взаимодействия с формой.
     * - Второй - для взаимодействия с полями. Представлен как объект передачи с полями, названными первыми индексами интеракторов.
     *
     * ***
     * @type {function(YForm, {}):void}
     * @public
    */
    func;
    /**
     * ### interactors
     *
     * Поля формы.
     *
     * Каждое поле обозначается меткой и представлено интерактором.
     * По результату заполнения будет создан итоговый объект формы, который будет содержать ответы,
     * с ключами в виде меток.
     *
     * В случае, если метка и название поля должны быть разными, то достаточно указать нужное название третьим аргументом.
     *
     * ***
     * @type {[string,YInteract,string][]}
     * @public
    */
    interactors = [];

};
class IForm extends DForm {

    /**
     * ### index
     *
     * Индекс.
     *
     * ***
     * @type {number}
     * @protected
    */
    index = 0;

};
class MForm extends IForm {



};
class FForm extends MForm {

    /**
     * ### YForm.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YFormT} t
    */
    constructor(t = {}) {

        t = FForm.#before(Object.values(arguments));

        FForm.#deceit(t);

        super(t);

        FForm.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YForm].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YFormT} */
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
    /** @arg {YFormT} t @this {YForm} */
    static #deceit(t) {

        try {

            FForm.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YFormT} t @this {YForm} */
    static #verify(t) {

        const {



        } = t;

        FForm.#handle(t);

    };
    /** @arg {YFormT} t @this {YForm} */
    static #handle(t) {



    };
    /** @arg {YFormT} t @this {YForm} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.setInterface(this.interface);

    };

};

/**
 * ### YForm
 * - Тип `SDIMFY`
 * - Версия `0.0.1`
 * - Модуль `YForm`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YForm extends FForm {

    /** @arg {YInterface} itnf `Интерфейс` */
    setInterface(intf) {

        SForm.prototype.setInterface.apply(this, [intf]);

        if (this.interface) {

            this.interactors.forEach(i => {

                i[1].setInterface(this.interface);

            });

        };

        return this;

    };

    getLayout() {

        return new YString()

            .exec(y => this.interactors.forEach((i, ii) => {

                const h = i[2] ?? i[0];

                y
                    .pasteTemplate('lh', ['h', this.index === ii ? colorGet('yellow') + h : h])
                    .paste(i[1].getLayout() + '\n');

            }))
            .get(true)

    };

};