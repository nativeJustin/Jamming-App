import React from 'react';
import '../Playlist/Playlist.css';

class Playlist extends React.Component {

    render() {
      return (
        <div className="Playlist">
  <input defaultValue={"New Playlist}"} />
  {/* < Tracklist /> */}
  <button class="Playlist-save">SAVE TO SPOTIFY</button>
</div>
      );
    }
  }
  
  export default Playlist;