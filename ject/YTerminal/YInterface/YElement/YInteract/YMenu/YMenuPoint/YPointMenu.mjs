import { jectFill } from "../../../../../../ject.mjs";
import { YBasic } from "../../../../../../YBasic/YBasic.mjs";

//#region YT

/** ### YPointMenuT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YPointMenu`
 *
 * Основной параметр модуля `YPointMenu`.
 *
 * @typedef {YPointMenuTE&YPointMenuTU} YPointMenuT
 *
*/
/** ### YPointMenuTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YPointMenu`
 *
 * Параметр наследования `YPointMenu`.
 *
 * @typedef {{[p in Exclude<keyof DPointMenu,keyof SPointMenu>|Exclude<keyof SPointMenu,keyof DPointMenu>]:(DPointMenu[p]&SPointMenu[p])}} YPointMenuTE
 *
*/
/** ### YPointMenuTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YPointMenu`
 *
 * Уникальные параметры `YPointMenu`.
 *
 * @typedef YPointMenuTU
 * @prop {any} _
 *
*/

//#endregion

class SPointMenu extends YBasic {



};
class DPointMenu extends SPointMenu {

    /**
     * ### label
     *
     * Метка.
     *
     * ***
     * @type {string}
     * @public
    */
    label = '';
    /**
     * ### exec
     *
     * Функция исполнения.
     *
     * ***
     * @type {function(import('../YMenu.mjs').YMenu):void}
     * @public
    */
    exec;

};
class IPointMenu extends DPointMenu {



};
class MPointMenu extends IPointMenu {



};
class FPointMenu extends MPointMenu {

    /**
     * ### YPointMenu.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YPointMenuT} t
    */
    constructor(t = {}) {

        t = FPointMenu.#before(Object.values(arguments));

        FPointMenu.#deceit(t);

        super(t);

        FPointMenu.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YPointMenu].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YPointMenuT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2: r.exec = t[1];
                case 1: r.label = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YPointMenuT} t @this {YPointMenu} */
    static #deceit(t) {

        try {

            FPointMenu.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YPointMenuT} t @this {YPointMenu} */
    static #verify(t) {

        const {



        } = t;

        FPointMenu.#handle(t);

    };
    /** @arg {YPointMenuT} t @this {YPointMenu} */
    static #handle(t) {



    };
    /** @arg {YPointMenuT} t @this {YPointMenu} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * ### YPointMenu
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YPointMenu`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YPointMenu extends FPointMenu {



};