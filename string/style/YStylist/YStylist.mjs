import { YBasic } from '../../../ject/YBasic/YBasic.mjs';
import { jectFill } from '../../../ject/ject.mjs';
import { stringFindAll, stringGetTranducer, stringPaste, stringPasteWrap } from '../../string.mjs';
import { arrayAppend, arrayPaste } from '../../../array/array.mjs';
import { colorClear, colorGet, colorGetMap, colorGetReset, colorReset, colorVEREReset } from '../color/color.mjs';
import { YStylistMapColor } from './YStylistMap/YStylistMapColor/YStylistMapColor.mjs';
import { YStylistMapUnderline } from './YStylistMap/YStylistMapUnderline/YStylistMapUnderline.mjs';
import { underlineGet, underlineGetReset } from '../underline/underline.mjs';
import { YStylistMap } from './YStylistMap/YStylistMap.mjs';

//#region YT

/** ### YStylistT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YStylist`
 *
 * Основной параметр модуля `YStylist`.
 *
 * @typedef {YStylistTE&YStylistTU&import('../../string.mjs').stringTString} YStylistT
 *
*/
/** ### YStylistTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YStylist`
 *
 * Параметр наследования `YStylist`.
 *
 * @typedef {{[p in Exclude<keyof DStylist,keyof SStylist>|Exclude<keyof SStylist,keyof DStylist>]:(DStylist[p]&SStylist[p])}} YStylistTE
 *
*/
/** ### YStylistTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YStylist`
 *
 * Уникальные параметры `YStylist`.
 *
 * @typedef YStylistTU
 * @prop {any} _
 *
*/

/** ### YStylistTVColor
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YStylist`
 *
 *
 *
 * @typedef {import('../color/color.mjs').colorTVColor} YStylistTVColor
 *
*/

//#endregion

class SStylist extends YBasic {



};
class DStylist extends SStylist {



};
class IStylist extends DStylist {

    /**
     * ### mapColor
     *
     * Карта цветов `ansi`.
     *
     * ***
     * @type {YStylistMapColor}
     * @protected
    */
    mapColor = new YStylistMapColor();
    /**
     * ### mapUnderline
     *
     * Карта стилистических точек для `asci` подчеркиваний.
     *
     * ***
     * @type {YStylistMapUnderline}
     * @protected
    */
    mapUnderline = new YStylistMapUnderline();

};
class MStylist extends IStylist {



};
class FStylist extends MStylist {

    /**
     * ### `YStylist.constructor`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YStylistT} t
    */
    constructor(t = {}) {

        t = FStylist.#before(Object.values(arguments));

        FStylist.#deceit(t);

        super(t);

        FStylist.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YStylist].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YStylistT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.string = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YStylistT} t @this {YStylist} */
    static #deceit(t) {

        try {

            FStylist.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YStylistT} t @this {YStylist} */
    static #verify(t) {

        const {



        } = t;

        FStylist.#handle(t);

    };
    /** @arg {YStylistT} t @this {YStylist} */
    static #handle(t) {



    };
    /** @arg {YStylistT} t @this {YStylist} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);

        if (t.string) this.mapColor = colorGetMap(t.string);

    };

};

/**
 * ### YStylist
 * - Тип `SDIMFY`
 * - Версия `0.2.0`
 * - Модуль `string.style.YStylist`
 * - Цепочка `BDVHC`
 * ***
 * Класс стилизаторов для декорирования строк.
 *
 * Экземпляры данного класса хранят карты стилей.
 * Каждая карта представлена массивами вида `y:x:style`, где `style` (стилем) является строковой вставкой,
 * а `y` и `x` - позициями для их размещения. Вставки отвечают за стилизацию строки. Данные вставки не замещают символов исходной строки. При указании
 * нескольких стилей одной категории для одинаковой позиции в карте будет использован последний указанный стиль.
 * Таким образом, `y` и `x` являются парными ключами для каждой карты.
 *
 * Под категориями стилей понимается их предназначение. Так стили отвечающие за цвета будут выступать стилями категории цветов,
 * в то время как стили отвечающие за тип подчеркивания, будут выступать стилями категории подчеркивания. Для каждой категории существует своя карта.
 *
 * После завершения стилизации строки, карта применяет свои стили на итоговой строке, стилизуя её.
 *
 * Рекомендуется никогда не использовать стилизованные строки в алгоритмах, так как в них внедрены стилизованные вставки.
 * Предварительно стоит убедиться, что строка не стилизована и если окажется, что она является таковой, то перед её использованием
 * в алгоритмах следует убрать все встроенные в неё стили или сделать резервную копию исходной строки и после провести удаление стилей для копии.
*/
export class YStylist extends FStylist {

    /**
     * ### stylize
     * - Версия `0.0.0`
     * - Модуль `YStylist`
     * ***
     *
     * Метод стилизации указанной строки в соответствии с картами стилей.
     *
     * ***
     * @arg {string} string `Строка`
     * @public
    */
    stylize(string) {

        if (string) {

            string = colorClear(string);

            const c = stringFindAll(string, /\n/)?.length;

            const ms = Object.entries(this).filter(e => e[0].match('map')).map(e => e[1]).reduce((p, c) => {

                c.lines.forEach(l => {

                    const f = p.lines.find(pl => pl[0] === l[0]);

                    if (f) f[1].push(...l[1].slice());
                    else p.lines.push([l[0], l[1].slice()]);

                });

                return p;

            }, new YStylistMap()).regulate().lines.slice(0, c ? c + 1 : 1).forEach((l, li) => l[1].slice().reverse().forEach(c => string = stringPasteWrap(string, c.insert, c.position, li, 0)));

            return string + colorReset() + underlineGetReset();

        } else return '';

    };

    /**
     * ### clearColor
     * - Версия `0.0.0`
     * - Модуль `YStylist`
     * ***
     *
     * Метод удаления цветовых точек из цветовой карты.
     *
     * ***
     *
    */
    clearColor() {

        this.mapColor = [];

        return this;

    };
    /**
     * ### clearColorByLine
     * - Версия `0.0.0`
     * - Модуль `YStylist`
     * ***
     *
     * Метод удаления цветовых точек для указанной линии цветовой карты.
     *
     * ***
     * @arg {number} line `Линия`.
    */
    clearColorByLine(line = 0) {

        this.mapColor = this.mapColor.filter(l => l[0] === l);

        return this;

    };

    /**
     * ### setColor
     * - Версия `0.0.0`
     * - Модуль `YStylist`
     * ***
     *
     * Метод установки цветовой точки на карте в указанной позиции.
     *
     * ***
     * @arg {number} y `Индекс линии`
     *
     * - По умолчанию `0`
     * @arg {number} x `Индекс позиции`
     *
     * При указании уже занятой цветовой позиции, значение точки, находившейся на ней ранее, будет заменено на данное значение.
     *
     * - По умолчанию `0`
     * @arg {number} length `Длина`
     *
     * При значении отличном от нуля определяет цветовую область, при попадании на которую прочие цветовые точки будут удалены.
     * @arg {boolean} end `Эндинг`
     *
     * При значении `true` устанавливает после данной точки вставку завершения окраски.
     * Если данный эндинг будет размещен перед другим цветом (без учета вставляемого), то он будет заменен на него.
     *
     * - По умолчанию `false`
     * @arg {YStylistTVColor} background `Цвет фона`
     * @arg {YStylistTVColor} foreground `Цвет символов`
    */
    setColor(foreground, background, y = 0, x = 0) {

        if (foreground || background) this.mapColor.append(y, x, colorGet(foreground, background));

        return this;

    };
    /**
     * ### resetColor
     * - Версия `0.0.0`
     * - Модуль `YStylist`
     * ***
     *
     * Метод установки эндинга цветовых `ansi` вставок.
     *
     * ***
     * @arg {number} y
     * @arg {number} x
     * @arg {boolean} foreground
     * @arg {boolean} background
     * @public
    */
    resetColor(y, x, foreground, background) {

        if (foreground || background) this.mapColor.append(y, x, colorGetReset(foreground, background));

        return this;

    };

    /**
     * ### pasteColor
     * - Версия `0.0.0`
     * - Модуль `YStylist`
     * ***
     *
     * Метод вставки цветовой точки.
     *
     * Позволяет разместить нужную цветовую точку по заданным индексам.
     *
     * ***
     * @arg {number} y `Индекс линии`
     *
     * - По умолчанию `0`
     * @arg {number} x `Индекс позиции`
     *
     * - По умолчанию `0`
     * @arg {number} length `Длина`
     *
     * При значении отличном от нуля смещает все цвета в строке начиная с индекса равному вставляемому цвету.
     * Если не указана длина и цвет вставет на уже занятую позицию, то данный цвет заменит собой существоваший ранее.
     * @arg {boolean} end `Эндинг`
     *
     * При значении `true` устанавливает после данной точки вставку завершения окраски.
     * Если данный эндинг будет размещен перед другим цветом (без учета вставляемого), то он будет заменен на него.
     *
     * - По умолчанию `false`
     * @arg {YStylistTVColor} background `Цвет фона`
     * @arg {YStylistTVColor} foreground `Цвет символов`
    */
    pasteColor(foreground, background, y = 0, x = 0, length = 0, end = false) {

        const sc = colorGet(foreground, background);

        let ml = this.mapColor.find(l => l[0] === y);

        if (!ml) this.mapColor.push(ml = [y, []]);
        if (length) ml[1].forEach(c => c[0] >= x ? c[0] += length : null);

        ml[1].push([x, sc]);

        if (end && length >= 1) ml[1].push([x + (length ?? 0), this.getColorLastByLine(y, x)?.[1] ?? colorReset()]);

        this.regulateColor();

        return this;

    };
    /**
     * Метод добавления нового значения.
     * - Версия `0.1.0`
     * @arg {number} y Индекс линии.
     * @arg {number} x Индекс позиции.
     * @arg {string} string Строка вствки.
    */
    pasteColorByString(string, y = 0, x = 0) {

        const ls = colorClear(string).split('\n').map(s => s.length);

        colorGetMap(string).forEach((l, ci) => {

            ci += y;

            let la = this.getColorLastByLine(ci, x);
            let ml = this.mapColor.find(c => c[0] === ci);

            if (!ml) this.mapColor.push(ml = [ci, []]);
            else ml[1].forEach(c => (c[0] >= x) ? c[0] += ls[ci] : 0);

            l.forEach(c => c[0] += x);

            if (la && l.length && l.at(-1)[1].match(colorVEREReset)) l.at(-1)[1] = la[1];

            ml[1].push(...l);

        });

        this.regulateColor();

        return this;

    };

    /**
     * ### setUnderline
     * - Версия `0.0.0`
     * - Модуль `YStylist`
     * ***
     *
     * Метод размещения стилистической точки `asci` подчеркивания текста.
     *
     * ***
     * @arg {number} y `Индекс линии`
     *
     * - По умолчанию `0`
     * @arg {number} x `Индекс позиции`
     *
     * - По умолчанию `0`
     * @public
    */
    setUnderline(y = 0, x = 0) {

        this.mapUnderline.append(y, x, underlineGet());

        return this;

    };

};

/**
 * @file YStylist.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/