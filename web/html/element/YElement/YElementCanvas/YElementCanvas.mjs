import { YElement } from "../YElement.mjs";
import { jectFill } from "../../../../../ject/ject.mjs";
import { YString } from "../../../../../string/YString/YString.mjs";

/**
 * @typedef TBElementCanvas
 * @prop {any} _
 * @typedef {DElementCanvas&TBElementCanvas} TElementCanvas
*/

class SElementCanvas extends YElement {



};
class DElementCanvas extends SElementCanvas {



};
class IElementCanvas extends DElementCanvas {



};
class FElementCanvas extends IElementCanvas {

    /**
     * Контсруктор класса `YElementCanvas`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TElementCanvas} t
    */
    constructor(t = {}) {

        t = FElementCanvas.#before(Object.values(arguments));

        FElementCanvas.#deceit(t);

        super(t);

        FElementCanvas.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            const r = {};



            return r;

        } else return {};

    };
    /** @param {TElementCanvas} t @this {YElementCanvas} */
    static #deceit(t) {

        try {

            FElementCanvas.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TElementCanvas} t @this {YElementCanvas} */
    static #verify(t) {

        const {



        } = t;

        FElementCanvas.#handle(t);

    };
    /** @param {TElementCanvas} t @this {YElementCanvas} */
    static #handle(t) {

        let {



        } = t;

        t.type = 'canvas';

        t = {

            ...t,

        };

    };
    /** @param {TElementCanvas} t @this {YElementCanvas} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 *
 * - Тип `SDIFY-1.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YElementCanvas extends FElementCanvas {

    getReport() {

        return new YString()

            .changePostfix(';\n')
            .paste(

                `Элемент: ${this.element}`,

            )
            .get();

    };

};