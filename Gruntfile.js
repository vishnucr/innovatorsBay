module.exports = function (grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: "\n\n"
			},
			
			deps: {
				src: [
                    'node_modules/jquery/dist/jquery.min.js',
                    // 'node_modules/popper.js/dist/popper.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
					'node_modules/angular/angular.min.js',
					'node_modules/angular-animate/angular-animate.min.js',
                    'node_modules/angular-touch/angular-touch.min.js',
                    'node_modules/angular-aria/angular-aria.min.js',
                    'node_modules/angular-messages/angular-messages.min.js',
                    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
                    'node_modules/angular-material/angular-material.min.js',
				],
				dest: 'src/js/bundle.js'
			},
			css: {
				src: [
                    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css',
                    'node_modules/bootstrap/dist/css/bootstrap.min.css',
					'node_modules/angular-material/angular-material.min.css',
					'node_modules/font-awesome/css/font-awesome.min.css'
				],
				dest: 'src/css/bundle.css'
			},
		},
		copy: {
			main: {
			  files: [
				// makes all src relative to cwd
				{
					expand: true,
					src: ['node_modules/font-awesome/fonts/fontawesome-webfont.ttf'],
					dest: 'src/fonts/',
					filter: 'isFile',
					flatten: true, 
				},
			  ],
			},
		},
		
		watch: {
            options: {
                livereload: true,
            },
			scripts: {
				files: ['src/**/*.js','src/**/*.css'],
				tasks: []
			},
		}
	});

	//npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-ngdocs');

	//tasks
	grunt.registerTask('default', 'Building App.....', ['build']);

	grunt.registerTask('build', 'Build the application', 
		['copy','concat']);
}