import { YString } from "../../../../../../string/YString/YString.mjs";
import { jectFill } from "../../../../../ject.mjs";
import { YInteract } from "../YInteract.mjs";

/**
 * @typedef TBSelect
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DSelect,keyof SSelect>|Exclude<keyof SSelect,keyof DSelect>]:(DSelect[p]&SSelect[p])}} TDSelect
 * @typedef {TDSelect&TBSelect&import("../YInteract.mjs").TInteract} TSelect
*/

class SSelect extends YInteract {

    static binds = [

        ['\r',
            /** @arg {YMenu} y */
            y => y.points[y.index][1](),
        ],
        [['\x1B[B', 's'],
        /** @arg {YMenu} y */
        y => ++y.index >= y.points.length ? y.index = 0 : 0,
            true,
        ],
        [
            ['\x1B[A', 'w'],
            /** @arg {YMenu} y */
            y => --y.index < 0 ? y.index = y.points.length - 1 : 0,
            true,
        ],

    ];

};
class DSelect extends SSelect {

    /**
     * Пункты.
     * @type {string[]}
    */
    points = [];

};
class ISelect extends DSelect {

    /**
     * Индекс.
     * @type {number}
    */
    index = 0;

};
class MSelect extends ISelect {

    receive(string) {

        SSelect.prototype.receive.apply(this, [string]);

        return this;

    };

};
class FSelect extends MSelect {

    /**
     * Контсруктор класса `YSelect`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TSelect} t
    */
    constructor(t = {}) {

        t = FSelect.#before(Object.values(arguments));

        FSelect.#deceit(t);

        super(t);

        FSelect.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YSelect].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {TSelect&DSelect} */
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
    /** @arg {TSelect} t @this {YSelect} */
    static #deceit(t) {

        try {

            FSelect.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TSelect} t @this {YSelect} */
    static #verify(t) {

        const {



        } = t;

        FSelect.#handle(t);

    };
    /** @arg {TSelect} t @this {YSelect} */
    static #handle(t) {



    };
    /** @arg {TSelect} t @this {YSelect} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YSelect`
 *
 * Данный класс используется для формирования интерактивного элемента выборки.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject.terminal.recurrent`
 * - Цепочка `BDVHC`
*/
export class YSelect extends FSelect {

    get() {

        return this.points[this.index];

    };
    getLayout() {

        return new YString()

            .changePrefix('  ')
            .changePostfix('\n')
            .paste(...this.points)
            .changePrePostfix()
            .setCursorTo(this.index, 0)
            .changeCursorsSize(1)
            .paste('>')
            .get()

    };

};