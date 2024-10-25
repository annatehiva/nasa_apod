import { ImageList, ImageListItem } from "@mui/material";
import ModalPhoto from "./ModalPhoto";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "./LoadingSpinner";

function PhotoList({ photos, loadMore }) {
  //  manage state of modal (open or close)
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Handle modal opening
  const handleOpen = (photoData) => {
    setSelectedPhoto(photoData);
    setOpen(true);
    console.log(photoData);
  };

  // Handle modal closing
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
            overflow: "hidden",
            height: "auto",
          }}
        >
          {photos.map((photo) => {
            let imageSrc;

            if (photo.media_type === "video") {
              imageSrc = "src/assets/video_type.png";
            } else if (photo.media_type === "other") {
              imageSrc = "src/assets/nasa.png";
            } else {
              imageSrc = photo.url;
            }

            return (
              <ImageListItem key={photo.url}>
                <img
                  src={imageSrc}
                  alt={photo.title}
                  onClick={() => handleOpen(photo)}
                  style={{ cursor: "pointer" }}
                />
              </ImageListItem>
            );
          })}
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
