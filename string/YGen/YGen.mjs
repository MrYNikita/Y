import { jectFill } from "../../ject/ject.mjs";
import { YJect } from "../../ject/YJect/YJect.mjs";

//#region YT

/** ### YGenT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YGen`
 *
 * Основной параметр модуля `YGen`.
 *
 * @typedef {YGenTE&YGenTU} YGenT
 *
*/
/** ### YGenTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YGen`
 *
 * Параметр наследования `YGen`.
 *
 * @typedef {{[p in Exclude<keyof DGen,keyof SGen>|Exclude<keyof SGen,keyof DGen>]:(DGen[p]&SGen[p])}} YGenTE
 *
*/
/** ### YGenTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YGen`
 *
 * Уникальные параметры `YGen`.
 *
 * @typedef YGenTU
 * @prop {any} _
 *
*/

//#endregion

class SGen extends YJect {



};
class DGen extends SGen {



};
class IGen extends DGen {



};
class MGen extends IGen {



};
class FGen extends MGen {

    /**
     * ### YGen.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YGenT} t
    */
    constructor(t = {}) {

        t = FGen.#before(Object.values(arguments));

        FGen.#deceit(t);

        super(t);

        FGen.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YGen].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YGenT} */
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
    /** @arg {YGenT} t @this {YGen} */
    static #deceit(t) {

        try {

            FGen.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YGenT} t @this {YGen} */
    static #verify(t) {

        const {



        } = t;

        FGen.#handle(t);

    };
    /** @arg {YGenT} t @this {YGen} */
    static #handle(t) {



    };
    /** @arg {YGenT} t @this {YGen} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * ### YGen
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YGen`
 * - Цепочка `BDVHC`
 * ***
 * Класс строковых генераторов.
 *
 * Экземпляры данного класса выступают настраиваемыми строковыми генераторами.
 *
 * Генераторы могут генерировать текст или отдельные слова.
*/
export class YGen extends FGen {



};