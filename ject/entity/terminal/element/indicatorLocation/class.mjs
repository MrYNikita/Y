//#region YI

import { YString } from '../../../../../string/class.mjs';
import { structureFrame } from '../../../../../string/structure/module.mjs';
import { YConsole } from '../../../console/class.mjs';
import { YElement } from '../class.mjs';

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

/** ### YIndicatorLocationT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YIndicatorLocation`.
 * 
 * @typedef {YIndicatorLocationTE&YIndicatorLocationTU} YIndicatorLocationT
 * 
*/
/** ### YIndicatorLocationTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YIndicatorLocation`.
 * 
 * @typedef {{[p in Exclude<keyof DIndicatorLocation,keyof SIndicatorLocation>|Exclude<keyof SIndicatorLocation,keyof DIndicatorLocation>]:(DIndicatorLocation[p]&SIndicatorLocation[p])}} YIndicatorLocationTE
 * 
*/
/** ### YIndicatorLocationTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YIndicatorLocation`.
 * 
 * @typedef YIndicatorLocationTU
 * @prop {any} _
 * 
*/

//#endregion

class SIndicatorLocation extends YElement {

    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;

};
class DIndicatorLocation extends SIndicatorLocation {

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
     * @protected
    */
    path = [];

};
class IIndicatorLocation extends DIndicatorLocation {



};
class MIndicatorLocation extends IIndicatorLocation {



};
class FIndicatorLocation extends MIndicatorLocation {

    /**
     * ### YIndicatorLocation.constructor
     * 
     * 
     * 
     * ***
     * @arg {YIndicatorLocationT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FIndicatorLocation.#before(t), {}));

        FIndicatorLocation.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YIndicatorLocationT} */
        let r = {};

        if (t?.length === 1 && [Object, YIndicatorLocation].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YIndicatorLocationT} t @this {YIndicatorLocation} */
    static #deceit(t) {

        try {

            FIndicatorLocation.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YIndicatorLocationT} t @this {YIndicatorLocation} */
    static #verify(t) {

        const {



        } = t;

        FIndicatorLocation.#handle.apply(this, [t]);

    };
    /** @arg {YIndicatorLocationT} t @this {YIndicatorLocation} */
    static #handle(t) {



        FIndicatorLocation.#create.apply(this, [t]);

    };
    /** @arg {YIndicatorLocationT} t @this {YIndicatorLocation} */
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
 * ### YIndicatorLocation
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YIndicatorLocation extends FIndicatorLocation {

    /**
     * ### append
     * - Версия `0.0.0`
     * ***
     *
     * Метод добавления метки.
     *
     * ***
     * @arg {string} labels
     * @public
    */
    append(label) {

        this.path.push(label);

        return this;

    };
    /**
     * ### remove
     * - Версия `0.0.0`
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

    display() {

        YConsole

            .setCursorTo(...this.coords)
            .writeLine(

                structureFrame(3, 30, 'Indicator Location', 'thin', `.${config.spliter}${this.path.join(config.spliter)}`)

            )


        return this;

    };
    /**
     * @arg {YInterface} intf `Интерфейс`
    */
    setInterface(intf) {

        if (intf) {

            SIndicatorLocation.prototype.setInterface.apply(this, [intf]);

            intf.terminal.appendHandlers(

                ['go', ['', () => this.append(this.terminal.recepient.label)]],
                ['back', ['', () => this.remove()]],

            );

        };

        return this;

    };

};