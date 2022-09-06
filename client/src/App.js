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
import Protect from './components/Protect';
import Logout from './utils/logout'
import { isAuthenticated } from './utils/auth';
import AuthForm from './pages/AuthForm';
import { useState, useEffect } from 'react';
// import { ChakraProvider } from "@chakra-ui/react";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user_data = isAuthenticated();

    if (user_data) setUser(user_data);
  }, []);
  
  return (
    <div>

      <Header user={user}/>
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Landing user={user}></Landing>}></Route>
          <Route path="/auth-form" element={<AuthForm setUser={setUser}></AuthForm>}></Route>

          <Route path="/profile" element={
            <Protect>
              <Profile  user={user} ></Profile>
            </Protect>}>
          </Route>

          <Route path="/logout" element={<Logout></Logout>}></Route>
          <Route path="/games" element={<Games setUser={setUser} ></Games>}></Route>
          <Route path="/games/pc" element={<Pc  setUser={setUser} />}></Route>
          <Route path="/games/playstation" element={<Playstation  setUser={setUser} />}></Route>
          <Route path="/games/xbox" element={<Xbox  setUser={setUser} />}></Route>
          <Route path="/games/nintendo-switch" element={<Switch  setUser={setUser} />}></Route>

         

        </Routes>
      </div>
    </div>
  );
}

export default App;
