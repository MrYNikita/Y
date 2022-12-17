import { styleChange } from "../../../web/html/style/style.mjs";
import { YElementStyle } from "../../../web/html/element/YElement/YElementStyle/YElementStyle.mjs";
import { YString } from "../../../string/YString/YString.mjs";
import { arrayDevideByLimit } from "../../../array/array.mjs";
import { numberGetFrac } from "../../../number/number.mjs";

console.log(YElementStyle.findById('test'));

const ystr = new YString()

    .changeRowLength(10)
    .changeRowEnd(';')
    .paste('12314t24514`324563453142')
    .display()