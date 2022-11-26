import { jectFill } from "../ject.mjs";
<<<<<<< HEAD
=======
import { YLog } from "../../log/YLog/YLog.mjs";
import { YString } from "../../string/YString/YString.mjs";
import { stringCastToDate } from "../../string/string.mjs";
>>>>>>> main

/**
 * @typedef TBBasic
 * @prop {any} _
 * @typedef {DBasic&TBBasic} TBasic
*/

class SBasic {
<<<<<<< HEAD



};
class DBasic extends SBasic {



};
class IBasic extends DBasic {



};
class FBasic extends IBasic {

=======
    
    
    
};
class DBasic extends SBasic {
    
    
    
};
class IBasic extends DBasic {
    
    /**
     * Журнал.
     * 
     * Используется для учета записей.
     * Каждая запись содержит информацию о произошедших в объекте-владельце событий.
     * @type {YLog}
    */
    log = new YLog();
    /**
     * Дата создания.
     * @type {Date}
    */
    date = new Date();
    
};
class FBasic extends IBasic {
    
>>>>>>> main
    /**
     * Контсруктор класса `YBasic`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TBasic} t
    */
    constructor(t = {}) {
<<<<<<< HEAD

        t = FBasic.#before(arguments);

        FBasic.#deceit(t);

        super(t);

        FBasic.#create.apply(this, [t]);

    };

    /** @param {TBasic} t */
    static #before(t) {

        if (t?.length === 1 && t[0]?.constructor === Object) {

            return t[0];

        } else if (t?.length) {

            const r = {};



            return r;

        } else return {};

    };
    /** @param {TBasic} t @this {YBasic} */
    static #deceit(t) {

        try {

            FBasic.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TBasic} t @this {YBasic} */
    static #verify(t) {

        const {



        } = t;

        FBasic.#handle(t);

    };
    /** @param {TBasic} t @this {YBasic} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TBasic} t @this {YBasic} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

=======
        
        t = FBasic.#before(arguments);
        
        FBasic.#deceit(t);
        
        super(t);
        
        FBasic.#create.apply(this, [t]);
        
    };
    
    /** @param {TBasic} t */
    static #before(t) {
        
        if (t?.length === 1 && t[0]?.constructor === Object) {
            
            return t[0];
            
        } else if (t?.length) {
            
            const r = {};
            
            
            
            return r;
            
        } else return {};
        
    };
    /** @param {TBasic} t @this {YBasic} */
    static #deceit(t) {
        
        try {
            
            FBasic.#verify(t);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {TBasic} t @this {YBasic} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FBasic.#handle(t);
        
    };
    /** @param {TBasic} t @this {YBasic} */
    static #handle(t) {
        
        let {
            
            
            
        } = t;
        
        
        
        t = {
            
            ...t,
            
        };
        
    };
    /** @param {TBasic} t @this {YBasic} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        jectFill(this, t);
        
        
        
    };
    
>>>>>>> main
};

/**
 * Базовый класс `YModules`.
<<<<<<< HEAD
 *
=======
 * 
>>>>>>> main
 * Данный класс содержит базовые методы и свойства для остальных классов модулей.
 * - Тип `SDIFY-1.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YBasic extends FBasic {
<<<<<<< HEAD



=======
    
    /**
     * Метод отображения информации.
     * - Версия `0.0.0`
    */
    report() {

        new YString(this.getReport())   
        
            .castToYReport()
            .display();

        return this;

    };
    /**
     * Метод получения информации.
     * - Версия `0.0.0`
    */
    getReport() {

        return new YString()

            .changePostfix(';\n')
            .paste(
                
                `Класс: ${this.constructor.name}`,
                `Дата: ${stringCastToDate(this.date)}`,
                
            )
            .pasteTemplate('l')
            .paste(

                `Записей: ${this.log.list.reduce((p, c) => p + c.list.length, 0)}`,
                ...this.log.list.map(s => new YString()

                    .changePostfix(', ')
                    .paste(

                        `Секция: ${s.label}`,
                        `Символ: ${s.symbol}`,
                        `Видимость: ${s.vis}`,

                    )
                    .changePostfix()
                    .paste(`Записей: ${s.list.length}`)

                ),

            )
            .pasteTemplate('l')
            .paste(...this.log.getVisiable())
            .get();

    };
    
>>>>>>> main
};