//#region YI

import { YEntity } from '../../class.mjs';
import { YBind } from './bind/class.mjs';
import { YComb } from '../listener/comb/class.mjs';
import { YResponse } from './response/class.mjs';
import { arrayUnite } from '../../../../array/module.mjs';
import { receiverApply } from './module.mjs';

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

/** ### YReceiverT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver`
 * 
 * Основной параметр модуля `YReceiver`.
 * 
 * @typedef {YReceiverTE&YReceiverTU} YReceiverT
 * 
*/
/** ### YReceiverTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver`
 * 
 * Параметр наследования `YReceiver`.
 * 
 * @typedef {{[p in Exclude<keyof DReceiver,keyof SReceiver>|Exclude<keyof SReceiver,keyof DReceiver>]:(DReceiver[p]&SReceiver[p])}} YReceiverTE
 * 
*/
/** ### YReceiverTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver`
 * 
 * Уникальные параметры `YReceiver`.
 * 
 * @typedef YReceiverTU
 * @prop {any} _
 * 
*/

/** ### receiverTTInteract
 * - Тип `TT`
 * - Версия `0.0.0`
 * 
 * 
 * 
 * @typedef {import('../element/interact/class.mjs').YInteract} receiverTTInteract
 * 
*/

//#endregion

class SReceiver extends YEntity {

    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    /**
     * ### combs
     * 
     * Комбинации.
     * 
     * *** 
     * @type {YComb[]} 
     * @public
    */
    static combs = [];

};
class DReceiver extends SReceiver {

    /**
     * ### combs
     * 
     * Комбинации.
     * 
     * *** 
     * @type {YComb[]} 
     * @public
    */
    combs = [];
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

};
class IReceiver extends DReceiver {

    /**
     * ### recepient
     *
     *
     *
     * ***
     * @type {(YReceiver|receiverTTInteract)?}
     * @public
    */
    recepient = null;

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

        const binds = [];

        binds.push(...this.binds);

        if (this.constructor.binds) {

            binds.push(...this.constructor.binds);

        };

        const f = binds.find(b => b.comb.equal(comb));

        return f ?? null;

    };

};
class FReceiver extends MReceiver {

    /**
     * ### YReceiver.constructor
     * 
     * 
     * 
     * ***
     * @arg {YReceiverT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FReceiver.#before(t), {}));

        FReceiver.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YReceiverT} */
        let r = {};

        if (t?.length === 1 && [Object, YReceiver].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YReceiverT} t @this {YReceiver} */
    static #deceit(t) {

        try {

            FReceiver.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YReceiverT} t @this {YReceiver} */
    static #verify(t) {

        const {



        } = t;

        FReceiver.#handle.apply(this, [t]);

    };
    /** @arg {YReceiverT} t @this {YReceiver} */
    static #handle(t) {



        FReceiver.#create.apply(this, [t]);

    };
    /** @arg {YReceiverT} t @this {YReceiver} */
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
 * ### YReceiver
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
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

        if (this.recepient && this.recepient !== this) {

            return this.recepient.receive(comb);

        } else {

            return null;

        };

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
     * @arg {YReceiver?} recepient `Получатель`
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

        const signal = this.signal(comb);

        if (signal) {

            return signal;

        } else {

            return this.applyCombs(comb);

        };

        // const response = this.applyCombs(comb);

        // if (response) {

        //     return response;

        // } else {

        //     return this.signal(comb);

        // };

    };

    /**
     * ### applyComb
     * - Версия `0.0.0`
     * - Модуль `ject\entity\terminal\receiver`
     * ***
     * 
     * Метод принятия комбинаций.
     * 
     * ***
     * @arg {...YComb} combs `Комбинации`
     * @public
    */
    applyCombs(...combs) {

        return receiverApply(this, ...combs);
        
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