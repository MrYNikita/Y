import configConsole from "../../console/config.mjs";

/** ### configStyle
 * 
 * Конфигуратор модуля `style`.
 * 
*/
export const configStyle = {
    
    /**
     * ### frameType
     * 
     * Общий тип рамки.
     * 
     * *** 
     * @type {import("./class.mjs").styleTTFrameType} 
     * @public
    */
    frameTypeTerminal: 'double',
    /**
     * ### colorFDefault
     * 
     * 
     * 
     * *** 
     * @public
    */
    colorFDefault: configConsole.foreground,
    /**
     * ### configBDefault
     * 
     * 
     * 
     * *** 
     * @public
    */
    colorBDefault: configConsole.background,
    /**
     * ### colorFPlaceholder
     * 
     * 
     * 
     * ***
     * @public
    */
    colorFPlaceholderDefault: 'grayLight',
    /**
     * ### colorFFocusDefault
     * 
     * Дефолт цвет символов под фокусом.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    colorFFocusDefault: 'yellow',
    
};

export default configStyle;