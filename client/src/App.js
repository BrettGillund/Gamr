import Header from "./components/Header";
import Games from "./pages/Games";
import Profile from "./pages/Profile"
import Sidebar from "./components/Sidebar";
import Landing from "./pages/Landing";
import PC from "./pages/Pc"
import { Routes, Route } from "react-router-dom";
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
          {/* <Route path="/games/pc" element={<PC></PC>}></Route> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
