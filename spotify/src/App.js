import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js'
import Player from "./Player";
import {useStateValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [tokenId, setTokenId] = useState(null);
const [{ token }, dispatch] = useStateValue();



  

  // Run code based on the given conditions
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;
    if (_token) {
      spotify.setAccessToken(_token);
      setTokenId(_token)
      dispatch({
        type: "SET_TOKEN",
        toekn:_token,
      })

      spotify.getMe().then(userData => {
        dispatch({
          type: "SET_USER",
          user: userData,
        });
      });

      spotify.getUserPlaylists().then((playLists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playList: playLists,
        });
      });
      spotify.getPlaylist("3lcDn9VAKGzD1c8MJLTwGu").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
      })
   }
   
  
},[])



  return (
    <div className="App">
      {
        tokenId ? (<Player spotify={spotify} />) : (<Login />)
}

     </div>
  );
}

export default App;
