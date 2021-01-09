fetch('http://api.forismatic.com/api/1.0/')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    });