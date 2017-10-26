// TODO: Render the `App` component to the DOM

var searchYouTube = (options, callback) => {
  window.YOUTUBE_API_KEY = 'AIzaSyAbKr3sJpjgNYKBu-gYFD2btFqc2HkZZpg';

  const baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=';

  const query = options.query;
  const limit = options.max;
  const key = options.key;
  
  const url = '' + baseUrl + limit + '&q=' + query + '&type=video&key=' + key;

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
      console.log('You have successfully retrieved YouTube data');
      callback(data.items);     
    },
    error: function(data) {
      console.log('Error in retrieving YouTube data:', data, data.responseText);
    }
  });


};


ReactDOM.render(<App searchYouTube={searchYouTube} />, document.getElementById('app'));


