import { YString } from "../../../../string/YString/YString.mjs";
import { jectFill } from "../../../../ject/ject.mjs";
import { YElementStyle } from "../../element/YElement/YElementStyle/YElementStyle.mjs";
import { stringFind, stringReplace, stringShield } from "../../../../string/string.mjs";
import { YStyleSet } from "./YStyleSet/YStyleSet.mjs";
import { YJect } from "../../../../ject/YJect/YJect.mjs";
import { YRegExp } from "../../../../regexp/YRegExp/YRegExp.mjs";
import { regexpCastFromString } from "../../../../regexp/regexp.mjs";

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
class MStyle extends IStyle {



};
class FStyle extends MStyle {

    /**
     * Контсруктор класса `YStyle`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TStyle} t
    */
    constructor(t = {}) {

        t = FStyle.#before(Object.values(arguments));

        FStyle.#deceit(t);

        super(t);

        FStyle.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YStyle].includes(t[0]?.constructor)) {

            return t[0];

        } else if (t?.length) {

            /** @type {TStyle&DStyle} */
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
    /** @arg {TStyle} t @this {YStyle} */
    static #deceit(t) {

        try {

            FStyle.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TStyle} t @this {YStyle} */
    static #verify(t) {

        const {



        } = t;

        FStyle.#handle(t);

    };
    /** @arg {TStyle} t @this {YStyle} */
    static #handle(t) {

        switch (t.label[0]) {

            default: t.location = t.tabel.commons; break;
            case '.': t.location = t.tabel.classes; break;
            case '#': t.location = t.tabel.identificators; break;
            case '~': t.location = t.tabel.animations; t.label = '@keyframes ' + t.label.slice(1); break;

        };

    };
    /** @arg {TStyle} t @this {YStyle} */
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

/**
 * Класс `YStyle`
 *
 * Данный класс предназначен для работы со стилями.
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `web.html`
 * - Цепочка `BDVHC`
*/
export class YStyle extends FStyle {

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
     * - Версия `0.1.0`
     * @arg {CSSStyleDeclaration} set Набор `YSet`'ов или объект с описанием свойств.
    */
    change(set) {

        const {

            tabel,

        } = this;

        const label = stringShield(this.label);

        if (set) Object.entries(set).forEach(p => {

            const s = new YStyleSet(...p);

            const ystr = new YString(stringFind(tabel.element.innerText, new RegExp(`${label} ?\\{.*?\\}`)) ?? '');

            if (ystr.copy().find(s.property + new RegExp(':.*?;')).get()) {

                if (!s.value) ystr.replace([``, s.property + `:.*?;`]);
                else ystr.replace([`${s.property}:${s.value};`, s.property + `:.*?;`]);

            } else if (s.value) {

                if (s.value instanceof Object) {


                } else ystr.replace([`${s.property}:${s.value};}`, /\}/]);

            };

            tabel.element.innerText = stringReplace(tabel.element.innerText, ystr.get(), new RegExp(label + ' ?\\{.*?\\}'));

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
     * @arg {...string|YStyle} styles Стили.
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