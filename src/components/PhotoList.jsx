import { ImageList, ImageListItem } from "@mui/material";
import ModalPhoto from "./ModalPhoto";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "./LoadingSpinner";

function PhotoList({ photos, loadMore }) {
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [items, setItems] = useState(photos.slice(0, 20));
  const [hasMore, setHasMore] = useState(true);

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
      <InfiniteScroll
        dataLength={photos.length}
        next={loadMore}
        hasMore={true}
        loader={<LoadingSpinner />}
        style={{ overflow: "visible" }}
      >
        <ImageList
          cols={6}
          sx={{
            overflow: "hidden", // Empêche PhotoList d'avoir une barre de défilement
            height: "auto", // Permet d'ajuster la taille automatiquement
          }}
        >
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
      </InfiniteScroll>
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
