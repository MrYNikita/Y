import { jectFill } from "../../../ject/ject.mjs";
import { fileAppend, fileDelete, fileMove, fileRead, fileVREExpand, fileVRELocation, fileVREName, fileRename, fileWrite } from "../file.mjs";
import { YBasic } from "../../../ject/YBasic/YBasic.mjs";
import { YPath } from "../../path/YPath/YPath.mjs";

// /**
//  * @typedef TBFile
//  * @prop {string} name
//  * @prop {string} expand
//  * @prop {string} location
//  * @typedef {DFile&TBFile} TFile
// */

// class SFile {



// };
// class DFile extends SFile {

//     /**
//      * Наименование файла.
//      * @type {string}
//     */
//     name = '';
//     /**
//      * Тип файла.
//      * @type {string}
//     */
//     expand = '';
//     /**
//      * Состояние удаления.
//      * @type {boolean}
//     */
//     deleted = false;
//     /**
//      * Расположение файла.
//      * @type {string}
//     */
//     location = '';

// };
// class FFile extends DFile {

//     /**
//      *
//      * - Версия `0.0.0`
//      * - Цепочка `BDVHC`
//      *  @arg {TFile} t
//     */
//     constructor(t = {}) {

//         t = FFile.#before(...arguments);

//         FFile.#deceit(t);

//         super(t);

//         FFile.#create.apply(this, [t]);

//     };

//     /** @arg {TFile} t @this {[]} */
//     static #before(t) {

//         if (t?.constructor === String) {

//             t = pathGet(t);

//             return {

//                 name: t.match(fileREName)[1],
//                 expand: t.match(fileREExpand)?.[1],
//                 location: t.match(fileRELocation)?.[0],


//             };

//         } else if (t instanceof Array) {



//         } else return {};

//     };
//     /** @arg {TFile} t @this {YFile} */
//     static #deceit(t) {

//         try {

//             FFile.#verify(t);

//         } catch (e) {

//             throw e;

//         };

//     };
//     /** @arg {TFile} t @this {YFile} */
//     static #verify(t) {

//         const {



//         } = t;

//         FFile.#handle(t);

//     };
//     /** @arg {TFile} t @this {YFile} */
//     static #handle(t) {

//         let {



//         } = t;



//         t = {

//             ...t,

//         };

//     };
//     /** @arg {TFile} t @this {YFile} */
//     static #create(t) {

//         const {



//         } = t;

//         jectFill(this, t);

//     };

// };

// /**
//  *
//  * - Тип `SDFY`
//  * - Версия `0.0.0`
//  * - Цепочка `BDVHC`
// */
// export class YBFile extends FFile {

//     /**
//      * Метод для изменения местоположения файла.
//      * @arg {string|RegExp} location
//     */
//     move(location) {

//         if (!this.deleted) {

//             const l = pathGet(location);

//             fileMove(this.getPath(), l);

//             this.location = l;

//         };

//         return this;

//     };
//     /**
//      * Метод отображения информации.
//      * - Версия `0.0.0`
//     */
//     report() {

//         new YString(this.getReport())

//             .castToYReport()
//             .display()

//         return this;

//     };
//     /**
//      * Метод для переименования файла.
//      * @arg {string} name
//     */
//     rename(name) {

//         if (this.deleted) {

//             fileRename(this.getPath(), name);

//             this.name = name;

//         };

//         return this;

//     };
//     /**
//      * Метод для удаления файла.
//     */
//     delete() {

//         if (!this.deleted) {

//             fileDelete(this.getPath());

//             this.deleted = true;

//         };

//         return this;

//     };
//     /**
//      * Метод для получения полного пути до файла.
//     */
//     getPath() {

//         const {

//             name,
//             expand,
//             location,

//         } = this;

//         if (location) return `${location}/${name}.${expand}`;
//         else return `${name}.${expand}`;

//     };
//     /**
//      * Метод получения информации отображения в виде строки.
//      * - Версия `0.0.0`
//     */
//     getReport() {

//         const d = statSync(this.location + this.getNameFull());

//         return new YString()

//             .changePostfix(';\n')
//             .paste(

//                 `Наименование: ${this.name}`,
//                 `Расширение: ${this.expand}`,
//                 `Размещение: ${this.location}`,
//                 `Удален: ${this.deleted}`,
//                 `Размер: ${d.size}KB`,

//             )
//             .get()

//     };
//     /**
//      * Метод для получения полного имени файла с расширением.
//     */
//     getNameFull() {

//         const {

//             name,
//             expand,

//         } = this;

//         return `${name}.${expand}`;

//     };

// };
// export class YFile extends YBFile {

//     /**
//      * Метод считывания данных из файла.
//     */
//     read() {

//         if (!this.deleted) return fileRead(new RegExp(this.getPath()), this.expand);

//     };
//     /**
//      * Метод записи данных в файл.
//      * @arg {...string} data
//     */
//     write(...data) {

//         if (!this.deleted) fileWrite(this.getPath(), this.expand, ...data);

//         return this;

//     };
//     /**
//      * Метод дополнения файла новыми данными.
//      * @arg {string} data
//     */
//     append(...data) {

//         if (this.deleted) fileAppend(this.getPath(), this.expand, ...data);

//         return this;

//     };

// };

//#region YT

/** ### YFileT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YFile`
 *
 * Основной параметр модуля `YFile`.
 *
 * @typedef {YFileTE&YFileTU} YFileT
 *
*/
/** ### YFileTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YFile`
 *
 * Параметр наследования `YFile`.
 *
 * @typedef {{[p in Exclude<keyof DFile,keyof SFile>|Exclude<keyof SFile,keyof DFile>]:(DFile[p]&SFile[p])}} YFileTE
 *
*/
/** ### YFileTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YFile`
 *
 * Уникальные параметры `YFile`.
 *
 * @typedef YFileTU
 * @prop {any} _
 *
*/

//#endregion

class SFile extends YBasic {



};
class DFile extends SFile {

    /**
     * ### path
     *
     * Путь до файла.
     *
     * ***
     * @type {YPath?}
     * @public
    */
    path;

};
class IFile extends DFile {



};
class MFile extends IFile {



};
class FFile extends MFile {

    /**
     * ### YFile.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YFileT} t
    */
    constructor(t = {}) {

        t = FFile.#before(Object.values(arguments));

        FFile.#deceit(t);

        super(t);

        FFile.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YFile].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YFileT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.path = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YFileT} t @this {YFile} */
    static #deceit(t) {

        try {

            FFile.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YFileT} t @this {YFile} */
    static #verify(t) {

        const {



        } = t;

        FFile.#handle(t);

    };
    /** @arg {YFileT} t @this {YFile} */
    static #handle(t) {

        if (t.path && t.path.constructor === String) {

            t.path = new YPath(t.path);

        };

    };
    /** @arg {YFileT} t @this {YFile} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * ### YBFile
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YFile`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YBFile extends FFile {

    /**
     * ### getName
     * - Версия `0.0.0`
     * - Модуль `YFile`
     * ***
     *
     * Метод полкчения наименования файла.
     *
     * ***
     *
     * @public
    */
    getName() {

        return this.path.get().match(fileVREName)[1];

    };
    /**
     * ### getExpand
     * - Версия `0.0.0`
     * - Модуль `YFile`
     * ***
     *
     * Метод получения расширения файла.
     *
     * ***
     *
     * @public
    */
    getExpand() {

        return this.path.get().match(fileVREExpand)[1] ?? null;

    };
    /**
     * ### getLocation
     * - Версия `0.0.0`
     * - Модуль `YFile`
     * ***
     *
     * Метод получения пути размещения файла.
     *
     * ***
     *
     * @public
    */
    getLocation() {

        return this.path.get().match(fileVRELocation)[0].slice(0, -1);

    };

};
/**
 * ### YFile
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YFile`
 * - Цепочка `BDVHC`
 * ***
 *
*/
export class YFile extends YBFile {

    /**
     * ### read
     * - Версия `0.0.0`
     * - Модуль `YFile`
     * ***
     *
     *
     *
     * ***
     *
     * @public
    */
    read() {

        if (this.path.check()) {

            return fileRead(this.path.get());

        } else {

            return undefined;

        };

    };

    /**
     * ### move
     * - Версия `0.0.0`
     * - Модуль `YFile`
     * ***
     *
     * Метод перемещения файла в указанную локацию.
     *
     * ***
     * @arg {import("../file.mjs").fileTTFragment} location `Локация`
     * @public
    */
    move(location) {

        this.path.set(fileMove(this.path.get(), location));

        return this;

    };

    /**
     * ### write
     * - Версия `0.0.0`
     * - Модуль `YFile`
     * ***
     *
     * Метод записи в файл.
     *
     * ***
     * @arg {string} data `данные`
     * @public
    */
    write(data) {

        fileWrite(this.path.get(), data);

        return this;

    };

    /**
     * ### append
     * - Версия `0.0.0`
     * - Модуль `YFile`
     * ***
     *
     * Метод дополнения данных файла.
     *
     * ***
     * @arg {import("../file.mjs").fileTTData} data `Данные`
     * @public
    */
    append(data) {

        if (data && this.path.check()) {

            fileAppend(this.path.get(), data);

        };

        return this;

    };

    /**
     * ### delete
     * - Версия `0.0.0`
     * - Модуль `YFile`
     * ***
     *
     * Метод для удаления файла.
     *
     * ***
     *
     * @public
    */
    delete() {

        if (this.path.check()) {

            fileDelete(this.path.get());

        };

        return this;

    };

    /**
     * ### rename
     * - Версия `0.0.0`
     * - Модуль `YFile`
     * ***
     *
     * Метод переименования файла.
     *
     * ***
     * @arg {string} name `Наименование`
     * @public
    */
    rename(name) {

        if (name && name.constructor === String && this.path.check()) {

            this.path.set(fileRename(this.path.get(), name));

        };

        return this;

    };

};