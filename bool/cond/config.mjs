export const configCond = {

    /**
     * ### defaultSucs
     *
     * Дефолт значение успеха.
     *
     * ***
     * @type {boolean}
     * @public
    */
    defaultSucs: true,
    /**
     * ### defaultFail
     *
     * Дефолт значение провала.
     *
     * ***
     * @type {boolean}
     * @public
    */
    defaultFail: false,
    /**
     * ### defaultConditions
     *
     * Дефолт условия.
     *
     * ***
     * @type {function(...):boolean}
     * @public
    */
    defaultCondition: _ => false,

};

export default configCond;

/**
 * @file config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/