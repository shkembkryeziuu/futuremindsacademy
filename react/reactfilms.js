const songs = [
  {
    title: "Stargazing",
    artist: " MYLES SMITH",
  },
  {
    title: "Die With A Smile",
    artist: "Bruno Mars ft. Lady Gaga",
  },
  {
    title: "To sweet",
    artist: "Hozier",
  },
  {
    title: "Timeless",
    artist: "THE WEEKND & PLAYBOI CARTI",
  },
];

const SongRow = ({ song, artist }) => {
  return (
    <li className="SongRow">
      {song} - {artist}
    </li>
  );
};

const SongList = ({ songs }) => {
  songs.sort((a, b) => a.title.localeCompare(b.title));
  return (
    <div className="SongList">
      <h3 className="SongList_Title">Songs</h3>

      <ol className="SongList_List">
        {songs.map((song) => (
          <SongRow
            key={song.title}
            song={song.title}
            artist={song.artist}
          ></SongRow>
        ))}
      </ol>
    </div>
  );
};

// Krijohet vetëm një herë
const root = document.getElementById("root");

// Thirret vetëm një herë
ReactDOM.render(<SongList songs={songs} />, root);
