//#region YI

import { YJect } from '../../ject/class.mjs';
import { condIsBool, condIsFloat, condIsNumber, condIsString, condIsValid } from './module.mjs';

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

/** ### YCondT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Основной параметр модуля `YCond`.
 *
 * ***
 *
 * @typedef {YCondTE&YCondTU} YCondT
 *
*/
/** ### YCondTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Параметр наследования `YCond`.
 *
 * @typedef {{[p in Exclude<keyof DCond,keyof SCond>|Exclude<keyof SCond,keyof DCond>]:(DCond[p]&SCond[p])}} YCondTE
 *
*/
/** ### YCondTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные параметры `YCond`.
 *
 * @typedef YCondTU
 * @prop {function(...):void=} funcSucs
 * @prop {function(...):void=} funcFail
 * @prop {function(...):boolean} condition
 *
*/
/** ### YCondTUP
 * - Тип `TUP`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 *
 * Уникальные генеративные параметры `YCond`.
 *
 * @typedef YCondTUG
 * @prop {G1=} sucs
 * @prop {G2=} fail
 * @template G1,G2
 *
*/

//#endregion

/**
 * @template {YCondTUG<G1,G2>} G
*/
class SCond extends YJect {

    /**
     * ### isBool
     * - Версия `0.0.0`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод проверки значения на принадлежность к логическим значениям.
     *
     * ***
     * @arg value
     * @public
    */
    static isBool(value) {

        return condIsBool(value);

    };
    /**
     * ### isValid
     * - Версия `0.0.0`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод проверки значения на валидность.
     *
     * ***
     * @arg value
     * @public
    */
    static isValid(value) {

        return condIsValid(value);

    };
    /**
     * ### isFloat
     * - Версия `0.0.0`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод проверки значения на принадлежность к дробным числам.
     *
     * ***
     * @arg value `Значение`
     * @public
    */
    static isFloat(value) {

        return condIsFloat(value);

    };
    /**
     * ### isNumber
     * - Версия `0.0.0`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод проверки значения на принадлежнсоть к числу.
     *
     * ***
     * @arg value
     * @public
    */
    static isNumber(value) {

        return condIsNumber(value);

    };
    /**
     * ### isString
     * - Версия `0.0.0`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод проверки значения на принадлежность к строкам.
     *
     * ***
     * @arg value
     * @public
    */
    static isString(value) {

        return condIsString(value);

    };

};
/**
 * @extends {SCond<G>}
 * @template {YCondTUG<G1,G2>} G
*/
class DCond extends SCond {



};
/**
 * @extends {DCond<G>}
 * @template {YCondTUG<G1,G2>} G
*/
class ICond extends DCond {

    /**
     * ### sucs
     *
     * Успех.
     *
     * ***
     * @type {G['sucs']}
     * @protected
    */
    sucs;
    /**
     * ### fail
     *
     * Провал.
     *
     * ***
     * @type {G['fail']}
     * @protected
    */
    fail;
    /**
     * ### conds
     *
     * Условия.
     *
     * ***
     * @type {YCond[]}
     * @protected
    */
    conds = [];
    /**
     * ### funcSucs
     *
     * Функция успеха.
     *
     * ***
     * @type {(function(...):void)[]}
     * @protected
    */
    funcSucs;
    /**
     * ### funcFail
     *
     * Функция провала.
     *
     * ***
     * @type {(function(...):void)[]}
     * @protected
    */
    funcFail;
    /**
     * ### condition
     *
     * Условие.
     *
     * ***
     * @type {(function(...):boolean)[]}
     * @protected
    */
    condition;

};
/**
 * @extends {ICond<G>}
 * @template {YCondTUG<G1,G2>} G
*/
class MCond extends ICond {



};
/**
 * @extends {MCond<G>}
 * @template {YCondTUG<G1,G2>} G
*/
class FCond extends MCond {

    /**
     * ### YCond.constructor
     *
     *
     *
     * ***
     * @arg {YCondT&G} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FCond.#before(t), {}));

        FCond.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YCondT} */
        let r = {};

        if (t?.length === 1 && [Object, YCond].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.sucs = t[0];

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YCondT} t @this {YCond} */
    static #deceit(t) {

        try {

            FCond.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YCondT} t @this {YCond} */
    static #verify(t) {

        const {



        } = t;

        FCond.#handle.apply(this, [t]);

    };
    /** @arg {YCondT} t @this {YCond} */
    static #handle(t) {

        FCond.#create.apply(this, [t]);

    };
    /** @arg {YCondT} t @this {YCond} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

    };

};

/**
 * ### YCond
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `bool\cond`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 * @extends {FCond<G>}
 * @template {YCondTUG<G1,G2>} G
*/
export class YCond extends FCond {

    /**
     * ### check
     * - Версия `0.0.0`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод выполнения проверки для указанных аргументов.
     *
     * ***
     * @arg {...any} transmits `Аргументы`
     * @public
    */
    check(...transmits) {

        if (this.condition(...transmits) && this.conds.every(cond => cond.check(...transmits))) {

            this.funcSucs && this.funcSucs() && this.conds.forEach(cond => cond.funcSucs());

            if (this.sucs) {

                return this.sucs;

            } else {

                return true;

            };

        } else {

            this.funcsFail && this.funcFail() && this.conds.forEach(cond => cond.funcFail());

            if (this.fail !== undefined) {

                return this.fail;

            } else {

                return false;

            };

        };

    };
    /**
     * ### combine
     * - Версия `0.0.0`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод комбинирования условий.
     *
     * ***
     * @arg {...YCond} conds Условия.
     * @public
    */
    combine(...conds) {

        this.conds.push(...conds.filter(cond => !this.conds.includes(cond)));

        return this;

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/