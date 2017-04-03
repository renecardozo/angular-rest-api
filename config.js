module.exports = {
  'gulp': {
    'styles': {
      'src': './app/*.css',
      'dest': './'
    },
    'scripts':{
      'src': ['./app/*.js', './app/components/**/*.js'],
      'dest': './'
    },
    'inject': {
      'target':'./app/index.html',
      'css': './*.min.css',
      'js': './*.min.js'
    }
  }
}