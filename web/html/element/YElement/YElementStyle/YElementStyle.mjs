import { YElement } from "../YElement.mjs";
import { jectAdopt } from "../../../../../ject/ject.mjs";
import { stringReplace, stringReplaceAll, stringReplaceAllMore } from "../../../../../string/string.mjs";
import { arrayRemoveByElement } from "../../../../../array/array.mjs";
import { YStyle } from "../../../style/YStyle/YStyle.mjs";
import { YString } from "../../../../../string/YString/YString.mjs";
import { YStyleAnimation } from "../../../style/YStyle/YStyleAnimation/YStyleAnimation.mjs";
import { configString } from "../../../../../config.mjs";

/**
 * @typedef TBElementStyle
 * @prop {any} _
 * @typedef {DElementStyle&TBElementStyle&import("../YElement.mjs").TElement} TElementStyle
*/

class SElementStyle extends YElement {

    static reportBlocks = [

        [
            /** @arg {YElementStyle} y */
            y => new YString()

                .changePostfix(';\n')
                .paste(

                    `Стилей: ${[...y.classes, ...y.commons, ...y.identificators, ...y.animations, ...y.types].length}`,
                    `Стилей типов: ${y.types.length}`,
                    `Стилей классов: ${y.classes.length}`,
                    `Стилей анимаций: ${y.animations.length}`,
                    `Стилей обыкновенных: ${y.commons.length}`,
                    `Стилей идентификаторов: ${y.identificators.length}`,

                )
                .get()

            , 'f', 'Данные'],

    ];

    /**
     * Метод поиска элемента по `id`.
     * - Версия `0.0.0`
     * @arg {string} id Идентификатор поиска.
    */
    static findById(id) {

        const e = document.querySelector('#' + id);

        if (e) return new YElementStyle(e);
        else return null;

    };
    /**
     * Метод поиска элементов по `id` и оборачивания их в `YElementStyle`.
     * - Версия `0.0.0`
     * @arg {...string} id Идентификаторы поиска.
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
     *  @arg {TElementStyle} t
    */
    constructor(t = {}) {

        t = FElementStyle.#before(Object.values(arguments));

        FElementStyle.#deceit(t);

        super(t);

        FElementStyle.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YElementStyle].includes(t[0]?.constructor)) {

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
    /** @arg {TElementStyle} t @this {YElementStyle} */
    static #deceit(t) {

        try {

            FElementStyle.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TElementStyle} t @this {YElementStyle} */
    static #verify(t) {

        const {



        } = t;

        FElementStyle.#handle(t);

    };
    /** @arg {TElementStyle} t @this {YElementStyle} */
    static #handle(t) {

        t.type = 'style';
        t.selectors = ['head'];

        if (t.classes) t.classes.push('style');
        else t.classes = ['style'];

    };
    /** @arg {TElementStyle} t @this {YElementStyle} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * Класс `YElementStyle`.
 *
 * Данный класс предназначен для работы с элементом `HTMLElementStyle`.
 * Экземпляр размещается в заголовок документа.
 *
 * Селекторы размещенные в данном элементе сохранены для того, чтобы быстро ссылаться на их значения.
 * Все селекторы хранятся, как экземпляры `YStyle`, что позволяет изменять стили страницы через свойства данных экземпляров.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `web.html`
 * - Цепочка `BDVHC`
*/
export class YElementStyle extends FElementStyle {

    /**
     * Метод получения свойств стиля в виде объекта.
     * - Версия `0.0.0`
     * @arg {string} label Метка.
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
     * @arg {...[string, CSSStyleDeclaration, Array<string|YStyle>]} styles
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
     * @arg {...YStyle|string} ys
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
     * @arg {string} label Метка.
     * @arg {CSSStyleDeclaration} property Стиль.
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
    /**
     * Метод для форматирования таблицы в многострочный вариант.
     * Данный вариант позволяет избежать ряда ошибок безопасности на некоторых сайтах и сервисах.
     * Также данный вариант таблицы более удобен для изучения таблицы.
     * - Версия `0.0.0`
    */
    formatLines() {

        this.element.innerHTML = new YString(this.element.innerHTML)

            .replaceAll(

                [`;\n${configString.tabValue}`, ';'],
                [` {\n${configString.tabValue}`, '\\{'],
                ['}\n', '\\}'],
                [`}`, `${configString.tabValue}\\}`],

            )
            .get();

        return this;

    };

};