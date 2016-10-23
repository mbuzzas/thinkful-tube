$(function(){

	
	$('#search-term').on('submit', function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});

	function getRequest(searchTerm){
		var params = {
			part: 'snippet',
			key: 'AIzaSyCDG3knd-qpvOHJ7vG9D4_3pFoMI1ZzGhQ',
			q: searchTerm,
		};
		url = 'https://www.googleapis.com/youtube/v3/search'

		$.getJSON(url, params, function(data){
			showResults(data.items);
			console.log(data.items);
		});
	}

	function showResults(results){
		var html = "";
		$.each(results, function(index, value){
			// html += '<p> <img src="' + value.snippet.thumbnails.medium.url + '"/></p>';
			html += '<p>' + '<a href="https://www.youtube.com/watch?v=' + value.id.videoId + '"><img src=" ' + value.snippet.thumbnails.medium.url + ' " />' + 
			'<span class="title">' + value.snippet.title + '</span>' + '</a></p>' 
		});
		$('#search-results').html(html);
	}

});