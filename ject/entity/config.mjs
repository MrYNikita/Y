import { YString } from "../../string/class.mjs";

/** ### configEntity
 * - Модуль `ject\entity`
 * 
 * Конфигуратор модуля `entity`.
 * 
*/
export const configEntity = {

    /**
     * ### reportBlocksRequired
     * 
     * Отчеты.
     * 
     * ***
     * @public
    */
    reportBlocksRequired: [

        ['Сводка', t => {

            return new YString()

                .setPrefix(' * ')
                .setPostfix(';\n')
                .paste(

                    `Дата: ${t.date.toString()}`,
                    `Класс: ${t.constructor.name}`,

                )
                .get()

        }, 0, 'debug', 'summary'],
        ['Журнал', t => {

            const records = t.log.getRecords();

            return new YString()

                .setPrefix(' * ')
                .setPostfix(';\n')
                .paste(

                    `Страниц: ${t.log.pages.length}`,
                    `Лимит: ${t.log.limit ? t.log.limit : t.log.constructor.config.limit}`,
                    ...records.map(record => record.toString())

                )
                .get()

        }, 0, 'debug', 'log'],

    ],

};

export default configEntity;

/**
 * @file config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/