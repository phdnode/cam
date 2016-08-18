'use strict'

var fastn = require('../fastn')
let modals = require('./modals')

let controls = fastn('div', {class: 'philosophers'},
  fastn('div',{class: 'tooltip'},
    fastn('button', {type:'submit'},
      fastn('img',{class: 'philimg',src:'images/rene.jpg'}),
      fastn('span',{class: 'tooltiptext'},'Descartes')
    )
  ).on('click',function(event,scope){
    console.log('clicked')
    modals.descartes.show(true)
  }),
  fastn('div',{class: 'tooltip'},
    fastn('button', {type:'submit'},
      fastn('img',{class: 'philimg',src:'images/spinoza.jpg'}),
      fastn('span',{class: 'tooltiptext'},'Spinoza')
    )
  ).on('click',function(event,scope){
    console.log('clicked')
    modals.spinoza.show(true)
  }),
  fastn('div',{class: 'tooltip'},
    fastn('button', {type:'submit'},
      fastn('img',{class: 'philimg',src:'images/leibniz.jpg'}),
      fastn('span',{class: 'tooltiptext'},'Leibniz')
    )
  ).on('click',function(event,scope){
    console.log('clicked')
    modals.leibniz.show(true)
  })
)

module.exports = controls;
