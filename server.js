var request = require('request');
var defaultMovie = "The Lion King";
var Key='d72efd52cd9b59e03ea5627658ee1c40';
var input = process.argv[2];
var comPar = process.argv[3];

// Input commands
function processStuff(command, commPar){
    switch(command){

	case 'movie':
		// If user has not specified a movie Name , use default movie, The Lion King
		if(comPar === undefined){
			comPar = defaultMovie;
		}    
		search(comPar); break;
}
}

function search(movieName){

	
	request("https://api.themoviedb.org/3/search/movie?api_key=" + Key + "&query=" + movieName, function(error, response, body) {

  	// If there are no errors
  	if (!error && response.statusCode === 200) {
    // console.log(JSON.parse(body));
	    
	    // Movie Id
        var movieName =  JSON.parse(body).results[0].id;
        //console.log(movieName);

	    var queryURL = "https://api.themoviedb.org/3/movie/" + movieName +"?api_key=" + Key + "&append_to_response=credits,releases";

	    request(queryURL, function(error, response, body) {
	    	var movieObj = JSON.parse(body);

            // Logs the following
	    	console.log("-Title-");
	    	console.log(movieObj.original_title);

	    	console.log("-Year-");
	    	console.log(movieObj.release_date.substring(0,4));

	   		console.log("-Plot-");
	   		console.log(movieObj.overview);

	   		console.log("-Actors-");
	   		for(i=0, j = movieObj.credits.cast.length; i<j; i++){
	   			console.log(movieObj.credits.cast[i].name);
	   		}
	    });

  	}else{
  		console.log(error);
  	}

	});
}
// Process Commands
processStuff(input, comPar);