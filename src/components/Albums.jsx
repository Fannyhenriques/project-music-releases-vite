import { albums } from "../data.json";
import { AlbumCover } from "./AlbumCover.jsx";
import { Album } from "./Album.jsx"
import { Artist } from "./Artist.jsx";
import "./styling/Albums.css";

export const Albums = () => {
  return (
    <div className="albums-container">
      <div className="albums-grid">
        {albums.items.map(({ name, id, artists, images }) => (
          <div key={id} className="albums-card">
            <AlbumCover images={images} />
            <Album name={name} />
            <Artist artists={artists} />
          </div>
        ))}
      </div>
    </div >
  );
};

