import { YRegExp } from "../../../../regexp/YRegExp/YRegExp.mjs";
import { stringCastToDate, stringFind, stringFindAll } from "../../../../string/string.mjs";
import { YString } from "../../../../string/YString/YString.mjs";
import { YClient } from "../../../../web/client/YClient/YClient.mjs";
import { elementREString } from "../../../../web/html/element/element.mjs";
import { YElement } from "../../../../web/html/element/YElement/YElement.mjs";
import { YElementStyle } from "../../../../web/html/element/YElement/YElementStyle/YElementStyle.mjs";

const str = `

    !div #background ^!body] <
        !div #window .window] <
            !div #backdrop .backdrop] /
            !div #layout .layout] <
                !div #panel .panel] <
                    !button #button .button panel_item] :Кнопка: /
                > /
            > /
        > /
    > /

`;

const ystr = new YString(str)

    .display();

console.log(stringFindAll(str, /<(?<f>.+)>/ms)[0]);

// ystr.display();

// const styleLocal = new YElementStyle({ id: 'local' });
// const styleGlobal = new YElementStyle({ id: 'global' });
// const stylePrivate = new YElementStyle({ id: 'private' });

// styleGlobal.append(

//     ['*', {

//         width: 'inherit',
//         height: 'inherit',
//         margin: '0',
//         padding: '0',
//         overflow: 'hidden',
//         boxSizing: 'border-box',
//         fontFamily: '\'Courier New\', Courier, monospace',

//     }],
//     ['body', {

//         width: '100%',
//         height: '100%',
//         position: 'absolute',

//     }],

//     ['.size_over', {

//         width: '100%',
//         height: '100%',

//     }],

//     ['#panel', {

//         gridArea: 'p',

//     }],
//     ['#window', {

//         left: '10px',
//         top: '10px',
//         width: '550px',
//         height: '280px',

//     }],
//     ['#layout', {

//         gridTemplateAreas: new YString()

//             .changePrefix(`'`)
//             .changePostfix(`'`)
//             .paste(

//                 'l',
//                 'l',
//                 'l',
//                 'i',
//                 'p',
//                 '.',
//                 '.',

//             )
//             .get()

//     }],
//     ['#backdrop', {



//     }],
//     ['#background', {

//         backgroundImage: 'radial-gradient(at center, #7eb0df, transparent 5%), radial-gradient(at center, #7eb0df, #1d5c96)',

//     }],

//     ['.panel', {

//         padding: `0.5em`,
//         display: 'flex',
//         alignItems: 'flex-start',

//     }, '.size_over'],
//     ['.panel_item', {

//         width: '25%',

//     }],
//     ['.layout', {

//         top: `50%`,
//         left: `50%`,
//         width: '98%',
//         height: '85%',
//         zIndex: 1,
//         display: `grid`,
//         position: 'absolute',
//         boxShadow: 'inset 0px 0px 0.5em #000',
//         transform: `translate(-50%, -43%)`,
//         borderRadius: `5px`,
//         backgroundColor: '#12293f',

//     }],
//     ['.window', {

//         position: 'absolute',

//     }],
//     ['.backdrop', {

//         position: 'absolute',
//         backgroundColor: `#01315e`,

//     }],

// );

// const client = new YClient();

// new YElement(new YString()

//     .paste(

//         `!div #background .red blue] ^!body] /`,

//     )
//     .get()

// );

// `

//     !div #background ^!body] <
//         !div #window .window] <
//             !div #backdrop .backdrop] /
//             !div #layout .layout] <
//                 !div #panel .panel] <
//                     !button #button .button panel_item] :Кнопка: /
//                 > /
//             > /
//         > /
//     > /

// `

// !div #window .window] <
//     !div #backdrop .backdrop] /
//     !div #layout .layout] <
//         !div #panel .panel] <
//             !button #button .button panel_item] :Кнопка:
//         > /
//     > /
// > /

// const background = new YElement(`!div #background ^!body] /`);
// const window = new YElement(`!div #window .window] ^#background] /`);
// const backdrop = new YElement(`!div #backdrop .backdrop] ^#window] /`);
// const layout = new YElement(`!div #layout .layout] ^#window] /`);

// const panel = new YElement(`!div #panel .panel] ^#layout] /`);
// const button = new YElement(`!button #button .button panel_item] ^#panel] :Кнопка: type=button /`);

// const divWindowTest = new YElement(`

//     !div #backdrop .backdrop] ^#background] <
//         !div #test .window] /
//     > /

// // `).appendEvent(

//     'mousedown',
//     'take',
//     function (e) {

//         const femu = _ => {

//             removeEventListener('mouseup', femu);
//             removeEventListener('mousemove', femm);

//         };
//         const femm = _ => {

//             console.log(this);

//             const s = styleGlobal.get(`#${this.id}`);

//             const sizeX = s.width.match(/\d+/)[0] - 0;
//             const sizeY = s.height.match(/\d+/)[0] - 0;

//             const x = client.cursor.x;
//             const y = client.cursor.y;

//             styleGlobal.change(`#${this.id}`, {

//                 top: `${y - sizeY / 2 >= 0 && y + sizeY / 2 <= window.innerHeight ? `${y}px` : s.top}`,
//                 left: `${x - sizeX / 2 >= 0 && x + sizeX / 2 <= window.innerWidth ? `${x}px` : s.left}`,
//                 transform: `translate(${(-sizeX / 2)}px, ${-sizeY / 2}px)`,

//             });

//         };

//         addEventListener('mouseup', femu);
//         addEventListener('mousemove', femm);

//     },

// );

// setInterval(_ => {

//     console.clear();

//     client.report();

// }, 250);