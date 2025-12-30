import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";
import EnhancedBlogList from "./pages/EnhancedBlogList";
import EnhancedBlogDetails from "./pages/EnhancedBlogDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/enhanced" element={<EnhancedBlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/enhanced/:id" element={<EnhancedBlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
