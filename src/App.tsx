//Modules
import { Routes, Route } from "react-router-dom";
import ArtworkInfoPage from "./components/content-components/ArtworkInfoPage";
import AppDataProvider from "./contexts/AppDataContext";

//Components
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";




const App = () => {
  return (
    <AppDataProvider>
      <div className="flex flex-col">
        {/* Header of the page */}
        <Header />

        {/* Contents of the page */}
        <div className="min-h-[calc(100vh-9rem)] mt-20">
          <Routes>
            {/* Artworks and Home page */}
            <Route index element={<Content />} />

            {/* Artwork Info Content */}
            <Route path="/artwork/:artworkID" element={<ArtworkInfoPage />} />
          </Routes>
        </div>

        {/* Footer of the page */}
        <Footer />
      </div>
    </AppDataProvider>
  );
}

export default App;