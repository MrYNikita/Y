/** ### configTag
 * - Модуль `ject\entity\log\tag`
 * 
 * Конфигуратор модуля `tag`.
 * 
*/
export const configTag = {
    
    /**
     * ### nameDefault
     * 
     * Дефолт наименование.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    nameDefault: '',

    /**
     * ### limit
     * 
     * Общий предел записей.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    limit: Infinity,
    /**
     * ### limitDefault
     * 
     * Дефолт предел записей.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    limitDefault: null,

    /**
     * ### symbolDefault
     * 
     * Дефолт символ.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    symbolDefault: '',
    
};

export default configTag;