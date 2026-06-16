import CursorGlow
from "./components/CursorGlow";

import ScrollProgress
from "./components/ScrollProgress";

import Navbar
from "./components/Navbar";

import Hero
from "./components/Hero";

import About
from "./components/About";

import Stats
from "./components/Stats";

import Programs
from "./components/Programs";

import Volunteer
from "./components/Volunteer";

import Testimonials
from "./components/Testimonials";

import Gallery
from "./components/Gallery";

import Contact
from "./components/Contact";

import Footer
from "./components/Footer";

import Admin
from "./pages/Admin";

import Login
from "./pages/Login";

import Mission
from "./components/Mission";

import Details
from "./pages/Details";

import Donate
from "./pages/Donate";

import AboutDetails
from "./pages/AboutDetails";

import {
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>

      <CursorGlow />

      <ScrollProgress />

      <Routes>

        <Route
          path="/"

          element={
            <>
              <Navbar />

              <Hero />

              <About />

              <Mission />

              <Stats />

              <Programs />

              <Volunteer />

              <Testimonials />

              <Gallery />

              <Contact />

              <Footer />
            </>
          }
        />


        <Route
  path="/details"

  element={<Details />}
/>

<Route
  path="/donate"

  element={<Donate />}
/>

<Route
  path="/about-details"

  element={<AboutDetails />}
/>

        <Route
          path="/login"

          element={<Login />}
        />

        <Route
          path="/admin"

          element={<Admin />}
        />

      </Routes>

    </>
  );
}

export default App;