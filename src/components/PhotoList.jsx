import { ImageList, ImageListItem } from "@mui/material";
import ModalPhoto from "./ModalPhoto";
import { useState } from "react";

function PhotoList({ photos }) {
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleOpen = (photo) => {
    setSelectedPhoto(photo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <>
      <ImageList cols={6}>
        {photos.map((photo) => (
          <ImageListItem key={photo.url}>
            <img
              src={`${photo.url}`}
              alt={photo.title}
              onClick={() => handleOpen(photo)}
              style={{ cursor: "pointer" }}
            />
          </ImageListItem>
        ))}
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
