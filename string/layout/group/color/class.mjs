//#region YI

import { ansiGetColor } from '../../../ansi/module.mjs';
import { YItem } from '../../item/class.mjs';
import { YGroup } from '../class.mjs';

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

/** ### YGroupColorT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string\layout\group\color`
 * 
 * Основной параметр модуля `YGroupColor`.
 * 
 * @typedef {YGroupColorTE&YGroupColorTU} YGroupColorT
 * 
*/
/** ### YGroupColorTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `string\layout\group\color`
 * 
 * Параметр наследования `YGroupColor`.
 * 
 * @typedef {{[p in Exclude<keyof DGroupColor,keyof SGroupColor>|Exclude<keyof SGroupColor,keyof DGroupColor>]:(DGroupColor[p]&SGroupColor[p])}} YGroupColorTE
 * 
*/
/** ### YGroupColorTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `string\layout\group\color`
 * 
 * Уникальные параметры `YGroupColor`.
 * 
 * @typedef YGroupColorTU
 * @prop {any} _
 * 
*/

/** ### colorTTColor
 * - Тип `TT`
 * - Версия `0.0.0`
 * 
 * 
 * 
 * @typedef {import('../../../ansi/module.mjs').ansiColorTMColors} colorTTColor
 * 
*/

//#endregion

class SGroupColor extends YGroup {
    
    /** ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DGroupColor extends SGroupColor {
    
    /**
     * ### foreground
     * 
     * Цвет переднего плана.
     * 
     * *** 
     * @type {colorTTColor?} 
     * @public
    */
    foreground;
    /**
     * ### background
     * 
     * Цвет заднего плана.
     * 
     * *** 
     * @type {colorTTColor} 
     * @public
    */
    background;
    
};
class IGroupColor extends DGroupColor {
    
    
    
};
class MGroupColor extends IGroupColor {
    
    
    
};
class FGroupColor extends MGroupColor {
    
    /**
     * ### YGroupColor.constructor
     * 
     * 
     * 
     * ***
     * @arg {YGroupColorT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FGroupColor.#before(t), {}));
        
        FGroupColor.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YGroupColorT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YGroupColor].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YGroupColorT} t @this {YGroupColor} */
    static #deceit(t) {
        
        try {
            
            FGroupColor.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YGroupColorT} t @this {YGroupColor} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FGroupColor.#handle.apply(this, [t]);
        
    };
    /** @arg {YGroupColorT} t @this {YGroupColor} */
    static #handle(t) {
        
        
        
        FGroupColor.#create.apply(this, [t]);
        
    };
    /** @arg {YGroupColorT} t @this {YGroupColor} */
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
 * ### YGroupColor
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `string\layout\group\color`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YGroupColor extends FGroupColor {
    
    /**
     * ### paint
     * - Версия `0.0.0`
     * ***
     * 
     * Метод перекраски фрагмента строки.
     * 
     * ***
     * @arg {...[colorTTColor, colorTTColor, number, number, number]} colors `Параметры`
     * @public
    */
    paint(...colors) {
        
        for (const color of colors) {

            if (!color[0] && color[0] !== 0) {

                color[0] = this.foreground;

            };
            if (!color[1] && color[1] !== 0) {

                color[1] = this.background;

            };

        };

        return this;
        
    };

    /**
     * ### setColor
     * - Версия `0.0.0`
     * ***
     * 
     * Метод установки цветов строки.
     * 
     * ***
     * @arg {colorTTColor?} foreground `Цвет символов`
     * @arg {colorTTColor?} background `Цвет Фона`
     * @public
    */
    setColor(foreground, background) {
        
        this.foreground = foreground;
        this.background = background;

        return this;
        
    };


    /**
     * ### appendItems
     * - Версия `0.0.0`
     * - Модуль `string\layout\group\color`
     * ***
     * 
     * Метод добавления новых цветов.
     * 
     * ***
     * @arg {[colorTTColor, colorTTColor, number, number][]} colors
     * @public
    */
    appendItems(...colors) {

        colors = colors.map(color => {
            
            switch (color.constructor) {
                
                case Array: color = new YItem(ansiGetColor(...color.slice(0, 2)), ...color.slice(2));
                
            };

            return color;

        });

        YGroup.prototype.appendItems.apply(this, colors);

        return this;
        
    };
    
};