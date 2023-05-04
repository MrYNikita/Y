//#region YI

import { listChangeIndex } from '../../../../../many/list/module.mjs';
import { YComb } from '../../../listener/comb/class.mjs';
import { YKey } from '../../../listener/key/class.mjs';
import { YInteract } from '../class.mjs';

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

class SSwitch extends YInteract {
    
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
    
};
class ISwitch extends DSwitch {
    
    redraw = true;
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
                case 1: 
                
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
 * Класс элемента управления.
 * 
 * Элементы управления позволяют определять принципы и порядок взаимодейтсвия для множества интерактивных элементов размещенных на одном интерфейсе.
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

        this.interacts[this.index].focus = false;

        listChangeIndex(this, number, 'interacts');

        this.interacts[this.index].focus = true;

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
    display() {

        for (const index in this.interacts) {

            const interact = this.interacts[index];

            if (this.index == index) {

                interact.focus = true;

            } else {

                interact.focus = false;

            };

            interact.display();

        };

        return this;

    };
    
};