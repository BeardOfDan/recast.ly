// TODO: Render the `App` component to the DOM

// };

// ReactDOM.render(<App movies={searchYouTube(options, callback)} />, document.getElementById('app'));


var searchYouTube = (options, callback) => {
  // TODO


  window.YOUTUBE_API_KEY = 'AIzaSyAbKr3sJpjgNYKBu-gYFD2btFqc2HkZZpg';

  const baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=';

  const query = options.query;

  const limit = options.max;

  const key = options.key;
  
  const example = 'https://www.youtube.com/results?search_query=example';

  // GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=QUERY&type=video&key={YOUR_API_KEY}


  const url = '' + baseUrl + limit + '&q=' + query + '&type=video&key=' + key;

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

  const data = {
    'part': 'snippet',
    'type': 'video',
    'key': 'API_KEY',
    'q': query,
    'videoEmbeddable': true,
    'maxResults': limit
  };

  $.ajax({
    'url': url,
    'key': 'AIzaSyAbKr3sJpjgNYKBu-gYFD2btFqc2HkZZpg',
    'type': 'GET',
    'data': data,
    'contentType': 'application/json',
    success: function(data) {
      console.log('good work');
      callback(data.items);     
    },
    error: function(data) {
      console.log('oh no', data, data.responseText);
    }
  });



};


ReactDOM.render(<App searchYouTube={searchYouTube} />, document.getElementById('app'));


