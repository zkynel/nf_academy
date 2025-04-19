import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages";
import Books from "./Pages/books";
import Team from "./Pages/team";
import Contact from "./Pages/contact";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
