import { jectAdopt } from "../../../../ject.mjs";
import { YString } from "../../../../../string/YString/YString.mjs";
import { YElement } from "../YElement.mjs";

/**
 * @typedef TBHeader
 * @prop {any} _
 * @typedef {{[p in Exclude<keyof DHeader,keyof SHeader>|Exclude<keyof SHeader,keyof DHeader>]:(DHeader[p]&SHeader[p])}} TDHeader
 * @typedef {TDHeader&TBHeader&import("../YElement.mjs").YElementT} THeader
*/

class SHeader extends YElement {



};
class DHeader extends SHeader {

    /**
     * Заголовок.
     * @type {string}
    */
    title = 'Заголовок';

};
class IHeader extends DHeader {



};
class MHeader extends IHeader {



};
class FHeader extends MHeader {

    /**
     * Контсруктор класса `YHeader`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {THeader} t
    */
    constructor(t = {}) {

        t = FHeader.#before(Object.values(arguments));

        FHeader.#deceit(t);

        super(t);

        FHeader.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YHeader].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {THeader&DHeader} */
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
    /** @arg {THeader} t @this {YHeader} */
    static #deceit(t) {

        try {

            FHeader.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {THeader} t @this {YHeader} */
    static #verify(t) {

        const {



        } = t;

        FHeader.#handle(t);

    };
    /** @arg {THeader} t @this {YHeader} */
    static #handle(t) {



    };
    /** @arg {THeader} t @this {YHeader} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

    };

};

/**
 * Класс `YHeader`
 *
 *
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YHeader extends FHeader {

    getLayout() {

        return new YString()

            .exec(y => {

                const size = this.title.length + 2;

                y
                    .paste(

                        `╔${'═'.repeat(size)}╗\n`,
                        `║ ${this.title} ║\n`,
                        `╚${'═'.repeat(size)}╝`

                    )

            })
            .get(true);

    };

};