import DatePicker from "../components/DatePicker";
import PhotoCard from "../components/PhotoCard";
import { useState } from "react";
import axios from "axios";

function SearchPage() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // fetch data for specific date
  const fetchData = async (date) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
      );
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      setError("Failed to fetch data");
      console.error(err);
    }
  };
  return (
    <>
      <DatePicker onDateChange={fetchData} />
      {error && <Typography color="error">{error}</Typography>}
      {data && (
        <PhotoCard
          url={data.url}
          title={data.title}
          copyright={data.copyright}
          media_type={data.media_type}
        />
      )}
    </>
  );
}
export default SearchPage;
