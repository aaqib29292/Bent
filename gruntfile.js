module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
          sourceMap: true,
          style: 'expanded',
      },
      dev: {
          files: [{
              src: 'components/sass/style.scss',
              dest: 'builds/dev/css/style.css'
          }]
      }
    } //sass

  });

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-sass');

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

  }); // folder and files structure - run 'grunt files' cmd


  grunt.registerTask('default', ['sass']);


};
