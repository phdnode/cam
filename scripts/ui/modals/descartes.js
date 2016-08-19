'use strict'

const fastn = require('../../fastn')
// const controls = require('../controls')

let panel = fastn('modal',
  fastn('div',{class:'metaphysical-panel'},
    fastn('div',{class:'metaphysical-title-container'},
      fastn('div',{class:'metaphysical-title'},'Cartesian Metaphysics'),
      fastn('img',{class: 'metaphysical-image',src:'images/rene.jpg'})
    ),
    fastn('div',{class: 'god'},
      fastn('label','God(s)'),
      fastn('input',{class: 'gods', type:'number',value:0, min:0, max:1})
      .on('input',function(event,scope){
        //
        //app.attributes.enable()
        //app.attributes.disable()
        // console.log('ui',event)
        let count = event.path[2].childElementCount
        console.log( event.path[2].childElementCount )
        if ( ( event.path[2].childElementCount > 2) && ( event.target.value < 1 ) ) {

            event.path[2].removeChild(event.path[2].childNodes[count-1])
        }
        else if( event.target.value > 0 ){
          let controls = require('../controls/extension.js');
          controls.render();
          event.path[2].appendChild(controls.element)
        }


        return;
        // return fastn('div',{class: 'extension-controls'},
        //   fastn('form',
        //     fastn('input',{type:'range',value:0, min:0, max:500, steps:1}),
        //     fastn('input',{type:'range',value:0, min:0, max:500, steps:1}),
        //     fastn('input',{type:'range',value:0, min:0, max:500, steps:1}),
        //     fastn('input',{type:'color',value:'#ff8d4b'})
        //   )
        // );
      })
    )
  //
  //   fastn('div',{class: 'substance'},
  //     fastn('div',{class: 'tooltip'},
  //       fastn('label','Substance'),
  //       fastn('span',{class: 'tooltiptext'},'"...exists in such a way as to depend on no other thing for its existence"')
  //     ),
  //     fastn('button',{type:'submit',class:'new-substance'},'+')
  //   ),
  //   // fastn('div',{class: 'substance'},
  //   //   fastn('div',{class: 'tooltip'},
  //   //     fastn('label','Mode'),
  //   //     fastn('span',{class: 'tooltiptext'},'"...exists in such a way as to depend on no other thing for its existence"')
  //   //   ),
  //   //   fastn('button',{type:'submit',class:'new-substance'},'+')
  //   // ),
  //   fastn('div',{class: 'principle-attribute'},'Principle Attribute ',
  //     fastn('select',
  //       fastn('option',{value:'mind'},'mind'),
  //       fastn('option',{value:'body'},'body')
  //     ).on('input',function(event,scope){
  //       console.log(event.target.value)
  //     })
  //   ),
  //   fastn('div',{class: 'attributes'},
  //     fastn('label','Qualitites/Attributes '),
  //     fastn('div',{class: 'extension-controls'},
  //       fastn('label',{class: 'attribute-label'},'Extentions'),
  //       fastn('form',
  //         fastn('span',
  //           fastn('label',{class: 'extension-label'},'X extention'),
  //           fastn('input',{type:'range',value:100, min:0, max:500})
  //         ),
  //         fastn('label',{class: 'extension-label'},'Y extention'),
  //         fastn('input',{type:'range',value:100, min:0, max:500}),
  //         fastn('label',{class: 'extension-label'},'Z extention'),
  //         fastn('input',{type:'range',value:100, min:0, max:500})
  //       )
  //     ),
  //     fastn('label',{class: 'attribute-label'},'Color'),
  //     fastn('input',{type:'color',value:'#ff8d4b'}),
  //     fastn('label',{class: 'attribute-label'},'Duration'),
  //     fastn('input',{type:'range',value:0})
  //   )
  )
)

panel.render();
document.body.appendChild(panel.element);
module.exports = panel;
