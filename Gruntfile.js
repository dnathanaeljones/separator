module.exports = function(grunt) {

  grunt.initConfig({
    coffee: {
      glob_to_multiple: {
        expand: true,
        cwd: 'javascripts',
        src: ['*.coffee'],
        dest: 'javascripts/',
        ext: '.js'
      }
    },
    sass: {
      glob_to_multiple: {
        expand: true,
        cwd: 'stylesheets',
        src: ['*.scss'],
        dest: 'stylesheets/',
        ext: '.css'
      }
    },
    watch: {
      coffee: {
        files: ['javascripts/*.coffee'],
        tasks: ['coffee']
      },
      sass: {
        files: ['stylesheets/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
