import DatePicker from "./DatePicker";
import PhotoCard from "./PhotoCard";
import { useState } from "react";
import axios from "axios";

function SearchPage() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState(null);

  // fetch data for specific date
  const fetchData = async (date) => {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
    );
    setData(response.data);
    console.log(response.data);
  };
  return (
    <>
      <DatePicker onDateChange={fetchData} />

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
