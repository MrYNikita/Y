import { YString } from "../../../../string/YString/YString.mjs";
import { jectFill } from "../../../../ject/ject.mjs";
import { YElementStyle } from "../../element/YElement/YElementStyle/YElementStyle.mjs";
import { stringConvertCamelCaseToDelimetr, stringFind, stringHandle, stringReplace } from "../../../../string/string.mjs";
import { YStyleSet } from "./YStyleSet/YStyleSet.mjs";
import { YJect } from "../../../../ject/YJect/YJect.mjs";

/**
 * @typedef TBStyle
 * @prop {CSSStyleDeclaration} property
 * @typedef {DStyle&TBStyle} TStyle
*/

class SStyle extends YJect {



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
     * @type {YStyle[]}
    */
    location;
    /**
     * Проекторы.
     *
     * Это массив, указывающий данному `стилю`, на какие стили ему необходимо ориентироваться.
     * Данный стиль подписывается на все указанные в массиве стили, чтобы в последствии перенимать их поведение.
     *
     * Таким образом, любое изменение в стиле, приписанному указанному экземпляру, отразится и на нём самом.
     *
     * @type {Array<YStyle>}
    */
    projectors = [];

};
class IStyle extends DStyle {


    /**
     * Проекции.
     *
     * Это массив, указывает указанным стилям, что они должны повторять за данным стилем.
     *
     * @type {Array<YStyle>}
    */
    projections = [];
};
class FStyle extends IStyle {

    /**
     * Контсруктор класса `YStyle`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TStyle} t
    */
    constructor(t = {}) {

        t = FStyle.#before(Object.values(arguments));

        FStyle.#deceit(t);

        super(t);

        FStyle.#create.apply(this, [t]);

    };

    /** @param {Array<any>} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            /** @type {TStyle} */
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

        switch (t.label[0]) {

            default: t.location = t.tabel.commons; break;
            case '.': t.location = t.tabel.classes; break;
            case '#': t.location = t.tabel.identificators; break;
            case '~': t.location = t.tabel.animations; t.label = '@keyframes ' + t.label.slice(1); break;

        };

    };
    /** @param {TStyle} t @this {YStyle} */
    static #create(t) {

        const {

            tabel,

        } = t;

        jectFill(this, t);

        this.location.push(this);

        this.tabel.element.innerText += `${this.label}{}`;

        this.change(t.property);

        if (this.projectors.length) this.reflect(...this.projectors);

    };

};
class MStyle extends FStyle {



};

/**
 * Класс `YStyle`.
 *
 * Данный класс предназначен для работы со стилями.
 * - Тип `SDIFMY-1.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YStyle extends MStyle {

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

            .find(label + ' ?{(?<f>.*?)}')
            .replaceAll(['\n', ';'])
            .remove(1)
            .castToJect()

    };
    /**
     * Метод изменения свойства стиля.
     * @param {CSSStyleDeclaration} set Набор `YSet`'ов или объект с описанием свойств.
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

            } else if (value) {

                if (value instanceof Object) {

                    

                } else ystr.replace([`${property}:${value};}`, /}/]);

            };

            tabel.element.innerText = stringReplace(tabel.element.innerText, ystr.get(), label + ' ?{.*?}');

            this.projections.forEach(s => s.change(set));

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
    /**
     * Метод для отражения от указанных стилей.
     * - Версия `0.0.0`
     * @param {...string|YStyle} styles Стили.
    */
    reflect(...styles) {

        if (this.projectors) this.projectors = styles.map(p => [...this.tabel.classes, ...this.tabel.identificators, ...this.tabel.commons, ...this.tabel.types].find(s => p.constructor === String ? p === s.label : p === s)).filter(p => p);
        else this.projectors = [];

        this.projectors.forEach(s => {

            if (s.projections.includes(this)) return;

            s.projections.push(this);

            this.change(s.get());

        });

        return this;

    };

};