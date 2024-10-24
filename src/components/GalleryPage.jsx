import axios from "axios";
import { useState, useEffect } from "react";
import PhotoList from "./PhotoList";
import LoadingSpinner from "./LoadingSpinner";
import { Box } from "@mui/material";

function GalleryPage() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to load more photos when the user scrolls
  const loadMorePhotos = async () => {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=20`
    );

    // Append newly fetched photos to existing lsit
    setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
  };

  // fetch initial set of photos
  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=20`
      );
      console.log(response.data);
      setPhotos(response.data);
      setLoading(false);
    };
    fetchPhotos();
  }, []);
  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            overflowY: "scroll",
          }}
        >
          <LoadingSpinner />
        </Box>
      ) : (
        <PhotoList photos={photos} loadMore={loadMorePhotos} />
      )}
    </>
  );
}
export default GalleryPage;
