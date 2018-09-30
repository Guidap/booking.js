const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const OUTPUT_FILENAME = 'lib.js';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        filename: OUTPUT_FILENAME
    },
    performance: {
        hints: 'warning'
    }
});