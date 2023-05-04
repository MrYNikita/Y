//#region YI

import { condIsNumberLimit } from '../bool/cond/module.mjs';
import { YJect } from '../ject/class.mjs';
import { numberGetRandomFrac, numberGetRandomReal } from './module.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YNumberT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `number`
 *
 * Основной параметр модуля `YNumber`.
 *
 * @typedef {YNumberTE&YNumberTU} YNumberT
 *
*/
/** ### YNumberTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `number`
 *
 * Параметр наследования `YNumber`.
 *
 * @typedef {{[p in Exclude<keyof DNumber,keyof SNumber>|Exclude<keyof SNumber,keyof DNumber>]:(DNumber[p]&SNumber[p])}} YNumberTE
 *
*/
/** ### YNumberTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `number`
 *
 * Уникальные параметры `YNumber`.
 *
 * @typedef YNumberTU
 * @prop {any} _
 *
*/

//#endregion

class SNumber extends YJect {

    /**
     * ### getRandom
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод получения случайного числа из указанного диапазона.
     *
     * ***
     * @arg {number} min `Минимум`
     * @arg {number} max `Максимум`
     * @arg {boolean?} frac `Дробное`
     * @public
    */
    static getRandom(min, max, frac) {

        return frac ? new YNumber(numberGetRandomFrac(min, max)) : new YNumber(numberGetRandomReal(min, max));

    };

};
class DNumber extends SNumber {

    /**
     * ### modeConstant
     *
     * Режим константы.
     *
     * ***
     * @type {boolean}
     * @public
    */
    modeConstant;

};
class INumber extends DNumber {

    /**
     * ### value
     *
     * Значение.
     *
     * ***
     * @type {number}
     * @protected
    */
    value;
    /**
     * ### history
     *
     * История.
     *
     * ***
     * @type {number[]}
     * @protected
    */
    history;

};
class MNumber extends INumber {

    /**
     * ### change
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод изменения значения.
     *
     * ***
     * @arg {number} value `Значение`
     * @protected
    */
    change(value) {

        if (!this.modeConstant && ((value && value.constructor === Number) || value === 0)) {

            this.history.push(this.value);

            this.value = value;

        };

        return this;

    };

};
class FNumber extends MNumber {

    /**
     * ### YNumber.constructor
     *
     *
     *
     * ***
     * @arg {...YNumberT} t
    */
    constructor(...t) {

        super(Object.assign(t = FNumber.#before(t), {}));

        FNumber.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YNumberT} */
        let r = {};

        if (t?.length === 1 && [Object, YNumber].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.value = t[0];

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YNumberT} t @this {YNumber} */
    static #deceit(t) {

        try {

            FNumber.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YNumberT} t @this {YNumber} */
    static #verify(t) {

        const {



        } = t;

        FNumber.#handle.apply(this, [t]);

    };
    /** @arg {YNumberT} t @this {YNumber} */
    static #handle(t) {



        FNumber.#create.apply(this, [t]);

    };
    /** @arg {YNumberT} t @this {YNumber} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

    };

    [Symbol.toPrimitive](to) {

        switch (to) {

            case 'string': return this.value.toString();
            case 'number', 'default': return this.value;
            case 'boolean': return true;

        };

    };

};

/**
 * ### YNumber
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `number`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YNumber extends FNumber {

    /**
     * ### get
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод получения текущего числа.
     *
     * ***
     * @public
    */
    get() {

        return this.value;

    };
    /**
     * ### set
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод установки значения.
     *
     * ***
     * @arg {number} value `Значение`
     * @public
    */
    set(value) {

        return this.change(value);

    };
    /**
     * ### add
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод приращения значения.
     *
     * ***
     * @arg {...number} numbers `Числа`
     * @public
    */
    add(...numbers) {

        if (!this.modeConstant) {

            numbers.filter(n => n && n.constructor === Number).forEach(n => this.change(this.value + n));

        };

        return this;

    };
    /**
     * ### dec
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод уменьшения значения.
     *
     * ***
     * @arg {...number} numbers `Числа`
     * @public
    */
    dec(...numbers) {

        if (!this.modeConstant) {

            numbers.filter(n => n && n.constructor === Number).forEach(n => this.change(this.value - n));

        };

        return this;

    };
    /**
     * ### div
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод деления.
     *
     * ***
     * @arg {...number} numbers `Числа`
     * @public
    */
    div(...numbers) {

        if (!this.modeConstant) {

            numbers.filter(n => n && n.constructor === Number).forEach(n => this.change(this.value / n));

        };

        return this;

    };
    /**
     * ### mul
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод умножения.
     *
     * ***
     * @arg {...number} numbers `Числа`
     * @public
    */
    mul(...numbers) {

        if (!this.modeConstant) {

            numbers.filter(n => n && n.constructor === Number).forEach(n => this.change(this.value * n));

        };

        return this;

    };
    /**
     * ### ere
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод вовзедения в степень.
     *
     * ***
     * @arg {number} degree `Степень`
     * @public
    */
    ere(degree) {

        return this.change(this.value ** degree);

    };
    /**
     * ### mod
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод взятия остатка от числа.
     *
     * ***
     * @arg {number} number `Число`
     * @public
    */
    mod(number) {

        return this.change(this.value % number);

    };
    /**
     * ### abs
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод извлечения модуля числа.
     *
     * ***
     * @public
    */
    abs() {

        return this.change(Math.abs(this.value));;

    };
    /**
     * ### sin
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод вычисления сиунса.
     *
     * ***
     * @public
    */
    sin() {

        return this.change(Math.sin(this.value));

    };
    /**
     * ### cos
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод вычисления косинуса.
     *
     * ***
     * @public
    */
    cos() {

        return this.change(Math.cos(this.value));

    };
    /**
     * ### tan
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод вычисления тангенса.
     *
     * ***
     * @public
    */
    tan() {

        return this.change(Math.tan(this.value));

    };
    /**
     * ###
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод вычисления экспоненты.
     *
     * ***
     * @public
    */
    exp() {

       return this.change(Math.exp(this.value));

    };
    /**
     * ### log
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод вычисления логорифма.
     *
     * ***
     * @arg {number} number `Число`
     * @public
    */
    log(number) {

        return this.change(Math.log(number));

    };
    /**
     * ### back
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод отката значения на указанное количество операций.
     *
     * ***
     * @arg {number} count `Счет`
     * - Дефолт `1`
     * @public
    */
    back(count = 1) {

        if (!this.modeConstant && this.history.length && condIsNumberLimit(count)) {

            if (count > this.history.length) {

                count = this.history.length;

            } else if (count <= 0) {

                return this;

            } else {

                this.value = this.history.splice(this.history.length - count)[0];

            };

        };

        return this;

    };
    /**
     * ### deny
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод смены знака.
     *
     * ***
     * @public
    */
    deny() {

        return this.change(this.value * -1);

    };
    /**
     * ### sqrt
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод извлечения квадратного корня.
     *
     * ***
     * @public
    */
    sqrt() {

        return this.change(Math.sqrt(this.value));

    };
    /**
     * ### ceil
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод округления до максимума.
     *
     * ***
     * @public
    */
    ceil() {

        return this.change(Math.ceil(this.value));

    };
    /**
     * ### real
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод отброса дробной части.
     *
     * ***
     * @public
    */
    real() {

        return this.change(Math.trunc(this.value));

    };
    /**
     * ### frac
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод отброса целой части.
     *
     * ***
     * @public
    */
    frac() {

        return this.change(this.getFrac());

    };
    /**
     * ### exec
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод выполнения кода.
     *
     * ***
     * @arg {function(this):void} func `Функция`
     * @public
    */
    exec(func) {

        func(this);

        return this;

    };
    /**
     * ### floor
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод округления до минимума.
     *
     * ***
     * @public
    */
    floor() {

        return this.change(Math.floor(this.value));

    };
    /**
     * ### round
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод округления от 0.5.
     *
     * ***
     *
     * @public
    */
    round() {

        return this.change(Math.round(this.value));

    };
    /**
     * ### compare
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод сравнения с указанным числом.
     *
     * ***
     * @arg {number} number `Число`
     * @public
    */
    compare(number) {

        if ((number && number.constructor === Number) || number === 0) {

            if (number > this.value) {

                return -1;

            } else if (number < this.value) {

                return 1;

            } else {

                return 0;

            };

        };

        return 1;

    };

    /**
     * ### getFrac
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод получения дробной части числа.
     *
     * ***
     * @public
    */
    getFrac() {

        const part = this.value.toString().split('.');

        if (part.length === 2) {

            const result = [0, part[1]].join('.');

            return part[0][0] === '-' ? +result * -1 : +result;

        } else {

            return 0;

        };

    };
    /**
     * ### getPrecent
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод получения процента от указанного числа.
     *
     * ***
     * @arg {number} number `Число`
     *
     * От указанного числа вычисляется процент.
     * @public
    */
    getPrecent(number) {

        if (number && number.constructor === Number) {

            return this.value / (number / 100);

        };

        return NaN;

    };

    /**
     * ### toPrecent
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод приведения текущего значения к указанному проценту.
     *
     * ***
     * @arg {number} precent `Процент`
     * @arg {number?} precentNow `Текущий процент`
     *
     * Позволяет указать, что текущее значение является процентом от указанного числа.
     *
     * Например, указав данный параметр как `97` при значении `543`, метод будет воспринимать значение в `543` как `97` процентов ои нужного числа.
     * В следствии этого, метод предварительно доведет значение `543` до `100%`, прибавив ещё `3%`.
     * @public
    */
    toPrecent(precent, precentNow) {

        if (precentNow && precentNow.constructor === Number) {

            if (precentNow < 0) {

                precentNow *= -1;

            };

            this.change(this.value /  precentNow * precent);

        } else {

            this.change(this.value / 100 * precent);

        };

        return this;

    };
    /**
     * ### toPositive
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод делающий число положительным.
     *
     * ***
     * @public
    */
    toPositive() {

        if (this.value < 0) {

            this.deny();

        };

        return this;

    };
    /**
     * ### toNegative
     * - Версия `0.0.0`
     * - Модуль `number`
     * ***
     *
     * Метод делающий число отрицательным.
     *
     * ***
     * @public
    */
    toNegative() {

        if (this.value > 0) {

            this.deny();

        };

        return this;

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/