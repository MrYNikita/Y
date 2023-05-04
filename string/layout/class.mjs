//#region YI

import { YJect } from '../../ject/class.mjs';
import { YGroupColor } from './group/color/class.mjs';

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

/** ### YLayoutT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string\layout`
 * 
 * Основной параметр модуля `YLayout`.
 * 
 * @typedef {YLayoutTE&YLayoutTU} YLayoutT
 * 
*/
/** ### YLayoutTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `string\layout`
 * 
 * Параметр наследования `YLayout`.
 * 
 * @typedef {{[p in Exclude<keyof DLayout,keyof SLayout>|Exclude<keyof SLayout,keyof DLayout>]:(DLayout[p]&SLayout[p])}} YLayoutTE
 * 
*/
/** ### YLayoutTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `string\layout`
 * 
 * Уникальные параметры `YLayout`.
 * 
 * @typedef YLayoutTU
 * @prop {any} _
 * 
*/

//#endregion

class SLayout extends YJect {
    
    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DLayout extends SLayout {
    
    
    
};
class ILayout extends DLayout {
    
    /**
     * ### groupColor
     * 
     * Группа цветовой разметки.
     * 
     * *** 
     * @type {YGroupColor} 
     * @public
    */
    groupColor = new YGroupColor();
    
};
class MLayout extends ILayout {
    
    
    
};
class FLayout extends MLayout {
    
    /**
     * ### YLayout.constructor
     * 
     * 
     * 
     * ***
     * @arg {YLayoutT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FLayout.#before(t), {}));
        
        FLayout.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YLayoutT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YLayout].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YLayoutT} t @this {YLayout} */
    static #deceit(t) {
        
        try {
            
            FLayout.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YLayoutT} t @this {YLayout} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FLayout.#handle.apply(this, [t]);
        
    };
    /** @arg {YLayoutT} t @this {YLayout} */
    static #handle(t) {
        
        
        
        FLayout.#create.apply(this, [t]);
        
    };
    /** @arg {YLayoutT} t @this {YLayout} */
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
 * ### YLayout
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `string\layout`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс строчной разметки предназначен для размещений в будущей строке новых вставок.
 * 
 * Вставки разделяются на группы. Группы объединяют вставки по общему признаку. Помимо того, группы определяют разные правила для вставок.
 * 
 * Вставки разных групп накладываются друг на друга, в отличии от вставок смежных групп, которые, могут обладать особенным поведением размещения.
 * Так вставки группы `ansi` при размещении приводят к смещению смежных им вставок, вытесняя их, тем самым гарантируя сохранность указанных ранее команд. 
 * 
 * ***
 * 
*/
export class YLayout extends FLayout {
    
    /**
     * ### apply
     * - Версия `0.0.0`
     * - Модуль `string\layout`
     * ***
     * 
     * Метод применения разметки.
     * 
     * ***
     * @arg {string} string `Строка`
     * @public
    */
    apply(string) {

        return this.groupColor.apply(string);
        
    };

    /**
     * ### clearColor
     * - Версия `0.0.0`
     * - Модуль `string\layout`
     * ***
     * 
     * Метод очистки цветов.
     * 
     * ***
     * @public
    */
    clearColors() {

        this.groupColor.clear();

        return this;
        
    };
    /**
     * ### appendColors
     * - Версия `0.0.0`
     * - Модуль `string\layout`
     * ***
     * 
     * Метод добавления цветовой разметки.
     * 
     * ***
     * @arg {[import('./group/color/module.mjs').colorTTColor, import('./group/color/module.mjs').colorTTColor, number, number][]} colors `Цвета`
     * @public
    */
    appendColors(...colors) {

        this.groupColor.appendItems(...colors);

        return this;
        
    };
    
};