var VideoList = (props) => {
  const result = [];

  for (let i = 0; i < props.videos.length; i++) {
    result[i] = <VideoListEntry video={props.videos[i]} key={i} clickHandler={props.clickHandler} />; //assign key prop to prevent warning of having the same key
  }

  return (<div className="video-list">{result}</div>);
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
