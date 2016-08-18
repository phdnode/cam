var fastn = require('^fastn')
var app = require('^app')

module.exports = fastn('div',{class: 'ui-button'},
  fastn('button', fastn('i',{class: 'fa fa-random fa-lg'}),'Transform')
  .on('click',function(event,scope){
    console.log('helol',scope.get('.') );
    // app.activityRouter.add('new',{_id:scope.get('item.id')});
  })
)
