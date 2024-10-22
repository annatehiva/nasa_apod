import Header from "./components/Header";
import HomePage from "./components/HomePage";
import GalleryPage from "./components/GalleryPage";
import TabBar from "./components/TabBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [photos, setPhotos] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <TabBar />
    </Router>
  );
}

export default App;
