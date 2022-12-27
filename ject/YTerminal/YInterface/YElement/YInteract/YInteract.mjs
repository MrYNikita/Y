import { jectFill } from "../../../../ject.mjs";
import { YElement } from "../YElement.mjs";

/**
 * @typedef TBInteract
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DInteract,keyof SInteract>|Exclude<keyof SInteract,keyof DInteract>]:(DInteract[p]&SInteract[p])}} TDInteract
 * @typedef {TDInteract&TBInteract} TInteract
*/

class SInteract extends YElement {



};
class DInteract extends SInteract {

    /**
     * Привязки.
     * @type {[string,function(YInteract) => void][]}
    */
    binds = [];

};
class IInteract extends DInteract {



};
class MInteract extends IInteract {



};
class FInteract extends MInteract {

    /**
     * Контсруктор класса `YInteract`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TInteract} t
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

            /** @type {TInteract&DInteract} */
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
    /** @arg {TInteract} t @this {YInteract} */
    static #deceit(t) {

        try {

            FInteract.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TInteract} t @this {YInteract} */
    static #verify(t) {

        const {



        } = t;

        FInteract.#handle(t);

    };
    /** @arg {TInteract} t @this {YInteract} */
    static #handle(t) {



    };
    /** @arg {TInteract} t @this {YInteract} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

    };

};

/**
 * Класс `YInteract`
 *
 *
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YInteract extends FInteract {



};