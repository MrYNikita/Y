/** ### configBlock
 * - Модуль `ject\entity\report\block`
 * 
 * Конфигуратор модуля `block`.
 * 
*/
export const configBlock = {
    
    /**
     * ### nameDefault
     * 
     * Дефолт наименование.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    nameDefault: 'block',

    /**
     * ### priorityDefault
     * 
     * Дефолт приоритет.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    priorityDefault: null,

    /**
     * ### describeDefault
     * 
     * Дефолт описание.
     * 
     * *** 
     * @type {function():string?} 
     * @public
    */
    describeDefault() {

        return '';

    },
    
};

export default configBlock;