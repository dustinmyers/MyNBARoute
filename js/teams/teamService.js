var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q) {

	this.addNewGame = function(gameObj) {
		var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
		if ((gameObj.homeTeamScore * 1) > (gameObj.opponentScore * 1)) {
			gameObj.gameWon === true;
		} else {
			gameObj.gameWon === false;
		}
		return $http ({
			method: 'POST',
			url: url,
			data: gameObj
		})
		console.log(gameObj);
	};

	this.getTeamData = function(team) {
		var dfr = $q.defer();
		var url = 'https://api.parse.com/1/classes/' + team;
		$http.get(url)
			.then(function(data) {
				var results = data.data.results;
				console.log(results);
				var wins = 0;
				var losses = 0;
				for (var i = 0; i < results.length; i++) {
					if (results[i].won === true) {
						wins++;
					} else {
						losses++;
					}
					results.wins = wins;
					results.losses = losses;
				}
			console.log(results);
			dfr.resolve(results)
			})
		return(dfr.promise);	
	}

});