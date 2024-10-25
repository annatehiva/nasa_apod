import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage.jsx";
import SearchPage from "./pages/SearchPage";
import TabBar from "./components/TabBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <TabBar />
    </Router>
  );
}

export default App;
