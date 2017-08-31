var path = require('path');

var sourcePath = path.join('.', 'src');
var rootPath = path.join('.', 'dist');

var prod = process.env.NODE_ENV === 'production';

module.exports = {
    prod: prod,

    paths: {
        content: path.join('.', 'content'),
        templates: sourcePath,
        sass: sourcePath,
        imagesSrc: path.join('.', 'content', 'images'),
        css: rootPath,
        www: rootPath,
    },

    PlzOptions: {
        minifier: prod,
        mqpacker: false,
        filters: false,
        rem: true,
        pseudoElements: true,
        opacity: true,
        autoprefixer: {
            browsers: ['ie 8', 'ie 9', '> 1%'],
        },
    },
};
