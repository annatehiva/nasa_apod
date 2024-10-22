import axios from "axios";
import { useState, useEffect } from "react";
import PhotoList from "./PhotoList";

function GalleryPage({ setPhotos }) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [photos, setLocalPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=12`
      );
      console.log(response.data);
      setLocalPhotos(response.data);
    };
    fetchPhotos();
  }, []);
  return <PhotoList photos={photos} />;
}
export default GalleryPage;
