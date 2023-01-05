import { YInteract } from "../YInteract.mjs";
import { YString } from "../../../../../../string/YString/YString.mjs";
import { jectFill } from "../../../../../ject.mjs";

/**
 * @typedef TBForm
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DForm,keyof SForm>|Exclude<keyof SForm,keyof DForm>]:(DForm[p]&SForm[p])}} TDForm
 * @typedef {TDForm&TBForm&import("../YInteract.mjs").TInteract} TForm
*/

class SForm extends YInteract {

    static binds = [

        ['\r',
            /** @arg {YForm} y */
            y => {

                const t = {};

                y.interactors.forEach(i => t[i[0]] = i[1].get());

                y.func?.(t)

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
     * Результирующая функция формы.
     * @type {function({}):void}
    */
    func;
    /**
     * Поля формы.
     *
     * Каждое поле обозначается меткой и представлено интерактором.
     * По результату заполнения будет создан итоговый объект формы, который будет содержать ответы,
     * с ключами в виде меток.
     *
     * В случае, если метка и название поля должны быть разными, то достаточно указать нужное название третьим аргументом.
     * @type {[string,YInteract,string][]}
    */
    interactors = [];

};
class IForm extends DForm {

    /**
     * Индекс.
     *
     * Определяет активное поле формы.
     * @type {number}
    */
    index = 0;

};
class MForm extends IForm {

    receive(string) {

        SForm.prototype.receive.apply(this, [string]);

        return this;

    };

};
class FForm extends MForm {

    /**
     * Контсруктор класса `YForm`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TForm} t
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

            /** @type {TForm&DForm} */
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
    /** @arg {TForm} t @this {YForm} */
    static #deceit(t) {

        try {

            FForm.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TForm} t @this {YForm} */
    static #verify(t) {

        const {



        } = t;

        FForm.#handle(t);

    };
    /** @arg {TForm} t @this {YForm} */
    static #handle(t) {



    };
    /** @arg {TForm} t @this {YForm} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YForm`
 *
 *
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YForm extends FForm {

    getLayout() {

        return new YString()

            .exec(y => this.interactors.forEach(i => y.pasteTemplate('lh', ['h', i[2] ?? i[0]]).paste(i[1].getLayout() + '\n')))
            .get()

    };

};