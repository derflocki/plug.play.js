module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('bower.json'),
		uglify: {
			dist: {
				options: {
					compress: true,
				},
				files: {
					'lib/plug.upnp.min.js': ['lib/plug.upnp.js'],
				}
			},
		},
		watch: {
			dist: {
				files: ['lib/plug.upnp.js'],
				tasks: ['uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);
};
