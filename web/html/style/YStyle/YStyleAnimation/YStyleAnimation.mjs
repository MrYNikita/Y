import { YStyle } from "../YStyle.mjs";
import { YString } from "../../../../../string/YString/YString.mjs";
import { jectFill } from "../../../../../ject/ject.mjs";
import { YStyleSet } from "../YStyleSet/YStyleSet.mjs";
import { stringFind, stringReplace } from "../../../../../string/string.mjs";

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
     *  @arg {TStyleAnimation} t
    */
    constructor(t = {}) {

        t = FStyleAnimation.#before(Object.values(arguments));

        FStyleAnimation.#deceit(t);

        super(t);

        FStyleAnimation.#create.apply(this, [t]);

    };

    /** @arg {Array<any>} t */
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
    /** @arg {TStyleAnimation} t @this {YStyleAnimation} */
    static #deceit(t) {

        try {

            FStyleAnimation.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TStyleAnimation} t @this {YStyleAnimation} */
    static #verify(t) {

        const {



        } = t;

        FStyleAnimation.#handle(t);

    };
    /** @arg {TStyleAnimation} t @this {YStyleAnimation} */
    static #handle(t) {

        if (t.label[0] !== `~`) t.label = `~` + t.label;

    };
    /** @arg {TStyleAnimation} t @this {YStyleAnimation} */
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
    /**
     * Метод изменения свойства стиля.
     * - Версия `0.0.0`
     * @arg {CSSStyleDeclaration} set Набор `YSet`'ов или объект с описанием свойств.
    */
    change(set) {

        const {

            tabel,

        } = this;

        const label = this.label === '*' ? '\\*' : this.label[0] === '.' ? '\\.' + this.label.slice(1) : this.label;

        if (set) Object.entries(set).forEach(p => {

            const s = new YStyleSet(...p);

            const {

                value,
                property,

            } = s;

            const ystr = new YString(stringFind(tabel.element.innerText, `${label} ?{.*?}`));

            if (ystr.copy().find(property + ':.*?;').get()) {

                if (!value) ystr.replace([``, property + `:.*?;`]);
                else ystr.replace([`${property}:${value};`, property + `:.*?;`]);

            } else if (value) ystr.replace([`${property}:${value};}`, /}/]);

            tabel.element.innerText = stringReplace(tabel.element.innerText, ystr.get(), label + ' ?{.*?}');

            this.projections.forEach(s => s.change(set));

        });

        return this;

    };

};