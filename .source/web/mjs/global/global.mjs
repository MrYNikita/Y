import { YClient } from "../../../../web/client/YClient/YClient.mjs";
import { YElement } from "../../../../web/html/element/YElement/YElement.mjs";
import { YElementStyle } from "../../../../web/html/element/YElement/YElementStyle/YElementStyle.mjs";

const client = new YClient();

const styleLocal = new YElementStyle({ id: 'y_style_local' });
const styleGlobal = new YElementStyle({ id: 'y_style_global' });
const stylePrivate = new YElementStyle({ id: 'y_style_private' });

styleGlobal.append(

    ['*', {

        margin: '0',
        padding: '0',
        overflow: 'hidden',

    }],
    ['body', {

        width: '100%',
        height: '100%',
        position: 'absolute',

    }],
    ['.y_element_div_layout', {

        width: 'inherit',
        height: 'inherit',

    }],
    ['.backdrop', {

        width: 'inherit',
        height: 'inherit',

    }],
    ['.y_style_position_grid', {

        display: 'grid',

    }],
    ['.y_style_position_flex', {

        display: 'flex',

    }],
    ['#y_div_background', {

        backgroundImage: 'radial-gradient(#7eb0df, #1d5c96), radial-gradient(red, green)',

    }],

);

const divBackground = new YElement(`!div #y_div_background .y_element_div_layout] ^!body] /`);

setInterval(_ => {

    console.clear();

    client.report();

}, 250);