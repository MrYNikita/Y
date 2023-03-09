import { YLoad } from './module.mjs';

/**
 * ### Y
 * - Версия `0.0.0`
 * ***
 *
 * Класс Y.
 *
 * Данный класс:
 * - Позволяет управлять проектом.
 * - Используется в чистых импортах.
 * - Содержит все ссылки на модули, ошибки и классы проекта.
 *
 * Данный класс не следует использовать:
 * - При необходимости повышенной производительности.
 *
 * При необходимости использовать данный класс в оптимальном виде, необходимо настроить конфигурацию для Y.
 * Настройка подразумевает указания используемых классом модулей. После указания нужных модулей, производительность повысится.
 *
 * ***
 * @class
 * @static
*/
class Y {

    /**
     * ### YJect
     *
     * Класс YJect.
     *
     * ***
     * @type {import('./ject/class.mjs').YJect?}
     * @public
    */
    static YJect;
    /**
     * ### YMany
     *
     * Класс YMany.
     *
     * ***
     * @type {import('./ject/many/class.mjs').YMany?}
     * @public
    */
    static YMany;
    /**
     * ### YFunc
     *
     * Класс YFunc.
     *
     * ***
     * @type {import('./func/class.mjs').YFunc?}
     * @public
    */
    static YFunc;
    /**
     * ### YProc
     *
     * Класс YProc.
     *
     * ***
     * @type {import('./func/proc/class.mjs').YProc?}
     * @public
    */
    static YProc;
    /**
     * ### YBool
     *
     * Класс YBool.
     *
     * ***
     * @type {import('./bool/class.mjs').YBool?}
     * @public
    */
    static YBool;
    /**
     * ### YCond
     *
     * Класс YCond.
     *
     * ***
     * @type {import('./bool/cond/class.mjs').YCond?}
     * @public
    */
    static YCond;
    /**
     * ### YCorr
     *
     * Класс YCorr.
     *
     * ***
     * @type {import('./bool/cond/corr/class.mjs').YCorr?}
     * @public
    */
    static YCorr;
    /**
     * ### YDate
     *
     * Класс YDate.
     *
     * ***
     * @type {import('./date/class.mjs').YDate?}
     * @public
    */
    static YDate;
    /**
     * ### YLine
     *
     * Класс YLine.
     *
     * ***
     * @type {import('./date/class.mjs').YLine?}
     * @public
    */
    static YLine;
    /**
     * ### YPoint
     *
     * Класс YPoint.
     *
     * ***
     * @type {import('./number/point/class.mjs').YPoint?}
     * @public
    */
    static YPoint;
    /**
     * ### YArray
     *
     * Класс YArray.
     *
     * ***
     * @type {import('./number/point/class.mjs').YArray?}
     * @public
    */
    static YArray;
    /**
     * ### YError
     *
     * Класс YError.
     *
     * ***
     * @type {import('./error/class.mjs').YError?}
     * @public
    */
    static YError;
    /**
     * ### YCursor
     *
     * Класс YCursor.
     *
     * ***
     * @type {import('./ject/many/cursor/class.mjs').YCursor?}
     * @public
    */
    static YCursor;
    /**
     * ### YEntity
     *
     * Класс YEntity.
     *
     * ***
     * @type {import('./ject/entity/class.mjs').YEntity?}
     * @public
    */
    static YEntity;
    /**
     * ### YNumber
     *
     * Класс YNumber.
     *
     * ***
     * @type {import('./number/class.mjs').YNumber?}
     * @public
    */
    static YNumber;
    /**
     * ### YRegExp
     *
     * Класс YRegExp.
     *
     * ***
     * @type {import('./RegExp/class.mjs').YRegExp?}
     * @public
    */
    static YRegExp;
    /**
     * ### YRegExp
     *
     * Класс YRegExp.
     *
     * ***
     * @type {import('./RegExp/class.mjs').YRegExp?}
     * @public
    */
    static YRegExp;

    /**
     * ### moduleJect
     *
     * Модуль ject.
     *
     * ***
     * @type {import('./ject/module.mjs')?}
     * @public
    */
    static moduleJect;
    /**
     * ### moduleMany
     *
     * Модуль many.
     *
     * ***
     * @type {import('./ject/many/module.mjs')?}
     * @public
    */
    static moduleMany;
    /**
     * ### moduleFunc
     *
     * Модуль func.
     *
     * ***
     * @type {import('./func/module.mjs')?}
     * @public
    */
    static moduleFunc;
    /**
     * ### moduleProc
     *
     * Модуль proc.
     *
     * ***
     * @type {import('./func/proc/module.mjs')?}
     * @public
    */
    static moduleProc;
    /**
     * ### moduleBool
     *
     * Модуль bool.
     *
     * ***
     * @type {import('./bool/module.mjs')?}
     * @public
    */
    static moduleBool;
    /**
     * ### moduleCond
     *
     * Модуль cond.
     *
     * ***
     * @type {import('./bool/cond/module.mjs')?}
     * @public
    */
    static moduleCond;
    /**
     * ### moduleCorr
     *
     * Модуль corr.
     *
     * ***
     * @type {import('./bool/cond/corr/module.mjs')?}
     * @public
    */
    static moduleCorr;
    /**
     * ### moduleTest
     *
     * Модуль test.
     *
     * ***
     * @type {import('./test/module.mjs')?}
     * @public
    */
    static moduleTest;
    /**
     * ### moduleDate
     *
     * Модуль date.
     *
     * ***
     * @type {import('./date/module.mjs')?}
     * @public
    */
    static moduleDate;
    /**
     * ### moduleLine
     *
     * Модуль line.
     *
     * ***
     * @type {import('./date/module.mjs')?}
     * @public
    */
    static moduleLine;
    /**
     * ### moduleClass
     *
     * Модуль class.
     *
     * ***
     * @type {import('./class/module.mjs')?}
     * @public
    */
    static moduleClass;
    /**
     * ### moduleArray
     *
     * Модуль array.
     *
     * ***
     * @type {import('./array/module.mjs')?}
     * @public
    */
    static moduleArray;
    /**
     * ### moduleError
     *
     * Модуль error.
     *
     * ***
     * @type {import('./error/module.mjs')?}
     * @public
    */
    static moduleError;
    /**
     * ### moduleCursor
     *
     * Модуль cursor.
     *
     * ***
     * @type {import('./ject/many/cursor/module.mjs')?}
     * @public
    */
    static moduleCursor;
    /**
     * ### moduleNumber
     *
     * Модуль number.
     *
     * ***
     * @type {import('./number/module.mjs')?}
     * @public
    */
    static moduleNumber;
    /**
     * ### moduleRegExp
     *
     * Модуль RegExp.
     *
     * ***
     * @type {import('./regexp/module.mjs')?}
     * @public
    */
    static moduleRegExp;
    /**
     * ### moduleRegExp
     *
     * Модуль RegExp.
     *
     * ***
     * @type {import('./regexp/module.mjs')?}
     * @public
    */
    static moduleRegExp;

    /**
     * ### load
     * - Версия `0.0.0`
     * - Модуль `class.mjs`
     * ***
     *
     * Функция {@link YLoad|загрузки} модулей.
     *
     * ***
     * @public
    */
    static async load() {

        return await YLoad(this);

    };

};

await Y.load();

export { Y };

/**
 * @file class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/