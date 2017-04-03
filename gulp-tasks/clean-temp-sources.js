var del = require('del');
module.exports= {
  cleanTempSource: function(){
    return  del(['./*.min.js', './*.min.css'])
  }
}