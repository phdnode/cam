var fastn = require('^fastn')
var app = require('^app')

module.exports = fastn('div',{class: 'ui-button'},
  fastn('button', fastn('i',{class: 'fa fa-circle-o fa-lg'}), 'Source Schema'
  ).on('click',function(event,scope){

    // app.activityRouter.add('new',{_id:scope.get('item.id')});
  })
)
