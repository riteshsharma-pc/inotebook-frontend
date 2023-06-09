import { BrowserRouter, Route, Routes } from "react-router-dom";
// componentes
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
import Login from "./components/logs/Login";
import Signup from "./components/logs/Signup";
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState"
import Profile from "./components/profile/Profile";
import UserState from "./context/users/UserState";
import ForgotPassword from "./components/ForgotPassword";
import LoadingBar from "react-top-loading-bar"
import { useContext } from "react";
import generalContext from "./context/general/generalContext";
import { useSelector } from "react-redux";
import { modeStyle } from "./redux/reducer/darkModeReducer";

function App() {
  const mode = useSelector(modeStyle)
  const { progress } = useContext(generalContext)
  return (
    <div className={`${mode.type === "dark" ? "bg-black" : "bg-light"} ${mode.text} d-flex flex-column`} data-bs-theme={`${mode.type}`} style={{ minHeight: "100vh" }}>
      <AlertState>
        <UserState>
          <NoteState>
            <BrowserRouter>
              <LoadingBar
                color='#f11946'
                progress={progress}
              />
              <Navbar />
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </BrowserRouter>
          </NoteState>
        </UserState>
      </AlertState>

    </div>
  );
}

export default App;
