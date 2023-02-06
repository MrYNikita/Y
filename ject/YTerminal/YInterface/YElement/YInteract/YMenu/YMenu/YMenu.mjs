import { colorGetReset } from "../../../../../../../string/ansi/color/color.mjs";
import { YString } from "../../../../../../../string/YString/YString.mjs";
import { jectFill } from "../../../../../../ject.mjs";
import { YInteract } from "../../YInteract.mjs";
import { YPointMenu } from "./YMenuPoint/YPointMenu.mjs";

//#region YT

/** ### YMenuT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YMenu`
 *
 * Основной параметр модуля `YMenu`.
 *
 * @typedef {YMenuTE&YMenuTU&import("../../YInteract.mjs").YInteractT} YMenuT
 *
*/
/** ### YMenuTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YMenu`
 *
 * Параметр наследования `YMenu`.
 *
 * @typedef {{[p in Exclude<keyof DMenu,keyof SMenu>|Exclude<keyof SMenu,keyof DMenu>]:(DMenu[p]&SMenu[p])}} YMenuTE
 *
*/
/** ### YMenuTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YMenu`
 *
 * Уникальные параметры `YMenu`.
 *
 * @typedef YMenuTU
 * @prop {any} _
 *
*/

//#endregion

class SMenu extends YInteract {

    static binds = [

        ['\r',
            /** @arg {YMenu} y */
            y => y.points[y.index].exec(y),
        ],
        [['\x1B[B', 's'],
        /** @arg {YMenu} y */
        y => ++y.index >= y.points.length ? y.index = 0 : 0,
            true,
        ],
        [['\x1B[A', 'w'],
        /** @arg {YMenu} y */
        y => --y.index < 0 ? y.index = y.points.length - 1 : 0,
            true,
        ],

    ];

    /**
     * ### colorFFocus
     *
     * Общий цвет переднего плана.
     *
     * ***
     * @type {import("../../../../../../../string/ansi/color/color.mjs").colorTVColor}
     * @public
    */
    static colorFFocus = 'yellow';

};
class DMenu extends SMenu {

    /**
     * ### points
     *
     * Пункты.
     *
     * ***
     * @type {(YPointMenu|[string,function(YMenu):void])[]}
     * @public
    */
    points = [];
    /**
     * ### colorF
     *
     * Цвет символов.
     *
     * ***
     * @type {import("../../../../../../../string/ansi/color/color.mjs").colorTVColor?}
     * @public
    */
    colorFFocus = null;
    /**
     * ### colorB
     *
     * Цвет фона.
     *
     * ***
     * @type {import("../../../../../../../string/ansi/color/color.mjs").colorTVColor?}
     * @public
    */
    colorBFocus = null;

};
class IMenu extends DMenu {

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
class MMenu extends IMenu {

    /** @arg {string} string Ключ-код/символ привязки. */
    receive(string) {

        SMenu.prototype.receive.apply(this, [string]);

    };

};
class FMenu extends MMenu {

    /**
     * ### YMenu.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YMenuT} t
    */
    constructor(t = {}) {

        t = FMenu.#before(Object.values(arguments));

        FMenu.#deceit(t);

        super(t);

        FMenu.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YMenu].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YMenuT} */
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
    /** @arg {YMenuT} t @this {YMenu} */
    static #deceit(t) {

        try {

            FMenu.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YMenuT} t @this {YMenu} */
    static #verify(t) {

        const {



        } = t;

        FMenu.#handle(t);

    };
    /** @arg {YMenuT} t @this {YMenu} */
    static #handle(t) {

        t.points = t.points.map(p => {

            switch (p.constructor) {

                case Array: {

                    p = new YPointMenu(...p);

                }; break;
                default: {

                    p = new YPointMenu(p);

                }; break;

            };

            return p;

        });

    };
    /** @arg {YMenuT} t @this {YMenu} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * ### YMenu
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YMenu`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YMenu extends FMenu {

    get() {

        return this.points[this.index];

    };
    getLayout() {

        return new YString()

            .changePostfix('\n')
            .paste(...this.points.map(p => p.label + colorGetReset(1, 1)))
            .setCursorTo(this.index, 0)
            .setColor(this.colorFFocus ?? this.constructor.colorFFocus, this.colorBFocus)
            .get(true)

    };

};