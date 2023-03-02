//#region YI

import { YJect } from '../class.mjs';

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

/** ### YEntityT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity`
 *
 * Основной параметр модуля `YEntity`.
 *
 * @typedef {YEntityTE&YEntityTU} YEntityT
 *
*/
/** ### YEntityTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity`
 *
 * Параметр наследования `YEntity`.
 *
 * @typedef {{[p in Exclude<keyof DEntity,keyof SEntity>|Exclude<keyof SEntity,keyof DEntity>]:(DEntity[p]&SEntity[p])}} YEntityTE
 *
*/
/** ### YEntityTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity`
 *
 * Уникальные параметры `YEntity`.
 *
 * @typedef YEntityTU
 * @prop {any} _
 *
*/

//#endregion

class SEntity extends YJect {



};
class DEntity extends SEntity {



};
class IEntity extends DEntity {



};
class MEntity extends IEntity {



};
class FEntity extends MEntity {

    /**
     * ### YEntity.constructor
     *
     *
     *
     * ***
     * @arg {...YEntityT} t
    */
    constructor(...t) {

        super(Object.assign(t = FEntity.#before(t), {}));

        FEntity.#deceit.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YEntityT} */
        let r = {};

        if (t?.length === 1 && [Object, YEntity].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

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
    /** @arg {YEntityT} t @this {YEntity} */
    static #deceit(t) {

        try {

            FEntity.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YEntityT} t @this {YEntity} */
    static #verify(t) {

        const {



        } = t;

        FEntity.#handle.apply(this, [t]);

    };
    /** @arg {YEntityT} t @this {YEntity} */
    static #handle(t) {



        FEntity.#create.apply(this, [t]);

    };
    /** @arg {YEntityT} t @this {YEntity} */
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
 * ### YEntity
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity`
 * - Цепочка `BDVHC`
 * ***
 *
 * Продвинутое представление объектов, позволяющее отслеживать данные объекта, такие как дата его создания, следить за его состояниями через журналирование и получать
 * более информативнеы отсчеты с помощью протоколирования.
 *
 * ***
 *
*/
export class YEntity extends FEntity {



};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/