var fastn = require('^fastn')
var app = require('^app')

module.exports = fastn('div', {class: 'page'},
    require('./transform')
)
