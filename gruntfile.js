module.exports = function(grunt) {

  grunt.registerTask("files", function() {

      // making dir
      grunt.file.mkdir('builds/dev/css');
      grunt.file.mkdir('builds/dev/images');
      grunt.file.mkdir('builds/dev/js');
      grunt.file.mkdir('components/sass');
      grunt.file.mkdir('components/js');

      // writing files
      grunt.file.write('/index.html');
      grunt.file.write('components/sass/style.scss');
      grunt.file.write('components/js/script.js');

  }); // folder and files structure - run 'grunt files' cmd

  // Project configuration.
  grunt.initConfig({

    compass: {
      dev: {                   // Target
        options: {              // Target options
          config: 'config.rb',
        }
      },
    }, // compass

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      script: {
        files: ['builds/dev/**/*.html', 'components/sass/**/*.scss', 'components/js/**/*.js'],
        tasks: ['compass']
      },
      sass: {
        files: ['components/sass/*.scss'],
        tasks: ['compass']
      }
    }, // watch

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 3000,
          base: [".", 'builds/dev/'],
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

    bower_concat: {
      all: {
        dest: {
          'js': 'builds/dev/js/bower.js',
          'css': 'builds/dev/css/bower.css'
        },
        options: { separator : '\n\n/************************\n*****   New File  *****\n***********************/\n\n' },
        mainFiles: {
          "jquery": ["dist/jquery.js"],
          "bootstrap": ["less/bootstrap.less", "dist/js/bootstrap.js", "dist/css/bootstrap.css", "dist/fonts/glyphicons-halflings-regular.woff"],
          "font-awesome":[ "css/font-awesome.css"],
          "owlcarousel": [ "owl-carousel/owl.carousel.js", "owl-carousel/owl.theme.css", "owl-carousel/owl.carousel.css"],
          "waypoints":[ "lib/jquery.waypoints.js"],
          "counter-up": [ "jquery.counterup.js" ]
        }
      }
    } // bower_concat

  }); // initConfig


  // Default task(s).


  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-bower-concat');



  // grunt.registerTask('default', ['bower_concat', 'wiredep', 'compass', 'connect', 'watch']);
  // grunt.registerTask('default', ['wiredep', 'compass', 'connect', 'watch']);
  grunt.registerTask('default', ['bower_concat', 'compass', 'connect', 'watch']);


};
