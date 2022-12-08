import { YStyle } from "../YStyle.mjs";
import { jectFill } from "../../../../../ject/ject.mjs";
import { YString } from "../../../../../string/YString/YString.mjs";

/**
 * @typedef TBStyleAnimation
 * @prop {any} _
 * @typedef {DStyleAnimation&TBStyleAnimation} TStyleAnimation
*/

class SStyleAnimation extends YStyle {



};
class DStyleAnimation extends SStyleAnimation {

    /** @type {YStyleAnimation[]} */
    location = this?.tabel?.animations ?? null;
    /** @type {YStyleAnimation[]} */
    projectors = [];

};
class IStyleAnimation extends DStyleAnimation {

    /** @type {YStyleAnimation[]} */
    projections = [];

};
class MStyleAnimation extends IStyleAnimation {



};
class FStyleAnimation extends MStyleAnimation {

    /**
     * Контсруктор класса `YStyleAnimation`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TStyleAnimation} t
    */
    constructor(t = {}) {

        t = FStyleAnimation.#before(Object.values(arguments));

        FStyleAnimation.#deceit(t);

        super(t);

        FStyleAnimation.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TStyleAnimation&DStyleAnimation} */
            const r = {};

            switch (t.length) {

                default: r.projectors = t.splice(3);
                case 3: r.property = t[2];
                case 2: r.label = t[1];
                case 1: r.tabel = t[0];

            };

            return r;

        } else return {};

    };
    /** @param {TStyleAnimation} t @this {YStyleAnimation} */
    static #deceit(t) {

        try {

            FStyleAnimation.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TStyleAnimation} t @this {YStyleAnimation} */
    static #verify(t) {

        const {



        } = t;

        FStyleAnimation.#handle(t);

    };
    /** @param {TStyleAnimation} t @this {YStyleAnimation} */
    static #handle(t) {

        if (t.label[0] !== `~`) t.label = `~` + t.label;

    };
    /** @param {TStyleAnimation} t @this {YStyleAnimation} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 *
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YStyleAnimation extends FStyleAnimation {

    /**
     * Метод получения стиля в виде объекта.
     * - Версия `0.0.0`
     * @returns {CSSStyleDeclaration}
    */
    get() {

        const {

            label,

        } = this;

        return new YString(this.tabel.element.innerText)

            .find('@keyframes' + label + ' ?{[^@]*')
            .replaceAll(['\n', ';'])
            .remove(1)
            .castToJect()

    };

};