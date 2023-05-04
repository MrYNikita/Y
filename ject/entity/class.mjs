//#region YI

import { classGetChain } from '../../class/module.mjs';
import { YDate } from '../../date/class.mjs';
import { YString } from '../../string/class.mjs';
import { YJect } from '../class.mjs';
import { YHandler } from './handler/class.mjs';
import { YProcedure } from './handler/procedure/class.mjs';
import { YLog } from './log/class.mjs';
import { YBlock } from './rept/block/class.mjs';
import { YRept } from './rept/class.mjs';

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

    /**
     * ###  config
     * 
     * Конфигуратор модуля.
     * 
     * ***  
     * @public
    */
    static config = config;

};
class DEntity extends SEntity {



};
class IEntity extends DEntity {

    /**
     * ### log
     * 
     * Журнал.
     * 
     * *** 
     * @type {YLog} 
     * @private
    */
    log = new YLog();
    /**
     * ### date
     * 
     * Системная дата создания объекта.
     * 
     * *** 
     * @type {YDate} 
     * @public
    */
    date = new YDate();
    /**
     * ### rept
     * 
     * Отчет.
     * 
     * *** 
     * @type {YRept<this>} 
     * @protected
    */
    rept = new YRept(this);
    /**
     * ### handlers
     * 
     * Обработчики.
     * 
     * *** 
     * @type {YHandler[]} 
     * @protected
    */
    handlers = [];

};
class MEntity extends IEntity {

    /**
     * ### findHandle
     * - Версия `0.0.0`
     * - Модуль `ject\terminal\receiver`
     * ***
     *
     * Метод получения обработчика по его метке.
     *
     * ***
     * @arg {string} label `Метка`
     * @public
    */
    findHandle(label) {

        const handler = this.handlers.find(h => h.label === label);

        return handler ?? null;

    };

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

        return new Proxy(this, {

            get(t, p) {

                t.log.appendRecords([`Получено значение по свойству ${p}`, 'debug/#']);

                return t[p];

            },
            set(t, p, v) {

                t.log.appendRecords([`Установлено значение по свойству ${p}`, 'debug']);

                t[p] = v;

                return true;

            },

        });

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
 * Класс сущностей.
 * 
 * Сущности включают в себя все преимущества `YJect` класса, также дополняя его такими возможностями как:
 * - Журналирование.
 * - Информативный вывод.
 * - Определение по времени.
 *
 * ***
 *
*/
export class YEntity extends FEntity {

    /**
     * ### report
     * - Версия `0.0.0`
     * - Модуль `ject\entity`
     * ***
     * 
     * Метод отображения отчета.
     * 
     * ***
     * @arg {...string} tags `Теги`
     * @public
    */
    report(...tags) {

        const rept = this.rept.clone();

        classGetChain(this.constructor).filter(cls => cls.name.startsWith('S')).forEach(cls => {

            if (cls?.config?.reportBlocksRequired) {

                rept.appendBlocks(...cls.config.reportBlocksRequired);

            };

        });

        rept

            .filter(...tags)
            .display(this);

        return this;

    };
    /**
     * ### handle
     * - Версия `0.0.0`
     * - Модуль `ject\entity`
     * ***
     * 
     * Метод обработки событий.
     * 
     * ***
     * @arg {...string} labels `Метки`
     * @public
    */
    handle(...labels) {

        for (const label of labels) {

            const handler = this.findHandle(label);

            if (handler) {

                handler.exec(this);

                handler.procedures = handler.procedures.filter(p => !p.disposable);

            };

        };

        return this;

    };

    /**
     * ### appendReport
     * - Версия `0.0.0`
     * - Модуль `ject\entity`
     * ***
     * 
     * Метод добавления блоков.
     * 
     * ***
     * @arg {...([string, function(G):string, number, ...string]|YBlock<this>)} blocks `Блоки`
     * @public
     * @template {this} G
    */
    appendReports(...blocks) {

        blocks.forEach(block => {

            this.rept.appendBlocks(block);

        });

        return this;

    };
    /**
     * ### appendHandler
     * - Версия `0.0.0`
     * - Модуль `ject\entity`
     * ***
     *
     * Метод добавления обработчиков.
     *
     * ***
     * @arg {...[string, [string, function(YEntity):void]]} handlers `Обработчики`
     * @public
    */
    appendHandlers(...handlers) {

        try {

            handlers.forEach(handle => {

                const label = handle[0];
                const procedures = handle.slice(1);
                const find = this.handlers.find(handleThis => handleThis.label === label);

                if (find) {

                    find.appendProcedures(...procedures);

                } else {

                    handle = new YHandler(label).appendProcedures(...procedures);

                    this.handlers.push(handle);

                };

            });

        } catch (e) {

            throw new Error(e);

        };

        return this;

    };

};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/