import { ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";

function PhotoList({ photos }) {
  return (
    <ImageList cols={5}>
      {photos.map((photo, date) => (
        <Link to={`/photo/${date}`} key={date}>
          <ImageListItem key={photo.date}>
            <img
              src={photo.url}
              alt={photo.title}
              style={{ cursor: "pointer" }}
            />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}

export default PhotoList;
