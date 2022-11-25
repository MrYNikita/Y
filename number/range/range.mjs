import { arrayRemoveByIndex, arrayUnique } from "../../array/array.mjs";
import { config } from "../../config.mjs";

//#region cast 0.0.0

/**
 * @typedef TBcast
 * @prop {number} step
 * @prop {Array<number>} numbers
 * @typedef {TBcast} Tcast
*/
  
/** @param {Tcast} t */
function castDeceit(t) {
    
    try {
        
        return castVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {Tcast} t */
function castVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return castHandle(t);
   
};
/** @param {Tcast} t */
function castHandle(t) {
   
    let {
    
    
    
    } = t;
    
    if (!t.step) t.step = 1;
    else if (t.step < 0) t.step *= -1;

    if (t.numbers) t.numbers = arrayUnique(t.numbers).sort((p, c) => p - c);
    
    t = {
        
        ...t,
        
    };
   
    return castComply(t);
   
};
/** @param {Tcast} t */
function castComply(t) {
   
    const {
    
        step,
        numbers,
    
    } = t;

    for (
        
        let index = 0;
        index < numbers.length - 1;
        
    ) {

        const now = numbers[index];
        const next = numbers[index + 1];

        if (now.constructor === Number && next.constructor === Number && Math.abs(now - next) === step) {

            numbers[index] = [

                now,
                next,

            ];

            arrayRemoveByIndex(numbers, index + 1);

        } else if (now.constructor === Array && next.constructor === Number && Math.abs(now[1] - next) === step) {

            now[1] = next;

            arrayRemoveByIndex(numbers, index + 1);

        } else index++;

    };

    return numbers;
    
};

/**
 * Функция сведения к диапазону.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {number} step Шаг.
 * - По умолчанию `1`
 * @param {...number} numbers Числа.
*/
export function rangeCast(step = 1, ...numbers) {

    return castDeceit({ step, numbers, });

};

//#endregion