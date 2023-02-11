import { jectAdopt } from "../../../ject/ject.mjs";
import { YJect } from "../../../ject/YJect/YJect.mjs";

/**
 * @typedef TBScaner
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DScaner,keyof SScaner>|Exclude<keyof SScaner,keyof DScaner>]:(DScaner[p]&SScaner[p])}} TDScaner
 * @typedef {TDScaner&TBScaner} TScaner
*/

class SScaner extends YJect {



};
class DScaner extends SScaner {

    /**
     * Коориднаты.
     * @type {number[]}
    */
    coords = [0, 0];

};
class IScaner extends DScaner {



};
class MScaner extends IScaner {



};
class FScaner extends MScaner {

    /**
     * Контсруктор класса `YScaner`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TScaner} t
    */
    constructor(t = {}) {

        t = FScaner.#before(Object.values(arguments));

        FScaner.#deceit(t);

        super(t);

        FScaner.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YScaner].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {TScaner&DScaner} */
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
    /** @arg {TScaner} t @this {YScaner} */
    static #deceit(t) {

        try {

            FScaner.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TScaner} t @this {YScaner} */
    static #verify(t) {

        const {



        } = t;

        FScaner.#handle(t);

    };
    /** @arg {TScaner} t @this {YScaner} */
    static #handle(t) {



    };
    /** @arg {TScaner} t @this {YScaner} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * Класс `YScaner`
 *
 * Класс строчных сканеров.
 * Способен находить сложные строковые шаблоны и производить изменения в них.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YScaner extends FScaner {



};