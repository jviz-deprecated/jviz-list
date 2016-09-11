//Initialize the package
var pkg = {};

//Source js files
var src_js = [ './js/editable-list.js', './js/**/*.js' ];

//Source sass files
var src_scss = [ './scss/**.scss' ];

//Package name
pkg.name = 'editable-list';

//Package description
pkg.description = 'A module to build an editable list';

//Author
pkg.author = { id: 'jmjuanes', name: 'Josemi Juanes', email: 'josemijuanes@gmail.com' };

//Build directory
pkg.directory = './build';

//Repository
pkg.repository = 'https://github.com/jviz/module-editable-list';

//Dependencies
pkg.dependencies = { jviz: 'dev' };

//Build tasks
pkg.build = [ 'build:js', 'build:scss' ];

//Install tasks
pkg.install = [];

//Tasks
pkg.tasks =
{
  //Build js files
  'build:js': [  { name: 'src', args: src_js }, { name: 'concat', args: 'editable-list.js' }, { name: 'dest', args: './' } ],

  //Build sass files
  'build:scss': [ { name: 'src', args: src_scss }, { name: 'sass' }, { name: 'dest', args: './' } ]
};

//Exports
module.exports = pkg;