import { YString } from "../../../../string/class.mjs";

/** ### configListener
 * - Модуль `ject\entity\terminal\listener`
 * 
 * Конфигуратор модуля `listener`.
 * 
*/
export const configListener = {

    /**
     * ### keysLength
     * 
     * Максимальное количество клавиш в последовательности.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    keysLength: 3,
    /**
     * ### reportBlocksRequired
     * 
     * Обязательные блоки отчета.
     * 
     * ***
     * @public
    */
    reportBlocksRequired: [

        ['Состояния', y => {

            return new YString()

                .setPrefix(' * ')
                .setPostfix(';\n')
                .paste(

                    `Alt: ${y.alt}`,
                    `Name: ${y.name}`,
                    `Ctrl: ${y.ctrl}`,
                    `Shift: ${y.shift}`,

                )

        }],

    ],

};

export default configListener;

/**
 * @file config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/