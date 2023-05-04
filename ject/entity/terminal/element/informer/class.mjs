//#region YI

import configString from '../../../../../string/config.mjs';
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

/** ### YInformerT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YInformer`.
 * 
 * @typedef {YInformerTE&YInformerTU} YInformerT
 * 
*/
/** ### YInformerTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YInformer`.
 * 
 * @typedef {{[p in Exclude<keyof DInformer,keyof SInformer>|Exclude<keyof SInformer,keyof DInformer>]:(DInformer[p]&SInformer[p])}} YInformerTE
 * 
*/
/** ### YInformerTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YInformer`.
 * 
 * @typedef YInformerTU
 * @prop {any} _
 * 
*/

//#endregion

class SInformer extends YElement {
    
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
class DInformer extends SInformer {
    
    
    
};
class IInformer extends DInformer {
    
    redraw = true;
    
};
class MInformer extends IInformer {
    
    
    
};
class FInformer extends MInformer {
    
    /**
     * ### YInformer.constructor
     * 
     * 
     * 
     * ***
     * @arg {YInformerT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FInformer.#before(t), {}));
        
        FInformer.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YInformerT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YInformer].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YInformerT} t @this {YInformer} */
    static #deceit(t) {
        
        try {
            
            FInformer.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YInformerT} t @this {YInformer} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FInformer.#handle.apply(this, [t]);
        
    };
    /** @arg {YInformerT} t @this {YInformer} */
    static #handle(t) {
        
        
        
        FInformer.#create.apply(this, [t]);
        
    };
    /** @arg {YInformerT} t @this {YInformer} */
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
 * ### YInformer
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс информатор.
 * 
 * Информатор предназначен для получения сообщений отладочного характера.
 * Он будет отображаться окном с информацией, которую можно будет удобно отправлять через обращение к терминалу.
 * 
 * ***
 * 
*/
export class YInformer extends FInformer {
    
    display() {

        const style = this.interface.style;
        const borders = configString.symbols.table.double;
        
        YConsole
        
            .setCursorTo(...this.coords)
            .writeLine(borders[2])

        return this;

    };
    
};