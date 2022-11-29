import { YClient } from "../../../../web/client/YClient/YClient.mjs";
import { YElement } from "../../../../web/html/element/YElement/YElement.mjs";
import { YElementStyle } from "../../../../web/html/element/YElement/YElementStyle/YElementStyle.mjs";

const styleLocal = new YElementStyle({ id: 'y_style_local' });
const styleGlobal = new YElementStyle({ id: 'y_style_global' });
const stylePrivate = new YElementStyle({ id: 'y_style_private' });

styleGlobal.append(

    ['*', {

        margin: '0',
        padding: '0',
        overflow: 'hidden',
        boxSizing: 'border-box',

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

        backgroundImage: 'radial-gradient(at center, #7eb0df, transparent 10%), radial-gradient(at center, #7eb0df, #1d5c96)'

    }],

    ['#test', {

        left: '350px',
        top: '280px',
        width: '200px',
        height: '140px',

    }],

    ['.window', {

        position: 'absolute',
        boxShadow: '0px 0px 10px',
        borderRadius: '12px',
        backgroundColor: '#fff',

    }],

);

const client = new YClient();

const divWindowTest = new YElement(`

    !div #test .window] ^!body] <

    > /

`).appendEvent(

    'mousedown',
    'take',
    function (e) {

        const femu = _ => {

            removeEventListener('mouseup', femu);
            removeEventListener('mousemove', femm);

        };
        const femm = _ => {

            const s = styleGlobal.get(`#${this.id}`);

            const sizeX = s.width.match(/\d+/)[0] - 0;
            const sizeY = s.height.match(/\d+/)[0] - 0;

            const x = client.cursor.x;
            const y = client.cursor.y;

            styleGlobal.change('#test', {

                top: `${y - sizeY / 2 >= 0 && y + sizeY / 2 <= window.innerHeight ? `${y}px` : s.top}`,
                left: `${x - sizeX / 2 >= 0 && x + sizeX / 2 <= window.innerWidth ? `${x}px` : s.left}`,
                transform: `translate(${(-sizeX / 2)}px, ${-sizeY / 2}px)`,

            });

        };

        addEventListener('mouseup', femu);
        addEventListener('mousemove', femm);

    },

);


const divBackground = new YElement(`!div #y_div_background .y_element_div_layout] ^!body] /`);

setInterval(_ => {

    console.clear();

    client.report();

}, 250);