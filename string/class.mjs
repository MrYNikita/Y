//#region YI

import { YMany } from '../ject/many/class.mjs';



/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YStringT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Основной параметр модуля `YString`.
 *
 * @typedef {YStringTE&YStringTU} YStringT
 *
*/
/** ### YStringTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Параметр наследования `YString`.
 *
 * @typedef {{[p in Exclude<keyof DString,keyof SString>|Exclude<keyof SString,keyof DString>]:(DString[p]&SString[p])}} YStringTE
 *
*/
/** ### YStringTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры `YString`.
 *
 * @typedef YStringTU
 * @prop {any} _
 *
*/

//#endregion

/**
 * @extends {YMany<string>}
*/
class SString extends YMany {



};
class DString extends SString {



};
class IString extends DString {



};
class MString extends IString {



};
class FString extends MString {

    /**
     * ### YString.constructor
     *
     *
     *
     * ***
     *  @arg {...YStringT} t
    */
    constructor(...t) {

        super(Object.assign(t = FString.#before(t), {}));

        FString.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {} */
        let r = {};

        if (t?.length === 1 && [Object, YString].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YStringT} t @this {YString} */
    static #deceit(t) {

        try {

            FString.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YStringT} t @this {YString} */
    static #verify(t) {

        const {



        } = t;

        FString.#handle.apply(this, [t]);

    };
    /** @arg {YStringT} t @this {YString} */
    static #handle(t) {



        FString.#create.apply(this, [t]);

    };
    /** @arg {YStringT} t @this {YString} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptByDefault(config);

        };

    };

};

/**
 * ### YString
 * - Тип `SDIMFY`
 * - Версия `0.8.0`
 * - Модуль `string`
 * - Цепочка `BDVHC`
 * ***
 *
 * Класс строк.
 *
 * ***
 *
*/
export class YString extends FString {



};