import { jectAdopt } from "../../../../../ject.mjs";
import { YString } from "../../../../../../string/YString/YString.mjs";
import { YInteract } from "../YInteract.mjs";

//#region YT

/** ### YSelectT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YSelect`
 *
 * Основной параметр модуля `YSelect`.
 *
 * @typedef {YSelectTE&YSelectTU&import("../../../YInterface.mjs").YInterfaceT} YSelectT
 *
*/
/** ### YSelectTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YSelect`
 *
 * Параметр наследования `YSelect`.
 *
 * @typedef {{[p in Exclude<keyof DSelect,keyof SSelect>|Exclude<keyof SSelect,keyof DSelect>]:(DSelect[p]&SSelect[p])}} YSelectTE
 *
*/
/** ### YSelectTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YSelect`
 *
 * Уникальные параметры `YSelect`.
 *
 * @typedef YSelectTU
 * @prop {any} _
 *
*/

//#endregion

class SSelect extends YInteract {

    static binds = [

        ['\r',
            /** @arg {YSelect} y */
            y => y.exec?.(y.points[y.index]),
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
     * ### exec
     *
     * Функция выбора.
     *
     * ***
     * @type {function(string):void}
     * @public
    */
    exec;
    /**
     * ### points
     *
     * Пункты.
     *
     * ***
     * @type {string[]}
     * @public
    */
    points = [];

};
class ISelect extends DSelect {

    /**
     * ### index
     *
     * Индекс.
     *
     * ***
     * @type {number}
     * @public
    */
    index = 0;

};
class MSelect extends ISelect {



};
class FSelect extends MSelect {

    /**
     * ### YSelect.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YSelectT} t
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

            /** @type {YSelectT} */
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
    /** @arg {YSelectT} t @this {YSelect} */
    static #deceit(t) {

        try {

            FSelect.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YSelectT} t @this {YSelect} */
    static #verify(t) {

        const {



        } = t;

        FSelect.#handle(t);

    };
    /** @arg {YSelectT} t @this {YSelect} */
    static #handle(t) {



    };
    /** @arg {YSelectT} t @this {YSelect} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);



    };

};

/**
 * ### YSelect
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Модуль `YSelect`
 * - Цепочка `BDVHC`
 * ***
 * Класс интерактивных элементов выбора
 *
 * Данный класс позволяет сохдвать и размещать интерактивные элементы выбора из нескольких позиций.
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
            .setCursorsSize(1)
            .paste('>')
            .get()

    };

};