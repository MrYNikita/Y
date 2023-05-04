//#region YI

import { YJect } from '../../../class.mjs';
import { YRept } from '../class.mjs';
import { YTag } from './tag/class.mjs';

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

/** ### YBlockT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\report\block`
 * 
 * Основной параметр модуля `YBlock`.
 * 
 * ***
 * 
 * @typedef {YBlockTE&YBlockTU} YBlockT
*/
/** ### YBlockTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\report\block`
 * 
 * Параметр наследования `YBlock`.
 * 
 * @typedef {{[p in Exclude<keyof DBlock,keyof SBlock>|Exclude<keyof SBlock,keyof DBlock>]:(DBlock[p]&SBlock[p])}} YBlockTE
*/
/** ### YBlockTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\report\block`
 * 
 * Уникальные параметры `YBlock`.
 * 
 * @typedef YBlockTU
 * @prop {} _
*/
/** ### YBlockTUG
 * - Тип `TUP`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\report\block`
 * 
 * Уникальные генеративные параметры `YBlock`.
 * 
 * @typedef YBlockTUG
 * @prop {null=} _
*/

//#endregion

/**
 * @template {YBlockTUG} G
*/
class SBlock extends YJect {
    
    
    
};
/**
 * @extends {SBlock<G>}
 * @template {YBlockTUG} G
*/
class DBlock extends SBlock {
    
    /**
     * ### name
     * 
     * Наименование.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    name;
    /**
     * ### tags
     * 
     * Теги.
     * 
     * По тегам можно отфильтровать лишние блоки из отчета или осуществлять манипуляции над ними.
     * 
     * *** 
     * @type {YTag[]} 
     * @public
    */
    tags = [];
    /**
     * ### texts
     * 
     * Текста.
     * 
     * Представлены массивом функций, которые принимают на вход объект отчета и возвращают строки.
     * 
     * *** 
     * @type {[function(G):string][]} 
     * @public
    */
    texts;
    /**
     * ### priority
     * 
     * Приоритет.
     * 
     * Наиболее приоритетные блоки будут отображены снизу, чтобы их можно было увидеть в числе первых.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    priority;
    
};
/**
 * @extends {DBlock<G>}
 * @template {YBlockTUG} G
*/
class IBlock extends DBlock {
    
    
    
};
/**
 * @extends {IBlock<G>}
 * @template {YBlockTUG} G
*/
class MBlock extends IBlock {
    
    
    
};
/**
 * @extends {MBlock<G>}
 * @template {YBlockTUG} G
*/
class FBlock extends MBlock {
    
    /**
     * ### YBlock.constructor
     * 
     * 
     * 
     * ***
     * @arg {YBlockT&G} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FBlock.#before(t), {}));
        
        FBlock.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YBlockT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YBlock].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {

                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                default: r.tags = t.slice(3);
                case 3: r.priority = t[2];
                case 2: r.texts = t[1];
                case 1: r.name = t[0]; 
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YBlockT} t @this {YBlock} */
    static #deceit(t) {
        
        try {
            
            FBlock.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YBlockT} t @this {YBlock} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FBlock.#handle.apply(this, [t]);
        
    };
    /** @arg {YBlockT} t @this {YBlock} */
    static #handle(t) {
        
        if (t.texts) {

            if (t.texts.constructor !== Array) {

                t.texts = [t.texts];

            };

        };

        if (t.tags?.length) {

            t.tags = t.tags.map(tag => new YTag(this, tag));

        };
        
        FBlock.#create.apply(this, [t]);
        
    };
    /** @arg {YBlockT} t @this {YBlock} */
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
 * ### YBlock
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `ject\entity\report\block`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * @extends {FBlock<G>}
 * @template {YBlockTUG&YRept} G
*/
export class YBlock extends FBlock {
    
    
    
};