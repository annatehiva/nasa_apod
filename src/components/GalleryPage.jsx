import axios from "axios";
import { useState, useEffect } from "react";
import PhotoList from "./PhotoList";
import LoadingSpinner from "./LoadingSpinner";
import { Box } from "@mui/material";

function GalleryPage({ setPhotos }) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [photos, setLocalPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=12`
      );
      console.log(response.data);
      setLocalPhotos(response.data);
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
          }}
        >
          <LoadingSpinner />
        </Box>
      ) : (
        <PhotoList photos={photos} />
      )}
    </>
  );
}
export default GalleryPage;
