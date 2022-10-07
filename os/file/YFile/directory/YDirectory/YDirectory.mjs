/**
 * @typedef TBDirectory
 * @prop {} t
 * @typedef {YDirectory&TBDirectory&import("../../YFile.mjs").TFile} TDirectory
*/


import { YBFile, YFile } from "../../YFile.mjs";
import { jectFill } from "../../../../../ject/ject.mjs";
import { pathGet, pathGetAll } from "../../../../path/path.mjs";
import { directoryGetDir, directoryGetFile } from "../directory.mjs";
import { fileREExpand, fileRELocation, fileREName } from "../../../file.mjs";

class SDirectory extends YBFile {
    
    
    
};
class DDirectory extends SDirectory {
    
    /**
     * Массив путей к фалйам и папкам директории.
     * @type {[string]}
    */
    paths;
    
};
class FDirectory extends DDirectory {
    
    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TDirectory} t
    */
    constructor(t = {}) {
        
        t = FDirectory.#before(...arguments);
        
        super(t);
        
        FDirectory.#deceit.apply(this, [t]);
        
    };
    
    /** @param {TDirectory} t @this {[]} */
    static #before(t) {
        
        
        
        if (!t) return {};
        else if (t) return t;
        
    };
    /** @param {TDirectory} t @this {YDirectory} */
    static #deceit(t) {
        
        try {
            
            FDirectory.#verify.apply(this, arguments);
            
        } catch (e) {
            
            throw e;
            
        };
        
    };
    /** @param {TDirectory} t @this {YDirectory} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FDirectory.#handle.apply(this, arguments);
        
    };
    /** @param {TDirectory} t @this {YDirectory} */
    static #handle(t) {
        
        let {
            
            
            
        } = t;
        
        t.expand = 'dir';
        
        t = {
            
            ...t,
            
        };
       
        FDirectory.#create.apply(this, [t]);
        
    };
    /** @param {TDirectory} t @this {YDirectory} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        jectFill.apply(this, [t]);

        this.paths = pathGetAll(this.getPath() + '/');
        
    };
    
};

/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YBDirectory extends FDirectory {
    
    getDir(fragment) {

        if (!this.deleted) {

            const p = directoryGetDir(new RegExp(this.location), fragment);

            return new YDirectory({

                name: p.match(fileREName)[1],
                location: p.match(fileRELocation)[1],

            });

        };

    };
    getFile(fragment) {

        if (!this.deleted) {

            const p = directoryGetFile(new RegExp(this.location), fragment);

            return new YFile({

                name: p.match(fileREName)[1],
                expand: p.match(fileREExpand)[1],
                location: p.match(fileRELocation)[0],

            });

        };

    };
    getPath() {

        const {

            name,
            location,

        } = this;

        return `${location}/${name}`;

    };
    
};
/**
 *
 * - Тип `SDFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YDirectory extends YBDirectory {
    
    
    
};