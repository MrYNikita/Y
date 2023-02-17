//#region YI

import { YComb } from "./comb/class.mjs";
import { YBasic } from "../../../YBasic/YBasic.mjs";
import { YReceiver } from "../class.mjs";

//#endregion
//#region YT

/** ### YBindT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\bind`
 *
 * Основной параметр модуля `YBind`.
 *
 * @typedef {YBindTE&YBindTU} YBindT
 *
*/
/** ### YBindTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\bind`
 *
 * Параметр наследования `YBind`.
 *
 * @typedef {{[p in Exclude<keyof DBind,keyof SBind>|Exclude<keyof SBind,keyof DBind>]:(DBind[p]&SBind[p])}} YBindTE
 *
*/
/** ### YBindTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\bind`
 *
 * Уникальные параметры `YBind`.
 *
 * @typedef YBindTU
 * @prop {any} _
 *
*/

//#endregion

class SBind extends YBasic {



};
class DBind extends SBind {

    /**
     * ### comb
     *
     * Комбинация.
     *
     * ***
     * @type {YComb}
     * @public
    */
    comb;
    /**
     * ### func
     *
     * Функция, привязанная к коду.
     *
     * Первым аргументом данной функции выступает приёмник.
     *
     * ***
     * @type {(function(YReceiver?):void)[]}
     * @public
    */
    funcs = [];
    /**
     * ### modeUpdate
     *
     * Режим обновления.
     *
     * При активном режиме обновления, вызов привязок может привести к обновлению состояний зависимых от привязки объектов.
     *
     * ***
     * @type {boolean}
     * @public
    */
    update = false;

};
class IBind extends DBind {



};
class MBind extends IBind {



};
class FBind extends MBind {

    /**
     * ### YBind.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YBindT} t
    */
    constructor(...t) {

        t = FBind.#before(t);

        super(Object.assign(t, {}));

        FBind.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YBind].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YBindT} */
            const r = {};

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YBindT} t @this {YBind} */
    static #deceit(t) {

        try {

            FBind.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YBindT} t @this {YBind} */
    static #verify(t) {

        const {



        } = t;

        FBind.#handle.apply(this, [t]);

    };
    /** @arg {YBindT} t @this {YBind} */
    static #handle(t) {

        if (t.receiver?.constructor !== YReceiver) {

            t.receiver = null;

        };

        if (t.funcs?.constructor === Function) {

            t.funcs = [t.funcs];

        };

        switch (t.comb?.constructor) {

            case Array: t.comb = new YComb(...t.comb); break;
            case String, Object: t.comb = new YComb(t.comb); break;

        };

        if (t.modeUpdate) {

            t.modeUpdate = true;

        } else {

            t.modeUpdate = false;

        };

        FBind.#create.apply(this, [t]);

    };
    /** @arg {YBindT} t @this {YBind} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (this.receiver) {

            this.receiver.appendBinds(this);

        };

    };

};

/**
 * ### YBind
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\bind`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YBind extends FBind {

    /**
     * ### exec
     * - Версия `0.0.0`
     * - Модуль `Bind`
     * ***
     *
     * Метод выполнения привязки.
     *
     * ***
     *
     * @public
    */
    exec() {

        if (this.funcs instanceof Array) {

            this.funcs.filter(f => f instanceof Function).forEach(f => f());

        };

        return this;

    };

};