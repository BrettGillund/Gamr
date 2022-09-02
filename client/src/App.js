import Header from "./components/Header";
import Games from "./pages/Games";
import Profile from "./pages/Profile"
import Sidebar from "./components/Sidebar";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Pc from "./pages/Pc"
import Playstation from "./pages/Playstation"
import Xbox from "./pages/Xbox"
import Switch from "./pages/Switch"
// import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>

      <Header />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/games" element={<Games></Games>}></Route>
          <Route path="/games/pc" element={<Pc/>}></Route>
          <Route path="/games/playstation" element={<Playstation/>}></Route>
          <Route path="/games/xbox" element={<Xbox/>}></Route>
          <Route path="/games/nintendo-switch" element={<Switch/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
