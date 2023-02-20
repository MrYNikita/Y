//#region YI

import { YString } from '../../../../../string/YString/YString.mjs';
import { YElement } from '../class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YLocationT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\location`
 *
 * Основной параметр модуля `YLocation`.
 *
 * @typedef {YLocationTE&YLocationTU&YElement} YLocationT
 *
*/
/** ### YLocationTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\location`
 *
 * Параметр наследования `YLocation`.
 *
 * @typedef {{[p in Exclude<keyof DLocation,keyof SLocation>|Exclude<keyof SLocation,keyof DLocation>]:(DLocation[p]&SLocation[p])}} YLocationTE
 *
*/
/** ### YLocationTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\location`
 *
 * Уникальные параметры `YLocation`.
 *
 * @typedef YLocationTU
 * @prop {any} _
 *
*/

//#endregion

class SLocation extends YElement {



};
class DLocation extends SLocation {

    /**
     * ### path
     *
     * Путь.
     *
     * Массив пройденных меток.
     *
     * Последняя метка в массиве обозначает текущее местоположение.
     *
     * ***
     * @type {string[]}
     * @public
    */
    path = [];

};
class ILocation extends DLocation {



};
class MLocation extends ILocation {



};
class FLocation extends MLocation {

    /**
     * ### YLocation.constructor
     *
     *
     *
     * ***
     *  @arg {...YLocationT} t
    */
    constructor(...t) {

        super(Object.assign(t = FLocation.#before(t), {}));

        FLocation.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {} */
        let r = {};

        if (t?.length === 1 && [Object, YLocation].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YLocationT} t @this {YLocation} */
    static #deceit(t) {

        try {

            FLocation.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YLocationT} t @this {YLocation} */
    static #verify(t) {

        const {



        } = t;

        FLocation.#handle.apply(this, [t]);

    };
    /** @arg {YLocationT} t @this {YLocation} */
    static #handle(t) {



        FLocation.#create.apply(this, [t]);

    };
    /** @arg {YLocationT} t @this {YLocation} */
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
 * ### YLocation
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\terminal\interface\element\location`
 * - Цепочка `BDVHC`
 * ***
 *
 *
 *
 * ***
 *
*/
export class YLocation extends FLocation {

    /**
     * ### append
     * - Версия `0.0.0`
     * - Модуль `YLocation`
     * ***
     *
     * Метод добавления метки.
     *
     * ***
     * @arg {string} label
     * @public
    */
    append(label) {

        this.path.push(label);

        return this;

    };
    /**
     * ### remove
     * - Версия `0.0.0`
     * - Модуль `YLocation`
     * ***
     *
     * Метод отката текущей метки.
     *
     * ***
     *
     * @public
    */
    remove() {

        if (this.path.length) {

            this.path.pop();

        };

        return this;

    };

    getLayout() {

        return new YString()

            .paste(this.path.join(config.defaultSymbolSpliter))
            .get(true);

    };

    /** @arg {YInterface} intf `Интерфейс` */
    setInterface(intf) {

        SLocation.prototype.setInterface.apply(this, [intf]);

        if (this.interface.terminal) {

            this.interface.terminal

                .appendHandler('go', { func: y => this.append(y.interfaceActive.label) })
                .appendHandler('back', { func: y => this.remove() });


        };

        return this;

    };

};