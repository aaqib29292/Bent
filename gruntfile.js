module.exports = function(grunt) {

  grunt.registerTask("files", function() {
      // making dir
      grunt.file.mkdir('builds/dev/css');
      grunt.file.mkdir('builds/dev/images');
      grunt.file.mkdir('builds/dev/js');
      grunt.file.mkdir('components/sass');
      grunt.file.mkdir('components/js');

      // writing files
      grunt.file.write('builds/dev/index.html');
      grunt.file.write('components/sass/style.scss');
      grunt.file.write('components/js/script.js');

  }); // folder and files structure - run 'grunt files' cmd

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
          sourceMap: true,
          style: 'expanded'
      },
      dev: {
          files: [{
              src: 'components/sass/style.scss',
              dest: 'builds/dev/css/style.css'
          }]
      }
    }, //sass

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      script: {
        files: ['builds/dev/**/*.html', 'components/sass/**/*.scss', 'components/js/**/*.js'],
        tasks: ['sass']
      }
    }, // watch

    connect: {
    server: {
      options: {
        hostname: 'localhost',
        port: 3000,
        base: 'builds/dev/',
        livereload: true
      }
    }
  }

  }); // initConfig


  // Default task(s).


  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');



  grunt.registerTask('default', ['sass', 'connect', 'watch']);


};
