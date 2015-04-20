var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService){

	$scope.teamData = teamData();

	$scope.newGame;

	$scope.showNewGameForm = false;

	$scope.toggleNewGameForm = function($scope.showNewGameForm) {
		$scope.showNewGameForm = !$scope.showNewGameForm;
	}
});