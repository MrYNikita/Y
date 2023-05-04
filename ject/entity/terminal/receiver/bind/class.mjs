//#region YI

import { YJect } from '../../../../class.mjs';
import { YReceiver } from '../class.mjs';
import { YComb } from '../../listener/comb/class.mjs';

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

/** ### YBindT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver\bind`
 * 
 * Основной параметр модуля `YBind`.
 * 
 * ***
 * 
 * @typedef {YBindTE&YBindTU} YBindT
*/
/** ### YBindTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver\bind`
 * 
 * Параметр наследования `YBind`.
 * 
 * @typedef {{[p in Exclude<keyof DBind,keyof SBind>|Exclude<keyof SBind,keyof DBind>]:(DBind[p]&SBind[p])}} YBindTE
*/
/** ### YBindTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver\bind`
 * 
 * Уникальные параметры `YBind`.
 * 
 * @typedef YBindTU
 * @prop {} _
*/
/** ### YBindTUG
 * - Тип `TUP`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver\bind`
 * 
 * Уникальные генеративные параметры `YBind`.
 * 
 * @typedef YBindTUG
 * @prop {null=} _
*/

//#endregion

/**
 * @template {YBindTUG} G
*/
class SBind extends YJect {



};
/**
 * @extends {SBind<G>}
 * @template {YBindTUG} G
*/
class DBind extends SBind {

    /**
     * ### comb
     *
     * Комбинация.
     *
     * ***
     * @type {YComb}
     * @public
    */
    comb;
    /**
     * ### func
     *
     * Функция, привязанная к коду.
     *
     * Первым аргументом данной функции выступает приёмник.
     *
     * ***
     * @type {(function(G?):void)[]}
     * @public
    */
    funcs = [];
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
    update;

};
/**
 * @extends {DBind<G>}
 * @template {YBindTUG} G
*/
class IBind extends DBind {



};
/**
 * @extends {IBind<G>}
 * @template {YBindTUG} G
*/
class MBind extends IBind {



};
/**
 * @extends {MBind<G>}
 * @template {YBindTUG} G
*/
class FBind extends MBind {

    /**
     * ### YBind.constructor
     * 
     * 
     * 
     * ***
     * @arg {YBindT&G} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FBind.#before(t), {}));

        FBind.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YBindT} */
        let r = {};

        if (t?.length === 1 && [Object, YBind].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YBindT} t @this {YBind} */
    static #deceit(t) {

        try {

            FBind.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YBindT} t @this {YBind} */
    static #verify(t) {

        const {



        } = t;

        FBind.#handle.apply(this, [t]);

    };
    /** @arg {YBindT} t @this {YBind} */
    static #handle(t) {

        if (t.receiver?.constructor !== YReceiver) {

            t.receiver = null;

        };

        if (t.funcs?.constructor === Function) {

            t.funcs = [t.funcs];

        };

        switch (t.comb?.constructor) {

            case Array: t.comb = new YComb(...t.comb); break;
            case String, Object: t.comb = new YComb(t.comb); break;

        };

        if (t.modeUpdate) {

            t.modeUpdate = true;

        } else {

            t.modeUpdate = false;

        };

        FBind.#create.apply(this, [t]);

    };
    /** @arg {YBindT} t @this {YBind} */
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
 * ### YBind
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\receiver\bind`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * @extends {FBind<G>}
 * @template {YBindTUG} G
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
     * @arg {YReceiver} receiver `Приёмник`
     * @public
    */
    exec(receiver) {

        if (this.funcs instanceof Array) {

            this.funcs.filter(f => f instanceof Function).forEach(f => f(receiver));

        };

        return this;

    };

};