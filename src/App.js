import './App.css';
import NavigationBar from "./Component/NavigationBar"
import HomePageContent from "./Component/HomePageContent"
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import Register from "./Component/Register";
import JustArrived from './Component/JustArrived';
import Collection from './Component/Collection';
import ShopNow from './Component/ShopNow';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <div className="myBG border">
          <NavigationBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePageContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/just-arrived" element={<JustArrived />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/ShopNow" element={<ShopNow />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
