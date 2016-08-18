var fastn = require('^fastn')
var app = require('^app')

module.exports = fastn('div',{class: 'ui-button'},
    fastn('button', fastn('i',{class: 'fa fa-circle fa-lg'}), 'Source Data') )
    .on('click',function(event,scope){
      console.log('helol',scope.get('.') );
      // app.activityRouter.add('new',{_id:scope.get('item.id')});
    })
