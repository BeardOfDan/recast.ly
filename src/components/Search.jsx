var Search = (props) => {

  const func = () => {
    props.clickHandler(document.getElementById('searchInput').value);
    document.getElementById('searchInput').value = null;
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" id='searchInput' onKeyPress={function(e) { if (e.which === 13) { func(); } } } />
      <button className="btn hidden-sm-down" onClick={() => { func(); } } >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
