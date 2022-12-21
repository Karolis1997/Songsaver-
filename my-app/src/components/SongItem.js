import React from "react";

const SongItem = ({song, deleteSong}) => {
  return (
    <tr className="song-list-table-body-items">
        <td className="item-title">{song.title}</td>
        <td className="item-artist">{song.artist}</td>
        <td className="item-genre">{song.genre}</td>
        <td className="item-rating">{song.rating}</td>
        <button className="item-delete-button" onClick={() => deleteSong(song)}>delete</button>
    </tr>
  );
};

export default SongItem;