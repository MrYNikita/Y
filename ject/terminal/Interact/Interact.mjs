//#region YI

import { YElement } from "../Element/Element.mjs";

//#endregion
//#region YT

/** ### YInteractT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YInteract`
 *
 * Основной параметр модуля `YInteract`.
 *
 * @typedef {YInteractTE&YInteractTU} YInteractT
 *
*/
/** ### YInteractTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YInteract`
 *
 * Параметр наследования `YInteract`.
 *
 * @typedef {{[p in Exclude<keyof DInteract,keyof SInteract>|Exclude<keyof SInteract,keyof DInteract>]:(DInteract[p]&SInteract[p])}} YInteractTE
 *
*/
/** ### YInteractTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YInteract`
 *
 * Уникальные параметры `YInteract`.
 *
 * @typedef YInteractTU
 * @prop {any} _
 *
*/

//#endregion

class SInteract extends YElement {



};
class DInteract extends SInteract {



};
class IInteract extends DInteract {



};
class MInteract extends IInteract {



};
class FInteract extends MInteract {

    /**
     * ### YInteract.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YInteractT} t
    */
    constructor(t = {}) {

        t = FInteract.#before(Object.values(arguments));

        FInteract.#deceit(t);

        super(t);

        FInteract.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YInteract].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YInteractT} */
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
    /** @arg {YInteractT} t @this {YInteract} */
    static #deceit(t) {

        try {

            FInteract.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YInteractT} t @this {YInteract} */
    static #verify(t) {

        const {



        } = t;

        FInteract.#handle(t);

    };
    /** @arg {YInteractT} t @this {YInteract} */
    static #handle(t) {



    };
    /** @arg {YInteractT} t @this {YInteract} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YInteract
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YInteract`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YInteract extends FInteract {



};