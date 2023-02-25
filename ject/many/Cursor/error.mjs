import { YError } from "../../../error/class.mjs";
import { YCursor } from "./class.mjs";

/** ### cursorTError
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `ject\many\cursor`
 *
 * Тип ошибок с фокусом на курсор.
 *
 * @typedef {YError<YCursor>} cursorTError
 *
*/

const adviceCoord = 'проверьте координату на корректность';

let count = 1;

export default {

    /**
     * ### coordNan
     *
     * Ошибка недействительной коориднаты.
     *
     * ***
     * @type {cursorTError}
     * @public
    */
    coordNan: new YError({

        id: count++,
        advice: adviceCoord,
        description: 'указанная координата недействительна',
        clarification: coord => `координата = ${coord}`

    }),
    /**
     * ### coordLessZero
     *
     * Ошибка малого значения коориднаты.
     *
     * ***
     * @type {cursorTError}
     * @public
    */
    coordLessZero: new YError({

        id: count++,
        advice: adviceCoord,
        description: 'указанная координата меньше нуля',
        clarification: coord => `${coord} < 0, где координата - ${coord}`,

    }),
    /**
     * ### coordRangeOut
     *
     * Ошибка выхода координаты за пределы измерения множества.
     *
     * ***
     * @type {cursorTError}
     * @public
    */
    coordRangeOut: new YError({

        id: count++,
        advice: adviceCoord,
        description: 'указанная координата вышла за пределы своего измерения',
        clarification: coord => `координата - ${coord}`,

    }),
    /**
     * ### coordNotNumber
     *
     * Ошибка некорректного значения координаты.
     *
     * ***
     * @type {cursorTError}
     * @public
    */
    coordNotNumber: new YError({

        id: count++,
        advice: adviceCoord,
        description: 'указанная координата не является числом',
        clarification: coord => `конструктор координаты - ${coord.constructor.name}`,

    }),
    /**
     * ### coordNumberInfinity
     *
     * Ошибка бесконечной координаты.
     *
     * ***
     * @type {cursorTError}
     * @public
    */
    coordNumberInfinity: new YError({

        id: count++,
        advice: adviceCoord,
        description: `указанная координата бесконечна`,
        clarification: coord => `координата = ${coord}`,

    }),

};

/**
 * @file error.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/