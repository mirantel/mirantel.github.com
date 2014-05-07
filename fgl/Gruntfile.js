'use strict';
module.exports = function(grunt) {

grunt.initConfig({
	stylus: {
		options: {
			compress: false,
			urlfunc: 'embedurl',
		},
		global: {
			files: {
				'css/main.css': 'styl/main.styl',
			},
		},
	},

	autoprefixer: {
		options: {
			 browsers: ['last 3 version', 'ie >= 9']
		},
		global: {
			src: 'css/*.css'
		},
	},

	csso: {
		dynamic_mappings: {
			expand: true,
			cwd: 'css/',
			src: ['*.css', '!*.min.css'],
			dest: 'css/',
			ext: '.min.css'
		}
	},

	watch: {
		css: {
			files: 'styl/*.styl',
			tasks: ['stylus', 'autoprefixer'],
		},
	},
});
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-stylus-sprite');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.registerTask( 'default', ['watch']);
	grunt.registerTask( 'release', ['stylus', 'autoprefixer', 'csso']);

};