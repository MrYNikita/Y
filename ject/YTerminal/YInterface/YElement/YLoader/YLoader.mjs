import { jectAdopt } from "../../../../ject.mjs";
import { YString } from "../../../../../string/YString/YString.mjs";
import { YElement } from "../YElement.mjs";

//#region YT

/** ### YLoaderT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YLoader`
 *
 * Основной параметр модуля `YLoader`.
 *
 * @typedef {YLoaderTE&YLoaderTU} YLoaderT
 *
*/
/** ### YLoaderTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YLoader`
 *
 * Параметр наследования `YLoader`.
 *
 * @typedef {{[p in Exclude<keyof DLoader,keyof SLoader>|Exclude<keyof SLoader,keyof DLoader>]:(DLoader[p]&SLoader[p])}} YLoaderTE
 *
*/
/** ### YLoaderTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YLoader`
 *
 * Уникальные параметры `YLoader`.
 *
 * @typedef YLoaderTU
 * @prop {any} _
 *
*/

//#endregion

class SLoader extends YElement {



};
class DLoader extends SLoader {

    /**
     * ### exec
     *
     * Результирующая функция.
     *
     * ***
     * @type {(function(this:YLoader):void)?}
     * @public
    */
    exec;
    /**
     * ### size
     *
     * Размер.
     *
     * ***
     * @type {number}
     * @public
    */
    size = 12;
    /**
     * ### symbol
     *
     * Символ.
     *
     * ***
     * @type {string}
     * @public
    */
    symbol = '#';

};
class ILoader extends DLoader {

    /**
     * ### state
     *
     * Состояние.
     *
     * ***
     * @type {boolean}
     * @protected
    */
    state = false;
    /**
     * ### percent
     *
     * Процент.
     *
     * ***
     * @type {number}
     * @protected
    */
    percent = 0;

};
class MLoader extends ILoader {

    /**
     * ### check
     * - Версия `0.0.0`
     * - Модуль `YLoader`
     * ***
     *
     * Метод проверки загрузчика.
     *
     * ***
     *
     * @protected
    */
    check() {

        this.terminal.display();

        if (!this.state && this.percent === 100) {

            this.exec.apply(this, []);

            this.state = true;

        };

    };

};
class FLoader extends MLoader {

    /**
     * ### YLoader.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YLoaderT} t
    */
    constructor(t = {}) {

        t = FLoader.#before(Object.values(arguments));

        FLoader.#deceit(t);

        super(t);

        FLoader.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YLoader].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YLoaderT} */
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
    /** @arg {YLoaderT} t @this {YLoader} */
    static #deceit(t) {

        try {

            FLoader.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YLoaderT} t @this {YLoader} */
    static #verify(t) {

        const {



        } = t;

        FLoader.#handle(t);

    };
    /** @arg {YLoaderT} t @this {YLoader} */
    static #handle(t) {



    };
    /** @arg {YLoaderT} t @this {YLoader} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);



    };

};

/**
 * ### YLoader
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YLoader`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YLoader extends FLoader {

    /**
     * ### setPercent
     * - Версия `0.0.0`
     * - Модуль `YLoader`
     * ***
     *
     * Метод установки значения процента.
     *
     * ***
     * @arg {number} percent `Процент`
     * @public
    */
    setPercent(percent) {

        if (percent || percent === 0) {

            if (this.state) {

                this.state = false;

            };

            this.percent = percent;

            this.changePercent(0);

        };

        return this;

    };
    /**
     * ### changePercent
     * - Версия `0.0.0`
     * - Модуль `YLoader`
     * ***
     *
     * Метод изменения процента на указанное значение.
     *
     * ***
     * @arg {number} number `Изменение`
     * @public
    */
    changePercent(number) {

        if (!this.state) {

            this.percent += number;

            if (this.percent > 100) {

                this.percent = 100;

            } else if (this.percent < 0) {

                this.percent = 0;

            };

            this.check();

        };

        return this;

    };

    getLayout() {

        return new YString()

            .setColor('cyanLight')
            .paste(this.symbol.repeat(Math.floor(this.size * (this.percent / 100))))
            .resetColor(1, 1)
            .get(true)

    };

};