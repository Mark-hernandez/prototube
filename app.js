var OMDB_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

/*function getDataFromApi(searchTerm, callback) {
  var settings = {
    url: OMDB_BASE_URL,
    data: {
     part: 'snippet',
     key: 'AIzaSyBZowsS0aHw4GbkzEQFZ1SVtaZUkHqYFms',
     q: 'searchTerm'
   },
  
  $.ajax(settings);
}
*/

function getDataFromApi(searchTerm, callback) { 
  var settings = { 
    url: OMDB_BASE_URL, 
    data: { 
      part: 'snippet', 
      key: 'AIzaSyBZowsS0aHw4GbkzEQFZ1SVtaZUkHqYFms', 
      q: searchTerm 
    },
       dataType: 'json', 
       type: 'GET', 
       success: callback 
     }; 
  $.ajax(settings); 
}

function displayOMDBSearchData(data) {
  var resultElement = '';
  if (data.items.length > 0 ) {
    data.items.forEach(function(item) {
     resultElement += '<p>' + item.snippet.title + '</p>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayOMDBSearchData);
  });
}

$(function(){watchSubmit();});

/*
function getDataFromApi(searchTerm, callback) { 
  var settings = { 
    url: OMDB_BASE_URL, 
    data: { 
      part: 'snippet', 
      key: 'AIzaSyBZowsS0aHw4GbkzEQFZ1SVtaZUkHqYFms', 
      q: searchTerm },
       dataType: 'json', 
       type: 'GET', 
       success: callback 
     }; 
  $.ajax(settings); 
}
*/