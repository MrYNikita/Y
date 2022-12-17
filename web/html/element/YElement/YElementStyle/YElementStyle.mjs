import { YElement } from "../YElement.mjs";
import { jectFill } from "../../../../../ject/ject.mjs";
import { stringReplace } from "../../../../../string/string.mjs";
import { arrayRemoveByElement } from "../../../../../array/array.mjs";
import { YStyle } from "../../../style/YStyle/YStyle.mjs";
import { YRept } from "../../../../../ject/YJect/YRept/YRept.mjs";
import { YString } from "../../../../../string/YString/YString.mjs";
import { YStyleAnimation } from "../../../style/YStyle/YStyleAnimation/YStyleAnimation.mjs";

/**
 * @typedef TBElementStyle
 * @prop {any} _
 * @typedef {DElementStyle&TBElementStyle&import("../YElement.mjs").TElement} TElementStyle
*/

class SElementStyle extends YElement {

    /**
     * Метод поиска элемента по `id`.
     * - Версия `0.0.0`
     * @param {string} id Идентификатор поиска.
    */
    static findById(id) {

        const e = document.querySelector('#' + id);

        console.log(e, id);

        if (e) return new YElementStyle(e);
        else return null;

    };
    /**
     * Метод поиска элементов по `id` и оборачивания их в `YElementStyle`.
     * - Версия `0.0.0`
     * @param {...string} id Идентификаторы поиска.
    */
    static findAllById(...id) {

        if (id.length) {

            const es = [];

            id.filter(f => f).forEach(i => es.push(SElementStyle.findById(i)));

            return es;

        };

        return null;

    };

};
class DElementStyle extends SElementStyle {

    /**
     * Стили для типов.
     * @type {YStyle[]}
    */
    types = [];
    /**
     * Стили для классов.
     * @type {YStyle[]}
    */
    classes = [];
    /**
     * Стили для классов.
     * @type {YStyle[]}
    */
    commons = [];
    /**
     * Стили анимаций.
     * @type {YStyleAnimations[]}
    */
    animations = [];
    /**
     * Стили для элементов.
     * @type {YStyle[]}
    */
    identificators = [];

    /** @type {HTMLElementStyleElement} */
    element = this.element;

};
class IElementStyle extends DElementStyle {



};
class MElementStyle extends IElementStyle {



};
class FElementStyle extends MElementStyle {

    /**
     * Контсруктор класса `YElementStyle`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TElementStyle} t
    */
    constructor(t = {}) {

        t = FElementStyle.#before(Object.values(arguments));

        FElementStyle.#deceit(t);

        super(t);

        FElementStyle.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TElementStyle&DElementStyle} */
            const r = {};

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

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
        t.selectors = ['head'];

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
 * - Тип `SDIMFY`
 * - Версия `0.3.0`
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

        switch (label[0]) {

            default: sl = this.commons; break;
            case '.': sl = this.classes; break;
            case '#': sl = this.identificators; break;
            case '~': sl = this.animations; label = stringReplace(label, '@keyframes ', '~'); break;

        };

        return sl.find(s => s.label === label)?.get() ?? null;

    };
    /**
     * Метод добавления стилей.
     * @param {...[string, CSSStyleDeclaration, Array<string|YStyle>]} styles
    */
    append(...styles) {

        styles.forEach(s => {

            switch (s.constructor) {

                case Array: {

                    if (s[0][0] === `~`) s = new YStyleAnimation(this, ...s);
                    else s = new YStyle(this, ...s);

                } break;

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

            if (s.constructor === String) { };

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