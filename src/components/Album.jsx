import "./styling/Album.css"

export const Album = ({ name }) => {
  return (
    <div className="album-name">
      <p>{name}</p>
    </div>
  );
};
