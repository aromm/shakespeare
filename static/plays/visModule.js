angular
	.module('visModule',['ngMaterial'])
	.directive('speakChord', function() {
		return {
  			scope: {
  				play: '='
  			},
         	templateUrl: '../static/visualizations/speakChord.html'
		};
	})
