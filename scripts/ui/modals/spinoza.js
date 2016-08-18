'use strict'

var fastn = require('../../fastn')

let panel = fastn('modal',
  fastn('div',{class:'metaphysical-panel'},
    fastn('div',{class:'metaphysical-title'},'Spinoza Metaphysics'),
    fastn('form',
      fastn('input',{type:'range',value:100, min:0, max:500}),
      fastn('input',{type:'range',value:100, min:0, max:500}),
      fastn('input',{type:'range',value:100, min:0, max:500}),
      fastn('input',{type:'color',value:'#ff8d4b'})
    )
  )
)

panel.render();
document.body.appendChild(panel.element);
module.exports = panel;
