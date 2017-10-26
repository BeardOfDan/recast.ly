var searchYouTube = (options, callback) => {
  // TODO


  window.YOUTUBE_API_KEY = 'AIzaSyAbKr3sJpjgNYKBu-gYFD2btFqc2HkZZpg';

  const baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=';

  const query = options.query;

  const limit = options.max;

  const key = options.key;
  
  const example = 'https://www.youtube.com/results?search_query=example';

  // GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=QUERY&type=video&key={YOUR_API_KEY}


  const url = '' + baseUrl + limit + '&q=' + query + '&type=video&key=' + 'API_KEY';

  //. 'https://www.googleapis.com/youtbe/v3/search'




//   $.ajax({
//     url: url,
//     type: 'GET',
//     videoEmbeddable: 'true',
    
//     success: function(data) {
//       console.log('success', data);
      
//     },
//     error: function(data) {
//       console.log('failure', data);
//     }
//   });

  $.ajax(url, {
    q: options.query,
    maxResults: options.max,
    key: window.YOUTUBE_API_KEY,
    part: 'snippet',
    type: 'GET',
    videoEmbeddable: 'true',
    success: function(data) {
      console.log('good work');
      callback(data);     
    },
    error: function(data) {
      console.log('oh no', data);
    }
  });



};

window.searchYouTube = searchYouTube;



