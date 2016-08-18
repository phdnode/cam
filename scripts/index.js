'use strict'

window.addEventListener('load', function(){
    var ui = require('./ui');
    ui.attach().render();
    document.body.appendChild(ui.element);
});
