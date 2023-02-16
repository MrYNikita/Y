//#region YI

import { YBind } from "./bind/class.mjs";
import { YBasic } from "../../YBasic/YBasic.mjs";
import { YComb } from "./bind/comb/class.mjs";

//#endregion
//#region YT

/** ### YReceiverT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 *
 * Основной параметр модуля `YReceiver`.
 *
 * @typedef {YReceiverTE&YReceiverTU} YReceiverT
 *
*/
/** ### YReceiverTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 *
 * Параметр наследования `YReceiver`.
 *
 * @typedef {{[p in Exclude<keyof DReceiver,keyof SReceiver>|Exclude<keyof SReceiver,keyof DReceiver>]:(DReceiver[p]&SReceiver[p])}} YReceiverTE
 *
*/
/** ### YReceiverTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 *
 * Уникальные параметры `YReceiver`.
 *
 * @typedef YReceiverTU
 * @prop {any} _
 *
*/

//#endregion

class SReceiver extends YBasic {

    /**
     * ### binds
     *
     * Общие привязки.
     *
     * ***
     * @type {YBind[]}
     * @public
    */
    static binds = [];

};
class DReceiver extends SReceiver {

    /**
     * ### binds
     *
     * Привязки.
     *
     * ***
     * @type {YBind[]}
     * @public
    */
    binds = [];
    /**
     * ### modeOptimal
     *
     * Оптимальный режим.
     *
     * Если активен, то будет способствовать оптимизации внутренних процессов приёмника:
     * - Для привязок будут удаляться дубликаты функций. Как ссылочные, так и значимые.
     *
     * Данный режим повысит производительсность и экономию ресурсов, но может привести к поведению отличному от ожидаемого.
     *
     * ***
     * @type {boolean}
     * @public
    */
    modeOptimal = true;

};
class IReceiver extends DReceiver {



};
class MReceiver extends IReceiver {

    /**
     * ### fundBind
     * - Версия `0.0.0`
     * - Модуль `ject\terminal\receiver`
     * ***
     *
     * Метод для поиска привязки по её значениям.
     *
     * ***
     * @arg {YComb} comb `Комбинация`
     * @public
    */
    findBind(comb) {

        const f = this.binds.find(b => b.comb.equal(comb));

        return f ?? null;

    };

};
class FReceiver extends MReceiver {

    /**
     * ### YReceiver.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YReceiverT} t
    */
    constructor(...t) {

        t = FReceiver.#before(t);

        super(Object.assign(t, {}));

        FReceiver.#handle.apply(this, [t]);
        FReceiver.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YReceiver].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YReceiverT} */
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
    /** @arg {YReceiverT} t @this {YReceiver} */
    static #deceit(t) {

        try {

            FReceiver.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YReceiverT} t @this {YReceiver} */
    static #verify(t) {

        const {



        } = t;

        FReceiver.#handle(t);

    };
    /** @arg {YReceiverT} t @this {YReceiver} */
    static #handle(t) {

        if (t.binds instanceof Array) {

            t.binds = t.binds.filter(b => b instanceof YBind);

        } else {

            t.binds = [];

        };

    };
    /** @arg {YReceiverT} t @this {YReceiver} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YReceiver
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\receiver`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YReceiver extends FReceiver {

    /**
     * ### signal
     * - Версия `0.0.0`
     * - Модуль `Receiver`
     * ***
     *
     * Метод сигнализации.
     *
     * ***
     * @arg {YComb} comb `Комбинация`
     * @arg {YReceiver} recepient `Получатель`
     * @public
    */
    signal(comb) {

        return false;
        // if (recepient instanceof YReceiver && recepient !== this) {

        //     return recepient.receive(comb);

        // } else {

        //     return false;

        // };

    };
    /**
     * ### receive
     * - Версия `0.1.0`
     * - Модуль `Receiver`
     * ***
     *
     * Метод принятия сигналов.
     *
     * ***
     * @arg {YComb} comb `Комбинация`
     * @public
    */
    receive(comb) {

        if (comb.constructor !== YComb) {

            if (comb instanceof Array) {

                comb = new YComb(...comb);

            } else {

                comb = new YComb(comb);

            };

        };

        if (!this.signal(comb)) {

            let signal = false;

            const f = this.findBind(comb);

                if (f) {

                    f.exec();

                    signal = true;

                };

            return signal;

        };

        return false;

    };

    /**
     * ### appendBinds
     * - Версия `0.0.0`
     * - Модуль `Receiver`
     * ***
     *
     * Метод добавления новых привязок.
     *
     * ***
     * @arg {...YBind} binds `Привязки`
     * @public
    */
    appendBinds(...binds) {

        binds.filter(b => b instanceof YBind).forEach(b => {

            const find = this.findBind(b.comb);

            if (find === b) {

                return;

            } else if (find && find !== b) {

                if (this.modeOptimal) {

                    b.funcs = b.funcs.filter(bf => !find.funcs.includes(bf) && find.funcs.every(ff => ff.toString() !== bf.toString()));

                };

                find.funcs.push(...b.funcs);

            } else {

                b.receiver = this;

                this.binds.push(b);

            };

        });

        return this;

    };

};