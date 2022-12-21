import React from "react";

class SongForm extends React.Component {
  state = {
    title: "",
    artist: "",
    genre: "", 
    rating: "",
  };

  render() {
    const onInputSong = (event) => {
      this.setState({
        title: event.target.value,
      });
    };

    const onInputArtist = (event) => {
      this.setState({
        artist: event.target.value,
      });
    };

    const onSelectGenre = (event) => {
      this.setState({
        genre: event.target.value,
      });
    };

    const onSelectRating = (event) => {
      this.setState({
        rating: event.target.value,
      });
    };

    const onSubmit = (event) => {
      event.preventDefault();
      this.props.addSong(this.state);
      this.setState({
        title: "",
        artist: "",
        genre: "",
        rating: "",
      });
    };

    return (
      <div>
        <form className="song-form" onSubmit={onSubmit}>
          <table>
            <tbody>
              <tr className="song-header">
                <th className="song-row-item">Title</th>
                <th className="song-row-item">Artist</th>
                <th className="song-row-item">Genre</th>
                <th className="song-row-item">Rating</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Got a favorite song?"
                    onChange={onInputSong}
                    value={this.state.title}
                    className="song-input-item"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Who made it?"
                    onChange={onInputArtist}
                    value={this.state.artist}
                    className="song-input-item"
                  />
                </td>
                <td>
                  <select
                    value={this.state.genre}
                    onChange={onSelectGenre}
                    name="genre"
                  >
                    <option value="">-- select the genre --</option>
                    <option value="Classic">Classic</option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Rock">Rock</option>
                    <option value="Soul">Soul</option>
                    <option value="Metal">Metal</option>
                    <option value="Hiphop">Hiphop</option>
                  </select>
                </td>
                <td>
                  <select
                    value={this.state.rating}
                    onChange={onSelectRating}
                    name="rating"
                  >
                    <option value="">-- rate your song --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="add-button">Add</button>
        </form>
      </div>
    );
  }
}

export default SongForm;
