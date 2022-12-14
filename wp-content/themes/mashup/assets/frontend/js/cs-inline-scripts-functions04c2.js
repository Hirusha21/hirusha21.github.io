var $ = jQuery;
"use strict";

function mashup_var_inline_style(input_style) {
    "use strict";
    var styleNode = document.createElement('style');
    styleNode.type = "text/css";
    // browser detection (based on prototype.js)
    if (!!(window.attachEvent && !window.opera)) {
        styleNode.styleSheet.cssText = input_style;
    } else {
        var styleText = document.createTextNode(input_style);
        styleNode.appendChild(styleText);
    }
    document.getElementsByTagName('head')[0].appendChild(styleNode);
}

function mashup_var_inline_js(input_js) {
    "use strict";
    var jsNode = document.createElement('script');
    jsNode.type = "text/javascript";
    // browser detection (based on prototype.js)
    if (!!(window.attachEvent && !window.opera)) {
        jsNode.styleSheet.cssText = input_js;
    } else {
        var jsText = document.createTextNode(input_js);
        jsNode.appendChild(jsText);
    }
    document.getElementsByTagName('body')[0].appendChild(jsNode);
}

if (typeof (mashup_page_style) === 'object') {
    if (mashup_page_style.css !== 'undefined') {

        mashup_var_inline_style(mashup_page_style.css);
    }
}

if (typeof (mashup_header_border_style) === 'object') {
    if (mashup_header_border_style.css !== 'undefined') {

        mashup_var_inline_style(mashup_header_border_style.css);
    }
}

if (typeof (mashup_playlist_style) === 'object') {
    if (mashup_playlist_style.css !== 'undefined') {

        mashup_var_inline_style(mashup_playlist_style.css);
    }
}

if (typeof (mashup_breadcrumb_color_style) === 'object') {
    if (mashup_breadcrumb_color_style.css !== 'undefined') {

        mashup_var_inline_style(mashup_breadcrumb_color_style.css);
    }
}
