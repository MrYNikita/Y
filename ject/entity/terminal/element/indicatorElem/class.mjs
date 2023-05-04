//#region YI

import { arrayUnique } from '../../../../../array/module.mjs';
import { YString } from '../../../../../string/class.mjs';
import configString from '../../../../../string/config.mjs';
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

/** ### YIndicatorElemT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YIndicatorElem`.
 * 
 * @typedef {YIndicatorElemTE&YIndicatorElemTU} YIndicatorElemT
 * 
*/
/** ### YIndicatorElemTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YIndicatorElem`.
 * 
 * @typedef {{[p in Exclude<keyof DIndicatorElem,keyof SIndicatorElem>|Exclude<keyof SIndicatorElem,keyof DIndicatorElem>]:(DIndicatorElem[p]&SIndicatorElem[p])}} YIndicatorElemTE
 * 
*/
/** ### YIndicatorElemTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YIndicatorElem`.
 * 
 * @typedef YIndicatorElemTU
 * @prop {any} _
 * 
*/

//#endregion

class SIndicatorElem extends YElement {
    
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
class DIndicatorElem extends SIndicatorElem {
    
    
    
};
class IIndicatorElem extends DIndicatorElem {
    
    /**
     * @protected
    */
    redraw = true;
    
};
class MIndicatorElem extends IIndicatorElem {
    
    
    
};
class FIndicatorElem extends MIndicatorElem {
    
    /**
     * ### YIndicatorElem.constructor
     * 
     * 
     * 
     * ***
     * @arg {YIndicatorElemT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FIndicatorElem.#before(t), {}));
        
        FIndicatorElem.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YIndicatorElemT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YIndicatorElem].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YIndicatorElemT} t @this {YIndicatorElem} */
    static #deceit(t) {
        
        try {
            
            FIndicatorElem.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YIndicatorElemT} t @this {YIndicatorElem} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FIndicatorElem.#handle.apply(this, [t]);
        
    };
    /** @arg {YIndicatorElemT} t @this {YIndicatorElem} */
    static #handle(t) {
        
        
        
        FIndicatorElem.#create.apply(this, [t]);
        
    };
    /** @arg {YIndicatorElemT} t @this {YIndicatorElem} */
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
 * ### YIndicatorElem
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
export class YIndicatorElem extends FIndicatorElem {

    display() {

        YConsole

            .setCursorTo(...this.coords)
            .writeLine(new YString()
            
                .paste(structureFrame(3, 18, 'Indicator Elem', 'thin', `Элементов: ${arrayUnique(this.terminal.recepient.elements, this.terminal.transfers).length}`))
                .get(true)

            )

        return this;

    };
    
};