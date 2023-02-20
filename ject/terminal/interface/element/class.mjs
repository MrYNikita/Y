//#region YI

import { YBasic } from '../../../YBasic/YBasic.mjs';
import { YTerminal } from '../../class.mjs';
import { YInterface } from '../class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YElementT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element`
 *
 * Основной параметр модуля `YElement`.
 *
 * @typedef {YElementTE&YElementTU} YElementT
 *
*/
/** ### YElementTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element`
 *
 * Параметр наследования `YElement`.
 *
 * @typedef {{[p in Exclude<keyof DElement,keyof SElement>|Exclude<keyof SElement,keyof DElement>]:(DElement[p]&SElement[p])}} YElementTE
 *
*/
/** ### YElementTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element`
 *
 * Уникальные параметры `YElement`.
 *
 * @typedef YElementTU
 * @prop {any} _
 *
*/

//#endregion

class SElement extends YBasic {



};
class DElement extends SElement {

    /**
     * ### label
     *
     * Метка.
     *
     * ***
     * @type {string}
     * @public
    */
    label;
    /**
     * ### header
     *
     * Заголовок.
     *
     * ***
     * @type {string?}
     * @public
    */
    header;
    /**
     * ### coords
     *
     * Координаты.
     *
     * ***
     * @type {[number, number]}
     * @public
    */
    coords;
    /**
     * ### terminal
     *
     * Терминал.
     *
     * ***
     * @type {YTerminal?}
     * @public
    */
    terminal = null;
    /**
     * ### transfer
     *
     * Передача.
     *
     * Помечает элемент, как (не) передаваемый.
     *
     * Передаваемые элементы сохраняются при переходе между интерфейсами.
     *
     * Передаваемый элемент перестанет отображаться после того, как произойдет откат за один интерфейс от того, который его объявил.
     *
     * ***
     * @type {boolean}
     * @public
    */
    transfer;
    /**
     * ### permanent
     *
     * Постояноство.
     *
     * Постоянные элементы не удаляются при переходе между интерфейсами.
     *
     * ***
     * @type {boolean}
     * @public
    */
    permanent;
    /**
     * ### interface
     *
     * Интерфейс.
     *
     * ***
     * @type {YInterface?}
     * @public
    */
    interface = null;

};
class IElement extends DElement {



};
class MElement extends IElement {



};
class FElement extends MElement {

    /**
     * ### YElement.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {...YElementT} t
    */
    constructor(...t) {

        t = FElement.#before(t);

        super(Object.assign(t, {}));

        FElement.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YElement].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YElementT} */
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
    /** @arg {YElementT} t @this {YElement} */
    static #deceit(t) {

        try {

            FElement.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YElementT} t @this {YElement} */
    static #verify(t) {

        const {



        } = t;

        FElement.#handle.apply(this, [t]);

    };
    /** @arg {YElementT} t @this {YElement} */
    static #handle(t) {



        FElement.#create.apply(this, [t]);

    };
    /** @arg {YElementT} t @this {YElement} */
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
 * ### YElement
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YElement extends FElement {

    /**
     * ### getLayout
     * - Версия `0.0.0`
     * - Модуль `ject\terminal\interface\element`
     * ***
     *
     * Метод получения разметки элемента.
     *
     * ***
     *
     * @public
    */
    getLayout() {

        return '';

    };

    /**
     * ### setInterface
     * - Версия `0.0.0`
     * - Модуль `ject\terminal\interface\element`
     * ***
     *
     * Метод установки интерфейса для элемента.
     *
     * ***
     * @arg {YInterface} intf `Интерфейс`
     * @public
    */
    setInterface(intf) {

        if (intf instanceof YInterface) {

            this.terminal = intf.terminal;
            this.interface = intf;

        };

        return this;

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/