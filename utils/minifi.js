var minify = require('html-minifier').minify;
var pretty = require('pretty');
var decode = require('unescape');
const replaceString = require('replace-string');
var beautifyJson = require("json-beautify");
var beautify = require('js-beautify').js;

exports.minify = function (textToMinify) {
    var result = minify(removeSpc(textToMinify), {
        removeAttributeQuotes: true
    });
    return result;
}

exports.beautify = function (cleanSpl) {
    var beauty = pretty(removeSpc(cleanSpl));
    return beauty;
}

exports.removeSpl = function (cleanSpl) {
    return removeSpc(cleanSpl);
}
exports.beautifyJSON = function (textToBeautify) {
    //  console.log(JSON.parse(textToBeautify));

    var clean = removeSpc(textToBeautify)
    var beauty = beautify(clean, { indent_size: 2, space_in_empty_paren: true });

    return beauty;
}
exports.beautifyJS = function (textToBeautify) {
    //  console.log(JSON.parse(textToBeautify));
    var beauty = beautify(removeSpc(textToBeautify), { indent_size: 2, space_in_empty_paren: true });

    return beauty;
}

function removeSpc(cleanSpl) {
    cleanSpl = replaceString(cleanSpl, '&amp;', ' ');
    cleanSpl = replaceString(cleanSpl, 'amp;', ' ');
    cleanSpl = replaceString(cleanSpl, '&gt;', '>');
    cleanSpl = replaceString(cleanSpl, 'gt;', '>');
    cleanSpl = replaceString(cleanSpl, 'amp;gt;', '>');
    cleanSpl = replaceString(cleanSpl, '&lt;', '<');
    cleanSpl = replaceString(cleanSpl, 'lt;', '<');
    cleanSpl = replaceString(cleanSpl, 'amp;lt;', '<');
    cleanSpl = replaceString(cleanSpl, '&#xD;', ' ');
    cleanSpl = replaceString(cleanSpl, '\n', ' ');
    cleanSpl = replaceString(cleanSpl, '\\n', ' ');
    cleanSpl = replaceString(cleanSpl, '\\', '');
    cleanSpl = replaceString(cleanSpl, '\"', '"');
    cleanSpl = replaceString(cleanSpl, '\\"', '"');

    result = decode(cleanSpl, 'all');
    return result;
}
