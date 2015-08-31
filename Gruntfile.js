module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    folder: '<%= pkg.name %>' + '-' +new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate(),
    copy: {
        main: {
            files: [
                {
                    cwd: 'src/img/',
                    src: '**/*', 
                    dest: '<%= folder %>/img', 
                    expand: true
                }
            ]
        }
    },
    uglify: {
        build: {
            src: 'src/js/main.js',
            dest: '<%= folder %>/js/main.js'
        }
    },
    htmlmin: {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                '<%= folder %>/index.html': 'src/index.html'
            }
        }
    },
    cssmin: {
        target: {
            files: [{
                src: ['src/css/main.css'],
                dest: '<%= folder %>/css/main.css'
            }]
        }
    },
    compress: {
        main: {
            options: {
                archive: '<%= folder %>.zip'
            },
            files: [
                {
                    src: '<%= folder %>/**',
                    dest: ''
                }
            ]
        } 
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'htmlmin', 'uglify', 'cssmin', 'compress']);

};
