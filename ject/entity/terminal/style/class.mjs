//#region YI

import { YJect } from '../../../class.mjs';

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

/** ### YStyleT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YStyle`.
 * 
 * @typedef {YStyleTE&YStyleTU} YStyleT
 * 
*/
/** ### YStyleTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YStyle`.
 * 
 * @typedef {{[p in Exclude<keyof DStyle,keyof SStyle>|Exclude<keyof SStyle,keyof DStyle>]:(DStyle[p]&SStyle[p])}} YStyleTE
 * 
*/
/** ### YStyleTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YStyle`.
 * 
 * @typedef YStyleTU
 * @prop {any} _
 * 
*/

/** ### styleTTColor
 * - Тип `TT`
 * - Версия `0.0.0`
 * 
 * 
 * 
 * @typedef {import('../../../../string/ansi/module.mjs').ansiColorTMColors} styleTTColor
 * 
*/
/** ### styleTTFrameType
 * - Тип `TT`
 * - Версия `0.0.0`
 * 
 * 
 * 
 * @typedef {import('../../../../string/structure/module.mjs').structureTTFrameType} styleTTFrameType
 * 
*/

//#endregion

class SStyle extends YJect {
    
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
class DStyle extends SStyle {
    
    /**
     * ### colorFDefault
     * 
     * Дефолт цвет символов.
     * 
     * *** 
     * @type {styleTTColor} 
     * @public
    */
    colorF;
    /**
     * ### colorBDefault
     * 
     * Дефолт цвет фона.
     * 
     * *** 
     * @type {styleTTColor} 
     * @public
    */
    colorB;
    /**
     * ### colorFFocus
     * 
     * Цвет фокусировки.
     * 
     * *** 
     * @type {styleTTColor} 
     * @public
    */
    colorFFocus;
    /**
     * ### colorBFocus
     * 
     * Цвет фона фокусировки.
     * 
     * *** 
     * @type {styleTTColor} 
     * @public
    */
    colorBFocus;
    /**
     * ### frameBorderType
     * 
     * Тип рамки терминала.
     * 
     * *** 
     * @type {styleTTFrameType} 
     * @public
    */
    frameTypeTerminal;
    /**
     * ### colorFPlaceholder
     * 
     * Цвет символов для подсказок.
     * 
     * *** 
     * @type {styleTTColor} 
     * @public
    */
    colorFPlaceholder;
    /**
     * ### colorBPlaceholder
     * 
     * Цвет фона для текста подсказок.
     * 
     * *** 
     * @type {styleTTColor} 
     * @public
    */
    colorBPlaceholder;
    
};
class IStyle extends DStyle {
    
    
    
};
class MStyle extends IStyle {
    
    
    
};
class FStyle extends MStyle {
    
    /**
     * ### YStyle.constructor
     * 
     * 
     * 
     * ***
     * @arg {YStyleT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FStyle.#before(t), {}));
        
        FStyle.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YStyleT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YStyle].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YStyleT} t @this {YStyle} */
    static #deceit(t) {
        
        try {
            
            FStyle.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YStyleT} t @this {YStyle} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FStyle.#handle.apply(this, [t]);
        
    };
    /** @arg {YStyleT} t @this {YStyle} */
    static #handle(t) {

        FStyle.#create.apply(this, [t]);
        
    };
    /** @arg {YStyleT} t @this {YStyle} */
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
 * ### YStyle
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
export class YStyle extends FStyle {
    
    
    
};