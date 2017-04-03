module.exports = {
  'gulp': {
    'styles': {
      'src': ['./app/components/repo/*.css','./app/components/user/*.css'],
      'dest': './'
    },
    'scripts':{
      'src': ['./app/components/**/*.js', './app/*.js'],
      'dest': './'
    },
    'inject': {
      'target':'./app/index.html',
      'css': './*.min.css',
      'js': './*.min.js'
    }
  }
}