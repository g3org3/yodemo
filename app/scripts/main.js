console.log('hello');

angular.module('app', [])
.controller('main', function($scope){
	$scope.title = 'Innonet - Bill';
	$scope.items = [
		{name: 'dominio', cost: 20},
		{name: 'emails', cost: 30},
		{name: 'logo', cost: 10},
		{name: 'hosting', cost: 20},
		{name: 'login/app', cost: 20},
	];
	var subtotal = add();
	angular.forEach($scope.items, function(item){
		subtotal.cost += item.cost;
	});
	
	$scope.items.push(subtotal);
	$scope.items.push({name:'discount', cost:'-'+(subtotal.cost*subtotal.dis)});

	total = {name: 'Total', cost: subtotal.cost * (1-subtotal.dis)};
	$scope.items.push(total);

	$scope.time = '2014-07-13';
	$scope.sent = moment($scope.time, 'YYYY-MM-DD').fromNow();
	$scope.nuevo = $scope.sent.indexOf('hour');
	var x = $scope.sent.indexOf('ago');
	if($scope.nuevo!=='-1' && x!==-1){
		$scope.sent = 'TODEY';
	}

	$scope.year = moment().format('YYYY');
});