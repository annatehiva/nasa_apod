import { ImageList, ImageListItem } from "@mui/material";
import ModalPhoto from "./ModalPhoto";
import { useState } from "react";

function PhotoList({ photos }) {
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleOpen = (photoData) => {
    setSelectedPhoto(photoData);
    setOpen(true);
    console.log(photoData);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <>
      <ImageList cols={6}>
        {photos.map((photo) => {
          let thumbnailUrl = photo.thumbnail_url || photo.url;

          if (
            photo.media_type === "video" &&
            photo.url.includes("youtube.com")
          ) {
            let videoId = null;
            videoId = photo.url.split("embed/")[1].split("?")[0];
            console.log(videoId);
            if (videoId) {
              thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
            }
          }

          return (
            <ImageListItem key={photo.url}>
              {photo.media_type === "image" ? (
                <img
                  src={`${photo.url}`}
                  alt={photo.title}
                  onClick={() => handleOpen(photo)}
                  style={{ cursor: "pointer" }}
                />
              ) : photo.media_type === "video" ? (
                <img
                  src={thumbnailUrl}
                  alt={photo.title}
                  onClick={() => handleOpen(photo)}
                  style={{ cursor: "pointer" }}
                />
              ) : null}
            </ImageListItem>
          );
        })}
      </ImageList>

      {selectedPhoto && (
        <ModalPhoto
          open={open}
          handleClose={handleClose}
          photo={selectedPhoto}
        />
      )}
    </>
  );
}

export default PhotoList;
