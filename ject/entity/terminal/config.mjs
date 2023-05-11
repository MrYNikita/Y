import { YString } from "../../../string/class.mjs";
import { structureFrame } from "../../../string/structure/module.mjs";

/** ### configTerminal
 * - Модуль `ject\entity\terminal`
 * 
 * Конфигуратор модуля `terminal`.
 * 
*/
export const configTerminal = {
    
    /**
     * ### reportBlocksRequired
     * 
     * 
     * 
     * ***  
     * @public
    */
    reportBlocksRequired: [
        
        ['Данные', t => {

            return new YString()

                .setPrefix(' * ')
                .setPostfix(';\n')
                .paste(

                    `Слоёв: ${t.layers.length}`,
                    `Длина: ${t.sizeY}`,
                    `Ширина: ${t.sizeX}`,
                    `Привязки: ${t.binds.length}`,
                    `Разметка: ${t.layout ? '+' : '-'}`,
                    `Интрефейс: ${t.interface ? '+' : '-'}`,

                )
                .get()

        }],
        ['Режимы', t => {

            return new YString()

                .setPrefix(' * ')
                .setPostfix(';\n')
                .paste(

                    `Загрузка: ${t.loadMode ? '+' : '-'}`,
                    `Сохранение: ${t.saveMode ? '+' : '-'}`,

                )

        }],

    ],

    /**
     * ### displayYDefault
     * 
     * Дефолт координата области видимости по Y.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    displayYDefault: 0,
    /**
     * ### displayXDefault
     * 
     * Дефолт кооридната области видимости по X.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    displayXDefault: 0,
    /**
     * ### sizeXDefault
     * 
     * Ширина терминала.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    sizeXDefault: process.stdout.columns - 2,
    /**
     * ### sizeYDefault
     * 
     * Высота терминала.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    sizeYDefault: process.stdout.rows - 6,
    /**
     * ### loadModeDefault
     * 
     * Дефолт режим заргрузки.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    loadModeDefault: false,
    /**
     * ### saveModeDefault
     * 
     * Дефолт режим сохранения.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    saveModeDefault: false,
    /**
     * ### fileDefault
     * 
     * Дефолт файл сохранения.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    fileDefault: null,
    /**
     * ### titleDefault
     * 
     * Дефолт титул.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    titleDefault: null,
    
};

export default configTerminal;