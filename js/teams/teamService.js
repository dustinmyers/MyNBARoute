var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

	this.addNewGame(gameObj) {
		var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
		parseInt(homeTeamScore);
		parseInt(opponentScore);
		if (gameObj.homeTeamScore > gameObj.opponentScore) {
			gameObj.gameWon === true;
		} else {
			gameObj.gameWon === false;
		}
		$http.post(url)
	};

	this.getTeamData(team) {
		var dfr = $q.defer();
		var url = 'https://api.parse.com/1/classes/' + team;
		$http.get(url)
			.then(fucntion(data) {
				var results = data.data.results;
				var wins = 0;
				var losses = 0;
				for (key in results) {
					if (results.won === true);
					wins++;
				} else {
					losses++;
				}
			results.wins = wins;
			results.losses = losses;
			console.log(results);
			dfr.resolve(results)
			})
		return(defer.promise);	
	}

});