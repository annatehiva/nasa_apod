import axios from "axios";
import PhotoCard from "./PhotoCard";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import LoadingSpinner from "./LoadingSpinner";

function HomePage() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [photo, setPhoto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDailyPhoto = async () => {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      console.log(response.data);
      setPhoto(response.data);
      setLoading(false);
    };
    fetchDailyPhoto();
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", //
          }}
        >
          <PhotoCard
            url={photo.url}
            title={photo.title}
            copyright={photo.copyright}
            media_type={photo.media_type}
          />
        </Box>
      )}
    </>
  );
}
export default HomePage;
