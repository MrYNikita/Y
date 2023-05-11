/** ### configLog
 * - Модуль `ject\entity\log`
 * 
 * Конфигуратор модуля `log`.
 * 
*/
export const configLog = {
    
    /**
     * ### sizeDefault
     * 
     * Дефолт размер.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    sizeDefault: null,

    /**
     * ### tagsRequired
     * 
     * Постоянные теги.
     * 
     * *** 
     * @type {string[]} 
     * @public
    */
    tagsRequired: ['info/*', 'warning/!', 'error/×/10'],

    /**
     * ### limit
     * 
     * Общий лимит.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    limit: 3,
    /**
     * ### defaultLimit
     * 
     * Дефолт лимит.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    limitDefault: null,
    
};

export default configLog;