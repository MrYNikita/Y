//#region YI

import { condIsString } from '../../bool/cond/module.mjs';
import { YJect } from '../../ject/class.mjs';
import { pathBack, pathBackByName, pathExists, pathConcat, pathDecompose, pathGet, pathGetIn, pathGetProject, pathNormilize as pathNormalize } from './module.mjs';

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

/** ### YPathT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `os\path`
 * 
 * Основной параметр модуля `YPath`.
 * 
 * @typedef {YPathTE&YPathTU} YPathT
 * 
*/
/** ### YPathTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `os\path`
 * 
 * Параметр наследования `YPath`.
 * 
 * @typedef {{[p in Exclude<keyof DPath,keyof SPath>|Exclude<keyof SPath,keyof DPath>]:(DPath[p]&SPath[p])}} YPathTE
 * 
*/
/** ### YPathTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `os\path`
 * 
 * Уникальные параметры `YPath`.
 * 
 * @typedef YPathTU
 * @prop {any} _
 * 
*/

//#endregion

class SPath extends YJect {
    
    /**
     * ### getProject
     * - Версия `0.0.0`
     * - Модуль `os\path`
     * ***
     *
     * Метод получения объекта пути от проекта.
     *
     * ***
     * @arg {...string} concats `Фрагменты`
     *
     * Соединяются с путем проекта.
     *
     * @public
    */
    static getProject(...concats) {

        const path = new YPath(pathGetProject());

        concats.filter(c => c.constructor === String).forEach(c => path.concat(c));

        return path;

    };
    
};
class DPath extends SPath {
    
    /**
     * ### value
     * 
     * Значение.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    value;
    
};
class IPath extends DPath {
    
    
    
};
class MPath extends IPath {
    
    
    
};
class FPath extends MPath {
    
    /**
     * ### YPath.constructor
     * 
     * 
     * 
     * ***
     * @arg {YPathT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FPath.#before(t), {}));
        
        FPath.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YPathT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YPath].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: 
                case 2: 
                case 1: r.value = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YPathT} t @this {YPath} */
    static #deceit(t) {
        
        try {
            
            FPath.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YPathT} t @this {YPath} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FPath.#handle.apply(this, [t]);
        
    };
    /** @arg {YPathT} t @this {YPath} */
    static #handle(t) {
        
        t.value = pathGet(t.value, 1);
        
        FPath.#create.apply(this, [t]);
        
    };
    /** @arg {YPathT} t @this {YPath} */
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
 * ### YPath
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `os\path`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YPath extends FPath {
    
    /**
     * ### set
     * - Версия `0.0.0`
     * - Модуль `YPath`
     * ***
     *
     * Метод установки пути.
     *
     * ***
     * @arg {import('./module.mjs').pathTTFragment} fragment `Фрагмент`
     * @public
    */
    set(fragment) {

        if (condIsString(fragment) && pathExists(fragment)) {

            this.value = fragment;

        };

        return this;

    };

    /**
     * ### get
     * - Версия `0.0.0`
     * - Модуль `YPath`
     * ***
     *
     * Метод получения пути.
     *
     * ***
     * @public
    */
    get() {

        return this.value;

    };
    /**
     * ### getIn
     * - Версия `0.0.0`
     * - Модуль `YPath`
     * ***
     *
     * Метод получения вложенных путей.
     *
     * ***
     *
     * @public
    */
    getIn() {

        return pathGetIn(this.get());

    };
    /**
     * ### getDecompose
     * - Версия `0.0.0`
     * - Модуль `YPath`
     * ***
     *
     * Метод полкчения докомпозиции пути.
     *
     * ***
     *
     * @public
    */
    getDecompose() {

        return pathDecompose(this.get());

    };

    /**
     * ### move
     * - Версия `0.0.0`
     * - Модуль `YPath`
     * ***
     *
     * Метод перемещения по пути.
     *
     * Перемещается только в том случае, если путь существует.
     *
     * В противном случае выбрасывает ошибку и сохраняет исходный путь.
     *
     * ***
     * @arg {string} fragment `Фрагмент`
     * @public
    */
    move(fragment) {

        if (fragment) {

            fragment = stringUnifyBySymbol(fragment, '/');

            const result = pathConcat(this.value, fragment);

            if (existsSync(result)) {

                this.value = result;

            } else {

                throw new Error();

            };

        };

        return this;

    };

    /**
     * ### back
     * - Версия `0.0.0`
     * - Модуль `YPath`
     * ***
     *
     * Метод для подъема на уровень выше по указанному пути.
     *
     * ***
     * @arg {number} repeat `Потворения`
     * @public
    */
    back(repeat = 1) {

        this.value = pathBack(this.value, repeat);

        return this;

    };
    /**
     * ### backByName
     * - Версия `0.0.0`
     * - Модуль `os\path`
     * ***
     * 
     * Метод подъема пути до директории с указанным именем.
     * 
     * ***
     * @arg {string} name `Имя`
     * @public
    */
    backByName(name) {

        this.value = pathBackByName(this, name);

        return this;    
        
    };

    /**
     * ### exists
     * - Версия `0.0.0`
     * - Модуль `YPath`
     * ***
     *
     * Метод проверки действительности пути.
     *
     * ***
     *
     * @public
    */
    exists() {

        return pathExists(this.value);

    };

    /**
     * ### concat
     * - Версия `0.0.0`
     * - Модуль `YPath`
     * ***
     *
     * Метод склейки текущего пути с указанными.
     *
     * ***
     * @arg {string} concat `Путь`
     * @public
    */
    concat(concat) {

        this.value = pathConcat(this.value, concat);

        return this;

    };

    /**
     * ### normilaze
     * - Версия `0.0.0`
     * - Модуль `YPath`
     * ***
     *
     * Метод нормализации пути.
     *
     * ***
     *
     * @public
    */
    normilaze() {

        this.value = pathNormalize(this.value);

        return this;

    };

    /**
     * ### castToDir
     * - Версия `0.0.0`
     * - Модуль `YPath`
     * ***
     *
     * Метод получения `YDir` (директории) на основе текущего пути.
     *
     * ***
     * @public
    */
    castToDir() {



    };
    /**
     * ### castToFile
     * - Версия `0.0.0`
     * - Модуль `YPath`
     * ***
     *
     * Метод получения `YFile` (файла) на основе текущего пути.
     *
     * ***
     *
     * @public
    */
    castToFile() {

        return new YFile(this.get());

    };
    
};

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/