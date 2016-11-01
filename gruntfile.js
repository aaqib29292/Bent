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
          livereload: true,
          open: true
        }
      }
    }, //connect

    wiredep: {
      task: {
        // you run `grunt wiredep`
        src: 'builds/dev/**/*.html'
      }
    }, // wiredep
    //
    bower_concat: {
      all: {
        dest: 'builds/dev/js/_bower.js',
        cssDest: 'builds/dev/css/_bower.css',
        include: [
                'jquery',
                'bootstrap'
        ],
        mainFiles: {
               'jquery': ['dist/jquery.js'],
               'bootstrap': ['dist/js/bootstrap.js', "dist/css/bootstrap.css"]
        },
        options: { separator : '***********************/n' }
      },
    }, // bower_concat

  }); // initConfig


  // Default task(s).


  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-bower-concat');



  // grunt.registerTask('default', ['wiredep', 'sass', 'connect', 'watch']);
  grunt.registerTask('default', ['bower_concat', 'wiredep', 'sass', 'connect', 'watch']);


};
