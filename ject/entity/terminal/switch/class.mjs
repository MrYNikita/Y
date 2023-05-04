//#region YI

import { YInteract } from '../element/interact/class.mjs';
import { YInterface } from '../interface/class.mjs';
import { YComb } from '../listener/comb/class.mjs';
import { YKey } from '../listener/key/class.mjs';
import { YReceiver } from '../receiver/class.mjs';

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

/** ### YSwitchT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YSwitch`.
 * 
 * @typedef {YSwitchTE&YSwitchTU} YSwitchT
 * 
*/
/** ### YSwitchTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YSwitch`.
 * 
 * @typedef {{[p in Exclude<keyof DSwitch,keyof SSwitch>|Exclude<keyof SSwitch,keyof DSwitch>]:(DSwitch[p]&SSwitch[p])}} YSwitchTE
 * 
*/
/** ### YSwitchTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YSwitch`.
 * 
 * @typedef YSwitchTU
 * @prop {any} _
 * 
*/

//#endregion

class SSwitch extends YReceiver {
    
    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    /**
     * ### combs
     * ***
     * @type {YComb[]} 
     * @public
    */
    static combs = [

        new YComb({

            keys: [

                new YKey('f2')

            ],
            funcs: [

                y => {

                    y.changeIndex(-1);

                },

            ],

        }),
        new YComb({

            keys: [

                new YKey('f3')

            ],
            funcs: [

                y => {

                    y.changeIndex(1);

                },

            ],

        }),

    ];
    
};
class DSwitch extends SSwitch {
    
    /**
     * ### interacts
     * 
     * Интеракторы.
     * 
     * *** 
     * @type {YInteract[]} 
     * @public
    */
    interacts = [];
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
class ISwitch extends DSwitch {
    
    /**
     * ### index
     * 
     * Индекс активного интерактора.
     * 
     * *** 
     * @type {number} 
     * @protected
    */
    index = 0;
    
};
class MSwitch extends ISwitch {
    
    
    
};
class FSwitch extends MSwitch {
    
    /**
     * ### YSwitch.constructor
     * 
     * 
     * 
     * ***
     * @arg {YSwitchT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FSwitch.#before(t), {}));
        
        FSwitch.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YSwitchT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YSwitch].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: 
                case 2: 
                case 1: r.interface = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YSwitchT} t @this {YSwitch} */
    static #deceit(t) {
        
        try {
            
            FSwitch.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YSwitchT} t @this {YSwitch} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FSwitch.#handle.apply(this, [t]);
        
    };
    /** @arg {YSwitchT} t @this {YSwitch} */
    static #handle(t) {
        
        
        
        FSwitch.#create.apply(this, [t]);
        
    };
    /** @arg {YSwitchT} t @this {YSwitch} */
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
 * ### YSwitch
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
export class YSwitch extends FSwitch {
    
    /**
     * ### changeIndex
     * - Версия `0.0.0`
     * ***
     * 
     * Число, на которое необходимо изменить индекс.
     * 
     * ***
     * @arg {number} number `Число`
     * @public
    */
    changeIndex(number) {

        const indexLast = this.index;

        listChangeIndex(this, number, 'interacts');

        if (indexLast !== this.index) {

            this.interacts[indexLast].focus = false;
            this.interacts[this.index].focus = true;

        };

        return this;
        
    };

    /**
     * ### appendInteracts
     * - Версия `0.0.0`
     * ***
     * 
     * Метод добавления интеракторов.
     * 
     * ***
     * @arg {...YInteract} interacts `Интеракторы`
     * @public
    */
    appendInteracts(...interacts) {

        const flag = this.interacts.length ? false : true;

        this.interacts.push(...interacts.filter(interact => interact instanceof YInteract && !this.interacts.includes(interact)).map(interact => {

            interact.setInterface(this.interface);

            return interact;
            
        }));

        if (flag) {

            this.interacts[this.index].focus = true;

        };

        return this;
        
    };

    receive(comb) {

        if (this.interacts.length) {

            const interact = this.interacts[this.index];
            
            if (!interact.interface) {

                interact.setInterface(this.interface);

            };

            const response = this.interacts[this.index].receive(comb);

            if (!response) {

                return SSwitch.prototype.receive.apply(this, [comb])

            } else {

                return response;

            };

        } else {

            return null;

        };

    };
    
};