import { jectFill, jectSupplement } from "../../../../ject/ject.mjs";
import { YBasic } from "../../../../ject/YBasic/YBasic.mjs";
import { YJect } from "../../../../ject/YJect/YJect.mjs";
import { elementCreate, elementCreateByString, elementStringDecompose } from "../element.mjs";

/**
 * @typedef TBElement
 * @prop {{}} property
 * @prop {string} id
 * @prop {string} type
 * @prop {string} text
 * @prop {[string]} childs
 * @prop {[string]} classes
 * @prop {[string]} overId
 * @prop {[string]} overTypes
 * @prop {[string]} overClasses
 * @typedef {DElement&TBElement} TElement
*/

class SElement extends YJect {



};
class DElement extends SElement {

    /**
     * Привязанный элемент.
     * @type {HTMLElement}
    */
    element;

};
class FElement extends DElement {

    /**
     *
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TElement} t
    */
    constructor(t = {}) {

        t = FElement.#before(...arguments);

        FElement.#deceit(t);

        super(t);

        FElement.#create.apply(this, [t]);

    };

    /** @param {TElement} t @this {[]} */
    static #before(t) {

        if (t.constructor === String) t = { string: t, };
        if (!t) t = {};

        return t;

    };
    /** @param {TElement} t @this {YElement} */
    static #deceit(t) {

        try {

            FElement.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TElement} t @this {YElement} */
    static #verify(t) {

        const {



        } = t;

        FElement.#handle(t);

    };
    /** @param {TElement} t @this {YElement} */
    static #handle(t) {

        let {



        } = t;

        if (t.string) jectSupplement(t, elementStringDecompose(t.string));

        t = {

            ...t,

        };

    };
    /** @param {TElement} t @this {YElement} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.element = elementCreate(

            t.type,
            t.id,
            t.classes,
            t.overId,
            t.overTypes,
            t.overClasses,
            t.childs,
            t.text,
            t.property,

        );

    };

};

/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YElement extends FElement {



};