
window.YOUTUBE_API_KEY = 'AIzaSyAbKr3sJpjgNYKBu-gYFD2btFqc2HkZZpg';


class Request extends React.Component {
  constructor(props) {
    super(props);

    console.log('added the Request class');

  }
  

  loadYoutubeAppi() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    script.onload = () => {
      gapi.load('client', () => {
        gapi.client.setApiKey(YOUTUBE_API_KEY);
        gapi.client.load('youtube', 'v3', () => {
          this.setState({gapiReady: true});
        });
      });
    };

    document.body.appendChild(script);
  }

  componentDidMount() {
    this.loadYoutubeAppi();
  }

  render() {
    if (this.state.gapiReady) {
      return (
        <h1>GAPI is loaded and ready to use.</h1>
      );
    }
  }

}
