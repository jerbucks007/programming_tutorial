/**
 * 
 * @Author: Reynan E. Bautista
 * @Company: Leekie Enterprises
 * @2015
 * @Version: 1.0.0
 * @Desc: new Grunt format
 * 
 */

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			style: {
				src: ['./public/build/stylesheets.css']
			},
			vendor: {
				src: ['./public/build/vendor.js']
			},
			admin: {
				src: ['./public/build/admin.js']
			},
		},
		concat: {
			options: {
				stripBanners: true,
				keepSpecialComments: false
			},
			css: {
				//src: ['./public/css/*.css', '!./public/build/' , '!./public/**/*.min.css'],
				src: [
					'./public/css/bootstrap.css',
					'./public/css/font-awesome.css', // icon css
					'./public/css/main.css',
					'./public/css/ui.css',
					'./public/css/style.css',
					'./public/css/style-app.css'
				],
				dest: './public/css/stylesheets.css',
			},
			vendor: {
				options: {
					separator: ''
				},
				src: [
					'./public/plugins/jquery/jquery-1.11.3.js',
					
					'./public/plugins/createjs.min.js',
					'./public/plugins/angular/angular.js',
					'./public/plugins/angular/angular-route.min.js',
					'./public/plugins/angular/angular-animate.min.js',
					'./public/plugins/angular/angular-sanitize.js',
					/*'./public/plugins/angular/textAngular.min.js',
					'./public/plugins/angular/textAngular-sanitize.min.js',*/
					/*'./public/plugins/angular/angular-ui-tree.min.js',*/
					/* './public/plugins/angular/ng-tags-input.min.js',*/

					'./public/plugins/bootstrap/bootstrap.bundle.js',
					'./public/plugins/bootstrap/ui-bootstrap-tpls-0.13.0.min.js',
					/* './public/plugins/bootstrap/bootstrap.min.js', */
					/* './public/plugins/bootstrap/bootstrap.file-input.js', */
					
					/*'./public/plugins/angular/angular.easypiechart.min.js',
					
					'./public/plugins/jquery/ui-bootstrap-tpls-0.13.0.min.js',
					'./public/plugins/jquery/jquery.spinner.js',
					'./public/plugins/jquery/bootstrap-slider.min.js',
					'./public/plugins/jquery/jquery.steps.min.js',
					'./public/plugins/jquery/toastr.min.js',
					'./public/plugins/jquery/jquery.slimscroll.js',
					'./public/plugins/jquery/jquery.sparkline.js',
					'./public/plugins/jquery/jquery.flot.js',
					'./public/plugins/jquery/jquery.flot.resize.min.js',
					'./public/plugins/jquery/jquery.flot.pie.min.js',
					'./public/plugins/jquery/jquery.flot.orderBars.js',
					'./public/plugins/jquery/jquery.flot.stack.min.js',
					'./public/plugins/jquery/jquery.flot.time.min.js'*/
				],
				dest: './public/build/vendor.js'
			},
			admin: {
				options: {
					separator: ''
				},
				src: ['./public/js/main.js', './public/js/**/*.js'],
				dest: './public/build/admin.js'
			}
		},
		cssmin: {
			options: {
				sourceMap: false,
				keepSpecialComments: false
			},
			css: {
				files: [{
					src: ['./public/css/stylesheets.css'],
					dest: './public/build/style.min.css',
				}]
			}	
		},
		uglify: {
			options: {
				sourceMap: false,
				mangle: false
			},
			vendor: {
				files: [{
					src: ['./public/build/vendor.js'],
					dest: './public/build/vendor.min.js',
				}]
			},
			admin: {
				files: [{
					src: ['./public/build/admin.js'],
					dest: './public/build/admin.min.js',
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');

	console.log("=======  compressing files  =======");

	grunt.registerTask('compresscss', ['clean:style', 'concat:css', 'cssmin:css', 'clean:style']);
	grunt.registerTask('compressvendor', ['clean:vendor', 'concat:vendor', 'uglify:vendor', 'clean:vendor']);
	grunt.registerTask('compressjs', ['clean:admin', 'concat:admin', 'uglify:admin', 'clean:admin']);
	grunt.registerTask('compressall' , ['compresscss', 'compressvendor', 'compressjs']);
}
