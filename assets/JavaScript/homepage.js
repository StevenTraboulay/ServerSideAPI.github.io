var getUserRepos = function(StevenTraboulay) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/StevenTraboulay/repos";

  // make a request to the url
  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
};


//executing function
getUserRepos();


  