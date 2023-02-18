//#region YI

import { YBind } from '../../../receiver/bind/class.mjs';
import { YComb } from '../../../receiver/bind/comb/class.mjs';
import { receiverExecBind } from '../../../receiver/module.mjs';
import { YElement } from '../class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);


//#endregion
//#region YT

/** ### YInteractorT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor`
 *
 * Основной параметр модуля `YInteractor`.
 *
 * @typedef {YInteractorTE&YInteractorTU&import('../class.mjs').YElementT} YInteractorT
 *
*/
/** ### YInteractorTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor`
 *
 * Параметр наследования `YInteractor`.
 *
 * @typedef {{[p in Exclude<keyof DInteractor,keyof SInteractor>|Exclude<keyof SInteractor,keyof DInteractor>]:(DInteractor[p]&SInteractor[p])}} YInteractorTE
 *
*/
/** ### YInteractorTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor`
 *
 * Уникальные параметры `YInteractor`.
 *
 * @typedef YInteractorTU
 * @prop {any} _
 *
*/

//#endregion

class SInteractor extends YElement {

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
class DInteractor extends SInteractor {

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
class IInteractor extends DInteractor {



};
class MInteractor extends IInteractor {



};
class FInteractor extends MInteractor {

    /**
     * ### YInteractor.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YInteractorT} t
    */
    constructor(...t) {

        t = FInteractor.#before(t);

        super(Object.assign(t, {}));

        FInteractor.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YInteractor].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YInteractorT} */
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
    /** @arg {YInteractorT} t @this {YInteractor} */
    static #deceit(t) {

        try {

            FInteractor.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YInteractorT} t @this {YInteractor} */
    static #verify(t) {

        const {



        } = t;

        FInteractor.#handle.apply(this, [t]);

    };
    /** @arg {YInteractorT} t @this {YInteractor} */
    static #handle(t) {



        FInteractor.#create.apply(this, [t]);

    };
    /** @arg {YInteractorT} t @this {YInteractor} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptByDefault(config);

        };

    };

};

/**
 * ### YInteractor
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\interactor`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YInteractor extends FInteractor {

    /**
     * ### get
     * - Версия `0.0.0`
     * - Модуль `ject\terminal\interface\element\interactor`
     * ***
     *
     *
     *
     * ***
     *
     * @public
    */
    get() {



    };

    /**
     * ### receive
     * - Версия `0.0.0`
     * - Модуль `ject\terminal\interface\element\interactor`
     * ***
     *
     * Метод приёма комбинаций.
     *
     * ***
     * @arg {YComb} comb `Комбинация`
     * @public
    */
    receive(comb) {

        return receiverExecBind(this, comb);

    };

};