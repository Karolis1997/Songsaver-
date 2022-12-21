
import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          title: "Pop lied",
          artist: "Pop artiest",
          genre: "Pop",
          rating: "1",
          filteredGenre: true,
          filteredRating: true,
        },
        {
          id: 2,
          title: "Classic lied",
          artist: "Classic artiest",
          genre: "Classic",
          rating: "5",
          filteredGenre: true,
          filteredRating: true,
        },
        {
          id: 3,
          title: "Rock lied",
          artist: "Rock artiest",
          genre: "Rock",
          rating: "4",
          filteredGenre: true,
          filteredRating: true,
        },
        {
          id: 4,
          title: "HipHop lied",
          artist: "Hiphop artiest",
          genre: "Hiphop",
          rating: "3",
          filteredGenre: true,
          filteredRating: true,
        },
        {
          id: 5,
          title: "Classic lied",
          artist: "Classic artiest",
          genre: "Classic",
          rating: "2",
          filteredGenre: true,
          filteredRating: true,
        },
        {
          id: 6,
          title: "Metal lied",
          artist: "Metal artiest",
          genre: "Metal",
          rating: "4",
          filteredGenre: true,
          filteredRating: true,
        },
      ],
    };
    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    
    this.handleFilter = this.handleFilter.bind(this);
  }

  addSong = (song) => {
    const newSong = {
      id: this.state.songs.length + 1,
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      rating: song.rating,
      filteredGenre: true,
      filteredRating: true,
    };
    this.setState({ songs: this.state.songs.concat(newSong) });
  };

  deleteSong = (song) => {
    this.setState((prevState) => {
      const oldSongList = [...prevState.songs];
      const newSongList = oldSongList.filter((item) => item !== song);
      const newList = { ...prevState, songs: newSongList };
      return newList;
    });
  };

  handleFilter = (event) => {
    const selectedFilter = event.target.value;
    const newSongList = this.state.songs.map((song) => {
      const filteredGenre = song.filteredGenre;
      const filteredRating = song.filteredRating;
      if (selectedFilter === "allGenres") {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: true,
          filteredRating: true,
        };
      } else if (selectedFilter === "allRating") {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: true,
          filteredRating: true,
        };
      } else if (
        (selectedFilter === song.genre && filteredRating === true) ||
        (selectedFilter === song.rating && filteredGenre === true)
      ) {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: true,
          filteredRating: true,
        };
      } else if (
        (selectedFilter === "allGenres" && filteredRating === false) ||
        (selectedFilter === song.genre && filteredRating === false) ||
        (selectedFilter !== song.genre && filteredRating === false)
      ) {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: true,
          filteredRating: false,
        };
      } else if (
        (selectedFilter === "allRating" && filteredGenre === false) ||
        (selectedFilter === song.rating && filteredGenre === false) ||
        (selectedFilter !== song.genre && filteredRating === true)
      ) {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: false,
          filteredRating: true,
        };
      }
      else {
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
          filteredGenre: false,
          filteredRating: false,
        };
      }
    });
    this.setState({ songs: newSongList });
  };

 

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <SongList
          songs={this.state.songs}
          deleteSong={this.deleteSong}
        
          handleFilter={this.handleFilter}
        />
      </div>
    );
  }
}

export default SongOverview;
 