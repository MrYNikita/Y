import { YElement } from "../YElement.mjs";
import { jectFill } from "../../../../../ject/ject.mjs";
import { stringReplace } from "../../../../../string/string.mjs";
import { arrayRemoveByElement } from "../../../../../array/array.mjs";
import { YStyle } from "../../../style/YStyle/YStyle.mjs";

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
     * @type {Array<YStyle>}
    */
    types = [];
    /**
     * Стили для классов.
     * @type {Array<YStyle>}
    */
    classes = [];
    /**
     * Стили для классов.
     * @type {Array<YStyle>}
    */
    commons = [];
    /**
     * Стили для элементов.
     * @type {Array<YStyle>}
    */
    identificators = [];

    /** @type {HTMLElementStyleElement} */
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

        t = FElementStyle.#before(arguments);

        FElementStyle.#deceit(t);

        super(t);

        FElementStyle.#create.apply(this, [t]);

    };

    /** @param {TElementStyle} t @this {[]} */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            const r = {};



            return r;

        } else return {};

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
 * Класс элементов стиля.
 *
 * Данный класс предназначен для работы с элементом `HTMLElementStyle`.
 * Экземпляр размещается в заголовок документа.
 *
 * Селекторы размещенные в данном элементе сохранены для того, чтобы быстро ссылаться на их значения.
 * Все селекторы хранятся, как экземпляры `YStyle`, что позволяет изменять стили страницы через свойства данных экземпляров.
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

            s.tabel = this;

            if (s.constructor === Object) s = new YStyle(s);
            else switch (s.label[0]) {

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

            s.change(s.property);

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
<<<<<<< HEAD

=======
            
>>>>>>> main
            arrayRemoveByElement(s.location, s);

        });

        return this;

    };

};