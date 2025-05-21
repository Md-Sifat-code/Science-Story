import React from "react";
import { FaAtom, FaFlask, FaMicroscope, FaBook, FaCloud } from "react-icons/fa"; // Import icons
import Navbar from "../components/Re_useComponents/Navbar";
import Hero from "../components/Re_useComponents/Hero";

function Home() {
  return (
    <section>
      <div>
        <Navbar/>
      </div>
      <div>
        <Hero/>
      </div>
    </section>
  );
}

export default Home;
