//#region YI

import { YJect } from '../../ject/class.mjs';
import { YPath } from '../../os/path/class.mjs';
import { pathExists } from '../../os/path/module.mjs';
import configString from '../config.mjs';
import { stringInsertMany, stringPaste } from '../module.mjs';

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

/** ### YTemplateT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string\template`
 * 
 * Основной параметр модуля `YTemplate`.
 * 
 * @typedef {YTemplateTE&YTemplateTU} YTemplateT
 * 
*/
/** ### YTemplateTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `string\template`
 * 
 * Параметр наследования `YTemplate`.
 * 
 * @typedef {{[p in Exclude<keyof DTemplate,keyof STemplate>|Exclude<keyof STemplate,keyof DTemplate>]:(DTemplate[p]&STemplate[p])}} YTemplateTE
 * 
*/
/** ### YTemplateTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `string\template`
 * 
 * Уникальные параметры `YTemplate`.
 * 
 * @typedef YTemplateTU
 * @prop {any} _
 * 
*/

//#endregion

class STemplate extends YJect {
    
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
class DTemplate extends STemplate {
    
    /**
     * ### label
     * 
     * Метка.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    label;
    /**
     * ### value
     * 
     * Значение.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    value;
    
};
class ITemplate extends DTemplate {
    
    
    
};
class MTemplate extends ITemplate {
    
    
    
};
class FTemplate extends MTemplate {
    
    /**
     * ### YTemplate.constructor
     * 
     * 
     * 
     * ***
     * @arg {YTemplateT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FTemplate.#before(t), {}));
        
        FTemplate.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YTemplateT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YTemplate].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: 
                case 2: r.value = t[1];
                case 1: r.label = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YTemplateT} t @this {YTemplate} */
    static #deceit(t) {
        
        try {
            
            FTemplate.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YTemplateT} t @this {YTemplate} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FTemplate.#handle.apply(this, [t]);
        
    };
    /** @arg {YTemplateT} t @this {YTemplate} */
    static #handle(t) {
        
        
        
        FTemplate.#create.apply(this, [t]);
        
    };
    /** @arg {YTemplateT} t @this {YTemplate} */
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
 * ### YTemplate
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `string\template`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YTemplate extends FTemplate {
    
    /**
     * ### apply
     * - Версия `0.0.0`
     * - Модуль `string\template`
     * ***
     * 
     * Метод применения шаблона.
     * 
     * ***
     * @arg {...[...string]} templates `Вставки`
     * @public
    */
    apply(...templates) {

        let result = '';

        templates.forEach(template => {

            let value = this.value;

            template.reverse().forEach(insert => {

                if (typeof insert !== 'string') {

                    insert = insert.toString();

                };

                if (insert.includes(configString.spliterInsert)) {

                    value = stringInsertMany(value, insert);

                } else {

                    const index = value.lastIndexOf(configString.insertSymbolPosition);

                    if (index !== -1) {

                        value = stringPaste(value, insert, index, configString.insertSymbolPosition);

                    };

                };
                
            });

            result += value;

        });

        return result;
        
    };
    
};