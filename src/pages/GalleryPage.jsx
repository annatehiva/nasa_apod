import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import PhotoList from "../components/PhotoList";
import LoadingSpinner from "../components/LoadingSpinner";

function GalleryPage() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  const fetchPhotos = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=20`
      );
      setPhotos(response.data);
    } catch (err) {
      setError("Failed to load photos");
    } finally {
      setLoading(false);
    }
  }, [apiKey]);

  const loadMorePhotos = useCallback(async () => {
    if (loadingMore) return;
    setLoadingMore(true);
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=20`
      );
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
    } catch (err) {
      setError("Failed to load more photos");
    } finally {
      setLoadingMore(false);
    }
  }, [apiKey, loadingMore]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  if (loading) {
    return (
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
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  if (photos.length === 0) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
        <Typography variant="h6">No photos available</Typography>
      </Box>
    );
  }

  return <PhotoList photos={photos} loadMore={loadMorePhotos} />;
}
export default GalleryPage;
