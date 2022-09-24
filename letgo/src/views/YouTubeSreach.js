import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import axios from "axios";
const YouTubeSreach = (props) => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  //   const fetchYouTubeData
  const handleOnSearch = async () => {
    let res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      method: "GET",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyC8b68AVWSY6Bk34BdKeHLI8pEpCJCORJA",
        q: query,
      },
    });

    let tempVideos = [];
    res.data.items.map((item) => {
      console.log(item);
      let obj = {};
      obj.id = item.id.videoId;
      obj.title = item.snippet.title;
      obj.thumbnail = item.snippet.thumbnails.default.url;
      tempVideos.push(obj);
    });
    setVideos(tempVideos);   
  };
  useEffect(() => {}, []);

  return (
    <div className="search-bar container">
      <div class="input-group rounded p-2 w-25 mx-auto">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={() => {
            handleOnSearch();
          }}
        >
          search
        </button>
      </div>
      <div className="ytube-result container ">
        <div className=" embed-responsive embed-responsive-4by3 row">
            {videos && videos.map((video)=>{
                return( <div class="col-md-3 ml-auto ytube-result-single ">
                <div className="row">
                  <iframe
                    title="1"
                    className="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="row">
                  <div className="title ">
                    <h4 className="">{video.title}</h4>
                  </div>
                </div>
              </div>)
            })}
          {/* <div class="col-md-3 ml-auto ytube-result-single ">
            <div className="row">
              <iframe
                title="1"
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/zpOULjyy-n8?rel=0`}
                allowFullScreen
              ></iframe>
            </div>
            <div className="row">
              <div className="title ">
                <h3 className="display-4">viđeo1</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default YouTubeSreach;
