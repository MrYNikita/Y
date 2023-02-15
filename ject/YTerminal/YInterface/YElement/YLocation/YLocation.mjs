import { YString } from "../../../../../string/YString/YString.mjs";
import { jectAdopt } from "../../../../ject.mjs";
import { YInterface } from "../../YInterface.mjs";
import { YElement } from "../YElement.mjs";

//#region YT

/** ### YLocationT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YLocation`
 *
 * Основной параметр модуля `YLocation`.
 *
 * @typedef {YLocationTE&YLocationTU&import("../YElement.mjs").YElementT} YLocationT
 *
*/
/** ### YLocationTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YLocation`
 *
 * Параметр наследования `YLocation`.
 *
 * @typedef {{[p in Exclude<keyof DLocation,keyof SLocation>|Exclude<keyof SLocation,keyof DLocation>]:(DLocation[p]&SLocation[p])}} YLocationTE
 *
*/
/** ### YLocationTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YLocation`
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

    /**
     * ### calculate
     * - Версия `0.0.0`
     * - Модуль `YLocation`
     * ***
     *
     *
     *
     * ***
     *
     * @protected
    */
    calculate() {

        return this;

    };

};
class FLocation extends MLocation {

    /**
     * ### YLocation.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YLocationT} t
    */
    constructor(t = {}) {

        t = FLocation.#before(Object.values(arguments));

        FLocation.#deceit(t);

        super(t);

        FLocation.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YLocation].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YLocationT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1:

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YLocationT} t @this {YLocation} */
    static #deceit(t) {

        try {

            FLocation.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YLocationT} t @this {YLocation} */
    static #verify(t) {

        const {



        } = t;

        FLocation.#handle(t);

    };
    /** @arg {YLocationT} t @this {YLocation} */
    static #handle(t) {



    };
    /** @arg {YLocationT} t @this {YLocation} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);



    };

};

/**
 * ### YLocation
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YLocation`
 * - Цепочка `BDVHC`
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

            .paste(this.path.join(' / '))
            .get(true);

    };

    /**
     * @arg {YInterface} intf `Интерфейс`
    */
    setInterface(intf) {

        SLocation.prototype.setInterface.apply(this, [intf]);

        this.terminal.appendHandler('go', y => {

            this.append(y.interfaceActive.label);

        }).appendHandler('back', y => {

            this.remove();

        });

        return this;

    };

};