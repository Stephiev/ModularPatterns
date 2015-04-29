'use strict';

module.exports = function(grunt) {
  // First thing we need is to load grunt packages
  grunt.loadNpmTasks("grunt-contrib-jshint"); // individually load each one of your tasks
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Define the tasks we want to be able to run in grunt below
  // A task is something we can do with grunt
  // Must be separated by commas, semicolons will break grunt

  grunt.initConfig({

    watch: {
      scripts: {
        files: ['Gruntfile.js', 'test/**/*.js', 'greet*.js'],
        tasks: ['default'],
      }
    },

    jshint: {
      // No syntatic meaning
      dev: {
        src: ['Gruntfile.js', 'greet*.js', 'test/**/*.js']// All files we want to jshint
      },
      // Syntatic meaning
      options: {
        node: true,
        globals: {
          describe: true,
          it: true,
          before: true,
          after: true,
          beforeEach: true,
          afterEach: true
        }
      },
    },

 simplemocha: {
    all: {
      src: ['test/**/*.js']
    }
  }

  });
  // Grunt + CLI string followed by an array of the tasts
  // we want to run
  grunt.registerTask('test', ['jshint:dev', 'simplemocha', 'watch']);
  grunt.registerTask('default', ['jshint:dev', 'simplemocha']);
};
