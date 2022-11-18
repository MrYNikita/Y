import { config } from "../../config.mjs";

//#region order 0.0.0

/**
 * @typedef TBorder
 * @prop {boolean} desc
 * @prop {Array<Array<number>|number>} sequence
 * @typedef {TBorder} Torder
*/
  
/** @param {Torder} t */
function orderDeceit(t) {
    
    try {
        
        return orderVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {Torder} t */
function orderVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return orderHandle(t);
   
};
/** @param {Torder} t */
function orderHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return orderComply(t);
   
};
/** @param {Torder} t */
function orderComply(t) {
   
    const r = [];

    if (t.desc) t.sequence = t.sequence.sort((p, c) => p - c);
    else t.sequence = t.sequence.sort((p, c) => c - p);

    for (

        let i = 0;
        i < t.sequence.length;

    ) {

        const no = t.sequence.pop();

        if (!r?.length) {

            r.push(no);

        } else if (r.at(-1) instanceof Array) {

            if (Math.abs(r.at(-1)[1] - no) === 1) r.at(-1)[1] = no;
            else r.push(no);

        } else {

            if (Math.abs(r.at(-1) - no) === 1) {

                r.push([r.pop(), no]);

            } else r.push(no);

        };

    };

    return r;
    
};

/**
 * Функция для упорядочивания значений последовательности.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {boolean} desc Порядок по убывнию.
 * - По умолчанию `false`
 * @param {Array<Array<number>|number>} sequence Последовательность для упорядочивания.
*/
export function sequenceOrder(sequence, desc = false) {

    return orderDeceit({ sequence, desc });

};

//#endregion
//#region getNearst 0.0.0

/**
 * @typedef TBgetNearst
 * 
 * @typedef {TBgetNearst} TgetNearst
*/

/** @param {TgetNearst} t */
function getNearstDeceit(t) {

    try {

        return getNearstVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TgetNearst} t */
function getNearstVerify(t) {

    const {



    } = t;

    return getNearstHandle(t);

};
/** @param {TgetNearst} t */
function getNearstHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return getNearstComply(t);

};
/** @param {TgetNearst} t */
function getNearstComply(t) {

    const {



    } = t;



};

/**
 * Функция для получения соседних значений из последовательности 
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {number} number Число, которое 
 * @param {Array<number>} sequence
*/
export function sequenceGetNearst(sequence, number) {

    

};

//#endregion
//#region checkEntry 0.0.0

/**
 * @typedef TBcheckEntry
 * @prop {Array<number>} sequence
 * @prop {Array<Array<number>|number>} inners
 * @typedef {TBcheckEntry} TcheckEntry
*/

/** @param {TcheckEntry} t */
function checkEntryDeceit(t) {

    try {

        return checkEntryVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @param {TcheckEntry} t */
function checkEntryVerify(t) {

    const {



    } = t;

    return checkEntryHandle(t);

};
/** @param {TcheckEntry} t */
function checkEntryHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return checkEntryComply(t);

};
/** @param {TcheckEntry} t */
function checkEntryComply(t) {

    const {

        inners,
        sequence,

    } = t;

    for (const i of inners) {

        if (i instanceof Array) {

            inners.push(...i);

        } else for (const n of sequence) {

            if (n instanceof Array && (n[0] <= i && n[1] >= i)) return true;
            else if (n === i) return true;

        };

    };

    return false;

};

/**
 * Функция для проверки вхождения одной последовательности в другую.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @param {Array<number>} sequence Последовательность, с которой будут сопоставляться вхождения.
 * @param {...Array<number>|number} inners Последовательности или числа, которые будут проверяться на принадлежность указанной последовательности.
*/
export function sequenceCheckEntry(sequence, ...inners) {

    return checkEntryDeceit({ sequence, inners });

};

//#endregion
