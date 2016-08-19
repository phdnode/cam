'use strict'

var fastn = require('../../fastn')

let panel = fastn('modal',
  fastn('div',{class:'metaphysical-panel'},
    fastn('div',{class:'metaphysical-title-container'},
      fastn('div',{class:'metaphysical-title'},'Spinozarian Metaphysics'),
      fastn('img',{class: 'metaphysical-image',src:'images/spinoza.jpg'})
    ),
    fastn('form',
      fastn('input',{type:'range',value:0, min:0, max:500, steps:1}),
      fastn('input',{type:'range',value:0, min:0, max:500, steps:1}),
      fastn('input',{type:'range',value:0, min:0, max:500, steps:1}),
      fastn('input',{type:'color',value:'#ff8d4b'})
    )
  )
)

panel.render();
document.body.appendChild(panel.element);
module.exports = panel;
