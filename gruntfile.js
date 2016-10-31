module.exports = function(grunt) {

  // Project configuration.
  // grunt.initConfig({
  //
  // });

  // Load the plugin that provides the "uglify" task.


  // Default task(s).
  grunt.registerTask("files", function() {
      // making dir
      grunt.file.mkdir('builds/dev/css');
      grunt.file.mkdir('builds/dev/images');
      grunt.file.mkdir('builds/dev/js');
      grunt.file.mkdir('components/sass');
      grunt.file.mkdir('components/js');

      // writing files
      grunt.file.write('builds/dev/index.html')
      grunt.file.write('components/sass/style.scss');
      grunt.file.write('components/js/script.js')

  })

  // grunt.registerTask('default', ['']);

};
