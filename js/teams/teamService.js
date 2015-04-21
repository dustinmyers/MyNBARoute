var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q) {

	this.addNewGame = function(newGame) {
		parseInt(newGame.homeTeamScore);
		parseInt(newGame.opponentTeamScore);
		console.log(newGame.homeTeamScore);
		console.log(newGame.opponentTeamScore);
		newGame.won = true;
		var url = "https://api.parse.com/1/classes/" + newGame.homeTeam;
		if (newGame.homeTeamScore > newGame.opponentTeamScore) {
			newGame.won = true;
		} else {
			newGame.won = false;
		}
		console.log(newGame);
		return $http ({
			method: 'POST',
			url: url,
			data: newGame
		})
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