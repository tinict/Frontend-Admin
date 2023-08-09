import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from "./js/Views/Pages/PostPage";
import DashboardPage from "./js/Views/Pages/DashboardPage";
import OrdersPage from "./js/Views/Pages/OrdersPage";
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/posts" element={<PostPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
