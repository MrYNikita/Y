import { YString } from "../../../../string/YString/YString.mjs";
import { jectFill } from "../../../../../ject/ject.mjs";
import { YElementStyle } from "../../element/YElement/YElementStyle/YElementStyle.mjs";
import { stringFind, stringHandle, stringReplace } from "../../../../../string/string.mjs";
import { stringConvertCamelCaseToDelimetr } from "../../../../string/string.mjs";
import { YStyleSet } from "./YStyleSet/YStyleSet.mjs";

/**
 * @typedef TBStyle
 * @prop {any} _
 * @typedef {DStyle&TBStyle} TStyle
*/

class SStyle {



};
class DStyle extends SStyle {

    /**
     * Метка.
     * @type {string}
    */
    label;
    /**
     * Таблица стилей.
     * @type {YElementStyle}
    */
    tabel;
    /**
     * Размещение.
     * @type {[]}
    */
    location;
    /**
     * Свойства.
     * @type {CSSStyleDeclaration}
    */
    property = {};

};
class FStyle extends DStyle {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TStyle} t
    */
    constructor(t = {}) {

        t = FStyle.#before(...arguments);

        FStyle.#deceit(t);

        super(t);

        FStyle.#create.apply(this, [t]);

    };

    /** @param {TStyle} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @param {TStyle} t @this {YStyle} */
    static #deceit(t) {

        try {

            FStyle.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TStyle} t @this {YStyle} */
    static #verify(t) {

        const {



        } = t;

        FStyle.#handle(t);

    };
    /** @param {TStyle} t @this {YStyle} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TStyle} t @this {YStyle} */
    static #create(t) {

        const {

            tabel,

        } = t;

        const ys = this;

        jectFill(this, t);

        if (this.tabel) this.tabel.append(this);

        this.tabel.element.innerText += `${this.label}{}`;

        this.property = new Proxy(Array.from(this.tabel.element.sheet.cssRules).at(-1).style, {

            set(j, p, v) {

                const prop = {};
                
                j[p] = v;

                prop.p = v;

                ys.change(prop);

                return true;

            },

        });

    };

};

/**
 * Класс `YStyle`.
 * 
 * Данный класс предназначен для работы со стилями.
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YStyle extends FStyle {

    get() {

        const {

            label,
            property,

        } = this;

        return stringFind(this.tabel.element.innerText, label + ' ?{.*?}');

    };
    /**
     * Метод изменения свойства стиля.
     * @param {CSSStyleDeclaration} set Набор `YSet`'ов или объект с описанием свойств.
    */
    change(set) {

        const {

            tabel,
            label,

        } = this;

        Object.entries(set).forEach(p => {

            const s = new YStyleSet(...p);

            const {

                value,
                property,

            } = s;

            const ystr = new YString(stringFind(tabel.element.innerText, `${label} ?{.*?}`));

            if (ystr.find(property + ':.*?;')) {

                if (!value) ystr.replace([property + `:.*?;`, ``]);
                else ystr.replace([property + `:.*?;`, `${property}:${value};`]);

            } else if (value) ystr.replace([/}/, `${property}:${value};}`]);

            tabel.element.innerText = stringReplace(tabel.element.innerText, [label + ' ?{.*?}', ystr.get()]);

        });

        return this;

    };
    /**
     * Метод для удаления стиля.
    */
    delete() {

        if (this.tabel) this.tabel.remove(this);

        return this;

    };

};