import React from "react";
import SongItem from "./SongItem";

const SongList = ({ songs, deleteSong, handleFilter }) => {
  const songList = songs.map((song) => {
    if (song.filteredGenre === true && song.filteredRating === true) {
      return <SongItem key={song.id} song={song} deleteSong={deleteSong} />;
    }
  });

  return (
    <div>
      <h1>Your Favorite Playlist</h1>
      <table >
        <thead className="song-list-table-header">
          <tr>
            <th className="song-list-table-title">Song</th>
            <th className="song-list-table-artist">Artist</th>
            <th>
              <select onChange={handleFilter}>
                <option value="allGenres">genre</option>
                <option value="Classic">Classic</option>
                <option value="Pop">Pop</option>
                <option value="Jazz">Jazz</option>
                <option value="Rock">Rock</option>
                <option value="Soul">Soul</option>
                <option value="Metal">Metal</option>
                <option value="Hiphop">Hiphop</option>
              </select>
            </th>
            <th>
              <select onChange={handleFilter}>
                <option value="allRating">rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody className="song-list-table-body">
          {songList}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
