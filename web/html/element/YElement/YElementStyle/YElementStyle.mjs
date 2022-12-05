import { YElement } from "../YElement.mjs";
import { jectFill } from "../../../../../ject/ject.mjs";
import { stringReplace } from "../../../../../string/string.mjs";
import { arrayRemoveByElement } from "../../../../../array/array.mjs";
import { YStyle } from "../../../style/YStyle/YStyle.mjs";
import { YRept } from "../../../../../ject/YJect/YRept/YRept.mjs";
import { YString } from "../../../../../string/YString/YString.mjs";

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

        t.type = 'style';
        t.overTypes = ['head'];

        if (t.classes) t.classes.push('style');
        else t.classes = ['style'];

    };
    /** @param {TElementStyle} t @this {YElementStyle} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        this.appendReport(_ => new YString()

            .changePostfix(';\n')
            .paste(

                `Стилей: ${[this.classes, this.commons, this.identificators].reduce((p, c) => p + c.length, 0)}`,

            )
            .get()

        , 'f', 'Сведения');

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
     * Метод получения свойств стиля в виде объекта.
     * - Версия `0.0.0`
     * @param {string} label Метка.
    */
    get(label) {

        let sl;

        switch(label[0]) {

            default: sl = this.commons; break;
            case '.': sl = this.classes; break;
            case '#': sl = this.identificators; break;

        };

        return sl.find(s => s.label === label).get();

    };
    /**
     * Метод добавления стилей.
     * @param {...[string, CSSStyleDeclaration, Array<string|YStyle>]} styles
    */
    append(...styles) {

        styles.forEach(s => {

            switch (s.constructor) {

                case Array: s = new YStyle(this, ...s); break;

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

            arrayRemoveByElement(s.location, s);

        });

        return this;

    };
    /**
     * Метод для изменения стиля по его метке.
     * - Версия `0.0.0`
     * @param {string} label Метка.
     * @param {CSSStyleDeclaration} property Стиль.
    */
    change(label, property) {

        if (label) {

            let s;

            switch (label[0]) {

                default: s = this.commons; break;
                case '.': s = this.classes; break;
                case '#': s = this.identificators; break;

            };

            s.find(s => s.label === label).change(property);

        };

        return this;

    };

};