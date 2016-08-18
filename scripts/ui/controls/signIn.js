var fastn = require('^fastn')
var app = require('^app')

module.exports = fastn('div',{class: 'transform-button'},
  fastn('button', fastn('i',{class: 'fa fa-sign-in fa-lg'})
  ).on('click',function(event,scope){

    // app.activityRouter.add('new',{_id:scope.get('item.id')});
  })
)
