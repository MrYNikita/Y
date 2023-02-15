//#region YI

import { YBasic } from "../../../YBasic/YBasic.mjs";
import { YReceiver } from "../../Receiver/Receiver.mjs";

//#endregion
//#region YT

/** ### YBindT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YBind`
 *
 * Основной параметр модуля `YBind`.
 *
 * @typedef {YBindTE&YBindTU} YBindT
 *
*/
/** ### YBindTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YBind`
 *
 * Параметр наследования `YBind`.
 *
 * @typedef {{[p in Exclude<keyof DBind,keyof SBind>|Exclude<keyof SBind,keyof DBind>]:(DBind[p]&SBind[p])}} YBindTE
 *
*/
/** ### YBindTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YBind`
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
     * ### code
     *
     * Коды.
     *
     * ***
     * @type {string[]}
     * @public
    */
    code = [];
    /**
     * ### func
     *
     * Функция, привязанная к коду.
     *
     * Первым аргументом данной функции выступает приёмник.
     *
     * ***
     * @type {(function(YReceiver?):void)?}
     * @public
    */
    func = null;
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
    modeUpdate = false;

};
class IBind extends DBind {

    /**
     * ### receiver
     *
     * Приёмник.
     *
     * Данный объект выступает обладателем привязки, который ожидает её вызова.
     *
     * После вызова, привязка выполняет назначенную ей функцию.
     *
     * ***
     * @type {YReceiver?}
     * @protected
    */
    receiver = null;

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
     *  @arg {YBindT} t
    */
    constructor(t = {}) {

        t = FBind.#before(Object.values(arguments));

        FBind.#deceit(t);

        super(t);

        FBind.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YBind].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YBindT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 4: r.modeUpdate = t[3];
                case 3: r.func = t[2];
                case 2: r.code = t[1];
                case 1: r.receiver = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YBindT} t @this {YBind} */
    static #deceit(t) {

        try {

            FBind.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YBindT} t @this {YBind} */
    static #verify(t) {

        const {



        } = t;

        FBind.#handle(t);

    };
    /** @arg {YBindT} t @this {YBind} */
    static #handle(t) {

        if (t.receiver.constructor !== YReceiver) {

            t.receiver = null;

        };

        if (t.code.constructor === String) {

            t.code = [t.code];

        };

        if (t.modeUpdate) {

            t.modeUpdate = true;

        } else {

            t.modeUpdate = false;

        };

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
 * - Модуль `YBind`
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

        if (this.func) {

            this.func(this.receiver);

        };

        return this;

    };

};