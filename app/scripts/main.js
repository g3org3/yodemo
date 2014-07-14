console.log('hello');

angular.module('app', [])
.controller('main', function($scope){
	$scope.title = 'Innonet - Angular';
	$scope.items = [
		{name: 'brasil'},
		{name: 'alemania'},
		{name: 'italia'},
		{name: 'argentina'},
		{name: 'espana'}
	]
})