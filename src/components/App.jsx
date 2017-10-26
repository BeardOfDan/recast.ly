class App extends React.Component {

  constructor(props) {
    super(props); 

    // this is default data so that before the asyn operation (the ajax request) finishes, the components can get sample data
    this.state = {'data': exampleVideoData, 'current': exampleVideoData[0]};

    const options = {
      'query': 'Rick and Morty',
      'max': 7,
      'key': 'AIzaSyCUadeTik0U1vqtpPuGSeZoJD8uJ0btbLA'
    };

    this.options = options;

    const callback = function(data) {
      this.setState({'data': data, 'current': data[0]});
    }.bind(this);

    this.callback = callback;

    // use this.props.searchYouTube to set the state
    this.props.searchYouTube(options, callback);
  }

  clickSearchHandler(searchTerm) {
    this.options.query = searchTerm;

    searchYouTube(this.options, (data) => { this.callback(data); } );
  }

  clickTitleHandler(arg) {
    this.setState({'current': arg});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search clickHandler={this.clickSearchHandler.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.data} clickHandler={this.clickTitleHandler.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
