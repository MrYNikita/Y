import { configOSYPath } from "../../../config.mjs";
import { jectAdopt } from "../../../ject/ject.mjs";
import { YBasic } from "../../../ject/YBasic/YBasic.mjs";
import { stringUnifyBySymbol } from "../../../string/string.mjs";
import { existsSync } from "fs";
import { pathConcat, pathDecompose, pathGet, pathGetIn, pathNormilize as pathNormalize } from "../path.mjs";
import { YFile } from "../../file/YFile/YFile.mjs";

//#region YT

/** ### YPathT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `YPath`
 *
 * Основной параметр модуля `YPath`.
 *
 * @typedef {YPathTE&YPathTU} YPathT
 *
*/
/** ### YPathTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * - Модуль `YPath`
 *
 * Параметр наследования `YPath`.
 *
 * @typedef {{[p in Exclude<keyof DPath,keyof SPath>|Exclude<keyof SPath,keyof DPath>]:(DPath[p]&SPath[p])}} YPathTE
 *
*/
/** ### YPathTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `YPath`
 *
 * Уникальные параметры `YPath`.
 *
 * @typedef YPathTU
 * @prop {any} _
 *
*/

//#endregion

class SPath extends YBasic {



};
class DPath extends SPath {

    /**
     * ### value
     *
     * Значение.
     *
     * В данном случае, значением выступает путь.
     *
     * ***
     * @type {string?}
     * @public
    */
    value = configOSYPath.defaultValue ?? null;

};
class IPath extends DPath {



};
class MPath extends IPath {



};
class FPath extends MPath {

    /**
     * ### YPath.constructor
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *
     *
     *
     * ***
     *  @arg {YPathT} t
    */
    constructor(t = {}) {

        t = FPath.#before(Object.values(arguments));

        FPath.#deceit(t);

        super(t);

        FPath.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YPath].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {YPathT} */
            const r = {};

            if (t[0]?._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.value = t[0];

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {YPathT} t @this {YPath} */
    static #deceit(t) {

        try {

            FPath.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {YPathT} t @this {YPath} */
    static #verify(t) {

        const {



        } = t;

        FPath.#handle(t);

    };
    /** @arg {YPathT} t @this {YPath} */
    static #handle(t) {



    };
    /** @arg {YPathT} t @this {YPath} */
    static #create(t) {

        const {



        } = t;

        jectAdopt(this, t);



    };

};

/**
 * ### YPath
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль `YPath`
 * - Цепочка `BDVHC`
 * ***
 * Класс путей.
 *
 * Данный класс предназначен для работы с путями.
 *
 * В качестве оборачиваемого значения выступает путь.
 * Данный путь может быть модифицирован путем дополнения или удаления.
 * Итоговое значение может быть конвертировано в файл или директорию для дальнейшей работы.
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
     * @arg {import("../path.mjs").pathTTFragment} fragment `Фрагмент`
     * @public
    */
    set(fragment) {

        if (fragment.constructor === String) {

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

        if (repeat <= 0) {

            repeat = 1;

        };

        this.value = this.value.split('/').reverse().splice(repeat).reverse().join('/');

        return this;

    };

    /**
     * ### check
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
    check() {

        if (this.value && existsSync(this.value)) {

            return true;

        } else {

            return false;

        };

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