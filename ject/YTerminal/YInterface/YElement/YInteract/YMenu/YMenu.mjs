import { jectFill } from "../../../../../ject.mjs";
import { YInteract } from "../YInteract.mjs";

/**
 * @typedef TBMenu
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DMenu,keyof SMenu>|Exclude<keyof SMenu,keyof DMenu>]:(DMenu[p]&SMenu[p])}} TDMenu
 * @typedef {TDMenu&TBMenu} TMenu
*/

class SMenu extends YInteract {



};
class DMenu extends SMenu {



};
class IMenu extends DMenu {



};
class MMenu extends IMenu {



};
class FMenu extends MMenu {

    /**
     * Контсруктор класса `YMenu`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TMenu} t
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

            /** @type {TMenu&DMenu} */
            const r = {};

            if (t[0]._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {TMenu} t @this {YMenu} */
    static #deceit(t) {

        try {

            FMenu.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TMenu} t @this {YMenu} */
    static #verify(t) {

        const {



        } = t;

        FMenu.#handle(t);

    };
    /** @arg {TMenu} t @this {YMenu} */
    static #handle(t) {



    };
    /** @arg {TMenu} t @this {YMenu} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YMenu`
 *
 *
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YMenu extends FMenu {



};