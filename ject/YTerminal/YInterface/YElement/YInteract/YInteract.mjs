import { arrayUnique } from "../../../../../array/array.mjs";
import { jectFill } from "../../../../ject.mjs";
import { YElement } from "../YElement.mjs";

//#region YT

/** ### YInteractT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YInteract`
 *
 * Основной параметр модуля `YInteract`.
 *
 * @typedef {YInteractTE&YInteractTU&import("../YElement.mjs").YElementT} YInteractT
 *
*/
/** ### YInteractTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YInteract`
 *
 * Параметр наследования `YInteract`.
 *
 * @typedef {{[p in Exclude<keyof DInteract,keyof SInteract>|Exclude<keyof SInteract,keyof DInteract>]:(DInteract[p]&SInteract[p])}} YInteractTE
 *
*/
/** ### YInteractTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YInteract`
 *
 * Уникальные параметры `YInteract`.
 *
 * @typedef YInteractTU
 * @prop {any} _
 *
*/

//#endregion

class SInteract extends YElement {

    /**
     * ### binds
     *
     * Общие привязки.
     *
     * Используются всеми интерактивными элементами.
     *
     * ***
     * @type {[(string|string[]),function(YInteract):void,boolean][]}
     * @public
    */
    static binds = [

        ['default', y => {

            y.terminal.bind();

        }],

    ];

};
class DInteract extends SInteract {

    /**
     * ### binds
     *
     * Привязки.
     *
     * Это коды или обозначения клавиш или их комбинаций вида `[[code|symbol],boolean,func]`, встречая которые интерактор выполняет указанную функцию.
     * Для одной функции может быть указано несколько кодов/символов.
     * В случае, если привязка указывается для единственного кода/символа, можно указать её без занесения в массив.
     *
     * ***
     * @type {[(string|string[]),function(YInteract):void,boolean][]}
     * @public
    */
    binds = [];


};
class IInteract extends DInteract {



};
class MInteract extends IInteract {

    /**
     * ### receive
     * - Версия `0.0.0`
     * - Модуль `YInteract`
     * ***
     *
     * Метод получения информации от прослушивателя через терминал.
     *
     * ***
     * @arg {string} code `Ключ-код/символ привязки`
     * @protected
    */
    receive(code = this.terminal.listener.code) {

        const name = this.terminal.listener.name;
        const binds = [...this.binds, ...this.constructor.binds];

        let b = binds.find(b => b[0] === code || (b[0] instanceof Array && b[0].includes(code)));

        if (b) {

            b?.[1]?.(this);

        } else if (b = binds.find(b => b[0] === name || (b[0] instanceof Array && b[0].includes(name)))) {

            b?.[1]?.(this);

        } else if (b = binds.find(b => b[0] === 'default')) {

            b?.[1]?.(this);

        } else {

            return false;

        };

        return true;

    };

};
class FInteract extends MInteract {

    /**
     * ### YInteract.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YInteractT} t
    */
    constructor(t = {}) {

        t = FInteract.#before(Object.values(arguments));

        FInteract.#deceit(t);

        super(t);

        FInteract.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YInteract].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YInteractT} */
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
    /** @arg {YInteractT} t @this {YInteract} */
    static #deceit(t) {

        try {

            FInteract.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YInteractT} t @this {YInteract} */
    static #verify(t) {

        const {



        } = t;

        FInteract.#handle(t);

    };
    /** @arg {YInteractT} t @this {YInteract} */
    static #handle(t) {



    };
    /** @arg {YInteractT} t @this {YInteract} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * ### YInteract
 * - Тип `SDIMFY`
 * - Версия `0.1.0`
 * - Модуль `ject.terminal.YInteract`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YInteract extends FInteract {

    /**
     * ### get
     * - Версия `0.0.0`
     * - Модуль `YInteract`
     * ***
     *
     * Метод получения текущего состояния значения.
     *
     * ***
     *
     * @public
    */
    get() {



    };
    /**
     * ### bind
     * - Версия `0.1.0`
     * - Модуль `YInteract`
     * ***
     *
     * Метод последовательного вызова указанных привязок.
     *
     * ***
     * @arg {...string} strings `Ключ-коды/символы привязок`
     * @public
    */
    bind(...strings) {

        if (strings.length) {

            strings.filter(s => s && s.constructor === String).forEach(s => this.receive(s));

        } else {

            this.receive();

        };

        return this;

    };

};