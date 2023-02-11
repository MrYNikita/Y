import { jectAdopt } from "../../../../../ject/ject.mjs";
import { YBasic } from "../../../../../ject/YBasic/YBasic.mjs";
import { YArrayRank } from "../../YArrayRank.mjs";

/**
 * @typedef TBLevel
 * @prop {any} _
 * @typedef {DLevel&TBLevel} TLevel
*/

class SLevel extends YArrayRank {



};
class DLevel extends SLevel {



};
class ILevel extends DLevel {



};
class MLevel extends ILevel {



};
class FLevel extends MLevel {

    /**
     * Контсруктор класса `YLevel`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TLevel} t
    */
    constructor(t = {}) {

        t = FLevel.#before(Object.values(arguments));

        FLevel.#deceit(t);

        super(t);

        FLevel.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YLevel].includes(t[0]?.constructor)) {

            return t[0];

        } else if (t?.length) {

            /** @type {TLevel&DLevel} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return r;

        } else return {};

    };
    /** @arg {TLevel} t @this {YLevel} */
    static #deceit(t) {

        try {

            FLevel.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TLevel} t @this {YLevel} */
    static #verify(t) {

        const {



        } = t;

        FLevel.#handle(t);

    };
    /** @arg {TLevel} t @this {YLevel} */
    static #handle(t) {



    };
    /** @arg {TLevel} t @this {YLevel} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);



    };

};

/**
 * Класс `YLevel`
 *
 * Класс измерений.
 * Хранит информацию об определенных измерениях исходного массива.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `array.rank.level`
 * - Цепочка `BDVHC`
*/
export class YLevel extends FLevel {



};