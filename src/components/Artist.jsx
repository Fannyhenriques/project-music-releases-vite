import "./styling/Artist.css"

export const Artist = ({ artists }) => {
  return (
    <div>
      {artists.map((artist, index) => (
        <div className="artist-card" key={artist.id}>
          <p>{artist.name}{index + 1 < artists.length ? ',' : ''}</p>
        </div>
      ))}
    </div>
  );
};