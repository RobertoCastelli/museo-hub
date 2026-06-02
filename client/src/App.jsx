import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EventsPage from "./pages/EventsPage/EventsPage";
import EventDetailPage from "./pages/EventDetailPage/EventDetailPage";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<EventsPage />} />
            <Route path="/events/:id" element={<EventDetailPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
