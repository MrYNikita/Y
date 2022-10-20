import { jectFill } from "../../ject/ject.mjs";
import { YNotice } from "../YNotice/YNotice.mjs";
import { YSection } from "../YNotice/YSection/YSection.mjs";

/**
 * @typedef TBLog
 * @prop {any} _
 * @typedef {DLog&TBLog} TLog
*/

class SLog {
    
    
    
};
class DLog extends SLog {
    
    /**
     * Секции.
     * @type {[YSection]}
    */
    list = [];
    
};
class FLog extends DLog {
    
    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TLog} t
    */
    constructor(t = {}) {
        
        t = FLog.#before(...arguments);
        
        FLog.#deceit(t);
        
        super(t);
        
        FLog.#create.apply(this, [t]);
        
    };
    
    /** @param {TLog} t @this {[]} */
    static #before(t) {
        
        
        
        if (!t) t = {};
        
        return t;
        
    };
    /** @param {TLog} t @this {YLog} */
    static #deceit(t) {
        
        try {
            
            FLog.#verify(t);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {TLog} t @this {YLog} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FLog.#handle(t);
        
    };
    /** @param {TLog} t @this {YLog} */
    static #handle(t) {
        
        let {
            
            
            
        } = t;
        
        
        
        t = {
            
            ...t,
            
        };
        
    };
    /** @param {TLog} t @this {YLog} */
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
export class YLog extends FLog {
    
    get() {

        return this.list.map(s => s.list).flat().sort((p, c) => p.index - c.index);

    };
    log() {

        this.get().forEach(n => console.log(n.get()));

        return this;

    };
    /**
     * Метод для добавления новых уведомлений.
     * - Версия `0.0.0`
     * @param {...[string]} notices Массив вида: `метка, ..уведомления`.
    */
    appendNotice(...notices) {

        const list = this.get();

        notices.forEach(n => {

            const section = this.list.find(s => s.label === n[0] || s.symbol === n[0]);

            n.splice(1).forEach(n => {

                if (section.list.length === section.size) {

                    const i = list.indexOf(section.list[0]);

                    list.slice(i + 1).forEach(n => n.index -= 1);
                    list.splice(i, 1);

                };

                n = new YNotice({ data: n, index: (list.length) ? list.length : 0 });

                section.append(n);
                list.push(n)

            });

        });

        // notices.forEach(n => {

        //     const a = n.splice(1);
        //     const s = this.list.find(s => s.label === n[0] || s.symbol === n[0]);
        //     const l = this.get();

        //     if (l.length) {

        //         const i = s.list.length + a.length - s.size - 1;
        //         const j = (i < 0) ? null : s.list[i];

        //         if (j) {
                    
        //             l.forEach(n => (n.index > j.index) ? n.index -= i + 1 : 0);
        //             s.append(...a.map((n, i) => new YNotice({ data: n, index: l.length - i - 1 })));

        //         } else {

        //             s.append(...a.map((n, i) => new YNotice({ data: n, index: l.length + i })));

        //         };

        //     } else {

        //         s.append(...a.map((n, i) => new YNotice({ data: n, index: i })));

        //     };

        // });

        return this;

    };
    /**
     * Метод для добавления новых секций.
     * - Версия `0.0.0`
     * @param {...YSection} j
    */
    appendSection(...j) {

        j.forEach(j => ((j.symbol || j.label) && !this.list.find(s => j.symbol === s.symbol || j.label === s.label)) ? this.list.push(new YSection(j)) : 0);

        return this;

    };
    
};