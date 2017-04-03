var del = require('del');
module.exports= {
  clean: function(){
    return  del(['dist'])
  }
}