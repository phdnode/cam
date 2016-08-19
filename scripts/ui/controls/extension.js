'use strict'

const fastn = require('../../fastn')

//mode when substance being modified
//mode of modification is to extend the x axis
//when modification makes substance some "kind of thing", it is a quality
// e.g. a box
//Generic things in a substance are attributes

let panel =  fastn('div',{class: 'extension-controls'},'Modes (i.e. attribute or quality)',
  fastn('div',
    fastn('form',
      fastn('input',{type:'range',value:0, min:0, max:500, steps:1}),
      fastn('input',{type:'range',value:0, min:0, max:500, steps:1}),
      fastn('input',{type:'range',value:0, min:0, max:500, steps:1}),
      fastn('input',{type:'color',value:'#ff8d4b'})
    )
  )
)

module.exports = panel;
