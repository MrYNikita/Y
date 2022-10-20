import { Duplex } from 'stream';
import { jectFill } from "../../../ject/ject.mjs";

/**
 * @typedef TBStream
 * @prop {any} _
 * @typedef {DStream&TBStream} TStream
*/

class SStream extends Duplex {
    
    
    
};
class DStream extends SStream {
    
    
    
};
class FStream extends DStream {
    
    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TStream} t
    */
    constructor(t = {}) {
        
        t = FStream.#before(...arguments);
        
        FStream.#deceit(t);
        
        super(t);
        
        FStream.#create.apply(this, [t]);
        
    };
    
    /** @param {TStream} t @this {[]} */
    static #before(t) {
        
        
        
        if (!t) t = {};
        
        return t;
        
    };
    /** @param {TStream} t @this {YStream} */
    static #deceit(t) {
        
        try {
            
            FStream.#verify(t);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {TStream} t @this {YStream} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FStream.#handle(t);
        
    };
    /** @param {TStream} t @this {YStream} */
    static #handle(t) {
        
        let {
            
            
            
        } = t;
        
        
        
        t = {
            
            ...t,
            
        };
        
    };
    /** @param {TStream} t @this {YStream} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        jectFill(this, t);
        
        
        
    };
    
};

/**
 *
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YStream extends FStream {
    
    
    
};