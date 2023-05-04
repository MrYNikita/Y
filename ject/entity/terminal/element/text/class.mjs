//#region YI

import { condIsString } from '../../../../../bool/cond/module.mjs';
import { stringGetRows } from '../../../../../string/module.mjs';
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

/** ### YTextT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\text`
 * 
 * Основной параметр модуля `YText`.
 * 
 * @typedef {YTextTE&YTextTU&import('../class.mjs').YElementT} YTextT
 * 
*/
/** ### YTextTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\text`
 * 
 * Параметр наследования `YText`.
 * 
 * @typedef {{[p in Exclude<keyof DText,keyof SText>|Exclude<keyof SText,keyof DText>]:(DText[p]&SText[p])}} YTextTE
 * 
*/
/** ### YTextTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\text`
 * 
 * Уникальные параметры `YText`.
 * 
 * @typedef YTextTU
 * @prop {any} _
 * 
*/

//#endregion

class SText extends YElement {
    
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
class DText extends SText {
    
    /**
     * ### text
     *
     * Текст.
     *
     * ***
     * @type {(function(...):string)?}
     * @public
    */
    text = null;
    
};
class IText extends DText {
    
    
    
};
class MText extends IText {
    
    
    
};
class FText extends MText {
    
    /**
     * ### YText.constructor
     * 
     * 
     * 
     * ***
     * @arg {YTextT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FText.#before(t), {}));
        
        FText.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YTextT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YText].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                default: r.coords = t.slice(2);
                case 2: r.frame = t[1];
                case 1: r.text = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YTextT} t @this {YText} */
    static #deceit(t) {
        
        try {
            
            FText.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YTextT} t @this {YText} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FText.#handle.apply(this, [t]);
        
    };
    /** @arg {YTextT} t @this {YText} */
    static #handle(t) {
        
        if (condIsString(t.text)) {

            const text = t.text;

            t.text = function () { return text; };

        };

        FText.#create.apply(this, [t]);
        
    };
    /** @arg {YTextT} t @this {YText} */
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
 * ### YText
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\terminal\element\text`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YText extends FText {
    
    display() {

        YConsole.writeLine(this.text());

        return this;
        
    };
    
};