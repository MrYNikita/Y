//#region YI

import { YJect } from '../../../ject/class.mjs';
import { stringAppend, stringGetRows } from '../../module.mjs';
import { YItem } from '../item/class.mjs';

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

/** ### YGroupT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string\layout\group`
 * 
 * Основной параметр модуля `YGroup`.
 * 
 * @typedef {YGroupTE&YGroupTU} YGroupT
 * 
*/
/** ### YGroupTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `string\layout\group`
 * 
 * Параметр наследования `YGroup`.
 * 
 * @typedef {{[p in Exclude<keyof DGroup,keyof SGroup>|Exclude<keyof SGroup,keyof DGroup>]:(DGroup[p]&SGroup[p])}} YGroupTE
 * 
*/
/** ### YGroupTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `string\layout\group`
 * 
 * Уникальные параметры `YGroup`.
 * 
 * @typedef YGroupTU
 * @prop {any} _
 * 
*/

//#endregion

class SGroup extends YJect {
    
    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DGroup extends SGroup {
    
    /**
     * ### edgeLeft
     * 
     * Левый край.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    edgeLeft;
    /**
     * ### edgeRight
     * 
     * Правый край.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    edgeRight;
    
};
class IGroup extends DGroup {
    
    /**
     * ### Линии.
     * 
     * Линии.
     * 
     * *** 
     * @type {YItem[][]} 
     * @public
    */
    lines = [];
    
};
class MGroup extends IGroup {
    
    
    
};
class FGroup extends MGroup {
    
    /**
     * ### YGroup.constructor
     * 
     * 
     * 
     * ***
     * @arg {YGroupT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FGroup.#before(t), {}));
        
        FGroup.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YGroupT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YGroup].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                default: r.items = t.slice(0);
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YGroupT} t @this {YGroup} */
    static #deceit(t) {
        
        try {
            
            FGroup.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YGroupT} t @this {YGroup} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FGroup.#handle.apply(this, [t]);
        
    };
    /** @arg {YGroupT} t @this {YGroup} */
    static #handle(t) {
        
        
        
        FGroup.#create.apply(this, [t]);
        
    };
    /** @arg {YGroupT} t @this {YGroup} */
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
 * ### YGroup
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `string\layout\group`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YGroup extends FGroup {
    
    /**
     * ### clear
     * - Версия `0.0.0`
     * - Модуль `string\layout\group`
     * ***
     * 
     * Метод очистки линий.
     * 
     * ***
     * @public
    */
    clear() {

        this.lines = [];

        return this;
        
    };
    /**
     * ### apply
     * - Версия `0.0.0`
     * - Модуль `string\layout\group`
     * ***
     * 
     * Метод применения группы к строке.
     * 
     * ***
     * @arg {string} string `Строка`
     * @public
    */
    apply(string) {

        const rows = stringGetRows(string).map((row, y) => {

            if (this.lines[y]) {

                this.lines[y].slice().reverse().forEach(item => row = stringAppend(row, item.position[1], this.edgeLeft + item.value + this.edgeRight));

            };

            return row;

        }).join('\n');

        return rows;
        
    };
    /**
     * ### correct
     * - Версия `0.0.0`
     * - Модуль `string\layout\group`
     * ***
     * 
     * Метод корректировки элементов.
     * 
     * ***
     * @public
    */
    correct() {

        for (const y in this.lines) {

            let line = this.lines[y];

            for (let x = 0; x < line.length - 1;) {

                line = line.sort((p, c) => p.position[1] - c.position[1]);

                const itemNow = line[x];

                for (const item of line.slice(++x)) {

                    if (itemNow.position[1] === item.position[1]) {

                        item.position[1]++;

                    };

                };

            };

            this.lines[y] = line;

        };

        return this;
        
    };

    /**
     * ### appendItems
     * - Версия `0.0.0`
     * - Модуль `string\layout\group`
     * ***
     * 
     * Метод добавления элементов.
     * 
     * ***
     * @arg {...([string, number, number]|YItem)} items `Элементы`
     * @public
    */
    appendItems(...items) {

        items.forEach(item => {

            switch (item.constructor) {

                case Array: item = new YItem(...item); break;

            };

            let line = this.lines[item.position[0]];

            if (!line) {

                this.lines[item.position[0]] = [];
                line = this.lines[item.position[0]];

            };

            line.push(item);

        });

        this.correct();

        return this;
        
    };
    
};