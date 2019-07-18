var minify = require('html-minifier').minify;
var pretty = require('pretty');
var decode = require('unescape');
const replaceString = require('replace-string');
var beautifyJson = require("json-beautify");
var beautify = require('js-beautify').js;
var UglifyJS = require("uglify-js");

exports.minify = function (textToMinify) {

    var result = minify(textToMinify, {
        removeAttributeQuotes: true
    });
    return result;
}

exports.beautify = function (textToBeautify) {
    var beauty = pretty(textToBeautify);
    return beauty;
}

exports.removeSpl = function (cleanSpl) {

    cleanSpl = replaceString(cleanSpl, '&amp;', ' ');
    cleanSpl = replaceString(cleanSpl, 'amp;', ' ');
    cleanSpl = replaceString(cleanSpl, '&gt;', '>');
    cleanSpl = replaceString(cleanSpl, 'gt;', '>');
    cleanSpl = replaceString(cleanSpl, 'amp;gt;', '>');
    cleanSpl = replaceString(cleanSpl, '&lt;', '<');
    cleanSpl = replaceString(cleanSpl, 'lt;', '<');
    cleanSpl = replaceString(cleanSpl, 'amp;lt;', '<');
    cleanSpl = replaceString(cleanSpl, '&#xD;', ' ');
    cleanSpl = replaceString(cleanSpl, '\"', '"');
    cleanSpl = replaceString(cleanSpl, '\n', ' ');
    result = decode(cleanSpl, 'all');
    return result;
}
exports.beautifyJSON = function (textToBeautify) {
    //  console.log(JSON.parse(textToBeautify));
    var beauty = beautify(textToBeautify, { indent_size: 2, space_in_empty_paren: true });

    return beauty;
}
exports.beautifyJS = function (textToBeautify) {
    //  console.log(JSON.parse(textToBeautify));
    var beauty = beautify(textToBeautify, { indent_size: 2, space_in_empty_paren: true });

    return beauty;
}
exports.minifyJS = function (textToMinify) {
    var beauty = UglifyJS.minify(textToMinify, {
        keep_fnames: true,
        mangle: false,
        compress: false
    });
    if (beauty.error) {
        return JSON.stringify(beauty.error.message + " AT : line:" + beauty.error.line + " col:" + beauty.error.col + " pos:" + beauty.error.pos);
    }
    return beauty.code;
}