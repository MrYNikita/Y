import { YElement } from "../YElement.mjs";
import { jectFill } from "../../../../../../ject/ject.mjs";
import { YStyle } from "../../../style/YStyle/YStyle.mjs";
import { stringReplace } from "../../../../../../string/string.mjs";
import { arrayRemove } from "../../../../../../array/array.mjs";

/**
 * @typedef TBElementStyle
 * @prop {any} _
 * @typedef {DElementStyle&TBElementStyle&import("../YElement.mjs").TElement} TElementStyle
*/

class SElementStyle extends YElement {



};
class DElementStyle extends SElementStyle {

    /**
     * Стили для типов.
     * @type {[YStyle]}
    */
    types = [];
    /**
     * Стили для классов.
     * @type {[YStyle]}
    */
    classes = [];
    /**
     * Стили для классов.
     * @type {[YStyle]}
    */
    commons = [];
    /**
     * Стили для элементов.
     * @type {[YStyle]}
    */
    identificators = [];

    /** @type {HTMLStyleElement} */
    element = this.element;

};
class FElementStyle extends DElementStyle {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TElementStyle} t
    */
    constructor(t = {}) {

        t = FElementStyle.#before(...arguments);

        FElementStyle.#deceit(t);

        super(t);

        FElementStyle.#create.apply(this, [t]);

    };

    /** @param {TElementStyle} t @this {[]} */
    static #before(t) {

        if (t.constructor === String) t = { string: t, };
        if (!t) t = {};

        return t;

    };
    /** @param {TElementStyle} t @this {YElementStyle} */
    static #deceit(t) {

        try {

            FElementStyle.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TElementStyle} t @this {YElementStyle} */
    static #verify(t) {

        const {



        } = t;

        FElementStyle.#handle(t);

    };
    /** @param {TElementStyle} t @this {YElementStyle} */
    static #handle(t) {

        let {



        } = t;

        t.type = 'style';
        t.overTypes = ['head'];

        t = {

            ...t,

        };

    };
    /** @param {TElementStyle} t @this {YElementStyle} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

    };

};

/**
 *
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YElementStyle extends FElementStyle {

    /**
     * Метод добавления стилей.
     * @param {...YStyle} styles
    */
    append(...styles) {

        styles.forEach(s => {

            if (s instanceof YStyle) switch (s.label[0]) {

                default: {

                    s.location = this.commons;
                    
                    this.commons.push(s);

                }; break;
                case '.': {
                    
                    s.location = this.classes;
                    
                    this.classes.push(s);

                }; break;
                case '#': {

                    s.location = this.identificators;

                    this.identificators.push(s);

                }; break;

            };

        });

        return this;

    };
    /**
     * Метод для отката стилей.
     * @param {...YStyle|string} ys
    */
    remove(...ys) {

        ys.forEach(s => {

            
            if (s.constructor === String) {}; 
            
            this.element.innerText = stringReplace(this.element.innerText, [s.label + ' ?{.*?}', '']);
            
            arrayRemove(s.location, s);

        });

        return this;

    };

};